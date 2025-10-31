"use client";

type TimelineItem = {
  company: string;
  period: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    company: "Amazon Web Services",
    period: "2022 - Present",
    description: "Cloud DevOps Engineer; CI/CD, automation, alarm mgmt, and ops resiliency.",
  },
  {
    company: "Booz Allen Hamilton",
    period: "2019 - 2022",
    description: "Cybersecurity Engineer for federal clients; ELK, automation, CI/CD.",
  },
  {
    company: "Whereoware LLC",
    period: "2017 - 2019",
    description: "System Administrator for a digital agency; infra and tooling.",
  },
  {
    company: "Evergreen Academy",
    period: "2016 - 2017",
    description: "System Administrator supporting school systems and operations.",
  },
];

export default function CareerTimeline() {
  return (
    <div className="w-full">
      <ul className="space-y-4">
        {timelineData.map((item) => (
          <li key={item.company}>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold">{item.company}</h3>
                <span className="text-xs text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
