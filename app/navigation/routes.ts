import Auth from "@/components/screens/auth/Auth";
import { IRoute } from "./navigation.types";
import Home from "@/components/screens/home/Home";

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home
  },
  // {
  //   name: 'Auth',
  //   component: Auth
  // },
]