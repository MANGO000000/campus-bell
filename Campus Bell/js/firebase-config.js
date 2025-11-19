// Firebase SDK 임포트 (CDN 방식)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Firebase 설정 (위에서 복사한 코드)
const firebaseConfig = {
  apiKey: "AIzaSyCFmwsRhUlqBduS9wb9SNHxqc6YA-FLfnc",
  authDomain: "campus-bell-34710.firebaseapp.com",
  projectId: "campus-bell-34710",
  storageBucket: "campus-bell-34710.firebasestorage.app",
  messagingSenderId: "513126130252",
  appId: "1:513126130252:web:b78414d4277353c37e4ae9",
  measurementId: "G-0DX9SZMK3G"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 서비스 내보내기
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log('✅ Firebase 연결 성공!');
