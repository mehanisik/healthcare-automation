'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import SectionContainer from './section-container';
import { Card } from './ui/card';

const solutions = [
  {
    key: 'billing',
    title: 'Medical Billing & Coding',
    description:
      'We ensure accurate medical coding and timely billing submissions, minimizing claim denials and maximizing reimbursements. Includes both in-network and out-of-network billing expertise.',
    bg: '/blue.svg',
    img: '/medical-billing.jpg',
    imgAlt: 'Medical Billing & Coding',
    color: '#E3F2FD',
    tags: ['Billing', 'Coding', 'Reimbursements'],
  },
  {
    key: 'appeals',
    title: 'Appeals & Payor Negotiations',
    description:
      'We handle claim denials and underpayments by managing appeals and negotiating directly with insurance payors—ensuring your practice receives what it deserves.',
    img: '/negotiations.jpg',
    imgAlt: 'Appeals and Payor Negotiations',
    tags: ['Appeals', 'Negotiations', 'Payors'],
  },
  {
    key: 'management',
    title: 'Practice Management & Setup',
    description:
      'Whether you\'re launching a new practice or optimizing an existing one, we support you with systems setup, staff training, scheduling, credentialing, and administrative workflows.',
    img: '/practice-management.jpg',
    imgAlt: 'Practice Management and Setup',
    tags: ['Management', 'Setup', 'Workflows'],
  },
  {
    key: 'strategy',
    title: 'Business Strategy & Payor Contracting',
    description:
      'We help you develop a profitable business model and assist with payor contract negotiations to ensure your services are properly valued and reimbursed.',
    img: '/payor-contracting.jpg',
    imgAlt: 'Business Strategy and Payor Contracting',
    tags: ['Strategy', 'Payor Contracting', 'Profitability'],
  },
] as const;

export default function SolutionsShowcase() {
  return (
    <SectionContainer id="solutions" className="min-h-screen">
      <div className="space-y-16 py-10">
        <div className="bg-background/95 w-full space-y-6 text-center backdrop-blur-sm">
          <div className="bg-muted/50 inline-flex items-center justify-center rounded-full border px-4 py-1.5">
            <span className="text-primary text-sm font-medium">OUR SOLUTIONS</span>
          </div>
          <h2 className="text-foreground text-3xl font-bold md:text-4xl lg:text-5xl">Healthcare Solutions</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl lg:text-lg">
            From short-term needs to long-term projects, Girit Consulting offers advice and support for every process
            and need for your practice.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent>
            {solutions.map(solution => (
              <CarouselItem
                key={solution.key}
                className="md:basis-1/2 lg:basis-1/3 h-[550px] bg-transparent"
              >
                <div className="relative w-full max-w-xl h-full">
                  <Card className="w-full h-full overflow-hidden bg-background/80 backdrop-blur-sm border-none rounded-3xl shadow-lg flex flex-col">
                    <div className="flex justify-center border-x border-t border-border/50 rounded-t-3xl items-center leading-none h-[280px]">
                      <Image
                        width={200}
                        height={200}
                        src={solution.img || ''}
                        alt={solution.title}
                        className="h-48 w-64 rounded-xl shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700 object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 border-x border-border/50">
                      <h2 className="block mb-2 font-medium text-xl text-card-foreground">{solution.title}</h2>
                      <p className="text-sm tracking-tight text-muted-foreground">{solution.description}</p>
                    </div>
                    <div className="flex justify-between items-center p-4 border-b border-x border-border/50 rounded-b-3xl">
                      <div className="flex flex-wrap gap-2">
                        {solution.tags?.map(tag => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground dark:bg-accent/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
          <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />
        </Carousel>
      </div>
    </SectionContainer>
  );
}
