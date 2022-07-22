// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};
type Job = {
  title: string;
  url: string;
  technologies: string[];
  location: string;
  seniority: string;
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mySite: Website = req.body;
  console.log(mySite.jobs[0]);

  res.status(200).json({ name: "John Doe" });
}
