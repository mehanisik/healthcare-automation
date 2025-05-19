'use server';

import { createClient } from '#/db/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import { z } from 'zod';

export type AuthError = {
  code: string;
  message: string;
  details?: Record<string, unknown>;
};

export type AuthResponse = {
  success: boolean;
  error?: AuthError;
  data?: Record<string, unknown>;
};

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export async function loginFn(formData: FormData): Promise<void> {
  try {
    const validatedFields = loginSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      throw new Error(
        Object.values(validatedFields.error.flatten().fieldErrors)
          .flat()
          .join(', '),
      );
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword(validatedFields.data);

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath('/', 'layout');
    redirect('/dashboard');
  } catch (error) {
    redirect(`/auth?error=${encodeURIComponent(error instanceof Error ? error.message : 'An error occurred during login')}`);
  }
}

export async function signup(formData: FormData): Promise<void> {
  try {
    const validatedFields = loginSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      toast.error('Invalid form data', {
        description: Object.values(validatedFields.error.flatten().fieldErrors)
          .flat()
          .join(', '),
      });
      return;
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signUp(validatedFields.data);

    if (error) {
      toast.error('Signup failed', {
        description: error.message,
      });
      return;
    }

    toast.success('Account created successfully');
    revalidatePath('/', 'layout');
    redirect('/auth/verify');
  } catch (error) {
    console.error('Signup error:', error);
    toast.error('An error occurred during signup');
    redirect('/error');
  }
}

export async function logOutFn(): Promise<void> {
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath('/', 'layout');
    redirect('/auth');
  } catch (error) {
    console.error('Logout error:', error);
    redirect(`/auth?error=${encodeURIComponent(error instanceof Error ? error.message : 'An error occurred during logout')}`);
  }
}

export async function getUser() {
  try {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Get user error:', error);
      return null;
    }

    return user;
  } catch (error) {
    console.error('Get user error:', error);
    return null;
  }
}

export async function checkAuth() {
  const user = await getUser();

  if (!user) {
    redirect('/auth');
  }

  return user;
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getUser();
  return !!user;
}

export async function refreshSession(): Promise<AuthResponse> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.refreshSession();

    if (error) {
      return {
        success: false,
        error: {
          code: 'REFRESH_ERROR',
          message: error.message,
        },
      };
    }

    return {
      success: true,
      data: {
        session: data.session,
      },
    };
  } catch (error) {
    console.error('Refresh session error:', error);
    return {
      success: false,
      error: {
        code: 'REFRESH_ERROR',
        message: 'Failed to refresh session',
        details: error instanceof Error ? { message: error.message } : undefined,
      },
    };
  }
}

export async function validateSession(): Promise<AuthResponse> {
  try {
    const user = await getUser();

    if (!user) {
      return {
        success: false,
        error: {
          code: 'INVALID_SESSION',
          message: 'Invalid or expired session',
        },
      };
    }

    return {
      success: true,
      data: {
        user,
      },
    };
  } catch (error) {
    console.error('Validate session error:', error);
    return {
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Failed to validate session',
        details: error instanceof Error ? { message: error.message } : undefined,
      },
    };
  }
}
