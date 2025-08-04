import { EnumAsyncStorage, IAuthResponse } from '@/types/auth.interface'

import { request } from '@/api/request.api'

import { deleteTokensFromStorage, saveToStorage } from './auth.helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthService = {
  async login(email: string, password: string) {
    const response = await request<IAuthResponse>({
      url: '/auth/login',
      method: 'POST',
      data: { email, password }
    })

    if (response.accessToken) {
      await saveToStorage(response)
    }

    return response
  },

  async logout(){
    await deleteTokensFromStorage()
    await AsyncStorage.removeItem(EnumAsyncStorage.USER)
  }
}
