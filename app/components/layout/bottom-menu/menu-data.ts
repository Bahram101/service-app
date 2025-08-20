import { IMenuItem } from './menu.interface'

export const menuItems: IMenuItem[] = [
  {
    iconName: 'home',
    path: 'Home',
    label: 'Главная'
  },
  {
    iconName: 'edit',
    path: 'Requests',
    label: 'Заявки'
  },
  {
    iconName: 'shopping-bag',
    path: 'Equipment',
    label: 'Инвентарь'
  },
  {
    iconName: 'message-circle',
    path: 'Reports',
    label: 'Сообщения'
  },
  // {
  //   iconName: 'more-horizontal'
  // }
  {
    iconName: 'user',
    path: 'Profile',
    label: 'Профиль'
  }
]
