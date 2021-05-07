import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA3n7wqTCb4tp2s2B5lrUtdtPuHTSHyfAw",
    authDomain: "disney-clone-80dec.firebaseapp.com",
    projectId: "disney-clone-80dec",
    storageBucket: "disney-clone-80dec.appspot.com",
    messagingSenderId: "241629616643",
    appId: "1:241629616643:web:c992e8d601c1e1b61dcc36"
  };
  //init firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  // connecting to firestore
  const db=firebaseApp.firestore();
  //connect to firebase storage
  const storage=firebase.storage();
  //auth
  //adding fb auth
  const auth=firebase.auth();
  //adding google auth provider
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider,storage};
  export default db;