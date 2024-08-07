// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQqJUxRK5vXeTDIFogPxaRIdVSRMo0lbo",
  authDomain: "batch-11-7f35f.firebaseapp.com",
  projectId: "batch-11-7f35f",
  storageBucket: "batch-11-7f35f.appspot.com",
  messagingSenderId: "592055584312",
  appId: "1:592055584312:web:792e36fe32b357eaaa48cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);