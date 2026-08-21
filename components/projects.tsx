import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    id: 1,
    thumbnail: "/images/cloudportal.png",
    title: "Cloud Portal",
    description:
      "Cloud Portal is a lightweight desktop application, brough to you by LVHP, that instantly turns your PC into a publicly accessible web server — no technical knowledge required. Select a folder, enter your Ngrok auth token, and click Start Server. Within seconds, anyone with the link can access your files, stream movies, or browse your hosted content from anywhere in the world.",
    link: "https://github.com/Jhaiy/Cloud-Portal",
    badges: ["Python", "Ngrok"],
  },
  {
    id: 2,
    thumbnail: "/images/buildx.png",
    title: "BuildX Designer with AI Mentor",
    description:
      "BuildX Designer is the ultimate drag-and-drop website builder that generates clean, exportable code. Create stunning websites visually and own your code completely. Experience building with our own AI Mentor, guiding you through the process and providing valuable insights. With BuildX Designer, you can unleash your creativity and bring your ideas to life effortlessly.",
    link: "https://buildxdesigner.site",
    badges: [
      "Vite+React",
      "TailwindCSS",
      "TypeScript",
      "Express.js",
      "Python",
      "Node.js",
      "AWS EC2",
      "Supabase",
    ],
  },
  {
    id: 3,
    thumbnail: "/images/avsi.png",
    title: "AVSI Website",
    description:
      "Audio and Video Equipment Trading Website is a website I built for my internship as a solo Full-Stack Developer. It is a website that showcases the products and services of AVSI, a company that sells audio and video equipment.",
    link: "https://avsi.it.com",
    badges: ["ReactCRA", "Express.js", "Supabase"],
  },
  {
    id: 4,
    thumbnail: "/images/avsiapp.jpeg",
    title: "AVSI E-Commerce Web Application",
    description:
      "An extension of the AVSI Website, this is an e-commerce web application with a user-centered design that allows users to purchase products online, track their orders, client management, and inventory management.",
    link: "https://github.com/Jhaiy/AVSI-Store",
    badges: ["Next.js", "TailwindCSS", "TypeScript", "Supabase", "Shadcn UI"],
  },
  {
    id: 5,
    thumbnail: "/images/dexlib.png",
    title: "DexLib (Coming soon! - In-progress)",
    description:
      "DexLib is a Pokemon card library and tracker that allows users to scan their Pokemon cards and keep track of its collection. It also allows users to view the details of each card, such as its type, rarity, and price.",
    link: "https://github.com/Jhaiy/LibDex",
    badges: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Supabase",
      "Shadcn UI",
      "Python",
      "Tesseract OCR",
      "Pokémon TCG API",
      "AWS EC2",
    ],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <p className="uppercase tracking-[0.5em] text-[clamp(0.65rem,1vw,0.8rem)]">
        Projects
      </p>
      <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] line-clamp-2 font-bold">
        Projects I have worked on
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="relative mx-auto max-h-sm w-full max-w-sm pt-0"
          >
            <div className="absolute inset-0 z-30 aspect-video bg-black/0" />
            <img
              src={`${project.thumbnail}`}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-nowrap overflow-x-auto scrollbar-none mt-2 gap-1">
                {project.badges.map((badge, index) => (
                  <Badge variant="secondary" key={index} className="mr-2">
                    {badge}
                  </Badge>
                ))}
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "w-full bottom-0",
                })}
              >
                Visit
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
