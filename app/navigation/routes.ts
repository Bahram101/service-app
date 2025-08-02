import Auth from '@/components/screens/auth/Auth'
import Home from '@/components/screens/home/Home'

import { IRoute } from './navigation.types'

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Cart',
    component: Cart
  },
  {
    name: 'Category',
    component: Category
  },
  {
    name: 'Product',
    component: Product
  }
]
