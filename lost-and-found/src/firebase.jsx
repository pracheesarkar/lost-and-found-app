import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyDgo0o4UbeFx3Ze6zFp1wxIdQMzkTceGaQ",
        authDomain: "lost-and-found-74e81.firebaseapp.com",
        projectId: "lost-and-found-74e81",
        storageBucket: "lost-and-found-74e81.appspot.com",
        messagingSenderId: "612440360072",
        appId: "1:612440360072:web:2fbdef412279e19b0d4b3d",
        measurementId: "G-CR7X7GJ23V"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export{ firebaseApp, db };

