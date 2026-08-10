import { Separator } from "@/components/ui/separator";

type CertCardsProps = {
  badge: string;
  title: string;
  provider: string;
  date: string;
  link: string;
};

export default function CertCards({
  title,
  provider,
  date,
  link,
}: CertCardsProps) {
  return (
    <div className="flex flex-row flex-wrap sm:flex-col gap-0">
      <div className="flex-shrink-0 m-2">
        <img alt={title} src={link} className="w-40 h-40 object-cover" />
        <p className="text-sm">{title}</p>
        <p className="text-xs">{provider}</p>
        <Separator />
        <div className="flex flex-row justify-between items-center">
          <p className="text-xs">{date}</p>
          <a href={link} target="_blank">
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
}
