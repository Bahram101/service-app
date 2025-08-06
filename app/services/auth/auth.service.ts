import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumAsyncStorage, IAuthResponse } from '@/types/auth.interface'

import { API_URL } from '@/config/api.config'

import {
  deleteTokensFromStorage,
  getAccessToken,
  saveToStorage
} from './auth.helper'

export const AuthService = {
  async login(email: string, password: string) {
    const body = new URLSearchParams({
      username: email,
      password,
      grant_type: 'password'
    }).toString()

    return await fetch(`${API_URL}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic V0VSUDpwYXNzd29yZA=='
      },
      body: body
    })
      .then(response => {
        console.log('NONO')
        if (!response.ok) {
          console.log('ERROR')
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(async data => {
        if (data.access_token) {
          await saveToStorage(data)
        }
        return data
      })
      .catch(error => {
        console.log('Error occurred:', error.message)
      })
  },

  async logout() {
    await deleteTokensFromStorage()
    await AsyncStorage.removeItem(EnumAsyncStorage.USER)
  }
}
