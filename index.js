import { createRouter, createWebHistory } from 'vue-router'

import FirstForm from '@/components/FirstForm.vue'
import SecondForm from '@/components/SecondForm.vue'
import LandingPage from '@/components/LandingPage.vue'
import StepperSteps from '@/components/StepperSteps.vue'
import InputFields from '@/components/InputFields'
import TypeSelect from '@/components/TypeSelect'
import QButton from '@/components/QButton'
import CheckBox from '@/components/CheckBox'
import firebase from '@/config/firebase'
import LoginPage from '@/components/LoginPage.vue'
import EditUser from '@/views/EditUser'
import UserList from '@/components/UserList.vue'
import UserCreate from '@/components/UserCreate.vue'
import QCard  from '@/components/QCard.vue'
import App from '@/App.vue'

const routes = [

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  {
    path: '/App',
    name: 'app',
    component: App
  },
  {
    path: '/FirstForm',
    name: 'FirstForm',
    component: FirstForm
  },
  {
    path: '/SecondForm',
    name: 'SecondForm',
    component: SecondForm
  },
  {
    path: '/LandingPage',
    name :'LandingPage',
    component : LandingPage
  },
  {
    path: '/StepperSteps',
    name: 'StepperSteps',
    component : StepperSteps
  },

  {
    path: '/InputFields',
    name: 'InputFields',
    component: InputFields
  },
  {
    path: '/TypeSelect',
    name: 'TypeSelect',
    component: TypeSelect
  },
  {
    path: '/QButton',
    name: 'QButton',
    component: QButton
  },
  {
    path: '/CheckBox',
    name: 'Checkbox',
    component: CheckBox
  },
  {
    path: '/firebase',
    name: 'Firebase',
    component: firebase
  },
  {
    path: '/',
    name:'LoginPage',
    component: LoginPage
  },
 
  {
    path: '/UserList',
    name: 'userList',
    component: UserList
  },
  {
    path: '/UserCreate',
    name: 'UserCreate',
    component: UserCreate
  },
  {
  path: '/edit/:id',
  name: 'Edit',
  component: EditUser
  },
  {
    path: '/QCard/:id',
    name: 'Card',
    component: QCard
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
