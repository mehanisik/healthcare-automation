'use client';

import {
  BarChart3,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  LineChart,
  Shield,
  Stethoscope,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import SectionContainer from './section-container';

export default function Features() {
  return (
    <SectionContainer id="services">
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">

        <Card className="group relative shadow-zinc-950/5 lg:col-span-3 bg-gradient-to-br from-background to-muted/90">
          <CardHeader className="p-3 md:p-4">
            <div className="flex items-center gap-2 text-primary">
              <BarChart3 className="h-4 w-4 md:h-5 md:w-5" />
              <h3 className="text-lg md:text-xl font-semibold">Core Features</h3>
            </div>
            <p className="mt-1 text-sm ">
              Comprehensive solutions for modern healthcare practices
            </p>
          </CardHeader>
          <CardContent className="p-3 md:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 text-sm">
              {[
                {
                  icon: <LineChart className="h-4 w-4 md:h-5 md:w-5" />,
                  title: 'Practice Growth',
                  desc: 'Strategic solutions to help your practice expand and thrive.',
                },
                {
                  icon: <Users className="h-4 w-4 md:h-5 md:w-5" />,
                  title: 'Patient Experience',
                  desc: 'Enhanced patient engagement and satisfaction tools.',
                },
                {
                  icon: <Stethoscope className="h-4 w-4 md:h-5 md:w-5" />,
                  title: 'Care Delivery',
                  desc: 'Streamlined care coordination and management.',
                },
                {
                  icon: <BarChart3 className="h-4 w-4 md:h-5 md:w-5" />,
                  title: 'Data & Insights',
                  desc: 'Actionable analytics and reporting for informed decisions.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="p-3 md:p-4 rounded-lg bg-muted/90 hover:bg-muted/70 transition-colors">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    {icon}
                    <h4 className="font-medium">{title}</h4>
                  </div>
                  <p className="">{desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="group overflow-hidden shadow-zinc-950/5 md:grid-cols-2 lg:col-span-3 bg-gradient-to-br from-background to-muted/90">
          <div className="p-2 md:p-3">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" />
              <h3 className="text-base md:text-lg font-semibold">A simpler way for financial well-being</h3>
            </div>
            <div className="space-y-1.5 md:space-y-2 text-sm">
              {[
                {
                  icon: <Clock />,
                  title: 'Smooth out your billing operations',
                  desc: 'Frictionless billing operations help your practice optimize workflows, automate mundane tasks, and go paperless.',
                },
                {
                  icon: <DollarSign />,
                  title: 'Collect more revenue, faster',
                  desc: 'Improve and simplify payment collection to reduce pain points for office staff and patients alike.',
                },
                {
                  icon: <Shield />,
                  title: 'Reduce insurance complexities',
                  desc: 'Efficiently manage patient insurance eligibility and claims. Eliminate uncollectible revenue caused by invalid or insufficient insurance benefits.',
                },
                {
                  icon: <Clock />,
                  title: 'Saving time is saving money',
                  desc: 'Streamline invoicing and online payments to reduce the time your front desk spends on manual data entry.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="p-2 md:p-3 rounded-lg bg-muted/90 hover:bg-muted/70 transition-colors">
                  <div className="flex items-center gap-2 text-accent mb-1">
                    {icon}
                    <h4 className="font-medium">{title}</h4>
                  </div>
                  <p className="text-xs ">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="group p-4 md:p-6 shadow-zinc-950/5 md:col-span-2 lg:col-span-6 bg-gradient-to-br from-background to-muted/90 rounded-xl">
          <div className="flex items-center gap-3 text-primary mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <CreditCard className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold">Billing & Payments Modules</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              { icon: <Calendar />, title: 'Practice Management', desc: 'KPI tracking, patient records, and scheduling.' },
              { icon: <Shield />, title: 'Insurance Eligibility', desc: 'Electronic eligibility verification.' },
              { icon: <FileText />, title: 'Claims Management', desc: 'Electronic claims with ERA processing.' },
              { icon: <DollarSign />, title: 'Patient Payments', desc: 'Automated payment collection.' },
              { icon: <FileText />, title: 'Patient Statements', desc: 'Automated billing via multiple channels.' },
              { icon: <Bot />, title: 'RPA Integration', desc: 'Intelligent automation for the revenue cycle.' },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group/item p-4 rounded-xl bg-muted/90 hover:bg-muted/70 transition-all duration-300 hover:shadow-md border border-border/50 hover:border-border"
              >
                <div className="flex items-center gap-3 text-accent mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover/item:bg-accent/20 transition-colors">
                    {icon}
                  </div>
                  <h4 className="font-medium text-sm md:text-base">{title}</h4>
                </div>
                <p className="text-xs md:text-sm  line-clamp-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}
