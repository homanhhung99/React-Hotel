import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB0RyI8O71X0NQaY6bvsAkJ3DRhDgRcCCo",
    authDomain: "hotel-e74e3.firebaseapp.com",
    projectId: "hotel-e74e3",
    storageBucket: "hotel-e74e3.appspot.com",
    messagingSenderId: "573373313912",
    appId: "1:573373313912:web:8ce28378844dced2d4ce8d",
    measurementId: "G-7WK77134JT"
  };
const fire =  firebase.initializeApp(firebaseConfig);
export default fire 