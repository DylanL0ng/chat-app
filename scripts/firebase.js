let firebaseConfig = {
    apiKey: "AIzaSyB4WWdUMK7hdr2wnFfoss7KEGYbL9tAq0U",
    authDomain: "udemy-modern-js-2c6f5.firebaseapp.com",
    databaseURL: "https://udemy-modern-js-2c6f5.firebaseio.com",
    projectId: "udemy-modern-js-2c6f5",
    storageBucket: "udemy-modern-js-2c6f5.appspot.com",
    messagingSenderId: "986001743319",
    appId: "1:986001743319:web:37f8aaabcd2da7fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();