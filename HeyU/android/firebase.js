import * as firebase from 'firebase';

// should go in a secret file
var config = {
    apiKey: "AIzaSyA685NV3Vsxiz9fXNeX0MJDWtLayAR-JjU",
    authDomain: "heyu-184313.firebaseapp.com",
    databaseURL: "https://heyu-184313.firebaseio.com",
    projectId: "heyu-184313",
    storageBucket: "heyu-184313.appspot.com",
    messagingSenderId: "167382046822"
  };
firebase.initializeApp(config);

export default firebase;