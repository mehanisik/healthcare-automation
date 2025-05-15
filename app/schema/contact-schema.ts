import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[+()\d\s-]{7,}$/, 'Please enter a valid phone number'),
  inquiry: z.string().min(1, 'Please select a reason for inquiry'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
