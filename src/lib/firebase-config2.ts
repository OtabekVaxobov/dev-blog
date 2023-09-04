import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
    GoogleAuthProvider,
} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// export default async () => {
//     const projectDir = process.env
//     loadEnvConfig(projectDir)
// }


const firebaseConfig = {
    apiKey: "AIzaSyBUHv5ixmo8Z1dkuU2WrKWp10XxUljdzzs",
    authDomain: "dev-blog-uz.firebaseapp.com",
    projectId: "dev-blog-uz",
    storageBucket: "dev-blog-uz.appspot.com",
    messagingSenderId: "510181127353",
    appId: "1:510181127353:web:f00204a7e0c46e7ff79768",
    measurementId: "G-6EYPX59FFT"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);



// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// Initialize Firebase
// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();


export { auth, provider }
