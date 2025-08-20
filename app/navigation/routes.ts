import Equipment from '@/components/screens/Equipment/Equipment'
import Home from '@/components/screens/Home/Home'
import Profile from '@/components/screens/Profile/Profile'
import Reports from '@/components/screens/Reports/Reports' 

import { IRoute } from './navigation.types'
import SetPin from '@/components/screens/Pin/SetPin'
import EnterPin from '@/components/screens/Pin/EnterPin'
import Requests from '@/components/screens/Requests/Requests'
import RequestDetail from '@/components/screens/Requests/RequestDetail'

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Requests',
    component: Requests
  },
  {
    name: 'RequestDetail',
    component: RequestDetail
  },
  {
    name: 'Equipment',
    component: Equipment
  },
  {
    name: 'Reports',
    component: Reports
  },
  {
    name: 'Profile',
    component: Profile
  },
  {
    name: 'SetPin',
    component: SetPin
  },
  {
    name: 'EnterPin',
    component: EnterPin
  }
]
