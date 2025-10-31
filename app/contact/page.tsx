// app/contact/page.tsx
"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="p-6 space-y-8">
      <section className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I’m easiest to reach by email. Happy to chat about roles, projects, or cloud/devops strategy.
        </p>
      </section>

      <section className="max-w-xl mx-auto">
        <Card className="border border-border">
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Button asChild>
                <a href="mailto:andy.kim.22@gmail.com">Email me</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/resume">View resume</Link>
              </Button>
            </div>
            <Separator />
            <div className="text-sm text-muted-foreground">
              Prefer DM? Include a link you’d like me to use.
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
