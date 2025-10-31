"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaTools, FaChartLine, FaClipboardList } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Cloud DevOps Engineer</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          I build reliable, scalable platforms in AWS — automating CI/CD, observability, and infrastructure so teams
          ship faster with confidence. Previously at AWS and Booz Allen Hamilton.
        </p>
        <div className="flex items-center justify-center gap-3 pt-1">
          <Button asChild>
            <Link href="/resume">View Resume</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>

      {/* Quick Guide / Intro Card */}
      <section className="bg-card border border-border rounded-lg p-6 shadow-sm max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">What I Focus On</h2>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2 text-base">
          <li>Design secure, multi-environment CI/CD with zero-downtime rollouts.</li>
          <li>Infrastructure as Code and automation for repeatable delivery.</li>
          <li>Observability: metrics, logs, tracing, and actionable alerts.</li>
          <li>Resilience and cost-aware architectures for real-world ops.</li>
        </ol>
        <div className="mt-5 flex justify-center">
          <Button asChild>
            <Link href="/projects">Explore Projects</Link>
          </Button>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="border border-border">
            <CardContent className="p-5 text-center space-y-2">
              <FaTools className="text-3xl text-primary mx-auto" />
              <h3 className="font-semibold">Automation & IaC</h3>
              <p className="text-muted-foreground text-sm">
                Reduced operational backlog by 75% through scripted automation and IaC.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-border">
            <CardContent className="p-5 text-center space-y-2">
              <FaClipboardList className="text-3xl text-primary mx-auto" />
              <h3 className="font-semibold">Operational Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Improved parity across gov regions by 20% and streamlined sev2 handling.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-border">
            <CardContent className="p-5 text-center space-y-2">
              <FaChartLine className="text-3xl text-primary mx-auto" />
              <h3 className="font-semibold">Observability</h3>
              <p className="text-muted-foreground text-sm">
                Scalable alarm management and practical dashboards for faster MTTR.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
