// src/components/HealthWellnessLoyaltyPage.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Heart,
  Users,
  Gift,
  TrendingUp,
  Brain,
  Globe,
  Shield,
  Activity,
  Percent,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Health & Wellness Loyalty Page
 * Drop into src/components and create a wrapper page in src/pages as per your pattern.
 */

const FeatureCard = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <Card className="p-6 h-full flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-50 text-teal-600">
      <Icon className="h-6 w-6" />
    </div>
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-sm text-slate-600">{desc}</p>
  </Card>
);

export default function HealthWellnessLoyaltyPage(): JSX.Element {
  useScrollAnimation();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 px-3 py-1 bg-green-50 text-green-700">Health & Wellness</Badge>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="text-teal-500">Health & Wellness Loyalty</span>
              <br />
              <span className="text-2xl lg:text-3xl font-bold text-gray-800">
                Reward healthier choices. Increase engagement. Improve outcomes.
              </span>
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Build loyalty programs that align with wellbeing — activity rewards, preventive care incentives,
              subscriptions, and partner offers that drive repeat engagement and deepen the customer relationship.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
              <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-[420px] max-w-full rounded-2xl border p-6" style={{ borderColor: "#E6F6F0" }}>
              <div className="h-64 rounded-lg bg-green-50 flex items-center justify-center text-green-400">
                Wellness experience mockup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why wellness-focused loyalty works</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Encourage Preventive Behavior</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rewards for checkups, vaccinations, or wellness milestones increase engagement and can lower long-term costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Drive Habit & Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Activity-based rewards (classes, step goals) and subscription perks build habit and recurring revenue.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Position as a Health Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Walgreens, pharmacies and wellness brands improve perception by linking loyalty to tangible health benefits.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Key features for health & wellness programs</h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              Icon={Activity}
              title="Activity & Habit Rewards"
              desc="Reward healthy behaviors — class attendance, workouts, step targets, and habit streaks that increase engagement."
            />
            <FeatureCard
              Icon={Gift}
              title="Preventive Care Incentives"
              desc="Offer points or discounts for check-ups, vaccinations, screenings, and pharmacy refills to drive preventive action."
            />
            <FeatureCard
              Icon={Percent}
              title="Subscription & Replenishment Perks"
              desc="Bundle supplements or wellness subscriptions with loyalty benefits to lock in recurring revenue."
            />
            <FeatureCard
              Icon={Brain}
              title="Personalized Journeys"
              desc="Adapt incentives to user goals (weight, sleep, mental fitness) using data-driven personalization."
            />
            <FeatureCard
              Icon={Globe}
              title="Partner Ecosystem"
              desc="Integrate gyms, telehealth, spas, and wellness brands to expand meaningful redemption options."
            />
            <FeatureCard
              Icon={Shield}
              title="Privacy & Compliance"
              desc="Built with privacy-first design and secure integrations — essential when dealing with health-related data."
            />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Use cases & program ideas</h3>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Wellness Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seasonal or monthly challenges with badges, points and physical or digital rewards to boost participation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pharmacy Replenishment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Points and discounts for on-time prescription refills and wellness purchases to improve adherence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Telehealth & Coaching Credits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reward members with telehealth credits or coaching sessions as part of higher-tier benefits.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats / proof points */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
          <div>
            <div className="text-3xl font-bold">+62%</div>
            <p className="text-sm text-slate-600">Activation uplift on wellness campaigns (sample programs)</p>
          </div>
          <div>
            <div className="text-3xl font-bold">7x</div>
            <p className="text-sm text-slate-600">Retention improvements in targeted preventive programs (reported examples)</p>
          </div>
          <div>
            <div className="text-3xl font-bold">66%</div>
            <p className="text-sm text-slate-600">Consumers view brands more positively when wellness rewards offered</p>
          </div>
          <div>
            <div className="text-3xl font-bold">Privacy-first</div>
            <p className="text-sm text-slate-600">Built to integrate with health platforms and compliance workflows</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-6">Frequently asked questions</h3>

        <Accordion type="single" collapsible>
          <AccordionItem value="signup">
            <AccordionTrigger>How do customers enroll?</AccordionTrigger>
            <AccordionContent>
              Enrollment is flexible — in-app, web, at POS or during a clinical/retail interaction. Phone and email identifiers help connect accounts across touchpoints.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="privacy">
            <AccordionTrigger>How is health data handled?</AccordionTrigger>
            <AccordionContent>
              Health-related program data is handled with strict privacy controls and only stored/shared with explicit consent. Integrations are designed to meet privacy and regulatory needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="partners">
            <AccordionTrigger>Can this integrate with fitness apps and telehealth?</AccordionTrigger>
            <AccordionContent>
              Yes — our API-first approach supports integrations with fitness trackers, telehealth providers and third-party wellness platforms for validated activity and credits.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-slate-50">
        <h3 className="text-3xl font-semibold mb-4">Ready to reward healthier choices?</h3>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Talk to our health & wellness team to design a program that improves engagement, retention and outcomes.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
          <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
        </div>
      </section>
    </main>
  );
}
