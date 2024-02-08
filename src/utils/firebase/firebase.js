import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6F9kKTpSgIw2XEJBDjsjo4-sXNTybh_8",
  authDomain: "e-comm-f6178.firebaseapp.com",
  projectId: "e-comm-f6178",
  storageBucket: "e-comm-f6178.appspot.com",
  messagingSenderId: "93139771582",
  appId: "1:93139771582:web:b82ef24d251b17e3fabeef"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db =getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
      await setDoc(userDocRef,{
        displayName,email,createdAt
      })
    }
    catch(error){
      console.log("error",error.message);
    }
  }
  return userDocRef;
}