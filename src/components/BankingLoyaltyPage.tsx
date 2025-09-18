// src/components/BankingLoyaltyPage.tsx
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Shield,
  TrendingUp,
  Award,
  Users,
  BarChart3,
  Globe,
  CreditCard,
  Building2,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Feature = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <Card className="p-6 h-full flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
    <Icon className="w-10 h-10 text-teal-500 mb-3" />
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-sm text-slate-600">{desc}</p>
  </Card>
);

export default function BankingLoyaltyPage(): JSX.Element {
  useScrollAnimation();

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 px-3 py-1 bg-teal-100 text-teal-700">
            Enterprise Banking Loyalty
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-teal-500">Banking Loyalty Solutions</span>
            <br />
            <span className="text-2xl lg:text-3xl font-bold text-gray-800">
              Reward Relationships. Drive Deposits. Increase Share of Wallet.
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Build deeper customer relationships with flexible, secure, and
            AI-driven loyalty programs. Deliver value through points, cashback,
            premium tiers, and partner ecosystems—all while ensuring compliance
            and data security.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
            <Button variant="ghost" className="rounded-full px-6 py-3">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Features for Banking Loyalty
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={Award}
              title="Tiered Relationship Rewards"
              desc="Segment customers by deposits or product mix and reward them with exclusive perks and fee waivers."
            />
            <Feature
              icon={CreditCard}
              title="Card & Payment Integration"
              desc="Native support for credit/debit card transactions, co-branded cards, and instant point accrual."
            />
            <Feature
              icon={TrendingUp}
              title="AI-Driven Personalization"
              desc="Predictive analytics to deliver targeted offers and bonuses that match spending habits and life stages."
            />
            <Feature
              icon={Globe}
              title="Partner Ecosystem"
              desc="Seamless API integrations with travel, retail, and lifestyle partners to expand redemption options."
            />
            <Feature
              icon={Shield}
              title="Compliance & Security"
              desc="Built-in controls, audit trails, and data protection for regulated financial environments."
            />
            <Feature
              icon={BarChart3}
              title="Advanced Analytics"
              desc="Real-time dashboards to monitor retention, cross-sell, and customer lifetime value growth."
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Use Cases
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Premium Relationship Tiers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Provide VIP treatment and concierge services to top-tier
                  clients, encouraging high-value retention.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Spend-Based Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Boost credit card activation and spend with targeted category
                  multipliers like dining or travel.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cross-Sell Incentives</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Encourage customers to adopt multiple products—mortgages,
                  savings, investments—through tailored rewards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
          <div>
            <div className="text-3xl font-bold">60%</div>
            <p className="text-sm text-slate-600">Improved retention rates</p>
          </div>
          <div>
            <div className="text-3xl font-bold">40%+</div>
            <p className="text-sm text-slate-600">Increase in cross-sell</p>
          </div>
          <div>
            <div className="text-3xl font-bold">99.99%</div>
            <p className="text-sm text-slate-600">System uptime</p>
          </div>
          <div>
            <div className="text-3xl font-bold">API-first</div>
            <p className="text-sm text-slate-600">Easily integrates with core banking</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="what">
            <AccordionTrigger>
              What is a banking loyalty program?
            </AccordionTrigger>
            <AccordionContent>
              A system that rewards customers for their overall relationship,
              deposits, card usage, and engagement—driving retention and
              cross-sell opportunities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="benefits">
            <AccordionTrigger>
              How does loyalty increase deposit growth?
            </AccordionTrigger>
            <AccordionContent>
              Tiered rewards and exclusive benefits encourage customers to
              consolidate funds and remain long-term clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="integration">
            <AccordionTrigger>
              Can this integrate with our existing core banking system?
            </AccordionTrigger>
            <AccordionContent>
              Yes—our API-first architecture integrates seamlessly with leading
              core banking and payment systems.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center bg-slate-50">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Build Loyalty That Lasts?
        </h2>
        <p className="text-slate-600 mb-8">
          Empower your bank with a flexible, secure, and personalized loyalty
          program that drives meaningful customer relationships.
        </p>
        <Button className="rounded-full px-6 py-3">Talk to Our Experts</Button>
      </section>
    </main>
  );
}
