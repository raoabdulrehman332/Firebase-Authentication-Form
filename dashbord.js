import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { app,auth } from "./Firebase.mjs";
import {onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


// Get id sign-out btn
let sign_out = document.getElementById("sign-Out");


// Sign-out
sign_out.addEventListener('click',()=>{
//    onAuthStateChanged
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        Swal.fire({
            title: "Good job!",
            text: "Your Account has Sign-Out!",
            icon: "success"
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              
              // if account sign-out Location Change
              window.location.href = 'index.html'
            };
        })
      }
    });


    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');

        Swal.fire({
            title: "Good job!",
            text: "Your Account has Sign-Out!",
            icon: "success"
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              
              // if account sign-out Location Change
              window.location.href = 'index.html'
            };
        })
       
        
      }).catch((error) => {
        // An error happened.
      });
  })
  