import { ref, onUnmounted } from "vue";
// import initializeApp from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1A3YEHwJzYrHkJkiMVq25t5d1h7KaTdM",
  authDomain: "assignment-227ea.firebaseapp.com",
  projectId: "assignment-227ea",
  storageBucket: "assignment-227ea.appspot.com",
  messagingSenderId: "897911298019",
  appId: "1:897911298019:web:6a63f06191b9d236c3f2d6",
  measurementId: "G-J5XTF7FF1H",
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};


export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};
