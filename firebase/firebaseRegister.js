// firebaseFunctions.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

// Criação de conta
export async function registrarUsuario(email, senha) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
  const user = userCredential.user;

 

  // Salva dados extras no Firestore
  await setDoc(doc(db, 'usuarios', user.uid), {
    email: user.email,
    criadoEm: new Date(),
  });

    
    
  return user;
}

// Login
export async function fazerLogin(email, senha) {
  const userCredential = await signInWithEmailAndPassword(auth, email, senha);
  return userCredential.user;
}
