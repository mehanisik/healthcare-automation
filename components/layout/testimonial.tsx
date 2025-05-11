import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';
import SectionContainer from './section-container';

const testimonials = [
  {
    id: 'madan',
    quote:
      'Fatma works hard to make sure we get every dollar we deserve from the insurance company. She is thorough and appropriately intense about collections. Fatma is easy to work with and always accessible. If you are unhappy with your billing company, it is because you have not worked with Fatma!!!',
    author: 'Dr. Madan',
    role: 'Medical Director',
  },
  {
    id: 'pekerol',
    quote:
      'I have the privilege to work with Fatma well over 10 years and she has the best work ethic. She is always there when faced with any difficulty to resolve before it is a problem.',
    author: 'Dr. Pekerol',
    role: 'Practice Owner',
  },
  {
    id: 'popkow',
    quote:
      'Girit Medical Billing service has been great help to our billing. They are always there when our office or patients have questions or need explanations. Highly recommended.',
    author: 'Dr. Popkow',
    role: 'Family Physician',
  },
];

export default function TestimonialSection() {
  return (
    <SectionContainer id="clients" background="muted">
      <div className="space-y-12">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border bg-muted/50">
            <span className="text-sm font-medium text-primary">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Trusted by Healthcare Professionals</h2>
          <p className="text-muted-foreground text-lg">
            Our healthcare management solutions have helped thousands of medical practices improve their operations and
            patient care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="overflow-hidden border-none shadow-sm h-full">
              <CardContent className="p-0 h-full">
                <div className="bg-primary/5 p-6 relative h-full flex flex-col space-y-6">
                  <QuoteIcon className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
                  <div className="flex-grow">
                    <p className="text-lg italic relative z-10">
                      "
                      {testimonial.quote}
                      "
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 md:p-10 shadow-sm border">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10">
                <span className="text-sm font-medium text-primary">CLIENT SUCCESS</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Join our growing list of satisfied clients</h3>
              <p className="text-muted-foreground">
                We've helped numerous healthcare providers optimize their billing processes, increase revenue, and
                improve practice management. Our clients range from small practices to large medical groups across
                various specialties.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-muted/50 px-4 py-2 rounded-full text-sm font-medium">Psychiatry</div>
                <div className="bg-muted/50 px-4 py-2 rounded-full text-sm font-medium">Family Medicine</div>
                <div className="bg-muted/50 px-4 py-2 rounded-full text-sm font-medium">Cardiology</div>
                <div className="bg-muted/50 px-4 py-2 rounded-full text-sm font-medium">Pediatrics</div>
                <div className="bg-muted/50 px-4 py-2 rounded-full text-sm font-medium">Orthopedics</div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80&text=Client"
                    alt="Client logo"
                    width={80}
                    height={80}
                    className="opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
