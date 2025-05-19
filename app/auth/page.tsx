import BackgroundPattern from '#/components/ui/background-pattern';
import { Button } from '#/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '#/components/ui/card';
import { Input } from '#/components/ui/input';
import { Label } from '#/components/ui/label';
import { Logo } from '#/components/ui/logo';
import { createClient } from '#/db/supabase/server';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function AuthPage() {
  const handleLogin = async (formData: FormData) => {
    'use server';
    const supabase = await createClient();
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) {
      redirect('/error');
    }
    revalidatePath('/', 'layout');
    redirect('/dashboard');
  };

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-background">
      <div className="relative hidden h-full flex-col p-10 lg:flex dark:border-r border-border">
        <div className="absolute inset-0">
          <Image
            src="/practice-management.jpg"
            alt="Healthcare Practice Management"
            fill
            className="object-cover brightness-[0.85] dark:brightness-[0.65]"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-background/50 dark:bg-background/70 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-20 flex items-center text-lg font-medium text-foreground">
          <div className="mr-2">
            <Logo type="icon" width={32} height={32} />
          </div>
          <span className="text-foreground">Healthcare Automation</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg font-medium text-foreground">
              "Streamline your healthcare practice with our comprehensive management solution"
            </p>
            <footer className="text-sm text-muted-foreground">
              Transform your healthcare operations
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8 w-full h-full flex items-center justify-center relative">
        <div className="absolute inset-0 ">
          <BackgroundPattern />
        </div>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] relative z-10">
          <div className="flex flex-col space-y-2 text-center">
            <div className="mx-auto">
              <Logo type="icon" width={48} height={48} />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Welcome back
            </h1>
          </div>
          <Card className="border-primary bg-card   text-card-foreground shadow-2xl">
            <CardHeader>
              <CardTitle className="text-foreground text-center">Sign in</CardTitle>
            </CardHeader>
            <form action={handleLogin}>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    autoComplete="email"
                    className="bg-background border-input"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="bg-background border-input"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center mt-5">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  type="submit"
                >
                  Sign in
                </Button>
              </CardFooter>
            </form>
          </Card>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our
            <Link
              href="#"
              className="text-primary hover:text-primary/90 underline underline-offset-4"
            >
              Terms of Service
            </Link>
            and
            <Link
              href="#"
              className="text-primary hover:text-primary/90 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
