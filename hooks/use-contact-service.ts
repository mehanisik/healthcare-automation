import type { UseFormReturn } from 'react-hook-form';
import type { ContactFormData } from '../schema/contact-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { contactFormSchema } from '../schema/contact-schema';

type SubmitStatus = 'idle' | 'success' | 'error';

type ContactServiceReturn = {
  readonly register: UseFormReturn<ContactFormData>['register'];
  readonly handleSubmit: UseFormReturn<ContactFormData>['handleSubmit'];
  readonly errors: UseFormReturn<ContactFormData>['formState']['errors'];
  readonly reset: UseFormReturn<ContactFormData>['reset'];
  readonly isSubmitting: boolean;
  readonly submitStatus: SubmitStatus;
  readonly handleContactFormSubmit: (data: ContactFormData) => Promise<void>;
  readonly control: UseFormReturn<ContactFormData>['control'];
};

function useContactService(): ContactServiceReturn {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleContactFormSubmit = async (
    data: ContactFormData,
  ): Promise<void> => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // TODO: implement contact service
      toast.success(`Message sent successfully!${JSON.stringify(data)}`);
      setSubmitStatus('success');
      reset();
    } catch {
      toast.error('Failed to send message. Please try again later.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    isSubmitting,
    submitStatus,
    handleContactFormSubmit,
    control,
  };
}

export default useContactService;
