import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE4VAD78tYsarvt80gItpKMTvhGEkTDhQ",
  authDomain: "block-master-a2cd5.firebaseapp.com",
  projectId: "block-master-a2cd5",
  storageBucket: "block-master-a2cd5.appspot.com",
  messagingSenderId: "618279570909",
  appId: "1:618279570909:web:cc8f15e70d352c81a07a34"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const DB = getFirestore()

export{
  app,
  google, 
  facebook,
  DB
}