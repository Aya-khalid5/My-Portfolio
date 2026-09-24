import type { Certification } from "@/data/certifications";
import ProjectImage from "@/components/ui/ProjectImage";

export default function CertificateCard({ cert }: { cert: Certification }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <ProjectImage
        src={cert.image}
        alt={`${cert.name} certificate`}
        className="h-40 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-base font-medium text-ink">
          {cert.name}
        </h3>
        <p className="text-sm text-ink-soft">{cert.provider}</p>
        {cert.issueDate && (
          <p className="text-xs text-ink-soft/80">{cert.issueDate}</p>
        )}
      </div>
    </div>
  );
}
