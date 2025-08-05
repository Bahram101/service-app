import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumAsyncStorage, IAuthResponse } from '@/types/auth.interface'

import { request } from '@/api/request.api'

import { deleteTokensFromStorage, saveToStorage } from './auth.helper'

export const AuthService = {
  // async login(email: string, password: string) {
  //   try {
  //     const body = new URLSearchParams()
  //     body.append('username', email)
  //     body.append('password', password)
  //     body.append('grant_type', 'password')

  //     const response = await request({
  //       url: '/oauth/token',
  //       method: 'POST',
  //       data: body,
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         Authorization: 'Basic V0RSUDpwYXNzd29yZA=='
  //       }
  //     })

  //     console.log('res', response)

  //     if (response.accessToken) {
  //       await saveToStorage(response)
  //     } else {
  //       console.log('ELSE', response)
  //     }

  //     return response
  //   } catch (error) {
  //     console.log('🔴 Catch in login', error)
  //     throw error
  //   }
  // },

  async login(email: string, password: string) {
    const body = new URLSearchParams()
    body.append('username', email)
    body.append('password', password)
    body.append('grant_type', 'password')
    return await fetch('http://192.168.0.25:32001/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic V0VSUDpwYXNzd29yZA=='
      },
      body: body.toString()
    })
      .then(response => {
        console.log('RES111')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(async data => {
        console.log('✅ DATA:', data)
        if (data.access_token) {
          await saveToStorage(data)
        }
        return data
      })
      .catch(error => {
        console.log('❌ Error occurred:', error.message)
      })
  },

  async logout() {
    await deleteTokensFromStorage()
    await AsyncStorage.removeItem(EnumAsyncStorage.USER)
  }
}
