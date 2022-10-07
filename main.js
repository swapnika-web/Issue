// import { createApp } from 'vue'
// import App from './App.vue'
// import { Quasar } from 'quasar'
// import quasarUserOptions from './quasar-user-options'
// import router from './router'
// // import store from '../src/store'
// import  {initializeApp} from 'firebase/app';



// const firebase= {
//     apiKey: "AIzaSyC1A3YEHwJzYrHkJkiMVq25t5d1h7KaTdM",
//     authDomain: "assignment-227ea.firebaseapp.com",
//     projectId: "assignment-227ea",
//     storageBucket: "assignment-227ea.appspot.com",
//     messagingSenderId: "897911298019",
//     appId: "1:897911298019:web:6a63f06191b9d236c3f2d6",
//     measurementId: "G-J5XTF7FF1H"
//   };
  
// initializeApp(firebase);

// createApp(App).use(Quasar, quasarUserOptions).use(Quasar, quasarUserOptions).use(Quasar, quasarUserOptions).use(Quasar, quasarUserOptions).use(Quasar, quasarUserOptions, firebase).use(router).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
// import quasarUserOptions from './quasar-user-options'
// import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'


createApp(App)
  .use(router,Quasar,quasarUserOptions)
  .mount('#app')
