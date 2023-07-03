import Head from "next/head";
import Header from "~/components/Layout/Header";
import WorldMapElevation from "~/components/WorldMap/WorldMapElevation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elevation Finder</title>
        <meta name="description" content="Ground elevation with leaflet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col p-6">
        <Header />
        <WorldMapElevation />
      </main>

    </>
  );
}
