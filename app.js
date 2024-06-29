import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfITm7Ud5AD7pI_wSsVkwW2lygPrHWdwk",
  authDomain: "authentiction-project-269c5.firebaseapp.com",
  projectId: "authentiction-project-269c5",
  storageBucket: "authentiction-project-269c5.appspot.com",
  messagingSenderId: "460374983986",
  appId: "1:460374983986:web:e46945934a254fa267c32b",
  measurementId: "G-S69X1BLWZC",
};


const app = initializeApp(firebaseConfig);
console.log("app=>", app);

const auth = getAuth(app);
console.log("auth=>", auth);

var email_signup = document.getElementById("email");
var password_signup = document.getElementById("password");
var btn_signup = document.getElementById("signup_btn");

var email_login = document.getElementById("email_login");
var password_login = document.getElementById("password_login");
var login_btn = document.getElementById("login_btn");

var logout_btn = document.getElementById("logout_btn");
var auth_container = document.getElementById("auth_container");
var user_container = document.getElementById("user_container");
var user_email = document.getElementById("user_email");

onAuthStateChanged(auth, (user) => {
  if (user) {
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email.innerText = user.email;
    console.log("User is logged In=>", user);
    const uid = user.uid;
  } else {
    console.log("User is signed out =>");
    // User is signed out
    auth_container.style.display = "block";
    user_container.style.display = "none";
    // ...
  }
});

btn_signup.addEventListener("click", () => {
  //   console.log("email=>", email_login.value);
  //   console.log("password=>", password_signup.value);
  createUserWithEmailAndPassword(
    auth,
    email_signup.value,
    password_signup.value
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user=>", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error->", errorCode, errorMessage);
      alert(errorMessage);
      // ..
    });
});

login_btn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email_login.value, password_login.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user after login=>", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

logout_btn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      
    })
    .catch((error) => {
      
    });
});
