'use client';

import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { MutableRefObject, RefObject, Suspense, useRef, useState } from 'react';
import Loading from '../../components/loading';
import { useAuth } from '../../providers/AuthContext';
import RouteGuard from '../../components/guard';
import { child, get, getDatabase, ref, set } from "firebase/database";
import { database, firestore, storage } from "../../lib/firebase-config2"
import { Button } from '@nextui-org/react';
import { addDoc, collection } from 'firebase/firestore';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { createReactEditorJS } from "react-editor-js";
import dynamic from 'next/dynamic';

const EditorBlock = dynamic(() => import("../../components/editor"), {
  ssr: false,
});
export default function Cabinet() {
  const user1 = getAuth();
  const [data, setData] = useState<OutputData>();
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (data !== undefined) {
      try {
        await addDoc(collection(firestore, "blogs"), {
          data,
          completed: false,
          authorId: user1.currentUser?.uid,
          authorName: user1.currentUser?.displayName
        });
        setData(undefined)
      }
      catch (e) {
        console.log(e)
      } finally {
        alert('success')
      }
    } else {
      console.log('emty')
    }
  }

  // const user1 = getAuth();
  // console.log(user1.currentUser);
  // const { currentUser } = useAuth();
  // console.log(process.env.NEXT_PUBLIC_MEASURMENT_ID?.toString())
  // console.log(currentUser);
  // console.log('chack env', process.env.NEXT_PUBLIC_API_KEY)

  RouteGuard(); // route guard


  return (
    <>

      <div className="flex justify-center  flex-col max-w-full">
        <h1>Cabinet</h1>
        <div className='border border-cyan-800 mx-16 '>
          <Suspense fallback={<Loading />}>
            <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
          </Suspense>
        </div>
        <button onClick={handleSubmit}>Save!</button>
      </div>

    </>
  );
}
