import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBz3B4F0MvWcyls8FkGGGNNgrJpo7eJiLQ",
    authDomain: "payback-1c7e5.firebaseapp.com",
    projectId: "payback-1c7e5",
    storageBucket: "payback-1c7e5.appspot.com",
    messagingSenderId: "487080905240",
    appId: "1:487080905240:web:13b021d5027e9720c6516d",
    measurementId: "G-97H9QLJ577"
};

// Initialize Firebase
if (!firebase.apps.length) {
  const fire =  firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

//firestore instance
export const db =  firebase.firestore();

export default firebase;
