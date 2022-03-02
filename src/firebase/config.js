import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAI7EjmtY6IJkqG4jtL_vMKpfOgXnvB5sQ",
    authDomain: "mymoney-ecde2.firebaseapp.com",
    projectId: "mymoney-ecde2",
    storageBucket: "mymoney-ecde2.appspot.com",
    messagingSenderId: "624436546620",
    appId: "1:624436546620:web:d39cb518b9652a4d484739"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }