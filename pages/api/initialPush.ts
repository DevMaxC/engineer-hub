// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  success: boolean;
};

type Job = {
  websiteId: number;
  url: string;
  title: string;
  remote: boolean;
  country: string;
  city: string;
  seniority: string;
  techs: string[];
};

export type Website = {
  name: string;
  careersPageLink: string;
  image: string;
  jobs: Job[];
};

export type Request = {
  secret: String;
  site: Website;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    return await createWebsite(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createJobs(id: number, jobs: Job[]) {
  const myFinal = jobs.forEach(async (job: Job) => {
    try {
      const allNewJobs = await prisma.job.create({
        data: {
          url: job.url,
          title: job.title,
          remote: job.remote,
          country: job.country,
          city: job.city,
          seniority: job.seniority,
          techs: {
            createMany: {
              data: job.techs.map((tech) => ({
                tech: tech,
              })),
            },
          },
          websiteId: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });
}

async function createWebsite(req: NextApiRequest, res: NextApiResponse) {
  const fromPython: Website = req.body.site;

  if (req.body.secret == process.env.PYTHONSECRET) {
    try {
      const newWebsite = await prisma.website.create({
        data: {
          name: fromPython.name,
          careersPageLink: fromPython.careersPageLink,
          icon: fromPython.image,
        },
      });
      const newJobs = await createJobs(newWebsite.id, fromPython.jobs);

      console.log("LENGTH OF JOBS: " + fromPython.jobs.length);
      console.log(newJobs);

      return res
        .status(200)
        .json({ message: "Request fulfilled", success: true });
    } catch (error) {
      console.log("Request error", error);
      res.status(500).json({ mystatus: "Request error", success: false });
    }
  } else if (req.body.secret == null) {
    res.status(400).json({ mystatus: "Bad Request", success: false });
  } else {
    console.log(req.body);
    console.log(req.body.secret);
    res.status(401).json({ mystatus: "Unauthorised", success: false });
  }
}
