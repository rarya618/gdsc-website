import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { app } from "./config";

// get auth
const auth = getAuth(app);

// Initialize the Google Auth Provider
const provider = new GoogleAuthProvider();

//Google SSO function
const googleSignIn = async () => {

  let status = false;

  // await signInWithRedirect(auth, googleProvider);
  console.log("Before Redirect!");
  // alert("Before Redirect!");
  // Start a sign in process for an unauthenticated user.
  await signInWithRedirect(auth, provider)
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage);
    // alert(errorMessage);
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
  // This will trigger a full page redirect away from your app
  console.log("Passed Redirect!");
  // alert("Passed Redirect!");
  // After returning from the redirect when your app initializes you can obtain the result
  await getRedirectResult(auth).then((credentials) => {
    if (credentials) {
      const user = credentials.user;
      localStorage.setItem('Auth Token', user.refreshToken);
      // localStorage.setItem('Auth Token', token!);
      localStorage.setItem('userId', user.uid);
      console.log("Logged in!");
    }
  }).catch((error) => {
    console.log(error);
  });
  // alert("Passed Result!");
  // const result = await getRedirectResult(auth);
  // if (result) {
  //   // This is the signed-in user
  //   const user = result.user;
  //   // This gives you a Facebook Access Token.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential!.accessToken;

  //   // The signed-in user info.
  //     // const user = result!.user;

  //     localStorage.setItem('Auth Token', user.refreshToken);
  //     // localStorage.setItem('Auth Token', token!);
  //     localStorage.setItem('userId', user.uid);
  // }
  // As this API can be used for sign-in, linking and reauthentication,
  // check the operationType to determine what triggered this redirect
  // operation.
  // const operationType = result!.operationType;

  // await getRedirectResult(auth)
  // .then((result) => {
  //   console.log("Entered Function!");
  //   // This gives you a Google Access Token. You can use it to access Google APIs.
  //   // Added '!' after result to resolve typescript compiler warning that result might be null
  //   const credential = GoogleAuthProvider.credentialFromResult(result!);
  //   const token = credential!.accessToken;

  //   // The signed-in user info.
  //   const user = result!.user;

  //   localStorage.setItem('Auth Token', user.refreshToken);
  //   // localStorage.setItem('Auth Token', token!);
  //   localStorage.setItem('userId', user.uid);

  //   status = true;

  //   // console.log(status);

  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;

  //   console.log(errorMessage);
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // })
  
  return status;
};

export {googleSignIn}