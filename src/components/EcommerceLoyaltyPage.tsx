// src/components/EcommerceLoyaltyPage.tsx
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
  Gift,
  Star,
  Users,
  Target,
  TrendingUp,
  Brain,
  Globe,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Feature = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <Card className="p-6 h-full flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-50 text-teal-600">
      <Icon className="h-6 w-6" />
    </div>
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-sm text-slate-600">{desc}</p>
  </Card>
);

export default function EcommerceLoyaltyPage(): JSX.Element {
  useScrollAnimation();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-4 px-3 py-1 bg-teal-100 text-teal-700">eCommerce</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-teal-500">eCommerce Loyalty Solutions</span>
            <br />
            <span className="text-2xl lg:text-3xl font-bold text-gray-800">
              Turn shoppers into lifelong brand advocates
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Drive retention, repeat purchases, and higher AOV with flexible points programs,
            VIP tiers, and personalized offers built for modern online retailers.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
            <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
          </div>
        </div>
      </section>

      {/* Why eCommerce loyalty */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why loyalty programs matter for eCommerce
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Boost Repeat Purchases</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Loyal customers spend 67% more than new customers, making loyalty critical for
                  revenue growth.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reduce Churn</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Personalized offers and tiered rewards reduce attrition and increase lifetime value.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Increase Customer Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Referral bonuses and gamified challenges turn happy customers into brand
                  promoters.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Key Features for eCommerce Loyalty</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              Icon={Star}
              title="Flexible Points & Tiers"
              desc="Configure points, cashback, and VIP levels to reward frequent shoppers and big spenders."
            />
            <Feature
              Icon={Gift}
              title="Personalized Offers"
              desc="Leverage AI and behavioral data to deliver targeted promotions and recommendations."
            />
            <Feature
              Icon={ShoppingBag}
              title="Omnichannel Integration"
              desc="Sync online, mobile, and in-store channels for a seamless experience."
            />
            <Feature
              Icon={TrendingUp}
              title="Gamification & Challenges"
              desc="Spin-to-win, streaks, or missions encourage engagement and repeat visits."
            />
            <Feature
              Icon={Users}
              title="Referral Programs"
              desc="Reward customers who bring friends and amplify word-of-mouth growth."
            />
            <Feature
              Icon={Globe}
              title="Global Partner Ecosystem"
              desc="Integrate with marketplaces, logistics, and lifestyle partners to expand reach."
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">eCommerce Use Cases</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Loyalty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Offer free shipping, exclusive discounts, or early access to build habit and
                  reduce churn.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Abandoned Cart Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Incentivize completing purchases with bonus points or personalized offers.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Seasonal Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Run themed promotions and limited-time multipliers to boost engagement and
                  seasonal sales.
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
            <div className="text-3xl font-bold">80%</div>
            <p className="text-sm text-slate-600">Revenue from loyalty members</p>
          </div>
          <div>
            <div className="text-3xl font-bold">2x</div>
            <p className="text-sm text-slate-600">Repeat purchase frequency</p>
          </div>
          <div>
            <div className="text-3xl font-bold">+30%</div>
            <p className="text-sm text-slate-600">Higher AOV for members</p>
          </div>
          <div>
            <div className="text-3xl font-bold">Global</div>
            <p className="text-sm text-slate-600">Omnichannel coverage</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>Which rewards work best for eCommerce?</AccordionTrigger>
            <AccordionContent>
              Points with flexible redemption, cashback, free shipping, early access to products,
              and exclusive sales are most effective.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>How can loyalty reduce abandoned carts?</AccordionTrigger>
            <AccordionContent>
              Trigger bonus points or personalized offers to encourage completion of stalled
              purchases.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>Can loyalty integrate with my existing shop platform?</AccordionTrigger>
            <AccordionContent>
              Yes—our API-first approach integrates easily with Shopify, Magento, BigCommerce, and
              custom storefronts.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to boost repeat purchases and customer lifetime value?
          </h3>
          <p className="text-slate-600 mb-6">
            Let our eCommerce experts help you design a loyalty strategy that fits your growth
            goals.
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
