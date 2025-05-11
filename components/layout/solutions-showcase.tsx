import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Building, FileCheck, FileText, LineChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionContainer from './section-container';

const services = [
  {
    id: 'medical-billing',
    title: 'Medical Billing & Coding',
    description:
      'Comprehensive billing services for healthcare providers, ensuring accurate claims processing, faster reimbursements, and reduced denials.',
    icon: FileText,
  },
  {
    id: 'practice-management',
    title: 'Practice Management',
    description:
      'End-to-end support for managing medical practices, optimizing scheduling, patient flow, and administrative tasks.',
    icon: Building,
  },
  {
    id: 'business-strategy',
    title: 'Business Strategy',
    description:
      'Strategic planning to grow and optimize your practice with actionable recommendations to improve efficiency and profitability.',
    icon: LineChart,
  },
  {
    id: 'practice-setup',
    title: 'Practice Setup & Contracting',
    description:
      'Guidance in setting up your medical practice and establishing contracts with payors, ensuring you get the best possible terms.',
    icon: FileCheck,
  },
];

export default function SolutionsShowcase() {
  return (
    <SectionContainer id="about">
      <div className="flex flex-col gap-12">
        <div className="lg:max-w-sm space-y-6">
          <h2 className="text-2xl font-semibold md:text-3xl">Healthcare Solutions</h2>
          <p className="text-muted-foreground lg:text-lg">
            Girit Consulting offers advice and support for every process and need for your practice – from short-term
            needs to long-term projects.
          </p>
          <Link href="/contact" className="group flex items-center text-sm font-medium md:text-base lg:text-lg">
            Book a demo
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Medical Billing & Coding"
                className="aspect-[16/9] h-full w-full object-cover object-center"
                width={600}
                height={600}
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <h3 className="text-lg font-semibold md:text-2xl mb-4">Medical Billing & Coding</h3>
              <p className="text-muted-foreground lg:text-lg">
                Our advanced medical billing system ensures accurate claims processing, faster reimbursements, and
                reduced denials, helping your practice maximize revenue. We handle both in-network and out-of-network
                billing with expertise.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <h3 className="text-lg font-semibold md:text-2xl mb-4">Practice Management</h3>
              <p className="text-muted-foreground lg:text-lg">
                Streamline your practice operations with our comprehensive management tools designed to optimize
                scheduling, patient flow, and administrative tasks. We provide end-to-end support for managing all
                aspects of your medical practice.
              </p>
            </div>
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Practice Management"
                className="aspect-[16/9] h-full w-full object-cover object-center"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.slice(2).map(service => (
            <Card key={service.id}>
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Appeals & Payor Negotiations</h3>
              <p className="text-muted-foreground">
                Expert assistance with appeals and negotiating with payors to ensure you receive proper reimbursement
                for services provided. We fight for every dollar your practice deserves.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Out of Network Billing</h3>
              <p className="text-muted-foreground">
                Specialized help with billing outside of insurance networks to maximize reimbursement and minimize
                patient frustration. We navigate the complexities of out-of-network claims.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
