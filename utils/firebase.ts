// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBAJz4O7QKgTlQrEvO_XgSMYqAoq4kgyYk',
  authDomain: 'inventario-equipos-e0a4e.firebaseapp.com',
  projectId: 'inventario-equipos-e0a4e',
  storageBucket: 'inventario-equipos-e0a4e.appspot.com',
  messagingSenderId: '376146822151',
  appId: '1:376146822151:web:ff0af666d3b26e926b56a2'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app
