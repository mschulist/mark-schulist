/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function CourseWatch() {
  return (
    <div className="flex flex-col gap-4 mx-[5vw] md:mx-[15vw] my-2">
      <a
        className="text-4xl self-center m-4 transform transition-transform duration-100 hover:scale-110"
        href="https://wustlwatch.courses/"
        target="_blank"
      >
        WashU Course Watch
      </a>
      <h2 className="text-3xl py-4">What it is</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <p className="text-lg">
          WashU's course registration system is, well, frustrating. It (usually)
          doesn't crash because they spread out registration times, but the
          website looks like it was written decades in the past. There is a lack
          of CSS and the website is not mobile-friendly. But all of this would
          be acceptable if, and only if, you didn't have to spend hours
          refreshing the page to get into a class. Most courses have waitlists,
          and I have no problem with those courses. It's the courses that don't
          have waitlists that sparked the idea for this project. And for some
          (fantastic) reason, almost all of the intro STEM courses don't have
          waitlists.
          <br />
          <br />
          The principle of our app is simple: you enter the course you want to
          "watch" and our app will text you when a spot opens up. It's pretty
          simple, which is why we decided to build it for our hackathon (Hack
          WashU 2023).
        </p>
        <Image
          src={"https://f005.backblazeb2.com/file/mark-schulist/webstac.png"}
          alt="Webstac, our 'fantastic' system"
          height={0}
          width={500}
          className="rounded-lg mx-4 self-center justify-self-center align-self-center"
        />
      </div>
      <h2 className="text-3xl py-4">How it works</h2>
      <p className="text-lg">
        The app uses a React frontend and a NodeJS backend. The frontend is
        hosted on Google Firebase and the backend is hosted on Google Cloud.
        We're using a Firestore database to store the courses that users want to
        watch. Looking back, we probably should have used NextJS because Google
        Cloud Functions take some time to start up from a cold start. We're
        using Textbelt to send text messages as they have a very nice API. We're
        also using a cron job to check the course status every minute during
        course registration time.
      </p>
      <a
        href="https://github.com/mschulist/washu-course-alerts"
        className="underline text-lg transform transition-transform duration-100 hover:scale-110 self-start"
        target="_blank"
      >
        Here's the GitHub repo in case you're interested.
      </a>
    </div>
  );
}
