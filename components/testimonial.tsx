'use client';
import type { Data } from '@/app/types';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import { Card } from 'components/ui/card';
import { motion } from 'framer-motion';
import BackgroundPattern from './background-pattern';
import SectionContainer from './section-container';
import { StarRating } from './star-rating';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const avatarVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      delay: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.3,
    },
  },
};

export default function TestimonialSection({ testimonials }: { testimonials: Data['testimonials'] }) {
  return (
    <SectionContainer id="clients" mainTitle="Trusted by Healthcare Professionals" titleChip="TESTIMONIALS" titleDescription="Our healthcare management solutions have helped thousands of medical practices improve their operations and patient care.">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative z-10 mt-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(testimonial => (
              <motion.div
                key={testimonial.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="h-full"
              >
                <Card
                  className="group relative bg-foreground/90 dark:bg-foreground/10 text-amber-50 border border-foreground  h-full overflow-hidden p-5"
                >
                  <BackgroundPattern />
                  <div className="relative">
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <StarRating rating={testimonial.rating} />
                    </motion.div>
                    <motion.blockquote
                      className="relative mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="absolute -left-3 -top-3 text-6xl font-serif text-amber-50/40">"</div>
                      <p className="relative text-base leading-relaxed ">
                        {testimonial.content}
                      </p>
                    </motion.blockquote>
                    <motion.footer
                      className="mt-auto"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={textVariants}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={avatarVariants}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Avatar className="size-12 border">
                            <AvatarImage src={`/avatars/${testimonial.author.toLowerCase().replace('dr. ', '')}.jpg`} />
                            <AvatarFallback className="bg-primary/10 text-lg font-semibold ">
                              {testimonial.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={textVariants}
                        >
                          <cite className="not-italic">
                            <p className="font-semibold ">{testimonial.author}</p>
                          </cite>
                        </motion.div>
                      </div>
                    </motion.footer>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
