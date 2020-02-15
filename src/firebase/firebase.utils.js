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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

     const userRef = firestore.doc(`users/$${userAuth.uid}`)

     const snapShot = await userRef.get()
     
     if(!snapShot.exists){
       const {displayName, email} = userAuth
       const createdAt = new Date()

       try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
       }catch(error){
        console.log('error creating user', error.message)
       }
     }

     return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  export default firebase