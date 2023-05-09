const firebaseConfig = {
    apiKey: "AIzaSyAfTEkT5bLo1KUUrAJLMfyjzn2ibmWcj0Y",
    authDomain: "software-infierno.firebaseapp.com",
    projectId: "software-infierno",
    storageBucket: "software-infierno.appspot.com",
    messagingSenderId: "1006175588740",
    appId: "1:1006175588740:web:e7301261646e7378f14dd1",
    measurementId: "G-MQBHD8H6WS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db