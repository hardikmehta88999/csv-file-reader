import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAO3r39II_vlXuO3dk9aaVat-kGscFp9qg",
    authDomain: "music-player-4acd2.firebaseapp.com",
    databaseURL: "https://music-player-4acd2.firebaseio.com",
    projectId: "music-player-4acd2",
    storageBucket: "music-player-4acd2.appspot.com",
    messagingSenderId: "850609253128",
    appId: "1:850609253128:web:03fb7f1b6c146730ab1abd"
}
firebase.initializeApp(config);
export default firebase;