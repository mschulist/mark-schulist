/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function EBirdCBC() {
  return (
    <div className="flex flex-col gap-4 mx-[5vw] md:mx-[15vw] my-2">
      <a
        className="text-4xl self-center p-4 transform transition-transform duration-100 hover:scale-110"
        href="https://github.com/ddkapan/eBirdCBC"
        target="_blank"
      >
        eBirdCBC
      </a>
      <h2 className="text-3xl py-4">What it is</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <p className="text-lg">
          As an avid birder, I have participated in the Christmas Bird Count
          (CBC) for the 7 years. We always {" use "}
          <a href={"https://ebird.org"} target="_blank" className="underline">
            {"eBird"}
          </a>{" "}
          to collect our data, which makes data collection effortless, but the
          process of compiling the data is a pain. Once we've downloaded the
          data from eBird, we spend hours figuring out which counts were
          overlapping. Because we are counting the same birds, some of the
          checklists will have counted the same birds, and we need to combine
          those sightings (like a hawk flying over seen by two different
          groups). This process takes forever and is very error-prone. So, I
          decided to build an app that would make this process much more
          seamless.
          <br />
          <br />
          The principle of our app is simple: you enter the eBird trip report of
          the count and the app collects the data (and tracks!) from those
          checklists and displays them on a map. Then, you can go through each
          species and see the checklists that reported that species. If you
          think the same birds were seen on multiple checklists, you can combine
          those checklists and the app will take the max from the merged lists.
          Once you've gone through all the species, you can download the data in
          a nice csv. You can also export the database file if you want to share
          the session in the app with others.
        </p>
        <Image
          src={"https://f005.backblazeb2.com/file/mark-schulist/ebirdcbc.png"}
          alt="eBird CBC"
          height={0}
          width={600}
          className="rounded-lg mx-4 self-center justify-self-center align-self-center"
        />
      </div>
      <h2 className="text-3xl py-4">How it works</h2>
      <p className="text-lg">
        This app is built with Electron (I know, I know...) and React. This is
        by far the most complex app I've built, for two reasons: 1.) This was my
        first time using React, so I had very little knowledge of the importance
        of splitting up components (just look at the GitHub repo...) and 2.)
        there are a lot of moving parts, from gather the data from eBird to
        calculating the max of the merged lists.
        <br />
        <br />
        The frontend uses Leaflet to display the map, which is a fantastic
        library and was the easiest part of the app to implement. I used a
        library {" called "}
        <a
          href={"https://github.com/louischatriot/nedb"}
          target="_blank"
          className="underline"
        >
          nedb
        </a>
        {" to "} as the database, which is a simple database that uses a
        MongoDB-like API but is much more lightweight. It stores the data in a
        .db file on your computer, which is nice because you can share the
        session with other people by sending them the .db file. The backend is
        built with Node.js and runs on the user's computer as a child process of
        the Electron app.
        <br />
        <br />
        The most interesting part of the app is how I get the data from eBird.
        There is an eBird API, but it does not allow you to get the tracks from
        the checklists because those are restricted to the user who submitted
        the checklist. I get around this by scraping the tracks from eBird using
        Puppeteer. When you enter the eBird trip report, the app opens a
        headless browser to find the checklists on the trip report. Then, it
        opens a new browser window and prompts the user to log into eBird. Once
        they've logged in, Puppeteer goes to each checklist and scrapes
        the tracks from the checklist. In eBird the tracks are stored as lists
        of coordinates, which my app downloads and stores in the database.
      </p>
    </div>
  );
}
