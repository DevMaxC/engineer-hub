import { PrismaClient } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";
import { title } from "process";

type Data = {
  message: string | undefined;
  success: boolean;
};

type Job = {
  url: string;
  title: string;
  remote: boolean;
  country: string;
  city: string;
  seniority: string;
  techs: string[];
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // return the url of the website which has the oldest data
    if (req.body.secret == process.env.PYTHONSECRET) {
      try {
        //Update the database with the new job request, remove jobs not in the request
        //If a job is in the new job request but not in the database, add it
        //Leave alone items which are in both the database and the request

        const newJobs: Job[] = req.body.jobs;
        const websiteUrl = req.body.url;

        await prisma.job.updateMany({
          where: {
            AND: [
              { Website: { careersPageLink: websiteUrl } },
              {
                url: {
                  notIn: newJobs?.map((j) => {
                    return j.url;
                  }),
                },
              },
            ],
          },
          data: {
            active: false,
          },
        });

        await prisma.job.updateMany({
          where: {
            AND: [
              { Website: { careersPageLink: websiteUrl } },
              {
                url: {
                  in: newJobs?.map((j) => {
                    return j.url;
                  }),
                },
              },
            ],
          },
          data: {
            active: true,
          },
        });

        //if a job is not in the database add it

        //get website id
        const website = await prisma.website.findUnique({
          select: {
            id: true,
          },
          where: {
            careersPageLink: websiteUrl,
          },
        });

        if (website != null) {
          newJobs.forEach(async (job: Job) => {
            try {
              prisma.job.count({
                where: {
                  AND: [{ url: job.url }, { Website: { id: website.id } }],
                },
              });
            } catch (error) {
              console.log(error);
              await prisma.job.create({
                data: {
                  url: job.url,
                  title: job.title,
                  remote: job.remote,
                  country: job.country,
                  city: job.city,
                  seniority: job.seniority,
                  active: true,
                  techs: {
                    createMany: {
                      data: job.techs.map((tech) => ({
                        tech: tech,
                      })),
                    },
                  },
                  websiteId: website.id,
                },
              });
            }
          });
          return res.status(200).json({ message: "Done", success: true });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error", success: false });
      }
    } else {
      console.log("auth error");
      return res.status(500).json({ message: "Request Error", success: false });
    }
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}
