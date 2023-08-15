// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

import {
  collection,
  getDoc, getDocFromServer, getDocs, query, where
} from "firebase/firestore";

import {
  getDatabase, get, set, child, ref as databaseRef
} from "firebase/database";

import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
import UserDetails from "../dataTypes/UserDetails";
import Hotspot from "../dataTypes/Hotspot";
import Team from "../dataTypes/Team";
import { addToList, randomString } from "../App";
import UserTeam from "../dataTypes/UserTeam";

let isTesting = false;

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
  apiKey: "AIzaSyBEndzsVaumPK9uS0DxuW6S2MNbjjje8iY",
  authDomain: "gdsc-usyd-admin.firebaseapp.com",
  projectId: "gdsc-usyd-admin",
  storageBucket: "gdsc-usyd-admin.appspot.com",
  messagingSenderId: "542207047899",
  appId: "1:542207047899:web:2939dacfd9c5b39b4274fe"
};

let appConfig = isTesting ? testConfig : prodConfig;

// Initialize Firebase
const app = firebase.initializeApp(appConfig);

// Initialize db
const db = app.firestore();

// get Realtime Database
const realtimeDb = getDatabase(app);

// get storage
const storage = getStorage();

// Initialize analytics
const analytics = getAnalytics(app);

// basic functions
// get db ref when given a collection name
const getDbRef = (collectionName: string) => {
  return collection(db, collectionName)
}

const getUsersByHotspot = async (hotspotId: string) => {
  const filesRef = getDbRef('users');
  const q = query(filesRef, where("hotspots", "array-contains", hotspotId));

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

const updateHotspotsInUser = async (uid: string, hotspots: string[]) => {
  await db.collection('users').doc(uid).update({hotspots: hotspots});
}

const updateTeamsInUser = async (uid: string, teams: UserTeam[]) => {
  await db.collection('users').doc(uid).update({teams: teams});
}

const getHotspots = async () => {
  const filesRef = getDbRef('hotspots');
  const q = query(filesRef, where("available", "==", true));

  const tempDoc = (await getDocs(q)).docs.map((doc) => {
    // @ts-ignore
    const file: Hotspot = {id: doc.id, ...doc.data()};

    return file;
  })

  return tempDoc;
}

const getHotspot = async (hotspotId: string) => {
  let docRef = db.collection('hotspots').doc(hotspotId);

  // @ts-ignore
  let tempDoc: Hotspot = {id: hotspotId, ...(await getDoc(docRef)).data()};

  return tempDoc;
}

// updates users in a hotspot
const updateUsersInHotspot = async (hotspotId: string, users: string[]) => {
  await db.collection('hotspots').doc(hotspotId).update({users: users});
}

// gets event data from event code
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

// rtdb operations
const getFromRealtimeDb = async (query: string) => {
  let result: any = null;

  const dbRef = databaseRef(realtimeDb);

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
  return await set(databaseRef(realtimeDb, location), data);
}

export {
  app, db, analytics, storage, getDbRef,
  getUser, updateHotspotsInUser, getUserName, getUsersByHotspot,
  getHotspots, getHotspot, updateUsersInHotspot, 
  getEventData, getFromRealtimeDb, writeToRealtimeDb,
  joinTeam, createTeam, checkIfUserHasTeam, checkIfUserOwnsTeam, getTeamsByUser,
  storageRef, getDownloadURL
};