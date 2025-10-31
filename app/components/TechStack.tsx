"use client";

import {
  SiAmazon,
  SiJenkins,
  SiGrafana,
  SiElastic,
  SiPrometheus,
  SiKubernetes,
  SiDocker,
  SiAnsible,
  SiGit,
  SiLinux,
  SiHashicorp,
} from "react-icons/si";

type Tech = { name: string; Icon: React.ComponentType<{ size?: number; className?: string }>; };

const tech: Tech[] = [
  { name: "AWS", Icon: SiAmazon },
  { name: "Vault", Icon: SiHashicorp },
  { name: "Jenkins", Icon: SiJenkins },
  { name: "Grafana", Icon: SiGrafana },
  { name: "ELK", Icon: SiElastic },
  { name: "Prometheus", Icon: SiPrometheus },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Docker", Icon: SiDocker },
  { name: "Ansible", Icon: SiAnsible },
  { name: "Git", Icon: SiGit },
  { name: "Linux", Icon: SiLinux },
];

export default function TechStack() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-3">
        {tech.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center rounded-md border border-border bg-card w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          >
            <Icon className="text-primary h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-muted-foreground">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
