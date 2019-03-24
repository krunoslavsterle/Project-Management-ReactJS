import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: implement production environment.
const devConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

// Create a firebase instance.
app.initializeApp(devConfig);

const firebaseDatabase = app.database();
const firebaseAuth = app.auth();

export { firebaseDatabase, firebaseAuth };