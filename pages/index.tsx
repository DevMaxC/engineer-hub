import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import Image from "next/image";

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

export interface IndexProps {
  end: toClient[];
}

export type Filter = {
  tech?: string[];
  seniority?: string;
  remote?: boolean;
  companyName?: string;
};

export default function Home() {
  const router = useRouter();

  const [filter, setFilter] = useState<Filter>({});
  const [animationParent] = useAutoAnimate<HTMLDivElement>();
  const [jobs, setJobs] = useState<toClient[]>([]);

  async function fetchJobs(filter: Filter) {
    const response = await fetch("/api/getLatest", {
      method: "POST",
      body: JSON.stringify(filter),
    });
    const data = response.json();
    return data;
  }
  const [count, setCount] = useState(0);
  useEffect(() => {
    // refresh get server side props, with the filter applied
    // then ensure that jobs are set to the result
    setCount(count + 1);
    if (count > 0) {
      fetchJobs(filter).then((data) => {
        setJobs(data.dataFrame);
        console.log(data);
      });
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

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techhired.io/" />
        <meta property="og:title" content="TechHired.io" />
        <meta
          property="og:description"
          content="TechHired.io - Search for programming jobs without hassle."
        />
        <meta property="og:image" content="/socialIcon.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://techhired.io/" />
        <meta property="twitter:title" content="TechHired.io" />
        <meta
          property="twitter:description"
          content="TechHired.io - Search for programming jobs without hassle."
        />
        <meta property="twitter:image" content="/socialIcon.png" />
      </Head>
      <Header filter={filter} filterSetter={setFilter} />
      <div className="mt-24 flex flex-col">
        <main
          ref={animationParent}
          className="z-0 mx-1 grid grid-cols-1 gap-5 p-10 xl:mx-[20%]"
        >
          <div className="mx-auto w-max min-w-fit justify-end rounded-full bg-gray-200">
            <h1 className="flex-nowrap px-3 py-2 text-lg">
              Results {jobs.length}
            </h1>
          </div>

          {jobs.map((job: toClient, index) => {
            return (
              <div key={index + job.id}>
                <Job {...job} />
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}
