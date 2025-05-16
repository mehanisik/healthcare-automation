'use client';
import type { Data } from '@/app/types';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import BackgroundPattern from './background-pattern';
import SectionContainer from './section-container';
import { useSectionAnimation } from './ui/section-animation';

type AboutSectionProps = {
  readonly team: Data['team'];
};

export default function AboutSection({ team }: AboutSectionProps) {
  const animation = useSectionAnimation();

  return (
    <SectionContainer id="about-us" secondaryClassName="relative z-10">
      <motion.div {...animation}>
        <div className="mt-20 rounded-2xl bg-primary/10 dark:bg-background/80 shadow-xl border border-border p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
          <BackgroundPattern />
          <div className="relative z-10">
            <div className="flex flex-col items-start gap-12 md:flex-row">
              <div className="space-y-6 md:w-1/2">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-2">
                  <span className="text-sm font-semibold text-primary tracking-wider">OUR TEAM</span>
                </div>
                <p className="text-3xl font-extrabold text-foreground mb-2">We succeed together as a team</p>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    We believe in a comprehensive approach to Medical Billing Services, ensuring that
                    billers understand practice settings, payor contracts, and healthcare rules and
                    regulations.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We take time to learn your practice and work closely with you so that we succeed
                    together as a team.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: '0 4px 32px 0 rgba(80, 80, 120, 0.10)',
                      transition: { duration: 0.2 },
                    }}
                    className="group relative overflow-hidden rounded-xl border-none bg-white/80 dark:bg-card/50 backdrop-blur-sm border border-border/50 p-6 transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
                  >
                    <div className="flex-1 space-y-3">
                      <motion.div
                        className="flex items-center justify-between"
                        whileHover={{ x: 5 }}
                      >
                        <div>
                          <h3 className="text-lg font-bold text-card-foreground transition-colors group-hover:text-primary">
                            {member.name}
                          </h3>
                          <p className="text-xs font-medium text-primary uppercase tracking-wide">{member.role}</p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                        >
                          <CheckCircle className="size-4" />
                        </motion.div>
                      </motion.div>

                      <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>

                      <motion.div
                        className="flex flex-wrap gap-2 pt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20 dark:hover:bg-primary/30"
                        >
                          <CheckCircle className="size-3" />
                          <span>Healthcare Expert</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20 dark:hover:bg-primary/30"
                        >
                          <CheckCircle className="size-3" />
                          <span>Certified Professional</span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
