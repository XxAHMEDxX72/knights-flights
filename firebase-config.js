// Firebase Configuration
const firebaseConfig = {
  apiKey: "AizaSyArnAX1QbTlumDnjmvea1a1WvQFEjOqAKo",
  authDomain: "knights-flights.firebaseapp.com",
  databaseURL: "https://knights-flights-default-rtdb.firebaseio.com",
  projectId: "knights-flights",
  storageBucket: "knights-flights.firebasestorage.app",
  messagingSenderId: "888896009240",
  appId: "1:888896009240:web:77e9ecce7c4ad789adff6d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();