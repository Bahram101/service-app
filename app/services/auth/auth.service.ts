import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumAsyncStorage, IAuthResponse } from '@/types/auth.interface'

import { API_AUTH } from '@/config/api.config'

import { authInstance } from '../api/interceptors.api'

import {
  deleteTokensFromStorage,
  getAccessToken,
  saveToStorage
} from './auth.helper'
import Toast from 'react-native-toast-message'
import { errorCatch } from '../api/error.api'

export const AuthService = {
  async login(username: string, password: string) {
    try {
      const bodyFormData = new URLSearchParams({
        username,
        password,
        grant_type: 'password'
      })

      const { data } = await authInstance.post<IAuthResponse>(
        '/oauth/token',
        bodyFormData.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic V0VSUDpwYXNzd29yZA=='
          }
        }
      )

      if (data.access_token) {
        await saveToStorage(data)
      }

      return data
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Request error',
        text2: errorCatch(error)
      })
      throw error
    }
  },

  async logout() {
    await deleteTokensFromStorage()
    await AsyncStorage.removeItem(EnumAsyncStorage.USER)
  }
}
