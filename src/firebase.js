import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCF3he5hYHnn_PMNYz7oZf0-nk4Ym1NJ5E",
  authDomain: "taskmanager-ec3aa.firebaseapp.com",
  databaseURL: "https://taskmanager-ec3aa.firebaseio.com",
  projectId: "taskmanager-ec3aa",
  storageBucket: "taskmanager-ec3aa.appspot.com",
  messagingSenderId: "562232183908" 
});

export const db = firebase.firestore();