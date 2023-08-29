'use client';

import {
  getRedirectResult,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { auth, provider } from '../../lib/firebase-config';
import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/providers/AuthContext';
import Link from 'next/link';
import Loading from '@/components/loading';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, signup, currentUser } = useAuth();

  const auth = getAuth();
  let router = useRouter();

  // useEffect(() => {
  //     if (currentUser) {
  //         router.push('/cabinet');
  //     }
  // }, [])

  async function submitHandler() {
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }
    if (isLoggingIn) {
      try {
        await login(email, password);
      } catch (err) {
        setError('Incorrect email or password');
      }
      return;
    }
    await signup(email, password);
  }

  function signInWithGoogle() {
    signInWithRedirect(auth, provider);
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
          <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
            {isLoggingIn ? 'Login' : 'register'}
          </h1>
          {error && (
            <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">
              {error}
            </div>
          )}
          <input
            type="text"
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"
          />
          <input
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
          />
          <button
            onClick={submitHandler}
            className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300  after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-cyan-300"
          >
            <h2 className="">SUBMIT</h2>
          </button>
          <div className="flex items-center mt-6 -mx-2">
            <button
              onClick={() => signInWithGoogle()}
              type="button"
              className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
            >
              <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
              </svg>

              <span className="hidden mx-2 sm:inline">Sign in with Google</span>
            </button>
          </div>
          <h2
            className=" hover:scale-110 cursor-pointer"
            onClick={() => setIsLoggingIn(!isLoggingIn)}
          >
            {!isLoggingIn ? 'Login' : 'Register'}
          </h2>
        </div>
      </Suspense>
    </>
  );
}
