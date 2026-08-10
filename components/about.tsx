import Set from "@/components/ui/set";
import { Badge } from "@/components/ui/badge";

const setContents = [
  {
    label: "Based in",
    parameters: "Quezon City, Philippines",
  },
  {
    label: "Focus",
    parameters: "Full-Stack Development, Cloud Engineering (AWS), DevOps",
  },
  {
    label: "Currently",
    parameters: "Working at Xilnex Philippines",
  },
  {
    label: "Programming Languages",
    parameters:
      "Java, C++, C#, Python, Node.js, ReactCRA, Next.js, Express.js, TypeScript, VB.NET, ASP.NET, PHP",
  },
];

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <p className="uppercase tracking-[0.5em] text-[clamp(0.65rem,1vw,0.8rem)]">
        About Me
      </p>
      <div className="flex flex-row flex-wrap gap-15 justify-between">
        <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] line-clamp-2 font-bold">
          A little about how I work.
        </h3>
        <div className="flex flex-col gap-5 sm:w-165">
          <p className="text-[clamp(0.875rem,2vw,1.125rem)] w-full text-muted-foreground">
            I graduated with a Bachelor of Science in Information Technology
            from Quezon City University.I'm a passionate full-stack developer
            with a love for creating innovative web applications and solving
            complex problems. I focus more on the backend side of development.
          </p>
          <p className="text-[clamp(0.875rem,2vw,1.125rem)] w-full text-muted-foreground">
            I am always eager to learn new technologies and stay up-to-date with
            the latest trends in the industry. I am slowly transitioning and
            pivoting into Cloud Engineering (AWS) and DevOps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {setContents.map((set, index) => (
              <Set key={index} label={set.label} parameters={set.parameters} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
