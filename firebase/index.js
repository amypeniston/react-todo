// temporary workaround uses 'firebase/firebase-browser'
import firebase from 'firebase/firebase-browser';

var config = {
    apiKey: "AIzaSyDRCbH9YUmQdLf9Fas_-qoK2KG8aOntKBw",
    authDomain: "react-todo-app-484f8.firebaseapp.com",
    databaseURL: "https://react-todo-app-484f8.firebaseio.com",
    storageBucket: "react-todo-app-484f8.appspot.com",
    messagingSenderId: "815766715337"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Amy',
    age: 25
  }
}).then(() => {
  console.log('Successful set to Firebase.');
}, (e) => {
  console.log('Error! Set failed.');
});

// ----- SET ------
// Set wipes all properties of app and then adds new data
//firebaseRef.child('app').set({
//  name: 'New name'
//});

// ----- UPDATE ------
// Update does not wipe entire dataset. Can be used on the base ref with multi-path updates or on individual child refs
firebaseRef.update({
  isRunning: false,
  'app/name': 'Todo Application'
});

firebaseRef.child('app').update({
  name: 'Todo Application'
});

// ----- DELETE ------
// Deletes app.name property
// firebaseRef.child('app/name').remove();

// Alternatively, update property to equal null
// firebaseRef.child('app').update({
//   name: null
// });

// ----- FETCH ------
firebaseRef.once('value').then((snapshot) => {
  console.log('Database fetched:',snapshot.val());
}, (e) => {
  console.log('Unable to fetch data', e);
});

// ----- LISTEN FOR CHANGES -----
firebaseRef.on('value', (snapshot) => {
  console.log('Got a new value:', snapshot.val());
});

// Remove all listeners on the reference
//firebaseRef.off();

var notesRef = firebaseRef.child('notes');

// Event listeners for children
notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push();
newNoteRef.set({
  text: 'Example Note',
  urgency: 'None'
});

// Shortening the push().set() syntax:
notesRef.push({
  text: 'Shortened Syntax'
});

// Example: Add a todos array to DB and push data to it:
    var todosRef = firebaseRef.child('todos');

    todosRef.on('child_added', (snapshot) => {
      console.log('todo added', snapshot.key, snapshot.val());
    });

    todosRef.push({
      todoText: 'Ex 1'
    });;

    todosRef.push({
      todoText: 'Ex 2'
    });
