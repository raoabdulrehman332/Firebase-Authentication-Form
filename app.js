import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { app } from "./Firebase.mjs";
import { auth } from "./Firebase.mjs";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


// Get Input Fields
let userName = document.getElementById("userName")
let userEmail = document.getElementById("email")
let userPass = document.getElementById("password")

// Get Buttun 
let sign_up = document.getElementById("Sing-up")
let sign_in = document.getElementById("Sing-in")


// Sign up new users
sign_up.addEventListener('click',()=>{
if(userEmail.value == '' || userPass.value == '' || userName.value == ''){

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        text: "Please Fill All Fiels!",
      });
}
else{
 createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up 
        console.log('Sign up');
        const user = userCredential.user;
        console.log('user====>',user);
        console.log(!user === !user);

      // Alert Condition
        if(!user === !user){
          Swal.fire({
            title: "Good job!",
            text: "Your Account has Sign-Up!",
            icon: "success"
          });
        }
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode====>',errorCode);
        console.log('errorMessage====>',errorMessage);
        
       // Alert Condition
        if(!error === !error){
          Swal.fire({
            title: "Opps Error!",
            text: `Somthig went Wrong!
            Check in Console`,
            text2: '',
            icon: "error"
          });
        }
        // ..
      });
}})

// Sign in existing users
sign_in.addEventListener('click',()=>{


  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    
    
    const user = userCredential.user;
    
// Alert Condition
    if(!user === !user){
      Swal.fire({
        title: "Good job!",
        text: "Your Account has Sign-In!",
        icon: "success"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          
          // if account sign-in Location Change
          window.location.href = 'dashbord.html'
        };
    })
    
  }})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log('errorCode====>',errorCode);
    console.log('errorMessage====>',errorMessage);

    // Alert Condition
    if(!error === !error){
      Swal.fire({
        title: "Opps Error!",
        text: `Somthig went Wrong!
        Check in Console`,
        text2: '',
        icon: "error"
      });
    }

  });
})


