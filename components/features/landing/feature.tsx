'use client';

import type { Data } from '#/types';
import { FadeIn } from '#/components/motion';
import SectionContainer from './section-container';

type FeatureSectionProps = {
  readonly services: Data['services'];
};

export default function FeatureSection({ services }: FeatureSectionProps) {
  return (
    <SectionContainer
      id="services"
      titleChip="Services"
      mainTitle="Comprehensive Revenue Cycle Services"
      titleDescription="We empower healthcare organizations to drive performance, reduce administrative burden, and maximize revenue through end-to-end RCM solutions."
    >
      <FadeIn className="relative">
        <div className="grid space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
          <div className="space-y-6 sm:px-16">
            {services.slice(0, 3).map((service, index) => (
              <FadeIn key={crypto.randomUUID()} delay={index * 0.1}>
                <div className="flex flex-col max-w-md sm:flex-row">
                  <div className="mb-4 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <svg
                        className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 text-xl font-semibold leading-5">{service.title}</h6>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="space-y-6 sm:px-16">
            {services.slice(3).map((service, index) => (
              <FadeIn key={crypto.randomUUID()} delay={(index + 3) * 0.1}>
                <div className="flex flex-col max-w-md sm:flex-row">
                  <div className="mb-4 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <svg
                        className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 text-xl font-semibold leading-5">{service.title}</h6>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </SectionContainer>
  );
}
