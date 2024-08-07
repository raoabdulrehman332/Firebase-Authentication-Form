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
              window.location.href = '.././index.html'
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
  
let userInput = document.getElementById("user-input");
let addUserBtn = document.getElementById("addUser");
let btnText = addUserBtn.innerText;
let recordsDisplay = document.getElementById("records")
let editId = null;

let usersArry = [];

let userId = []


let objStr = localStorage.getItem('users')

if(objStr!=null){
    
    usersArry= JSON.parse(objStr);
}


addUserBtn.addEventListener('click',()=>{
    
    Swal.fire({
        icon: "success",
        text: "Student Data has added",
      });
    let name = userInput.value;
    let  rollNo = Math.floor(Math.random()*10000 + 9999)
    userId.push(rollNo)

    
  
    if(editId != null){
        //edit
        let num =
        usersArry.splice(editId,1,{'users': name,'rollNo':usersArry[editId].rollNo})
        editId = null;
    }else{
        //insert             
        
        usersArry.push({'users': name,'rollNo': rollNo})
    }
    
    
    saveinfo(usersArry)
    userInput.value='';
    
    addUserBtn.innerText = btnText
})

function saveinfo(usersArry){
  let str =  JSON.stringify(usersArry)

    localStorage.setItem('users', str)
    displayinfo()

}





function displayinfo(){
    let statement = '';
    usersArry.forEach((element,i)=>{
        statement +=`<tr >
                        <th scope="row" class="text-center">${i+1}</th>
                        <td class="text-center">${element.rollNo}</td>
                        <td class="text-center">${element.users}</td>
                        <td class="text-center"><i  onclick="editinfo(${i})" class="fa btn-info btn text-white text-center">&#xf044; </i> <i onclick="deleteinfo(${i})" class="fa btn btn-danger text-white text-center">&#xf014;</i></td>
                      </tr>`
        
    });
    recordsDisplay.innerHTML = statement;  
}

function editinfo(id){
    editId = id;
    // let editArray =JSON.stringify(usersArry)
    userInput.value = usersArry[id].users; 

    addUserBtn.innerText = 'Save Changes'
}

function deleteinfo(id){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
        usersArry.splice(id,1);
        saveinfo(usersArry);
        displayinfo()
        }
      });
}




