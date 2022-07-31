import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps, NextPageContext } from "next";
import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";
import Header from "../components/header";
import Job from "../components/job";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export type toClient = {
  id: number;
  url: string;
  name: string;
  title: string;
  country: string;
  city: string;
  seniority: string;
  remote: boolean;
  techs: string[];
  image: string;
};

const exampleJob: toClient = {
  id: 12,
  url: "https://www.lifeatspotify.com/jobs/frontend-engineer-reliability",
  name: "Spotify",
  title: "Frontend Engineer",
  country: "United States",
  city: "New York",
  seniority: "Junior",
  remote: true,
  techs: [
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "GraphQL",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
  ],
  image:
    "https://careers-pages.s3.us-east-2.amazonaws.com/01822a79-4340-794a-88cb-1638d32c3585.png",
};

export interface IndexProps {
  props: toClient[];
}

export const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

const prisma = new PrismaClient();

export async function getServerSideProps<GetServerSideProps>(context) {
  const { params, req, res } = context;
  // context.

  var jobs = await prisma.job.findMany({
    select: {
      url: true,
      title: true,
      remote: true,
      country: true,
      city: true,
      seniority: true,
      techs: { select: { tech: true } },
      Website: { select: { id: true, name: true, icon: true } },
    },
  });

  const end: toClient[] = [];

  jobs.forEach((job) => {
    if (job.Website) {
      end.push({
        id: job.Website.id,
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

  return { props: { end } };
}

export interface IndexProps {
  end: toClient[];
}

type Filter = {
  tech?: string[];
  seniority?: string;
  remote?: boolean;
  companyName?: string;
};

export default function Home(props: IndexProps) {
  const router = useRouter();
  //Helper Function to refresh the page
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const [filter, setFilter] = useState<Filter>();
  const [animationParent] = useAutoAnimate<HTMLDivElement>();
  const [jobs, setJobs] = useState(props.end);
  const isMount = useIsMount();

  useEffect(() => {
    // refresh get server side props, with the filter applied
    // then ensure that jobs are set to the result
    if (isMount) {
      //run on mount
    } else {
      //run on subsequent updates
      console.log("FILTER CHANGE");
    }
  }, [filter]);

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 bg-gradient-to-br font-inter">
      <Head>
        <title>Tech Hired</title>
        <link rel="icon" href="/logoBlue.svg" />
        <meta
          name="description"
          content="TechHired.io - Search for programming jobs without hassle."
        />
      </Head>
      <Header />
      <main
        ref={animationParent}
        className="z-0 mx-[1%] mt-24 grid grid-cols-1 gap-5 p-10 2xl:grid-cols-2"
      >
        {jobs.map((job: toClient, index) => {
          return (
            <div key={index}>
              <Job {...job} />
            </div>
          );
        })}
      </main>
    </div>
  );
}
