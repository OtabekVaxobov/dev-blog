import {
    User,
    getAuth,
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth';

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';

const auth = getAuth();
const storage = getStorage();

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        // @ts-ignore
        const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
        return unsub;
    }, []);

    return currentUser;
}

export async function upload(file: Blob | ArrayBuffer, currentUser: User, setLoading: any) {
    const fileRef = ref(storage, 'UserProfilePhotos/' + currentUser?.uid + '.png');

    setLoading(true);

    await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    if (currentUser) {
        updateProfile(currentUser, { photoURL });
    }


    setLoading(false);
    alert('profile changed! You must reload page!');
}