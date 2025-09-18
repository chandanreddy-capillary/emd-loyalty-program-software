// src/components/FoodBeverageLoyaltyPage.tsx
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
  Coffee,
  ShoppingCart,
  Gift,
  Star,
  Users,
  TrendingUp,
  Globe,
  Heart,
  Percent,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Food & Beverage Loyalty Page
 * Matches style of other industry components: hero → why → features → use-cases → stats → FAQ → CTA
 * Drop into src/components and create a page wrapper under src/pages as you do for other industries.
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

export default function FoodBeverageLoyaltyPage(): JSX.Element {
  useScrollAnimation();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 px-3 py-1 bg-amber-50 text-amber-700">Food & Beverage</Badge>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="text-amber-600">Food & Beverage Loyalty Solutions</span>
              <br />
              <span className="text-2xl lg:text-3xl font-bold text-gray-800">
                Turn one-time diners into frequent, loyal customers
              </span>
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Mobile-first loyalty and promotions for restaurants, cafes, and QSRs — simple
              earning, fast redemptions, and targeted offers that boost visit frequency and
              average order value.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
              <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-[420px] max-w-full rounded-2xl border p-6" style={{ borderColor: "#F2EDE8" }}>
              <div className="h-64 rounded-lg bg-amber-50 flex items-center justify-center text-amber-400">
                In-app ordering & rewards mockup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why F&B brands win with loyalty</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Frequent Purchase Cadence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Meals and drinks are repeat by nature — loyalty turns occasional customers into regulars.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Mobile & Delivery Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Integrate loyalty into ordering, delivery and POS for a frictionless experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Simple, Valuable Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clear, easy-to-understand rewards (free item, discount, or delivery credit) drive adoption.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Key features for food & beverage</h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              Icon={Coffee}
              title="Digital Punchcards & Visit Rewards"
              desc="Quick to understand mechanics that reward repeat visits — perfect for cafes and quick-service."
            />
            <FeatureCard
              Icon={ShoppingCart}
              title="Order & Delivery Integration"
              desc="Earn and redeem points directly in app or at checkout across delivery partners and POS."
            />
            <FeatureCard
              Icon={Gift}
              title="Personalized Offers"
              desc="Targeted freebies and discounts based on past orders, time of day, and customer preferences."
            />
            <FeatureCard
              Icon={Percent}
              title="Happy-hour & Time-based Boosts"
              desc="Drive visits in off-peak hours with time-limited multipliers and discounts."
            />
            <FeatureCard
              Icon={Star}
              title="VIP Tiers & Member Perks"
              desc="Exclusive menu items, priority pickup, or free delivery for higher-tier members."
            />
            <FeatureCard
              Icon={Globe}
              title="Partner Promotions & Merchant-funded Offers"
              desc="Expand value with local partnerships, brand tie-ins, and sponsored rewards."
            />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Use cases & campaigns</h3>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Drive first orders with bonus points or free delivery on signup.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequency Boost</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reward customers after X visits to build habitual behavior and increase LTV.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Referral & Social Promotions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Acquire new diners by rewarding members for referrals and social shares.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof points / stats */}
      <section className="py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
          <div>
            <div className="text-3xl font-bold">30%</div>
            <p className="text-sm text-slate-600">Increase in reorder frequency</p>
          </div>
          <div>
            <div className="text-3xl font-bold">20%+</div>
            <p className="text-sm text-slate-600">Average order value uplift</p>
          </div>
          <div>
            <div className="text-3xl font-bold">90%</div>
            <p className="text-sm text-slate-600">Positive ROI for top programs</p>
          </div>
          <div>
            <div className="text-3xl font-bold">Omnichannel</div>
            <p className="text-sm text-slate-600">Web, app, in-store & delivery</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-6">Frequently asked questions</h3>

        <Accordion type="single" collapsible>
          <AccordionItem value="signup">
            <AccordionTrigger>How do customers sign up?</AccordionTrigger>
            <AccordionContent>
              Sign-up can be in-app, via web, or at POS — email + phone-based signup works well for omnichannel tracking.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="redemption">
            <AccordionTrigger>What are simple but effective rewards?</AccordionTrigger>
            <AccordionContent>
              Free item after N visits, delivery credit, or a % discount on next order are easy to understand and effective.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="integration">
            <AccordionTrigger>Can this work with third-party delivery partners?</AccordionTrigger>
            <AccordionContent>
              Yes — our platform supports partner integrations and POS hooks so points can be earned and redeemed via delivery apps and in-store.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-slate-50">
        <h3 className="text-3xl font-semibold mb-4">Ready to increase visit frequency and AOV?</h3>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Talk to our F&B team to design a simple, high-impact loyalty program for your restaurants or cafe chain.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
          <Button variant="ghost" className="rounded-full px-6 py-3">Request a Demo</Button>
        </div>
      </section>
    </main>
  );
}
