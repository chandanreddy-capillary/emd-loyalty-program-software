// src/components/FashionLoyaltyPage.tsx
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
  ShoppingBag,
  Star,
  Gift,
  Users,
  Globe,
  TrendingUp,
  Heart,
  Award,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Feature = ({
  Icon,
  title,
  desc,
}: {
  Icon: any;
  title: string;
  desc: string;
}) => (
  <Card className="p-6 h-full flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-50 text-teal-600">
      <Icon className="h-6 w-6" />
    </div>
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-sm text-slate-600">{desc}</p>
  </Card>
);

export default function FashionLoyaltyPage(): JSX.Element {
  useScrollAnimation();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-4 px-3 py-1 bg-teal-100 text-teal-700">Fashion & Apparel</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-teal-500">Fashion Loyalty Solutions</span>
            <br />
            <span className="text-2xl lg:text-3xl font-bold text-gray-800">
              Create brand love beyond the runway
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Engage fashion-conscious shoppers with rewards that go beyond discounts: early access to
            collections, style challenges, VIP events, and sustainability-driven perks.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
            <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
          </div>
        </div>
      </section>

      {/* Why Fashion Loyalty */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why loyalty is vital for fashion retailers
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>High Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Loyalty differentiates your brand in a crowded market and keeps shoppers coming
                  back season after season.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Short Product Lifecycles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Exclusive previews and limited drops ensure your most loyal customers buy first.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sustainability Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reward eco-friendly behavior like clothing recycling to appeal to conscious
                  consumers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Key Features for Fashion Loyalty</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              Icon={Star}
              title="VIP Tiers & Early Access"
              desc="Offer members early shopping windows and limited-edition previews to drive excitement and urgency."
            />
            <Feature
              Icon={Gift}
              title="Exclusive Events & Perks"
              desc="Invite top-tier customers to fashion shows, styling sessions, and launch parties."
            />
            <Feature
              Icon={Heart}
              title="Sustainability Rewards"
              desc="Encourage recycling or donations by rewarding eco-conscious behaviors."
            />
            <Feature
              Icon={Users}
              title="Community Challenges"
              desc="Run style challenges and incentivize user-generated content to boost brand advocacy."
            />
            <Feature
              Icon={TrendingUp}
              title="Personalized Offers"
              desc="Use purchase data and browsing behavior to suggest looks and recommend products."
            />
            <Feature
              Icon={Globe}
              title="Omnichannel Integration"
              desc="Ensure consistent experiences across eCommerce, mobile, and in-store boutiques."
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Fashion Use Cases</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Limited Drop Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reward loyal shoppers with first access to exclusive collections and collaborations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Referral Bonuses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Incentivize customers to invite friends and expand your brand community.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Eco-Incentive Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Offer points or discounts when customers recycle clothes or choose sustainable
                  options.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
          <div>
            <div className="text-3xl font-bold">65%</div>
            <p className="text-sm text-slate-600">Sales from loyalty members</p>
          </div>
          <div>
            <div className="text-3xl font-bold">2.5x</div>
            <p className="text-sm text-slate-600">Higher repeat purchase rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold">+40%</div>
            <p className="text-sm text-slate-600">AOV uplift among VIP tiers</p>
          </div>
          <div>
            <div className="text-3xl font-bold">Omnichannel</div>
            <p className="text-sm text-slate-600">Seamless online & offline experience</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>What types of rewards work best in fashion?</AccordionTrigger>
            <AccordionContent>
              VIP access, limited-edition drops, styling services, referral bonuses, and
              sustainability rewards.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>Can loyalty drive in-store and online sales?</AccordionTrigger>
            <AccordionContent>
              Yes—integrating loyalty across channels ensures consistent experiences and encourages
              omnichannel purchasing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>How do I keep members engaged between seasons?</AccordionTrigger>
            <AccordionContent>
              Use style challenges, content sharing incentives, and personalized recommendations to
              maintain engagement year-round.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to build stronger relationships with fashion shoppers?
          </h3>
          <p className="text-slate-600 mb-6">
            Let our loyalty experts help you design a program that elevates your brand and drives
            sustainable growth.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
            <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
