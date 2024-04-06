import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();

export const addCollectionsAndDocuments = async (collectionKey,objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{})
  return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
      await setDoc(userDocRef,{
        displayName,email,createdAt,...additionalInformation
      })
    }
    catch(error){
      console.log("error",error.message);
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
}

 export const SignOutUser = async () => await signOut(auth);

 export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback)