// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
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
  if (req.body.secret == process.env.PYTHONSECRET) {
    try {
      if (req.body.site === undefined) {
        return res
          .status(500)
          .json({ dataFrame: {}, message: "Request Error", success: false });
      } else {
        const site: string = req.body.site;
        const final = await prisma.website.findFirst({
          where: { careersPageLink: { equals: site } },
          select: { jobs: { select: { url: true } } },
        });
        return res
          .status(200)
          .json({ dataFrame: final, message: "Done", success: true });
      }
    } catch (error) {
      console.log("Request error", error);
      return res
        .status(500)
        .json({ dataFrame: {}, message: "Request Error", success: false });
    }
  } else {
    return res
      .status(500)
      .json({ dataFrame: {}, message: "Request Error", success: false });
  }
}
