'use client';

import { getAuth } from 'firebase/auth';
import { Suspense, useState } from 'react';
import Loading from '../../components/loading';
import RouteGuard from '../../components/guard';
import { firestore } from "../../lib/firebase-config2"
import { addDoc, collection } from 'firebase/firestore';
import { OutputData } from '@editorjs/editorjs';
import dynamic from 'next/dynamic';


const EditorBlock = dynamic(() => import("../../components/editor"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});



export default function Cabinet() {
  const user1 = getAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<OutputData>({
    "blocks": [
      {
        type: "header",
        data: {
          text: "New header",
          level: 2
        }
      }
    ],
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    setLoading(true)
    e.preventDefault();
    if (data !== undefined) {
      try {
        await addDoc(collection(firestore, "blogs"), {
          data,
          completed: false,
          authorId: user1.currentUser?.uid,
          authorName: user1.currentUser?.displayName
        });
        setData({
          "blocks": [
            {
              type: "header",
              data: {
                text: "New header",
                level: 2
              }
            }
          ],
        })

      }
      catch (e) {
        console.log(e)
      } finally {
        setLoading(false)

      }
    } else {
      setLoading(false)
      console.log('emty')
    }
  }

  RouteGuard(); // route guard


  return (
    <>
      <div className="flex justify-center  flex-col max-w-full">
        {
          (loading) ? <Loading /> :
            <>
              <div className='border border-cyan-800 mx-16 '>
                <Suspense fallback={<Loading />}>
                  <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
                </Suspense>
              </div>
              <button onClick={handleSubmit}>Save!</button>
            </>
        }
        <h1>Cabinet</h1>
      </div>
    </>
  );
}
