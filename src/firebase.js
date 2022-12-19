import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANCG6HSLk0nljgfiGtwTAefH3Se2RtHzc",
  authDomain: "prifina---data-cloud-pro-1f5e9.firebaseapp.com",
  projectId: "prifina---data-cloud-pro-1f5e9",
  storageBucket: "prifina---data-cloud-pro-1f5e9.appspot.com",
  messagingSenderId: "439075305371",
  appId: "1:439075305371:web:05f24048431d3829e9133e",
  measurementId: "G-J8850HT981"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)