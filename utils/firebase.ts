import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBAJz4O7QKgTlQrEvO_XgSMYqAoq4kgyYk',
  authDomain: 'inventario-equipos-e0a4e.firebaseapp.com',
  projectId: 'inventario-equipos-e0a4e',
  storageBucket: 'inventario-equipos-e0a4e.appspot.com',
  messagingSenderId: '376146822151',
  appId: '1:376146822151:web:ff0af666d3b26e926b56a2'
}

const app = initializeApp(firebaseConfig)

export default app
