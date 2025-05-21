import type { AboutSectionProps } from '#/types/landing';
import SectionContainer from '#/components/features/landing/section-container';
import { FadeIn } from '#/components/motion';
import BackgroundPattern from '#/components/ui/background-pattern';
import { CheckCircle } from 'lucide-react';
import React from 'react';

export default function AboutSection({ team }: AboutSectionProps) {
  return (
    <SectionContainer id="about-us" className="py-12">
      <FadeIn>
        <div className="rounded-xl bg-primary/5 dark:bg-background/80 border border-border p-6 relative overflow-hidden ">
          <BackgroundPattern />
          <div className="relative z-10 flex flex-col gap-2 items-center justify-center">
            <div className="w-full space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 mx-auto">
                <span className="text-xs font-medium text-primary">OUR TEAM</span>
              </div>
              <h2 className="text-xl font-bold text-foreground">We succeed together as a team</h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                We take time to learn your practice and work closely with you so that we succeed together as a team.
              </p>
            </div>

            <div className="w-full">
              <div className="grid gap-4 sm:grid-cols-3">
                {team.slice(0, 4).map(member => (
                  <div className="group rounded-lg border-border/50 bg-white/80 dark:bg-card/50 p-4 transition hover:bg-white/90 hover:shadow-md hover:scale-[1.01] text-center" key={member.name}>
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="size-4" />
                      </div>
                      <div>
                        <h3 className="font-bold group-hover:text-primary">{member.name}</h3>
                        <p className="text-xs font-medium text-primary uppercase tracking-wide">{member.role}</p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{member.description}</p>

                    <div className="flex flex-wrap gap-2 mt-3 justify-center">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                        <CheckCircle className="size-2.5" />
                        <span>{member.role}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionContainer>
  );
}
