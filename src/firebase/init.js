import firebase from 'firebase/app';
  
  // Initialize Firebase
  var config = {
        apiKey: "AIzaSyD9jRJoeRRFr5QapleGLYILpMTVMpfRkJ4",
        authDomain: "intranet-chatting-nttf.firebaseapp.com",
        projectId: "intranet-chatting-nttf",
        storageBucket: "intranet-chatting-nttf.appspot.com",
        messagingSenderId: "612193387045",
        appId: "1:612193387045:web:6d14bda93610a99c74f5cc",
        measurementId: "G-DC36NL3G64"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseApp.firestore();