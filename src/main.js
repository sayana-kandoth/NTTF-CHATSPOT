import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import store from './store'
import firebase from 'firebase'
// Required for side-effects
require("firebase/firestore");


createApp(App).use(router).mount('#app')

var config = {
    apiKey: "AIzaSyD9jRJoeRRFr5QapleGLYILpMTVMpfRkJ4",
    authDomain: "intranet-chatting-nttf.firebaseapp.com",
    projectId: "intranet-chatting-nttf",
    storageBucket: "intranet-chatting-nttf.appspot.com",
    messagingSenderId: "612193387045",
    appId: "1:612193387045:web:6d14bda93610a99c74f5cc",
    measurementId: "G-DC36NL3G64"
};

firebase.initializeApp(config);
var db = firebase.firestore();

//Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});
window.db= db;
new VTTCue({
    router,
    render: h => h(App)
}).$mount('#app')