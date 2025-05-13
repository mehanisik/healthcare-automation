'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'components/ui/card';
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
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import SectionContainer from './section-container';

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'),
  inquiry: z.string().min(1, 'Please select a reason for inquiry'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      toast.success('Message sent successfully! We will get back to you soon.');
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border overflow-hidden bg-background/50 shadow-lg">
      <CardHeader className="space-y-2 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardTitle className="text-2xl font-bold text-card-foreground">
            Book Free Consultation
          </CardTitle>
          <CardDescription className="mt-2 text-base text-muted-foreground">
            Fill out the form below and we'll get back to you within 24 hours.
          </CardDescription>
        </motion.div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-base text-card-foreground">
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="Your first name"
                className={`h-12 bg-card transition-colors focus:bg-background ${
                  errors.firstName ? 'border-red-500' : ''
                }`}
                {...register('firstName')}
                aria-invalid={errors.firstName ? 'true' : 'false'}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-base text-card-foreground">
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Your last name"
                className={`h-12 bg-card transition-colors focus:bg-background ${
                  errors.lastName ? 'border-red-500' : ''
                }`}
                {...register('lastName')}
                aria-invalid={errors.lastName ? 'true' : 'false'}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base text-card-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              className={`h-12 bg-card transition-colors focus:bg-background ${
                errors.email ? 'border-red-500' : ''
              }`}
              {...register('email')}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base text-card-foreground">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="Your phone number"
              className={`h-12 bg-card transition-colors focus:bg-background ${
                errors.phone ? 'border-red-500' : ''
              }`}
              {...register('phone')}
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiry" className="text-base text-card-foreground">
              Reason for Inquiry
            </Label>
            <Select onValueChange={value => register('inquiry').onChange({ target: { value } })}>
              <SelectTrigger
                className={`h-12 bg-card transition-colors focus:bg-background ${
                  errors.inquiry ? 'border-red-500' : ''
                }`}
              >
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="medical-billing">Medical Billing</SelectItem>
                <SelectItem value="practice-management">Practice Management</SelectItem>
                <SelectItem value="business-strategy">Business Strategy</SelectItem>
                <SelectItem value="practice-setup">Practice Setup</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.inquiry && <p className="text-sm text-red-500">{errors.inquiry.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base text-card-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              className={`min-h-[120px] resize-none bg-card transition-colors focus:bg-background ${
                errors.message ? 'border-red-500' : ''
              }`}
              {...register('message')}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="relative h-12 w-full bg-primary text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:opacity-50"
          >
            <AnimatePresence mode="wait">
              {isSubmitting
                ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </motion.div>
                  )
                : submitStatus === 'success'
                  ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Message Sent!</span>
                      </motion.div>
                    )
                  : submitStatus === 'error'
                    ? (
                        <motion.div
                          key="error"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <XCircle className="h-5 w-5" />
                          <span>Failed to Send</span>
                        </motion.div>
                      )
                    : (
                        <motion.span
                          key="default"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Send Message
                        </motion.span>
                      )}
            </AnimatePresence>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function ContactSection() {
  return (
    <SectionContainer id="contact">
      <div className="flex w-full flex-col gap-8 rounded-3xl bg-primary/10 p-10">
        <div className="space-y-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center rounded-full border border-border bg-muted/50 px-4 py-1.5">
              <span className="text-sm font-medium text-primary">CONTACT US</span>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Have questions about our services? We're here to help. Reach out to us and we'll get
              back to you shortly.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
