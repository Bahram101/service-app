import Equipment from '@/components/screens/equipment/Equipment'
import Home from '@/components/screens/home/Home'
import Reports from '@/components/screens/reports/Reports'
import Requests from '@/components/screens/requests/requests'

import { IRoute } from './navigation.types'

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
    name: 'Equipment',
    component: Equipment
  },
  {
    name: 'Reports',
    component: Reports
  },
]
