import type { ContactFormData } from '../schema/contact-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactFormSchema } from '../schema/contact-schema';

function useContactService() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    toast: any,
  ) => {
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
