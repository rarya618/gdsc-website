// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

import {
  getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut 
} from "firebase/auth";

import {
  collection,
  getDoc, getDocFromServer, getDocs, query, where
} from "firebase/firestore";

import {getDatabase, get, set, child, ref} from "firebase/database";

import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
import UserDetails from "../dataTypes/UserDetails";
import Task from "../dataTypes/Task";
import Team from "../dataTypes/Team";
import { addToList, randomString } from "../App";
import UserTeam from "../dataTypes/UserTeam";

// testing config toggle
let isTesting = true;

// Your web app's Firebase configuration
const testConfig = {
  apiKey: "AIzaSyD1Z8u6LAQDrwBAd-t-aMzoYFpgrfjFH0E",
  authDomain: "gdscusyd-test.firebaseapp.com",
  projectId: "gdscusyd-test",
  storageBucket: "gdscusyd-test.appspot.com",
  messagingSenderId: "430942619633",
  appId: "1:430942619633:web:66d173a44511aef2d5e650",
  measurementId: "G-QN1CHDNMJM"
};

const prodConfig = {
  apiKey: "AIzaSyCdgEs7mefO_Woe3UJA7lgdlrtiqjpmfCI",
  authDomain: "gdsc-usyd.firebaseapp.com",
  projectId: "gdsc-usyd",
  storageBucket: "gdsc-usyd.appspot.com",
  messagingSenderId: "971303209941",
  appId: "1:971303209941:web:1866f25a953d3e1016cb5c",
  measurementId: "G-S1VSX495L5"
};

let appConfig = isTesting ? testConfig : prodConfig;

// Initialize Firebase
const app = firebase.initializeApp(appConfig);
const auth = getAuth(app);

// Initialize db
const db = app.firestore();

// get Realtime Database
const realtimeDb = getDatabase(app);

// get storage
const storage = getStorage();

// Initialize analytics
const analytics = getAnalytics(app);

// Initialize the Google Auth Provider
const googleProvider = new GoogleAuthProvider();

//Google SSO function
const googleSignIn = async () => {

  let status = false;

  await signInWithRedirect(auth, googleProvider);

  await getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    // Added '!' after result to resolve typescript compiler warning that result might be null
    const credential = GoogleAuthProvider.credentialFromResult(result!);
    const token = credential!.accessToken;

    // The signed-in user info.
    const user = result!.user;

    localStorage.setItem('Auth Token', user.refreshToken);
    // localStorage.setItem('Auth Token', token!);
    localStorage.setItem('userId', user.uid);

    status = true;

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
  console.log(status);
  return status;
};

// log in function
const firebaseSignIn = async (email: string, password: string, route?: string) => {
  let status = false;

  await signInWithEmailAndPassword(auth, email, password)
  .then((response) => {
    // @ts-ignore

    //Firebase recommends using getIdToken() in place of .refreshToken, but it doesn't seem to work
    localStorage.setItem('Auth Token', response._tokenResponse.refreshToken); 
    localStorage.setItem('userId', response.user.uid);

    status = true;
  })
  .catch ((error) => {
    if (error.message === "Firebase: Error (auth/wrong-password).") {
      alert("Incorrect password");
    } else if (error.message === "Firebase: Error (auth/user-not-found).") {
      alert("User not found");
    } else {
      alert(error.message);
    }
  })

  return status;
};

const firebaseSignUp = async (firstName: string, lastName: string, email: string, password: string) => {
  let status = false;
  
  await createUserWithEmailAndPassword(auth, email, password)
  .then(async (response) => {
    const user = response.user;

    // @ts-ignore
    localStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
    localStorage.setItem('userId', user.uid);

    await db.collection("users").doc(user.uid).set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      tasks: [],
      teams: []
    });

    status = true;
  })
  .catch((error) => {
    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
      alert("Email already exists. Try signing in.");
    } else {
      alert(error.message);
    }
  })

  return status;
};

const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } 
  
  catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
  localStorage.clear();
  window.location.href = "/";
};

const getUsersByTask = async (taskId: string) => {
  const filesRef = collection(db, 'users');
  const q = query(filesRef, where("tasks", "array-contains", taskId));

  const tempDoc: any = {};

  (await getDocs(q)).docs.map((doc) => {
    // @ts-ignore
    const file: UserDetails = {id: doc.id, ...doc.data()};

    tempDoc[doc.id] = file;
  })

  return tempDoc;
}

const getUser = async (uid: string) => {
  let docRef = db.collection('users').doc(uid);

  // @ts-ignore
  let tempDoc: UserDetails = (await getDocFromServer(docRef)).data();

  return tempDoc;
}

const getUserName = async (uid: string) => {
  let user = await getUser(uid);

  return user.firstName.trim() + " " + user.lastName.trim();
}

const updateTasksInUser = async (uid: string, tasks: string[]) => {
  await db.collection('users').doc(uid).update({tasks: tasks});
}

const updateTeamsInUser = async (uid: string, teams: UserTeam[]) => {
  await db.collection('users').doc(uid).update({teams: teams});
}

const getTasks = async () => {
  const filesRef = collection(db, 'tasks');
  const q = query(filesRef, where("available", "==", true));

  const tempDoc = (await getDocs(q)).docs.map((doc) => {
    // @ts-ignore
    const file: Task = {id: doc.id, ...doc.data()};

    return file;
  })

  return tempDoc;
}

const getTask = async (taskId: string) => {
  let docRef = db.collection('tasks').doc(taskId);

  // @ts-ignore
  let tempDoc: Task = {id: taskId, ...(await getDoc(docRef)).data()};

  return tempDoc;
}

const updateUsersInTask = async (taskId: string, users: string[]) => {
  await db.collection('tasks').doc(taskId).update({users: users});
}

const getEventData = async (eventCode: string) => {
  let docRef = db.collection('eventCodes').doc(eventCode);

  // @ts-ignore
  let tempDoc: {name: string, color?: string} = (await getDoc(docRef)).data();

  return tempDoc;
}

const checkIfUserHasTeam = async (userTeams: UserTeam[], type: string) => {
  let result = false;

  userTeams.forEach((team) => {
    if (team.type === type) {
      result = true;
      alert("You are already in a team")
      return
    }
  })

  return result;
}

const checkIfUserOwnsTeam = async (uid: string) => {
  const teamsRef = collection(db, 'teams');
  const q = query(teamsRef, where("owner", "==", uid));

  const tempDoc = (await getDocs(q)).docs.map((doc) => {
    // @ts-ignore
    const team: Team = {id: doc.id, ...doc.data()};

    return team;
  })

  return tempDoc;
}

const getTeamsByUser = async (uid: string) => {
  const teamsRef = collection(db, 'teams');
  const q = query(teamsRef, where("members", 'array-contains', uid));

  const tempDoc = (await getDocs(q)).docs.map((doc) => {
    // @ts-ignore
    const team: Team = {id: doc.id, ...doc.data()};

    return team;
  })

  return tempDoc;
}

const joinTeam = async (uid: string, teamId: string, pin: string, type: string) => {
  let tempUser: UserDetails = await getUser(uid);
  let success = false;

  let userTeams = tempUser.teams;

  if (!(await checkIfUserHasTeam(userTeams, type))) {
    let teamRef = db.collection('teams').doc(teamId);
    let teamSnapshot = await getDocFromServer(teamRef);

    if (teamSnapshot.exists()) {
      // @ts-ignore
      let tempTeam: Team = {id: teamId, ...teamSnapshot.data()};

      if (tempTeam.pin.toString() === pin) {
        let updatedMembers: string[] = addToList(tempTeam.members, uid);
        let updatedTeams: UserTeam[] = addToList(userTeams, {id: tempTeam.id, type: tempTeam.type});

        await updateMembersInTeam(teamId, updatedMembers);
        await updateTeamsInUser(uid, updatedTeams);
        success = true
      } else {
        alert("Incorrect PIN")
      }
    } else {
      alert("Incorrect Team ID")
    }
  }

  return success;
}

const updateMembersInTeam = async (teamId: string, members: string[]) => {
  await db.collection('teams').doc(teamId).update({members: members});
}

const createTeam = async (uid: string, name: string, pin: string, type: string) => {
  console.log('checking user info')
  let tempUser: UserDetails = await getUser(uid);
  let success = false;

  let userTeams = tempUser.teams;

  console.log('generating teamId')
  let teamId = randomString(6);
  console.log(teamId);

  if (!(await checkIfUserHasTeam(userTeams, type))) {
    let tempTeamWithoutId = {
      name: name,
      pin: parseInt(pin),
      open: true,
      type: type,
      owner: uid,
      members: [uid]
    }
    
    console.log('setting team')
    await db.collection("teams").doc(teamId).set({...tempTeamWithoutId});

    console.log('adding team to user')
    let updatedTeams: UserTeam[] = addToList(userTeams, {id: teamId, type: tempTeamWithoutId.type});
    
    await updateTeamsInUser(uid, updatedTeams);
    success = true;
  }

  return success;
}

let ctfSample = {
	"responses": {
	  "1": {
		"tries": 0,
		"time": 0,
		"correct": false
	  },
	  "2": {
		"tries": 0,
		"time": 0,
		"correct": false,
		"marked": false
	  },
	  "3": {
		"tries": 0,
		"time": 0,
		"correct": false
	  },
	  "4": {
		"tries": 0,
		"time": 0,
		"correct": false,
		"marked": false
	  },
	  "5": {
		"tries": 0,
		"time": 0,
		"correct": false
	  },
	  "6": {
		"tries": 0,
		"time": 0,
		"correct": false
	  },
	  "7": {
		"tries": 0,
		"time": 0,
		"correct": false
	  },
	  "8": {
		"tries": 0,
		"time": 0,
		"correct": false
	  }
	}
}

const getFromRealtimeDb = async (query: string) => {
  let result: any = null;

  const dbRef = ref(realtimeDb);

  await get(child(dbRef, query)).then((snapshot) => {
    if (snapshot.exists()) {
      result = snapshot.val();
    } else {
      result = null;
    }
  }).catch((error) => {
    console.error(error);
  });;

  return result;
}

const writeToRealtimeDb = async(location: string, data: any) => {
  return await set(ref(realtimeDb, location), data);
}

const getCTFQuestion = async (questionId: number) => {
  return await getFromRealtimeDb(`eventData/ctf/questions/${questionId}`);
  
}

const getCTFUsersData = async () => {
  return await getFromRealtimeDb(`eventData/ctf/userData`);
}

const getCTFUserResponses = async (userId: string) => {
  let results = await getFromRealtimeDb(`eventData/ctf/userData/${userId}/responses`);
  
  if (!results) {
    await writeToRealtimeDb(`eventData/ctf/userData/${userId}`, ctfSample);

    results = await getFromRealtimeDb(`eventData/ctf/userData/${userId}/responses`);
  }

  return results

}

const getCTFUserResponse = async (userId: string, questionId: number) => {
  return await getFromRealtimeDb(`eventData/ctf/userData/${userId}/responses/${questionId}`);  
}

const submitCTFResponse = async (userId: string, questionId: number, response: {time: number, tries: number, correct?: boolean, marked?: boolean}) => {
  return await writeToRealtimeDb(`eventData/ctf/userData/${userId}/responses/${questionId}`, response);  
}

const getQuestionURLfromStorage = async (fileName: string) => {
  // securely gets download URL from Firebase storage
  console.log(`getQuestionURLfromStorage`);
  return await getDownloadURL(storageRef(storage, 'eventData/ctf/' + fileName ))
  .catch((error) => {
    console.error(error);
  });
}

export {
    app, db, analytics, storage,
    firebaseSignIn, firebaseSignUp, resetPassword, logout,
    getUser, updateTasksInUser, getUserName, getUsersByTask,
    getTasks, getTask, updateUsersInTask,
    getEventData, writeToRealtimeDb, getCTFUsersData,
    joinTeam, createTeam, checkIfUserHasTeam, checkIfUserOwnsTeam, getTeamsByUser,
    getCTFQuestion, getCTFUserResponses, getCTFUserResponse, submitCTFResponse,
    storageRef, getDownloadURL, getQuestionURLfromStorage, googleSignIn
};