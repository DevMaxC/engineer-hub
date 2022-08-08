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

export async function fetchJobs(filter: Filter) {
  const response = await fetch("http://techhired.io/api/getLatest", {
    method: "POST",
    body: JSON.stringify(filter),
  });
  const data = response.json();
  return data;
}

export async function getStaticProps() {
  const props = await fetchJobs({});
  return {
    props: { props },
    revalidate: 10800,
  };
}

export default function Home({ props }: any) {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<Filter>({});
  const [animationParent] = useAutoAnimate<HTMLDivElement>();
  const [jobs, setJobs] = useState<toClient[]>(props.dataFrame);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // refresh get server side props, with the filter applied
    // then ensure that jobs are set to the result
    setCount(count + 1);
    if (count > 1) {
      setLoading(true);
      fetchJobs(filter)
        .then((data) => {
          setJobs(data.dataFrame);
        })
        .finally(() => {
          setLoading(false);
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
          className="z-0 grid grid-cols-1 gap-5 p-10 xl:mx-[20%]"
        >
          {!loading ? (
            <div className="pointer-events-none mx-auto h-min w-max min-w-fit justify-end rounded-full bg-gray-200">
              <h1 className="flex-nowrap px-3 py-2 text-lg">
                Results {jobs.length}
              </h1>
            </div>
          ) : (
            <div className="pointer-events-none mx-auto" role="status">
              <svg
                aria-hidden="true"
                className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}

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
