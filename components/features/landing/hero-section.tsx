import type { HeroSectionProps } from '#/types/landing';
import { FadeIn, SlideIn } from '#/components/motion';
import BackgroundPattern from '#/components/ui/background-pattern';
import { Button } from '#/components/ui/button';
import { TrustBadge } from '#/components/ui/trust-badge';
import { Award, MapPin, Phone, Users } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';
import SectionContainer from './section-container';

export default function HeroSection({ companyInfo }: HeroSectionProps) {
  return (
    <SectionContainer id="hero">
      <BackgroundPattern />
      <div className="flex w-full flex-col gap-8 lg:gap-6 lg:flex-row justify-center items-center">
        <SlideIn className="flex flex-col gap-6 justify-center items-start w-full lg:w-1/2 px-4 sm:px-6 lg:px-0">
          <FadeIn className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-left">
              <span className="text-primary block mb-2">Empowering</span>
              <span className="block">
                {companyInfo.name}
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl text-left">
              {companyInfo.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                size="lg"
                variant="default"
                className="w-full sm:w-auto text-sm sm:text-base group relative overflow-hidden"
                asChild
              >
                <a href="#contact">
                  <Phone className="size-4 mr-2 transition-transform group-hover:scale-110" />
                  Book a Free Consultation
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-2 w-full">
              <TrustBadge icon={<Award className="size-3" />} text="20+ yrs" />
              <TrustBadge icon={<Users className="size-3" />} text="500+ cli." />
              <TrustBadge icon={<MapPin className="size-3" />} text="Los Angeles, CA" />
            </div>
          </FadeIn>
        </SlideIn>

        <SlideIn delay={0.2} className="w-full lg:flex-1 rounded-2xl p-2 sm:p-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative overflow-hidden">
          <Image
            src="/hero-image.jpg"
            alt="Healthcare Professional"
            fill
            priority
            fetchPriority="high"
            className="object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
          />
        </SlideIn>
      </div>
    </SectionContainer>
  );
}
