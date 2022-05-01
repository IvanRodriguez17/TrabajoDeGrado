import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4_UeF59s4pyb2afzoQFT9XTFGlbUx9iw",
    authDomain: "prototipo-minimo-viable-2022.firebaseapp.com",
    projectId: "prototipo-minimo-viable-2022",
    storageBucket: "prototipo-minimo-viable-2022.appspot.com",
    messagingSenderId: "10200919927",
    appId: "1:10200919927:web:d34655e5fd2bd358777b72"
  };
  
  const filebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = getAuth();

  export { auth };
