// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";
import { Filter } from "..";

type In = { filter: Filter };

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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
  jobId?: number;
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
  const body = JSON.parse(req.body);
  const filter = body.filter;
  const skip = body.skip;
  const take = body.take;

  if (
    filter.tech !== undefined ||
    filter.seniority !== undefined ||
    filter.remote !== undefined
  ) {
    try {
      var jobs;
      if (filter.tech === undefined || filter.tech.length === 0) {
        jobs = await prisma.job.findMany({
          skip: skip,
          take: take,
          select: {
            id: true,
            url: true,
            title: true,
            remote: true,
            country: true,
            city: true,
            seniority: true,
            techs: { select: { tech: true } },
            Website: { select: { id: true, name: true, icon: true } },
          },
          where: {
            active: true,
            remote: filter.remote,
            seniority: {
              equals: filter.seniority,
            },
          },
        });
      } else {
        jobs = await prisma.job.findMany({
          skip: skip,
          take: take,
          select: {
            id: true,
            url: true,
            title: true,
            remote: true,
            country: true,
            city: true,
            seniority: true,
            techs: { select: { tech: true } },
            Website: { select: { id: true, name: true, icon: true } },
          },
          where: {
            active: true,
            remote: filter.remote,
            seniority: {
              equals: filter.seniority,
            },
            // search to only return jobs which contain all of the techs in filter.tech and possibly more
            techs: {
              some: {
                tech: {
                  in: filter.tech,
                },
              },
            },
          },
        });
      }

      const end: toClient[] = [];

      jobs.forEach((job) => {
        if (job.Website) {
          end.push({
            id: job.Website.id,
            jobId: job.id,
            name: job.Website.name,
            url: job.url,
            title: job.title,
            country: job.country,
            city: job.city,
            seniority: job.seniority,
            remote: job.remote,
            techs: job.techs.map((tech) => tech.tech),
            image:
              "https://careers-pages.s3.us-east-2.amazonaws.com/" +
              job.Website.icon,
          });
        }
      });
      return res
        .status(200)
        .json({ dataFrame: shuffle(end), message: "Done", success: true });
    } catch (error) {
      console.log("Request error", error);
      res
        .status(500)
        .json({ dataFrame: {}, message: "Request Error", success: false });
    }
  } else {
    jobs = await prisma.job.findMany({
      skip: skip,
      select: {
        url: true,
        id: true,
        title: true,
        remote: true,
        country: true,
        city: true,
        seniority: true,
        techs: { select: { tech: true } },
        Website: { select: { id: true, name: true, icon: true } },
      },
      take: take,
    });

    const end: toClient[] = [];

    jobs.forEach((job) => {
      if (job.Website) {
        end.push({
          id: job.Website.id,
          jobId: job.id,
          name: job.Website.name,
          url: job.url,
          title: job.title,
          country: job.country,
          city: job.city,
          seniority: job.seniority,
          remote: job.remote,
          techs: job.techs.map((tech) => tech.tech),
          image:
            "https://careers-pages.s3.us-east-2.amazonaws.com/" +
            job.Website.icon,
        });
      }
    });

    return res
      .status(200)
      .json({ dataFrame: shuffle(end), message: "Done", success: true });
  }
}
