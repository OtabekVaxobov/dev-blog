'use client';

import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import Loading from '../../components/loading';
import { useAuth } from '../../providers/AuthContext';
import RouteGuard from '../../components/guard';
import { child, get, getDatabase, ref, set } from "firebase/database";
import { database, firestore, storage } from "../../lib/firebase-config2"
import { Button } from '@nextui-org/react';
import { addDoc, collection } from 'firebase/firestore';

export default function Cabinet() {
  const [Title, setTitle] = useState("");
  const [Subject, setSubject] = useState("");
  const user1 = getAuth();
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (Subject !== "") {
      await addDoc(collection(firestore, "blogs"), {
        Subject,
        Title,
        completed: false,
        authorId: user1.currentUser?.uid,
        authorName: user1.currentUser?.displayName
      });
      setSubject("");
    }
  }

  // const user1 = getAuth();
  // console.log(user1.currentUser);
  // const { currentUser } = useAuth();
  // console.log(process.env.NEXT_PUBLIC_MEASURMENT_ID?.toString())
  // console.log(currentUser);
  // console.log('chack env', process.env.NEXT_PUBLIC_API_KEY)
  RouteGuard();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex justify-center items-center flex-col max-w-full">
          Cabinet
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <input type="text"
                placeholder='what do you want to do?'
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <input type="text"
                placeholder='what do you want to do?'
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="btn-container">
              <button>Add-Todo</button>
            </div>
          </form>
        </div>
      </Suspense>
    </>
  );
}
