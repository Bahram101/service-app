import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumAsyncStorage, IAuthResponse } from '@/types/auth.interface'

import { API_URL } from '@/config/api.config'

import {
  deleteTokensFromStorage,
  getAccessToken,
  saveToStorage
} from './auth.helper'

export const AuthService = {
  async login(username: string, password: string) {
    try {
      const body = new URLSearchParams({
        username,
        password,
        grant_type: 'password'
      }).toString()

      const response = await fetch(`${API_URL}/oauth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic V0VSUDpwYXNzd29yZA=='
        },
        body: body
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()

      if (data.access_token) {
        await saveToStorage(data)
      }
      return data
    } catch (error) {
      throw error
    }
  },

  async logout() {
    console.log('AuthService.logout')
    await deleteTokensFromStorage()
    await AsyncStorage.removeItem(EnumAsyncStorage.USER)
  }
}
