'use client';

import type { Data } from '#/types';
import BackgroundPattern from '#/components/ui/background-pattern';
import { Button } from '#/components/ui/button';
import { TrustBadge } from '#/components/ui/trust-badge';
import { motion } from 'framer-motion';
import { Award, MapPin, Phone, Users } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';
import SectionContainer from './section-container';

type HeroSectionProps = {
  readonly companyInfo: Data['companyInfo'];
};

export default function HeroSection({ companyInfo }: HeroSectionProps) {
  return (
    <SectionContainer id="hero">
      <BackgroundPattern />
      <div className="flex w-full flex-col gap-8 lg:gap-6 lg:flex-row justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-6 justify-center items-start w-full lg:w-1/2 px-4 sm:px-6 lg:px-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-left">
              <span className="text-primary block mb-2">Empowering</span>
              <span className="block">
                {companyInfo.name}
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl text-left"
          >
            {companyInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <Button
              size="lg"
              variant="default"
              className="w-full sm:w-auto text-sm sm:text-base group relative overflow-hidden"
              asChild
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="size-4 mr-2 transition-transform group-hover:scale-110" />
                Book a Free Consultation
              </motion.a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 w-full"
          >
            <TrustBadge icon={<Award className="size-3" />} text="20+ yrs" />
            <TrustBadge icon={<Users className="size-3" />} text="500+ cli." />
            <TrustBadge icon={<MapPin className="size-3" />} text="Los Angeles, CA" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.02 }}
          className="w-full lg:flex-1 rounded-2xl p-2 sm:p-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative overflow-hidden"
        >
          <Image
            src="/hero-image.jpg"
            alt="Healthcare Professional"
            fill
            priority
            fetchPriority="high"
            className="object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </SectionContainer>
  );
}
