import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initiativeOverviewFlag } from "../libs/flags";

type HomeProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function HomePage({ initiativeOverview }: HomeProps) {
  return (
    <>
      <Head>
        <title>Basestack + Pages Router</title>
      </Head>

      <main style={{ margin: "0 auto", maxWidth: 640, padding: "3rem 1rem" }}>
        <h1>Vercel Flags via Basestack</h1>
        <p>
          The initiative overview flag is{" "}
          <strong>{initiativeOverview ? "enabled" : "off"}</strong>.
        </p>
      </main>
    </>
  );
}

export const getServerSideProps = (async ({ req }) => {
  const initiativeOverview = await initiativeOverviewFlag(req);
  return { props: { initiativeOverview } };
}) satisfies GetServerSideProps<{ initiativeOverview: boolean }>;
