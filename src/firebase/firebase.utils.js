import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA01UbGH2q07_fHpgl2bWw8pjKfM5KmlIk",
    authDomain: "crwn-db-eec82.firebaseapp.com",
    databaseURL: "https://crwn-db-eec82.firebaseio.com",
    projectId: "crwn-db-eec82",
    storageBucket: "crwn-db-eec82.appspot.com",
    messagingSenderId: "817032844328",
    appId: "1:817032844328:web:78e46429a9c1d941a0d11d",
    measurementId: "G-CKHKN2EG8C"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  export default firebase