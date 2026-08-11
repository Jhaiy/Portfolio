import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

type CertCardsProps = {
  badge: string;
  title: string;
  provider: string;
  date: string;
  link: string;
};

export default function CertCards({
  badge,
  title,
  provider,
  date,
  link,
}: CertCardsProps) {
  return (
    <div className="border">
      <div className="w-full p-5">
        <img alt={title} src={badge} className="w-18 h-18 object-cover" />
        <div className="my-6">
          <h3 className="text-md font-bold line-clamp-1 tracking-normal">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground font-medium">
            {provider}
          </p>
        </div>
        <Separator />
        <div className="flex flex-row my-3 justify-between items-center">
          <p className="text-xs text-muted-foreground font-medium">{date}</p>
          <a
            className="uppercase text-xs font-bold underline flex flex-row gap-1"
            href={link}
            target="_blank"
          >
            View Certificate
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
