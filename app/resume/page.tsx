import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CareerTimeline from "@/app/components/CareerTimeline";
import TechStack from "@/app/components/TechStack";

export default function ResumePage() {
  return (
    <div className="p-6 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Andrew Kim</h1>
        <p className="text-gray-600 text-sm">
          Denver, CO • 571-466-8142 • andy.kim.22@gmail.com
        </p>
      </header>

      <Separator />

      {/* Timeline */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Career Timeline</h2>
        <CareerTimeline />
      </section>

      {/* Tech Stack row */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Technologies</h2>
        <TechStack />
      </section>

      <section className="grid gap-6 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Amazon Web Services</CardTitle>
            <div className="text-sm text-muted-foreground">Cloud DevOps Engineer • Sep 2022 — Present</div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Managed and shipped CI/CD pipelines within AWS region services.</li>
              <li>Automated customer limit increase workflows across AWS services.</li>
              <li>Built IaC-driven alarm management; leveraged GenAI for authoring.</li>
              <li>Deployed operational hosts to classified regions to enable automation.</li>
              <li>Reduced software parity gaps in gov ISO regions by 20% and backlog by 75%.</li>
              <li>Led standups and implemented dual paging to streamline sev2 handling.</li>
              <li>Onboarded as AWS Guardian; reviewed software for security compliance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booz Allen Hamilton</CardTitle>
            <div className="text-sm text-muted-foreground">Cybersecurity Engineer • Jun 2019 — Aug 2022</div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Led ELK and Archer dashboard deployments for CDM Federal Agencies.</li>
              <li>Architected scalable ELK with ECE orchestration and DR strategies.</li>
              <li>Delivered compliance reviews (SCBs) and security control mappings.</li>
              <li>Built CI/CD with Jenkins; automated with Ansible and CloudFormation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Whereoware LLC</CardTitle>
            <div className="text-sm text-muted-foreground">System Administrator • Sep 2017 — May 2019</div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Evergreen Academy</CardTitle>
            <div className="text-sm text-muted-foreground">System Administrator • Jun 2016 — Aug 2017</div>
          </CardHeader>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              Western Governors University — B.S. Cybersecurity and Information Assurance (2019)
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">AWS Certified Developer — Associate</div>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}
