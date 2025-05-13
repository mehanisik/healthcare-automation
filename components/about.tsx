'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SectionContainer from './section-container';

const teamMembers = [
  {
    name: 'Fatma Girit, MBA',
    role: 'Founder & CEO',
    image: '/team/fatma.jpg',
    description: 'Expert in Medical Billing and Healthcare Management with an MBA from California State University Long Beach',
  },
  {
    name: 'Esther Kim',
    role: 'Senior Consultant',
    image: '/team/esther.jpg',
    description: 'Skilled consultant specializing in medical billing and practice management',
  },
  {
    name: 'Denise Ustariz',
    role: 'Legal Advisor',
    image: '/team/denise.jpg',
    description: 'Legal professional guiding through healthcare compliance and legal matters',
  },
];

export default function AboutSection() {
  return (
    <SectionContainer id="about-us">
      <div className="mt-20 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 p-8 md:p-10">
        <div className="flex flex-col items-start gap-12 md:flex-row">
          <div className="space-y-6 md:w-1/2">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-medium text-primary">OUR </span>
            </div>
            <h3 className="text-3xl font-bold text-foreground">We succeed together as a team</h3>
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
            {teamMembers.map((member, index) => (
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
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-xl bg-card/50 p-6 transition-all duration-300 hover:bg-card hover:shadow-lg"
              >
                <div className="flex-1 space-y-3">
                  <motion.div
                    className="flex items-center justify-between"
                    whileHover={{ x: 5 }}
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
                        {member.name}
                      </h4>
                      <p className="text-sm font-medium text-primary">{member.role}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                    >
                      <CheckCircle className="size-4" />
                    </motion.div>
                  </motion.div>

                  <p className="text-sm text-muted-foreground">{member.description}</p>

                  <motion.div
                    className="flex flex-wrap gap-2 pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: 'rgb(var(--primary) / 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors"
                    >
                      <CheckCircle className="size-3" />
                      <span>Healthcare Expert</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: 'rgb(var(--primary) / 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors"
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
    </SectionContainer>
  );
}
