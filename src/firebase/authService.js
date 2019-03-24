import { firebaseAuth } from "./firebase";

export const storageKey = "project-management-storage";

class AuthService {
  doCreateUserWithEmailAndPassword = (email, password) =>
    firebaseAuth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    firebaseAuth.signInWithEmailAndPassword(email, password);

  doSignOut = () => firebaseAuth.signOut();

  doPasswordReset = email => firebaseAuth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    firebaseAuth.currentUser.updatePassword(password);

  isAuthenticated = () => {
    return !!firebaseAuth.currentUser || !!localStorage.getItem(storageKey);
  };

  onAuthUserListener = (next, fallback) =>
    firebaseAuth.onAuthStateChanged(authUser => {
      if (authUser) {
        next(authUser);
      } else {
        fallback();
      }
    });
}

export let authService = new AuthService();
