import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAjCXuc__dz8Gs18zleOcdycbCN54_r64o",
  authDomain: "material-f4f7f.firebaseapp.com",
  databaseURL: "https://material-f4f7f.firebaseio.com",
  projectId: "material-f4f7f",
  storageBucket: "material-f4f7f.appspot.com",
  messagingSenderId: "388107087036"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
