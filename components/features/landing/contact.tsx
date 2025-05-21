import type { ContactSectionProps } from '#/types/landing';
import { sendContactMessageFn } from '#/actions/contact-message';
import AppointmentCalendar from '#/components/ui/appointment-calendar';
import { Button } from 'components/ui/button';
import { Card, CardContent } from 'components/ui/card';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/ui/select';
import { Textarea } from 'components/ui/textarea';
import SectionContainer from './section-container';

export default function ContactSection({ inquiryOptions }: ContactSectionProps) {
  return (
    <SectionContainer
      id="contact"
      mainTitle="Contact Us"
      titleChip="GET IN TOUCH"
      titleDescription="Have questions about our services or need a consultation? We're here to help. Reach out and we'll get back to you shortly."
    >
      <div className="flex flex-col lg:flex-row gap-4 items-start min-h-[540px] w-full">
        <div className="w-full lg:w-1/2">
          <Card className="flex-1 w-full max-w-5xl mx-auto border-border bg-card/50 rounded-3xl shadow-sm overflow-hidden h-full flex flex-col">
            <CardContent className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-between">
              <form action={sendContactMessageFn} className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base text-card-foreground">
                      First Name
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="e.g., John"
                      className="h-12 bg-card/50 border-border focus:bg-background focus:border-primary transition-colors"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base text-card-foreground">
                      Last Name
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="e.g., Doe"
                      className="h-12 bg-card/50 border-border focus:bg-background focus:border-primary transition-colors"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base text-card-foreground">
                    Email Address
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e.g., john.doe@example.com"
                    className="h-12 bg-card/50 border-border focus:bg-background focus:border-primary transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base text-card-foreground">
                    Phone Number
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="e.g., +1 123 456 7890"
                    className="h-12 bg-card/50 border-border focus:bg-background focus:border-primary transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry" className="text-base text-card-foreground">
                    Reason for Inquiry
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select name="inquiry" required>
                    <SelectTrigger
                      className="h-12 bg-card/50 border-border focus:border-primary transition-colors"
                      aria-required="true"
                    >
                      <SelectValue placeholder="Select a reason for your inquiry" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryOptions.map(option => (
                        <SelectItem value={option.value} key={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base text-card-foreground">
                    Message
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe how we can assist you..."
                    className="min-h-[120px] resize-none bg-card/50 border-border focus:bg-background focus:border-primary transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                <Button
                  type="submit"
                  aria-label="Send Message"
                  className="relative h-12 w-full bg-primary text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <AppointmentCalendar />
        </div>
      </div>
    </SectionContainer>
  );
}
