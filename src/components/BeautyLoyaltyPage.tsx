// src/components/BeautyLoyaltyPage.tsx
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
  Gift,
  Star,
  Users,
  Target,
  ShoppingBag,
  Brain,
  Award,
  Heart,
  Globe,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Feature = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <Card className="p-6 h-full flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-50 text-teal-600">
      <Icon className="h-6 w-6" />
    </div>
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-sm text-slate-600">{desc}</p>
  </Card>
);

export default function BeautyLoyaltyPage(): JSX.Element {
  useScrollAnimation();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 px-3 py-1 bg-pink-50 text-pink-700">Beauty & Cosmetics</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-pink-600">Beauty Loyalty Solutions</span>
                <br />
                <span className="text-2xl lg:text-3xl font-bold text-gray-800">
                  Turn routine purchases into lifelong relationships
                </span>
              </h1>

              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                Tailored loyalty for beauty brands — points, VIP tiers, sample-driven experiences,
                subscription bundles and community incentives that increase purchase frequency and
                grow average order value.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
                <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-[420px] max-w-full rounded-2xl border p-6" style={{ borderColor: "#E6ECF2" }}>
                <div className="h-64 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                  Product + Rewards mockup
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why loyalty works in beauty */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why beauty brands win with loyalty</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <CardHeader>
                <CardTitle>High repeat purchase cadence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cosmetics & personal care products are consumable — loyalty programs capture that recurring demand
                  and make repurchase habitual.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Sampling & experiences increase conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Samples, early access, and exclusive experiences create strong emotional attachments that drive CLV.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Community & content drive advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reviews, UGC, tutorials and community tools amplify reach and retention when woven into loyalty mechanics.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Key features for beauty & cosmetics</h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              Icon={Star}
              title="Points & VIP Tiers"
              desc="Flexible points model with tiered VIP benefits, exclusive product drops and birthday rewards."
            />
            <Feature
              Icon={Gift}
              title="Sampling & Discovery"
              desc="Automated sample campaigns and discovery boxes to drive trial and increase conversion on full-size SKUs."
            />
            <Feature
              Icon={Users}
              title="Community & UGC Boost"
              desc="Incentivize reviews, tutorials and social sharing to build trust and organic reach through member activity."
            />
            <Feature
              Icon={ShoppingBag}
              title="Subscription & Replenishment"
              desc="Integrate subscriptions and auto-replenishment with loyalty incentives to reduce churn and increase AOV."
            />
            <Feature
              Icon={Brain}
              title="Personalized Offers"
              desc="AI-driven product recommendations and dynamic offers based on usage, preferences, and past behavior."
            />
            <Feature
              Icon={Globe}
              title="Partner Promotions"
              desc="Collaborate with lifestyle and retail partners for cross-promotions and expanded redemption catalogs."
            />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Beauty-specific use cases</h3>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>VIP Sampling Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deliver curated sample packs to high-value members to drive trial and upgrade to full-size purchases.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Referral & Influencer Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reward referrals and creator-driven promo codes to convert influencer audiences into long-term members.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscription Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Add loyalty boosters (bonus points, exclusive gifts) for subscribers and recurring purchasers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
          <div>
            <div className="text-3xl font-bold">80%+</div>
            <p className="text-sm text-slate-600">Revenue from members (category leaders)</p>
          </div>
          <div>
            <div className="text-3xl font-bold">72%</div>
            <p className="text-sm text-slate-600">Members buy more often (industry average uplift)</p>
          </div>
          <div>
            <div className="text-3xl font-bold">30%+</div>
            <p className="text-sm text-slate-600">Higher AOV with subscriptions & bundles</p>
          </div>
          <div>
            <div className="text-3xl font-bold">Omnichannel</div>
            <p className="text-sm text-slate-600">Mobile, in-store, web & social integrated</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-6">Frequently asked questions</h3>

        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>What types of rewards work best for beauty brands?</AccordionTrigger>
            <AccordionContent>
              Points, VIP tiers, sample boxes, early access, and experiential rewards (events or masterclasses) are particularly effective.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="2">
            <AccordionTrigger>Can loyalty drive subscriptions?</AccordionTrigger>
            <AccordionContent>
              Yes — combining subscription discounts, bonus points and exclusive gifts makes recurring purchases more attractive.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="3">
            <AccordionTrigger>How do I measure success?</AccordionTrigger>
            <AccordionContent>
              Track repeat purchase rate, member AOV, retention cohorts, referral conversion and campaign ROI.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Ready to grow repeat purchase and brand love?</h3>
          <p className="text-slate-600 mb-6">Talk to our beauty team to design a loyalty program that fits your product lifecycle and community strategy.</p>
          <div className="flex justify-center gap-4">
            <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
            <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
