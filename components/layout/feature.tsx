import { ArrowRight, BarChart, CheckCircle, Shield, Users } from 'lucide-react'
import Link from 'next/link'
import SectionContainer from './section-container'

export default function FeatureSection() {
  const uniqueSellingPoints = [
    {
      id: 'expertise',
      title: 'Unparalleled Expertise',
      description: 'Unparalleled advice backed by experience in small medical practice settings.',
      icon: CheckCircle,
    },
    {
      id: 'specialists',
      title: 'Healthcare Specialists',
      description: 'Expertise in all areas of healthcare, from billing to practice management.',
      icon: Users,
    },
    {
      id: 'approach',
      title: 'Comprehensive Approach',
      description: 'We ensure billers understand practice settings, payor contracts, and healthcare regulations.',
      icon: Shield,
    },
    {
      id: 'team',
      title: 'Team Success',
      description:
        'We take time to learn your practice and work closely with you so that we succeed together as a team.',
      icon: BarChart,
    },
  ]

  return (
    <SectionContainer id="services" background="gradient">
      <div className="relative">
        <div className="flex w-full flex-col items-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border bg-muted/50">
            <span className="text-sm font-medium text-primary">WHAT SETS US APART</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-3xl">
            Bringing the best to you by the best in the industry
          </h2>
          <p className="text-muted-foreground text-center md:text-lg max-w-2xl">
            Our healthcare management solutions are designed by industry experts with decades of experience in medical
            billing, practice management, and healthcare administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uniqueSellingPoints.map(point => (
            <div
              key={point.id}
              className="group relative p-[1px] rounded-xl overflow-hidden bg-gradient-to-b from-border to-transparent"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-background rounded-xl p-8 h-full">
                <div className="flex flex-col h-full space-y-6">
                  <div className="bg-primary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
                    <point.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-lg flex-grow">{point.description}</p>
                  <div>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Learn more
                      {' '}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10">
                <span className="text-sm font-medium text-primary">OUR APPROACH</span>
              </div>
              <h3 className="text-3xl font-bold">We succeed together as a team</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  We believe in a comprehensive approach to Medical Billing Services, ensuring that billers understand
                  practice settings, payor contracts, and healthcare rules and regulations.
                </p>
                <p className="text-muted-foreground text-lg">
                  We take time to learn your practice and work closely with you so that we succeed together as a team.
                </p>
              </div>
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Learn About Our Team
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-background rounded-xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold mb-6">Our Leadership</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Fatma Girit, MBA</h5>
                    <p className="text-muted-foreground">
                      Expert in Medical Billing and Healthcare Management with an MBA from California State University
                      Long Beach
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Esther KIM</h5>
                    <p className="text-muted-foreground">
                      Skilled consultant specializing in medical billing and practice management
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Denise Ustariz</h5>
                    <p className="text-muted-foreground">
                      Legal professional guiding through healthcare compliance and legal matters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
