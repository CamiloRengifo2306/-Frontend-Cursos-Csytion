import firebase from 'firebase';

var firebaseConfig = {
   
  // variables de configuracion de conexion a firebase
    apiKey: "AIzaSyC01nygfyue78XFgRsC6GAvKpSXraeLf_8",
    authDomain: "csytion-cursos.firebaseapp.com",
    databaseURL: "https://csytion-cursos.firebaseio.com",
    projectId: "csytion-cursos",
    storageBucket: "csytion-cursos.appspot.com",
    messagingSenderId: "773100184307",
    appId: "1:773100184307:web:8628442940f74343090d86",
    measurementId: "G-LF0HD71QLK"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire; 



