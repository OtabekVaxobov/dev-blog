// import { initializeApp } from 'firebase/app';
// import { getApps, getApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import {
//   GoogleAuthProvider,
// } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// // import { getAnalytics } from "firebase/analytics";

// // vars
// const API_KEY = process.env.NEXT_PUBLIC_API_KEY
// const AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN
// const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID
// const STORAGE_BUCKET = process.env.NEXT_PUBLIC_STORAGE_BUCKET
// const MESSAGINGSENDERID = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID
// const APP_ID = process.env.NEXT_PUBLIC_APP_ID
// const MEASURMENT_ID = process.env.NEXT_PUBLIC_MEASURMENT_ID


// const firebaseConfig = {
//   // apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID, //
//   // appId: process.env.NEXT_PUBLIC_APP_ID,
//   // measurementId: process.env.NEXT_PUBLIC_MEASURMENT_ID,
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGINGSENDERID,
//   appId: APP_ID,
//   measurementId: MEASURMENT_ID
// };

// // Initialize Firebase
// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
// const auth = getAuth(app);
// console.log(auth)
// const provider = new GoogleAuthProvider();
// const database = getDatabase(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app);
// // const analytics = getAnalytics(app);

// export { auth, provider, database, firestore, storage }
