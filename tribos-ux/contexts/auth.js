import { useState, useEffect, useContext, createContext } from "react";
import firebase from "../firebase/clientApp";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem("");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  async function signIn(email, password) {
    setLoadingAuth(true);

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        const userProfile = await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .get();

        let data = {
          uid: uid,
          name: userProfile.data().name,
          avatarUrl: userProfile.data().avatarUrl,
          email: value.user.email,
        };

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      });
  }

  async function signUp(email, password, name) {
    setLoadingAuth(true);

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set({
            name: name,
            avatarUrl: null,
          })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
              avatarUrl: null,
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
          });
      })

      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      });
  }

  function storageUser(data) {
    localStorage.setItem("", JSON.stringify(data));
  }

  async function signOut() {
    await firebase.auth().signOut();
    localStorage.removeItem("");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signUp,
        signOut,
        signIn,
        loadingAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
