// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";

type In = { results: Number };

type Data = {
  dataFrame: dataFrame | null;
  message: "Method not allowed";
  success: boolean;
};

type dataFrame = {
  logoSrc: string;
  companyName: string;
  jobtitle: string;
  websiteId: number;
  seniority: string;
  city: string;
  country: string;
  url: string;
  tags: string[];
};

export type toClient = {
  id?: number;
  url?: string;
  name?: string;
  title?: string;
  country?: string;
  city?: string;
  seniority?: string;
  remote?: boolean;
  techs?: string[];
  image?: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    return await getLatest(req, res);
  } else {
    return res
      .status(405)
      .json({ dataFrame: null, message: "Method not allowed", success: false });
  }
}

async function getLatest(req: NextApiRequest, res: NextApiResponse) {
  try {
    var jobs = await prisma.job.findMany({
      select: {
        id: true,
        url: true,
        title: true,
        remote: true,
        country: true,
        city: true,
        seniority: true,
        firstScraped: true,
        lastScraped: true,
        websiteId: true,
      },
      distinct: ["websiteId"],
      take: 5,
    });

    var final: toClient[];
    jobs.forEach(async (job) => {
      const website = await prisma.website.findUnique({
        select: {
          name: true,
          icon: true,
        },
        where: {
          id: job.websiteId == null ? undefined : job.websiteId,
        },
      });

      const techObjects = await prisma.tech.findMany({
        select: {
          tech: true,
        },
        where: {
          jobId: job.id,
        },
      });
      const techList: string[] = techObjects.map((tech) => {
        console.log(tech.tech);
        return tech.tech;
      });

      final = [
        ...final,
        {
          id: job.websiteId == null ? undefined : job.websiteId,
          url: job.url,
          name: website?.name,
          title: job.title,
          country: job.country,
          city: job.city,
          seniority: job.seniority,
          remote: job.remote,
          techs: techList,
          image: website?.icon,
        },
      ];
    });

    return res
      .status(200)
      .json({ dataFrame: jobs, message: "Done", success: true });
  } catch (error) {
    console.log("Request error", error);
    res
      .status(500)
      .json({ dataFrame: {}, message: "Request Error", success: false });
  }
}
