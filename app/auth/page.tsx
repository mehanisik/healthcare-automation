import { toast } from 'sonner';

export default async function LoginPage() {
  const login = async (formData: FormData) => {
    'use server';
    const email = formData.get('email');
    const password = formData.get('password');
    toast(`${email} ${password}`);
  };

  return (
    <form action={login}>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button type="button" formAction={login}>Log in</button>
    </form>
  );
}
