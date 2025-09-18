// src/components/TelecomLoyaltyPage.tsx
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
  Globe,
  Shield,
  TrendingUp,
  Gift,
  Users,
  Wifi,
  Smartphone,
  Award,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * TelecomLoyaltyPage.tsx
 * Drop into src/components. Follow the same pattern as other industry pages.
 */

const FeatureCard = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <Card className="p-6 h-full flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-50 text-teal-600">
      <Icon className="h-6 w-6" />
    </div>
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-sm text-slate-600">{desc}</p>
  </Card>
);

export default function TelecomLoyaltyPage(): JSX.Element {
  useScrollAnimation();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 px-3 py-1 bg-indigo-50 text-indigo-700">Telecom & Connectivity</Badge>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="text-teal-500">Telecom Loyalty Solutions</span>
              <br />
              <span className="text-2xl lg:text-3xl font-bold text-gray-800">
                Reduce churn, increase ARPU, and keep customers on your network
              </span>
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Loyalty designed for operators: tiered rewards, device upgrade programs, usage-based offers,
              and partner redemptions — all integrated with billing and OSS/BSS systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
              <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-[420px] max-w-full rounded-2xl border p-6" style={{ borderColor: "#EEF6FF" }}>
              <div className="h-64 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-400">
                Operator rewards dashboard mockup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why telecom loyalty */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why loyalty works for operators</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Churn Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reward tenure, usage patterns and bundle adoption to keep customers from switching.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Higher ARPU via upsell</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Incentivize upgrades to premium plans, add-ons, and partner services using targeted offers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Device & Upgrade Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Points for trade-ins and upgrade credits keep customers buying devices through your channel.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Key features for telecom loyalty</h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              Icon={Users}
              title="Tiered Subscriber Programs"
              desc="Configure tiers by tenure, ARPU or bundle adoption and surface tier-specific perks."
            />
            <FeatureCard
              Icon={Smartphone}
              title="Device Upgrade & Trade-in"
              desc="Automate upgrade credits and trade-in workflows to increase device sales and reduce churn."
            />
            <FeatureCard
              Icon={Wifi}
              title="Usage-based Rewards"
              desc="Bonus data, roaming credits, or free streaming for targeted usage behaviors and campaigns."
            />
            <FeatureCard
              Icon={Globe}
              title="Partner Redemptions"
              desc="Redeem points for streaming, gaming, retail vouchers and travel — expand value without inventory risk."
            />
            <FeatureCard
              Icon={Shield}
              title="Billing-safe Integrations"
              desc="Pre-built connectors and mediation for OSS/BSS and billing systems to ensure accurate rewards reconciliation."
            />
            <FeatureCard
              Icon={TrendingUp}
              title="Personalization & Retention Analytics"
              desc="Predictive models to identify churn risk and trigger retention offers with measurable ROI tracking."
            />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Operator use cases</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Welcome & Onboarding Boost</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Immediate points or bonus data for new subscribers to increase engagement and first-month retention.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Roaming & Travel Packs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Offer temporary roaming credits or partner travel benefits as redemption options for frequent travelers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loyalty-as-ARPU</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Convert loyalty incentives into measurable ARPU uplifts through targeted upsell campaigns.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics / proof points */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
          <div>
            <div className="text-3xl font-bold">30%</div>
            <p className="text-sm text-slate-600">Reduced churn in targeted cohorts</p>
          </div>
          <div>
            <div className="text-3xl font-bold">25%+</div>
            <p className="text-sm text-slate-600">ARPU uplift from campaigned subscribers</p>
          </div>
          <div>
            <div className="text-3xl font-bold">Device</div>
            <p className="text-sm text-slate-600">Upgrade & trade-in workflows</p>
          </div>
          <div>
            <div className="text-3xl font-bold">API-first</div>
            <p className="text-sm text-slate-600">Integrates with OSS/BSS and billing systems</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-6">Frequently asked questions</h3>

        <Accordion type="single" collapsible>
          <AccordionItem value="integration">
            <AccordionTrigger>How does integration with billing work?</AccordionTrigger>
            <AccordionContent>
              We provide mediation connectors and billing-safe APIs to ensure points and credits reconcile with your OSS/BSS and billing flow.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="device">
            <AccordionTrigger>Can this handle device trade-ins and upgrades?</AccordionTrigger>
            <AccordionContent>
              Yes — configure upgrade credit rules, trade-in valuations, and automated device lifecycle offers within the platform.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="partners">
            <AccordionTrigger>Can we offer streaming and gaming redemptions?</AccordionTrigger>
            <AccordionContent>
              Absolutely — partner redemptions are supported through secure integrations and coupon/entitlement delivery flows.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-slate-50">
        <h3 className="text-3xl font-semibold mb-4">Ready to reduce churn and grow ARPU?</h3>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Talk to our telecom experts to design subscriber loyalty programs that are secure, measurable, and integrated with your operations.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
          <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
        </div>
      </section>
    </main>
  );
}
