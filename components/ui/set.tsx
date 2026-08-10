type SetProps = {
  label: string;
  parameters: string;
};

export default function Set({ label, parameters }: SetProps) {
  return (
    <div className="flex flex-col gap-3 mt-10">
      <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground">
        {label}
      </p>
      <hr />
      <p className="text-sm font-medium">{parameters}</p>
    </div>
  );
}
