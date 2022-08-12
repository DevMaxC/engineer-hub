// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string | undefined;
  success: boolean;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // return the url of the website which has the oldest data
    const oldest = await prisma.job.findFirst({
      select: {
        Website: {
          select: {
            careersPageLink: true,
          },
        },
      },
      orderBy: { lastScraped: "asc" },
    });

    return res.json({
      message: oldest?.Website?.careersPageLink,
      success: true,
    });
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}
