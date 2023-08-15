import { getDocs, query, where } from 'firebase/firestore';
import {db, getDbRef} from './config';
import EventObject from '../dataTypes/EventObject';
import EventObjectWithoutId from '../dataTypes/EventObjectWithoutId';
import { randomString } from '../App';

// create an event
const createEvent = async (data: any) => {
  let status = false;

  let eventWithoutId: EventObjectWithoutId = {
    ...data,
    active: true
  }

  let eventId = randomString(6);

  await db.collection("events").doc(eventId).set({...eventWithoutId}).then(() => {
    status = true;
  });

  return status
}

// delete an event
const deleteEvent = async (eventId: string) => {
  await db.collection('events').doc(eventId).delete();
}

// update an event
const updateEvent = async(eventId: string, updatedData: any) => {
  await db.collection('events').doc(eventId).update({...updatedData});
}

// get all active events
const getActiveEvents = async () => {
  const dataRef = getDbRef('events');
  const q = query(dataRef, where("active", "==", true));

  const tempDoc = (await getDocs(q)).docs.map((doc) => {
    // @ts-ignore
    const data: EventObject = {id: doc.id, ...doc.data()};

    return data;
  })

  return tempDoc;
}

export { 
  createEvent, 
  deleteEvent, 
  updateEvent, 
  getActiveEvents 
}