import { db } from "./firebaseInit";
import { doc, getDoc, setDoc } from "firebase/firestore";
export const checkUserInDatabase = async (uid) => {
  const userDocRef = doc(db, "users", uid);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return "newUser";
  }
};

export const createNewUserinDatabase = async (uid) => {
  await setDoc(doc(db, "users", uid), {
    isAdmin: false,
    isApproved: false,
    isLoggedin: false,
  });
};
