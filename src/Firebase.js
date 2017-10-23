import { initializeApp } from 'firebase';

const app = initializeApp({
    // Initialize Firebase
    apiKey: "AIzaSyB8uowmkHVwoZJu3YZBq84VNOHVe5HBkS4",
    authDomain: "crudapp-c3e37.firebaseapp.com",
    databaseURL: "https://crudapp-c3e37.firebaseio.com",
    projectId: "crudapp-c3e37",
    storageBucket: "",
    messagingSenderId: "899035657355"
});

export const db = app.database();
export const namesRef = db.ref('names');