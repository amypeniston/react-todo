import firebase from 'firebase/firebase-browser';

try {
  var config = {
      apiKey: "AIzaSyDRCbH9YUmQdLf9Fas_-qoK2KG8aOntKBw",
      authDomain: "react-todo-app-484f8.firebaseapp.com",
      databaseURL: "https://react-todo-app-484f8.firebaseio.com",
      storageBucket: "react-todo-app-484f8.appspot.com",
      messagingSenderId: "815766715337"
    };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
