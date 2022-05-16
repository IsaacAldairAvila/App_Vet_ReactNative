// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAKOBH_bpdQ2ojPDIkOB--CygxiEhBrbxY",
    authDomain: "myproyect-app.firebaseapp.com",
    projectId: "myproyect-app",
    storageBucket: "myproyect-app.appspot.com",
    messagingSenderId: "705344658680",
    appId: "1:705344658680:web:18a4336e005a7fc8fdef0d",
    measurementId: "G-2SWTEFKB7Q"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()
export { auth };