import nextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { supabase } from '@/libs/database';
// import { compare } from "bcrypt"

const handler = nextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        const { data: user } = await supabase
          .from('Usuarios')
          .select('Nombre, Correo, Vendedor')
          .eq('Correo', credentials.email);

        if (!user) throw new Error('Invalid credentials');

        return user;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      if (token.user) session.user = token.user;

      return session;
    },
  },
  pages: {
    signIn: '/signIn',
  },
});

export { handler as GET, handler as POST };
