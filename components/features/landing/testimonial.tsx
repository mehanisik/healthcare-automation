import type { TestimonialSectionProps } from '#/types/landing';
import { FadeIn, PopIn, SlideIn, Stagger, StaggerItem } from '#/components/motion';
import BackgroundPattern from '#/components/ui/background-pattern';
import { StarRating } from '#/components/ui/star-rating';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import { Card } from 'components/ui/card';
import SectionContainer from './section-container';

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  return (
    <SectionContainer
      id="clients"
      mainTitle="Trusted by Healthcare Professionals"
      titleChip="TESTIMONIALS"
      titleDescription="Our healthcare management solutions have helped thousands of medical practices improve their operations and patient care."
    >
      <FadeIn>
        <div className="relative mx-auto max-w-7xl">
          <div className="relative z-10 mt-20">
            <Stagger>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map(testimonial => (
                  <StaggerItem key={testimonial.id}>
                    <div className="h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                      <Card className="group relative bg-foreground/90 dark:bg-foreground/10 text-amber-50 border border-foreground h-full overflow-hidden p-5">
                        <BackgroundPattern />
                        <div className="relative">
                          <FadeIn delay={0.1}>
                            <div className="mb-6">
                              <StarRating rating={testimonial.rating} />
                            </div>
                          </FadeIn>
                          <FadeIn delay={0.2}>
                            <blockquote className="relative mb-8">
                              <div className="absolute -left-3 -top-3 text-6xl font-serif text-amber-50/40">"</div>
                              <p className="relative text-base leading-relaxed">
                                {testimonial.content}
                              </p>
                            </blockquote>
                          </FadeIn>
                          <FadeIn delay={0.3}>
                            <footer className="mt-auto">
                              <div className="flex items-center gap-4">
                                <PopIn delay={0.3}>
                                  <div className="transition-transform duration-200 hover:scale-110">
                                    <Avatar className="size-12 border">
                                      <AvatarImage src={`/avatars/${testimonial.author.toLowerCase().replace('dr. ', '')}.jpg`} />
                                      <AvatarFallback className="bg-primary/10 text-lg font-semibold">
                                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                                      </AvatarFallback>
                                    </Avatar>
                                  </div>
                                </PopIn>
                                <SlideIn delay={0.4}>
                                  <cite className="not-italic">
                                    <p className="font-semibold">{testimonial.author}</p>
                                  </cite>
                                </SlideIn>
                              </div>
                            </footer>
                          </FadeIn>
                        </div>
                      </Card>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </div>
      </FadeIn>
    </SectionContainer>
  );
}
