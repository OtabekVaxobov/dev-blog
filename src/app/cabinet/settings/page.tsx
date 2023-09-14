'use client'

import { useEffect, useState } from "react";
import RouteGuard from "../../../components/guard";
import {
    getAuth,
    sendEmailVerification,
    updateProfile,
} from 'firebase/auth';
import { upload, useAuth } from "../../../lib/hook";

import Loading from "../../../components/loading";
import { Avatar } from "@nextui-org/react";


export default function SettingsPage() {
    RouteGuard()
    const auth = getAuth();
    const user = auth.currentUser;

    const displayName = user?.displayName;
    const email = user?.email;
    const emailVerified = user?.emailVerified;
    const uid = user?.uid;
    const photoURL1 = user?.photoURL as string;

    const [name, setName] = useState(null!);
    const [photo, setPhoto] = useState(null!);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState(
        photoURL1 || ''
    );


    const currentUser = useAuth();

    console.log('current user', currentUser);

    function handleChange(e: any) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    }

    const handleChangeNameInput = (event: any) => {
        setName(event.target.value);
    };

    function handleClick() {
        upload(photo, currentUser, setLoading);
    }

    updateProfile(user, {
        displayName: name,
        photoURL: photo,
    })
        .then(() => {
            // Profile updated!
            // ...
        })
        .catch((error) => {
            console.log(error)
        });

    useEffect(() => {
        // @ts-ignore
        if (currentUser?.photoURL) {
            // @ts-ignore
            setPhotoURL(currentUser.photoURL);
        }
    }, [photoURL]);
    return (
        <>
            {(loading) ? <Loading /> : <div className="flex items-center flex-col justify-center mx-auto max-w-7xl">
                <form className="flex flex-col" onSubmit={() => console.log('sub')}>
                    <label
                        htmlFor="email-address-icon"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your Name
                    </label>
                    <div className="">
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John Doe"
                            onChange={handleChangeNameInput}
                        />
                    </div>

                    <div className="fields flex flex-col">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            htmlFor="user_avatar"
                        >
                            Upload Profile photo
                        </label>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="user_avatar_help"
                            id="user_avatar"
                            type="file"
                            onChange={handleChange}
                        />
                        <div
                            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="user_avatar_help"
                        ></div>

                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            disabled={loading || !photo}
                            onClick={handleClick}
                        >
                            Upload
                        </button>
                        <Avatar
                            aria-label='Image'
                            showFallback
                            src={photoURL}
                            alt="profil"
                            className="h-16 w-16 rounded-full object-cover border-blue-500  border-1"
                        />
                    </div>
                </form>
                <p>name: {displayName || 'none'}</p>
                <p>email: {email || 'none'}</p>
                <p>photoURL: {photoURL || 'none'}</p>
                <p>{emailVerified || 'none'}</p>
                <p>uid: {uid || 'none'}</p>
            </div>
            }
        </>
    )
}