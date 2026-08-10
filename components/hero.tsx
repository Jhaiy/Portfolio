export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <p className="uppercase tracking-[0.5em] text-[clamp(0.65rem,1vw,0.8rem)]">
        Welcome to my portfolio
      </p>
      <h1 className="text-[clamp(2rem,3vw,3rem)] font-bold">
        Valentino III S. Vista
      </h1>
      <p className="text-[clamp(0.875rem,2vw,1.125rem)] lg:w-1/2 text-muted-foreground">
        A full-stack developer with a passion for building web applications,
        cloud solutions, and exploring new technologies.
      </p>
    </div>
  );
}
