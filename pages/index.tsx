import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Latest from "../components/latest";
import { cardProps } from "../components/CompanyCard";
import FeaturedCompany from "../components/FeaturedCompany";
import Footy from "../components/Footer";

export async function getServerSideProps() {
  return {
    props: {
      latestJobs: [
        {
          logoSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png",
          companyName: "Tesla",
          jobtitle: "Software Engineer",
          jobdesc:
            "Front-end develloper for our cool screens in the cars, awesome job, big-pay Front-end develloper for our cool screens in the cars, awesome job, big-pay Front-end develloper for our cool screens in the cars, awesome job, big-pay Front-end develloper for our cool screens in the cars, awesome job, big-pay",
          url: "/Tesla",
          tags: [],
        },
        {
          logoSrc: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
          companyName: "Microsoft",
          jobtitle: "Software Engineer",
          jobdesc:
            "Front-end develloper for our cool screens in the cars, awesome job, big-pay",
          url: "/Tesla",
          tags: [],
        },
        {
          logoSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
          companyName: "Google",
          jobtitle: "Software Engineer",
          jobdesc:
            "Front-end develloper for our cool screens in the cars, awesome job, big-pay",
          url: "/Tesla",
          tags: [],
        },
        {
          logoSrc:
            "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
          companyName: "Stack Overflow",
          jobtitle: "Software Engineer",
          jobdesc:
            "Front-end develloper for our cool screens in the cars, awesome job, big-pay",
          url: "/Tesla",
          tags: [],
        },
        {
          logoSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png",
          companyName: "Tesla",
          jobtitle: "Software Engineer",
          jobdesc:
            "Front-end develloper for our cool screens in the cars, awesome job, big-pay",
          url: "/Tesla",
          tags: [],
        },
        {
          logoSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
          companyName: "Google",
          jobtitle: "Software Engineer",
          jobdesc:
            "Front-end develloper for our cool screens in the cars, awesome job, big-pay",
          url: "/Tesla",
          tags: [],
        },
        {
          logoSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png",
          companyName: "Tesla",
          jobtitle: "Software Engineer",
          jobdesc:
            "Front-end develloper for our cool screens in the cars, awesome job, big-pay",
          url: "/Tesla",
          tags: [],
        },
      ],
    },
  };
}

export default function Home({ latestJobs }: { latestJobs: cardProps[] }) {
  // logoSrc: string;
  // companyName: string;
  // jobtitle: string;
  // url: string;

  return (
    <div className="min-h-screen bg-slate-50  bg-gradient-to-br">
      <Head>
        <title>Engineer Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="z-10">
        <Header />
      </div>
      <main className="z-0 p-5">
        <div className="px-5 py-5">
          <Latest allCards={latestJobs} title="Latest" />
        </div>
        <div className="px-5 py-5">
          <Latest allCards={latestJobs.slice().reverse()} title="For You" />
        </div>
        <div className="px-5 pt-5">
          <h2 className="text-2xl">Featured Companies</h2>
          <div className="grid grid-cols-1 gap-10  pt-5  lg:grid-cols-2">
            <FeaturedCompany
              logoSrc={latestJobs[0].logoSrc}
              companyName={latestJobs[0].companyName}
              companyDescription={
                "Tesla is a company which specialise in the electric automotive business. Making breakthroughs this year with autonomous driving. This would be GPT-3'd"
              }
              positionsAvailable={7}
              url={latestJobs[0].url}
            />
            <FeaturedCompany
              logoSrc={latestJobs[1].logoSrc}
              companyName={latestJobs[1].companyName}
              companyDescription={
                "Microsoft company description, this would be GPT-3'd"
              }
              positionsAvailable={203}
              url={latestJobs[1].url}
            />
          </div>
        </div>
      </main>
      <Footy />
    </div>
  );
}
