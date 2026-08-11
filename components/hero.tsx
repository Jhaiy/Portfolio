import Image from "next/image";
import PixelTransition from "./PixelTransition";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <p className="uppercase tracking-[0.5em] text-[clamp(0.65rem,1vw,0.8rem)]">
        Welcome to my portfolio
      </p>
      <div className="flex items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-[clamp(3rem,5vw,4rem)] font-bold leading-none">
            Valentino III S. Vista
          </h1>
          <p className="text-[clamp(0.875rem,2vw,1.125rem)] lg:w-1/2 text-muted-foreground">
            A full-stack developer with a passion for building web applications,
            cloud solutions, and exploring new technologies.
          </p>
        </div>
        <PixelTransition
          className="shrink-0 hidden lg:block md:block"
          style={{
            width: "12rem",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "9999px",
          }}
          gridSize={8}
          pixelColor="#111111"
          animationStepDuration={0.5}
          aspectRatio="100%"
          firstContent={
            <Image
              src="/images/me.JPG"
              alt="Valentino III S. Vista"
              fill
              priority
              sizes="120px"
              className="rounded-full object-cover object-[50%_20%] grayscale"
            />
          }
          secondContent={
            <Image
              src="/images/me2.jpg"
              alt="Valentino III S. Vista"
              fill
              priority
              sizes="120px"
              className="rounded-full object-cover object-[50%_20%] grayscale brightness-110"
            />
          }
        />
      </div>
    </div>
  );
}
