export default function Footer() {
  return (
    <div className="flex flex-row mb-0 gap-4 items-center justify-between text-center">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Valentino III S. Vista. All rights
        reserved.
      </p>
      <p className="text-xs text-muted-foreground">
        Built with Next.js, Tailwind CSS, Shadcn and TypeScript.
      </p>
    </div>
  );
}
