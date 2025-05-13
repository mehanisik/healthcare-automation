'use client';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import { Card } from 'components/ui/card';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionContainer from './section-container';

const testimonials = [
  {
    id: 1,
    content: 'Fatma works hard to make sure we get every dollar we deserve from the insurance company. I have received work emails from her on Saturdays and Sundays, even holidays!! She seem to work all the time. She is thorough and appropriately intense about collections. Fatma is easy to work with and has always been accessible (usually immediately). Unlike other billing companies, her goal is to collect every dollar and not just the "low hanging fruit" that most billing companies do for doctors. If you are unhappy with your billing company, it is because you have not worked with Fatma!!!',
    author: 'Dr. Madan',
    rating: 5,
  },
  {
    id: 2,
    content: 'I have the privilege to work with Fatma well over 10 years and she has the best work ethic, delight to work with and always quick to adept with shifting landscape of medical care. She is always there when faced any difficulty to resolve before it is a problem. She great to work with and always with can do attitude. She is happy to pitch in when asked even in short notice.',
    author: 'Dr. Pekerol',
    rating: 5,
  },
  {
    id: 3,
    content: 'Girit Medical Billing service has been great help to our billing. They are always there when our office or patients have questions or needing explanation. We love Fatma\'s approach to billing issues especially when it comes to difficult patients. She would keep calm and professional which is always so important. They are easy to work with, local service, no complicated contracts. Highly recommended.',
    author: 'Dr. Popkow',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <motion.div
      className="flex gap-0.5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {Array.from({ length: rating }).map((_, i) => (
        <motion.div
          key={
            crypto.randomUUID()
          }
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
        >
          <Star className="size-4 fill-primary text-primary" />
        </motion.div>
      ))}
    </motion.div>
  );
}

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

export default function TestimonialSection() {
  return (
    <SectionContainer id="clients">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-2xl space-y-6 text-center"
        >
          <div className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-1.5 shadow-sm">
            <span className="text-sm font-medium text-primary">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl font-bold  md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Our healthcare management solutions have helped thousands of medical practices improve
            their operations and patient care.
          </p>
        </motion.div>

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
                  className="group relative h-full overflow-hidden bg-foreground/5 p-5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
                      <div className="absolute -left-3 -top-3 text-6xl font-serif text-primary/40">"</div>
                      <p className="relative text-base leading-relaxed text-card-foreground">
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
                          <Avatar className="size-12 border-2 border-primary/20">
                            <AvatarImage src={`/avatars/${testimonial.author.toLowerCase().replace('dr. ', '')}.jpg`} />
                            <AvatarFallback className="bg-primary/10 text-lg font-semibold text-primary">
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
                            <p className="font-semibold text-card-foreground">{testimonial.author}</p>
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
