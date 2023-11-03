import HomeComp from './components/HomeComp.vue'
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import AddComp from "./components/AddComp.vue";
import UpdateComp from "./components/UpdateComp.vue";

import {createRouter,createWebHistory} from 'vue-router'

const routes = [
  {
    name: "HomeComp",
    component: HomeComp,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/login",
  },
  {
    name: "AddComp",
    component: AddComp,
    path: "/add",
  },
  {
    name: "UpdateComp",
    component:UpdateComp,
    path: "/update/:id",
  },
];

const router=createRouter({
  history:createWebHistory(),routes
})

export default router