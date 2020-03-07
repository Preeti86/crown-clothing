import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGEa5Edz36NF04WZdsFJQcNTcV2LzNaJg",
  authDomain: "crown-clothing-13b0a.firebaseapp.com",
  databaseURL: "https://crown-clothing-13b0a.firebaseio.com",
  projectId: "crown-clothing-13b0a",
  storageBucket: "crown-clothing-13b0a.appspot.com",
  messagingSenderId: "754442235606",
  appId: "1:754442235606:web:f0700fa9709bcc79682377",
  measurementId: "G-LH6PJ3YL7M"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`);

 const snapShot = await userRef.get();

if(!snapShot.exists) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  } catch (error) {
    console.log('error creating user', error.message);
  }
 }

 return userRef;
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
