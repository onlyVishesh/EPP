import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


import 'firebase/firestore'; // Import the Firestore service


const firebaseConfig = {

    apiKey: "AIzaSyCVEO0pFtIcsnfVmIyQETwl8HZxIFe312U",
    authDomain: "epp-project-7a196.firebaseapp.com",
    projectId: "epp-project-7a196",
    storageBucket: "epp-project-7a196.appspot.com",
    messagingSenderId: "154158207155",
    appId: "1:154158207155:web:9509112f523240a59460c6"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };