/* eslint-disable react/no-unescaped-entities */

export default function AboutText() {
  return (
    <div className="flex mx-10 flex-col xl:mx-60 lg:mx-40 md:mx-20">
      <h1 className="text-4xl py-4">A Little About Me</h1>
        <p className="text-2xl">
            Hi! I'm Mark, a first-year at Washington University in St. Louis. 
            As an advocate of learning because learning is, just cool, I made this website to share my thoughts and projects with the world.
        </p>
        <p className="text-2xl">
            I love everything quantitative from math to computer science to physics. 
            These subjects become especially interesting when I can combine them, which is often the case. 
            I find it most satisfying when I learn something new in one class (often in math) and then apply it to another class (usually physics or computer science).
            For example, we might learn about gradients in calculus and then apply that knowledge to understand how neural networks learn.
            Or, in another case, I learned about finding the sum of geometric series and then applied that knowledge to calculate the present-day value of money in Microeconomics.
            It's times like these that bring me the most joy, and I hope to share (at least a little of) that joy with you. 
            These will be in the form of blog posts, where I try my best to explain a concept in a way that (hopefully) shares my excitement of something with you.
        </p>
        <p className="text-2xl">
            In case you're interested, <a href="https://f005.backblazeb2.com/file/mark-schulist/Mark_Schulist_Resume.pdf" className="underline">here's my resume. </a>
        </p>
        <p className="text-2xl">
            Thanks for visiting my site! As always, I hope you learn something!
        </p>
    </div>
  );
}
