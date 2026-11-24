// การตั้งค่า Firebase ของระบบ สภ.บางปลาม้า (Public Web Config — ความปลอดภัยควบคุมด้วย Firebase Auth + firestore.rules)
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBBK4mFJd-srMUEqn5U-kHKuNPESBOiNt8',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'bangplama-insane-person.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'bangplama-insane-person',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'bangplama-insane-person.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '1010588367858',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:1010588367858:web:52beb86b03efe05640096b',
};

export function isFirebaseConfigured() {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.projectId &&
      firebaseConfig.appId &&
      !firebaseConfig.apiKey.startsWith('YOUR_')
  );
}
