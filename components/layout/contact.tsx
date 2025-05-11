import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import SectionContainer from './section-container';

const ContactSection = () => {
  return (
    <SectionContainer id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            Get in touch with us to set up a FREE consultation, or use the contact form to inquire whether our services are right for you.
          </p>

          <div className="grid gap-6">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-lg mb-1">Phone</CardTitle>
                  <CardDescription>(213) 221-4518</CardDescription>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-lg mb-1">Email</CardTitle>
                  <CardDescription>info@giritconsulting.com</CardDescription>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-lg mb-1">Location</CardTitle>
                  <CardDescription>
                    3470 Wilshire Blvd. Suite 616
                    <br />
                    Los Angeles, CA 90010
                  </CardDescription>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-lg mb-1">Office Hours</CardTitle>
                  <CardDescription>
                    Monday - Friday
                    <br />
                    8:30 AM - 5:00 PM
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Card>
            <CardHeader>
              <CardTitle>Book Free Consultation</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Your phone number" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Reason for Inquiry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical-billing">Medical Billing</SelectItem>
                      <SelectItem value="practice-management">Practice Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" rows={4} />
                </div>

                <Button type="submit" className="mt-2">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
