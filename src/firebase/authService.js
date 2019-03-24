import { firebaseAuth } from "./firebase";

class AuthService {
  doCreateUserWithEmailAndPassword = (email, password) =>
    firebaseAuth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    firebaseAuth.signInWithEmailAndPassword(email, password);

  doSignOut = () => firebaseAuth.signOut();

  doPasswordReset = email => firebaseAuth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    firebaseAuth.currentUser.updatePassword(password);
}

export default AuthService;
