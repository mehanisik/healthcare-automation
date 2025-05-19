'use client';

import type { ContactFormData } from '#/schema/contact-schema';
import type { Data } from '#/types';
import AppointmentCalendar from '#/components/ui/appointment-calendar';
import { useSectionAnimation } from '#/components/ui/section-animation';
import useContactService from '#/hooks/use-contact-service';
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
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';
import { Controller } from 'react-hook-form';
import SectionContainer from './section-container';

/**
 * Renders a contact form with validation and animated submission feedback.
 *
 * Displays input fields for user details, inquiry reason, and message, and provides real-time validation errors. The form supports animated transitions for loading, success, and error states upon submission.
 *
 * @param inquiryOptions - The selectable options for the reason for inquiry dropdown.
 */
function ContactForm({ inquiryOptions }: { readonly inquiryOptions: Data['inquiryOptions'] }) {
  const {
    register,
    handleSubmit,
    control,
    errors,
    isSubmitting,
    submitStatus,
    handleContactFormSubmit,
  } = useContactService();

  const onSubmit = (data: ContactFormData): void => {
    handleContactFormSubmit(data);
  };

  return (
    <Card className="flex-1 w-full max-w-5xl mx-auto border-border bg-card/50 rounded-3xl shadow-sm overflow-hidden h-full flex flex-col">
      <CardContent className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-between">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-base text-card-foreground">
                First Name
                {' '}
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                placeholder="e.g., John"
                className={`h-12 bg-card/50 border-border focus:bg-background focus:border-primary transition-colors ${
                  errors.firstName ? 'border-destructive' : ''
                }`}
                {...register('firstName', { required: 'First name is required' })}
                aria-invalid={errors.firstName ? 'true' : 'false'}
                aria-required="true"
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-base text-card-foreground">
                Last Name
                {' '}
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                placeholder="e.g., Doe"
                className={`h-12 bg-card/50 border-border focus:bg-background focus:border-primary transition-colors ${
                  errors.lastName ? 'border-destructive' : ''
                }`}
                {...register('lastName', { required: 'Last name is required' })}
                aria-invalid={errors.lastName ? 'true' : 'false'}
                aria-required="true"
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base text-card-foreground">
              Email Address
              {' '}
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="e.g., john.doe@example.com"
              className={`h-12 bg-card/50 border-border focus:bg-background focus:border-primary transition-colors ${
                errors.email ? 'border-destructive' : ''
              }`}
              {...register('email', { required: 'Email is required' })}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-required="true"
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base text-card-foreground">
              Phone Number
              {' '}
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="e.g., +1 123 456 7890"
              className={`h-12 bg-card/50 border-border focus:bg-background focus:border-primary transition-colors ${
                errors.phone ? 'border-destructive' : ''
              }`}
              {...register('phone', { required: 'Phone number is required' })}
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-required="true"
            />
            {errors.phone && errors.phone.type === 'required' && (
              <p className="text-sm text-destructive">Phone number is required</p>
            )}
            {errors.phone && errors.phone.type === 'pattern' && (
              <p className="text-sm text-destructive">Please enter a valid phone number</p>
            )}
            {errors.phone && !['required', 'pattern'].includes(errors.phone.type) && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiry" className="text-base text-card-foreground">
              Reason for Inquiry
              <span className="text-destructive">*</span>
            </Label>
            <Controller
              name="inquiry"
              control={control}
              rules={{ required: 'Please select a reason for inquiry' }}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  required
                >
                  <SelectTrigger
                    className={`h-12 bg-card/50 border-border focus:border-primary transition-colors ${
                      errors.inquiry ? 'border-destructive' : ''
                    }`}
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
              )}
            />
            {errors.inquiry && <p className="text-sm text-destructive">{errors.inquiry.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base text-card-foreground">
              Message
              <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Please describe how we can assist you..."
              className={`min-h-[120px] resize-none bg-card/50 border-border focus:bg-background focus:border-primary transition-colors ${
                errors.message ? 'border-destructive' : ''
              }`}
              {...register('message', { required: 'Message is required' })}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-required="true"
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
          </div>

          <Button
            type="submit"
            aria-label="Send Message"
            aria-busy={isSubmitting}
            aria-live="polite"
            disabled={isSubmitting}
            className="relative h-12 w-full bg-primary text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
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

function ContactSection({ inquiryOptions }: { inquiryOptions: Data['inquiryOptions'] }) {
  const animation = useSectionAnimation();
  return (
    <SectionContainer id="contact" mainTitle="Contact Us" titleChip="GET IN TOUCH" titleDescription="Have questions about our services or need a consultation? We're here to help. Reach out and we'll get back to you shortly.">
      <motion.div {...animation}>
        <div className="flex flex-col lg:flex-row gap-4 items-start min-h-[540px] w-full">
          <div className="w-full lg:w-1/2">
            <ContactForm inquiryOptions={inquiryOptions} />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <AppointmentCalendar />
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}

export default ContactSection;
