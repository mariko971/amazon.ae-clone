import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgympHY0AXFelNT0c7fyUP3zcM27vEGhc",
  authDomain: "ae-db-19d91.firebaseapp.com",
  projectId: "ae-db-19d91",
  storageBucket: "ae-db-19d91.appspot.com",
  messagingSenderId: "238998129612",
  appId: "1:238998129612:web:e297d65e3e99318c68ab69",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const provider = new GoogleAuthProvider();
export const auth = getAuth();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createCustomerProfile = async (userAuth, someData) => {
  const cart = {
    cartItems: [],
    orders: [],
  };
  const shippingInfo = {};

  if (!userAuth) return;
  const userRef = doc(db, `customers/${userAuth.uid}`);
  const querySnapshot = await getDoc(userRef);
  console.log(querySnapshot.exists());

  if (!querySnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(doc(db, "customers", userAuth.uid), {
        displayName,
        email,
        createdAt,
        cart,
        shippingInfo,
        ...someData,
      });
    } catch (error) {
      alert(`Error creating user!!....${error.message}`);
    }
  }
  return userRef;
};

export const userSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log(auth);
      alert("You have successfully signed out");
    })
    .catch((error) => {
      // An error happened.
      console.error(error);
    });
};

export const addShippingAddress = async (id, shippingData) => {
  const userRef = doc(db, `customers/${id}`);
  try {
    await updateDoc(userRef, {
      shippingInfo: shippingData,
    }).then(() => console.log("done"));
  } catch (error) {
    console.log(error.message);
  }
};

export const addToFirebaseCart = async (arr, id) => {
  const docRef = doc(db, `customers/${id}`);
  try {
    await updateDoc(docRef, {
      "cart.cartItems": arr,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addToFirebaseOrders = async (arr, id) => {
  const docRef = doc(db, `customers/${id}`);
  try {
    await updateDoc(docRef, {
      "cart.orders": arr,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// export const addDataToFirebase = async (ads_Data) => {
//   const adsDataRef = doc(db, `amazonDB`, "shop_Data");
//   try {
//     await setDoc(adsDataRef, {
//       ...ads_Data,
//     }).then(() => console.log("done"));
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const getDataFromDB = async () => {
  try {
    const shopDocRef = doc(db, "amazonDB", "shop_Data");
    const adsDocRef = doc(db, "amazonDB", "ads_Data");
    const shopSnapshot = await getDoc(shopDocRef).then(
      (res) => res.data().shop
    );
    const adsSnapshot = await getDoc(adsDocRef).then((res) => res.data());
    console.log(shopSnapshot, adsSnapshot);
    let data = {
      ads_Data: adsSnapshot,
      shop_Data: shopSnapshot,
    };
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// const shopSnapshot = await getDoc(shopDocRef).then((res) =>
// res.data().shop.reduce((acc, prev) => {
//   acc[prev.category] = prev.data;
//   return acc;
// }, {})
// );
