import Rebase from "re-base";
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDtaGHMqPuqAVmioFf6gfnSnVGi78PfIFc",
    authDomain: "catchoftheday-24cac.firebaseapp.com",
    databaseURL: "https://catchoftheday-24cac-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "catchoftheday-24cac",
    storageBucket: "catchoftheday-24cac.appspot.com",
    messagingSenderId: "275732313011",
    appId: "1:275732313011:web:a90f9347dd99e98c3591c6",
    measurementId: "G-YQ7YNFQ1SN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;