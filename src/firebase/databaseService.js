import { firebaseDatabase } from "./firebase";

class DatabaseService {
  projects = userId => firebaseDatabase.ref(`projects/${userId}`);
}

export let databaseService = new DatabaseService();
