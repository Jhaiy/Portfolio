export default function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <p className="uppercase tracking-[0.5em] text-[clamp(0.65rem,1vw,0.8rem)]">
        Contact Me
      </p>
      <h3 className="text-[clamp(2.5rem,5vw,3.5rem)] lg:w-3/4 xs:w-full font-bold">
        Looking forward to working with me, or just want to say hello?
      </h3>
      <div className="">
        <ul>
          <li className="flex flex-row flex-wrap gap-20 my-5">
            <a
              href="vista.valentino.samson@gmail.com"
              className="text-md font-bold underline underline-offset-5 decoration-1"
            >
              vista.valentino.samson@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/vista-valentino-iii-s-719445342/"
              className="text-md font-bold underline underline-offset-5 decoration-1"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Jhaiy"
              className="text-md font-bold underline underline-offset-5 decoration-1"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
