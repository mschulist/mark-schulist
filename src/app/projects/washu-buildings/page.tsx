/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='flex flex-col gap-4 mx-[5vw] md:mx-[15vw] my-2'>
      <Link
        className='text-4xl self-center p-4 transform transition-transform duration-100 hover:scale-110 '
        href='https://washucampusview.com'
        target='_blank'>
        WashU Campus View
      </Link>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <p className='text-lg'>
          For this year's hackathon (Oct. 2024), we decided to build an
          interactive map of the WashU campus. The main motivation for this
          project came from my internship at SeerAI, where we used a library
          called DeckGL to display data on maps.
          <br />
          <br />
          DeckGL is a WebGL-powered framework for visual exploratory data
          analysis of large datasets. By using the GPU, DeckGL is SUPER fast and
          can render thousands of points on a map (in 3D as well!). Although we
          didn't push DeckGL to its limits, its ability to render the entire
          campus in 3D (along with the Campus Circulator routes) is impressive.
          <br />
          <br />
          Besides an excuse to use a cool WebGL-enabled library, this project
          also attempted to solve a big problem many of us have faced: finding
          the location of printers on campus. For some reason, there is no
          central location of every printer on campus. So, we decided to build
          one. Because we don't know the location of every printer, the app is
          crowd-sourced so that users can the edit buildings' information on the
          website. Besides printers, we also have a few other facts about each
          building such as whether it has blackboards, food, and study rooms. We
          also have a chat on each building so that users can post messages
          about the building.
          <br />
          <br />
        </p>
        <Image
          src={
            'https://f005.backblazeb2.com/file/mark-schulist/hackathon_2024/olin-campus-view.png'
          }
          alt='campus-view'
          height={0}
          width={500}
          className='rounded-lg mx-4 self-center justify-self-center align-self-center'
        />
      </div>
      <h2 className='text-3xl py-4'>How it works</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <p className='text-lg'>
          The building data comes from{' '}
          <Link
            href={'https://osmbuildings.org/'}
            className='underline'
            target='_blank'>
            OSM buildings
          </Link>{' '}
          and were wrangled into a nice format using GeoPandas. This step
          included restricting the data to just buildings within the WashU
          campus and making sure that the building names were correct. After the
          data was cleaned, I wrote a script that would convert it to a "nice"
          format that could be easily imported into the Supabase database using
          their Python API. It would be nice if the data came from WashU
          directly, but I could not find a dataset that included the new
          buildings on campus.
          <br />
          <br />
          The app is built with NextJS and uses Supabase as the database. We
          decided on Supabase because I wanted to try it out and had heard good
          things about it. Also, one of the judges was obsessed with Supabase
          last year, so we thought it couldn't hurt our chances of winning by
          using it (it may have helped considering we won the master category).
          <br />
          <br />
          We used DaisyUI as the component library, which was suggested to me by
          a friend right before the hackathon. It essentially just extends
          tailwind and makes the default HTML components look a LOT better. I'm
          a big fan of tailwind, so using DaisyUI didn't take much additional
          effort. After using DaisyUI, I can confirm that I am a big fan of it.
          I will definitely use it in future projects (like this one).
          <br />
          <br />
          The app is hosted on Vercel and uses the Vercel serverless functions
          to interact with the Supabase database.
          <br />
          <br />I learned a lot from this project. This was the first project
          where I felt like the code did not evolve into spaghetti. I attribute
          this to the fact that we created far more React components than we did
          in the past (which is a good thing). I also learned a lot about
          Supabase and how to use it. It's a fantastic tool and will be sure to
          use it in future projects. It's super easy to set up and also very
          fast.{' '}
          <Link
            href='https://github.com/mschulist/washu-buildings'
            className='underline text-lg transform transition-transform duration-100 hover:scale-110 self-start'
            target='_blank'>
            Here's the GitHub repo in case you're interested.
          </Link>
        </p>
        <div className='flex flex-col justify-evenly'>
          <Image
            src={
              'https://f005.backblazeb2.com/file/mark-schulist/hackathon_2024/washu-buildings.png'
            }
            alt='campus-view-2'
            height={0}
            width={500}
            className='rounded-lg m-4 self-center justify-self-center align-self-center'
          />
          <Image
            src={
              'https://f005.backblazeb2.com/file/mark-schulist/hackathon_2024/buildings-printers.png'
            }
            alt='campus-view-3'
            height={0}
            width={500}
            className='rounded-lg m-4 self-center justify-self-center align-self-center'
          />
        </div>
      </div>
    </div>
  )
}
