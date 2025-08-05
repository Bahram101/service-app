import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

import { EnumAsyncStorage, EnumSecureStore } from '@/types/auth.interface'

import { saveToStorage } from '@/services/auth/auth.helper'

import { API_URL } from '@/config/api.config'

import { IAuthResponse } from './../types/auth.interface'

export const getNewTokens = async () => {
  console.log('getNewToken')
  try {
    const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
    const response = await axios.post<
      { refreshToken: string },
      { data: IAuthResponse }
    >(
      API_URL + '/api/login/access-token',
      { refreshToken },
      { headers: { 'Content-Type': 'application/json' } }
    )
    if (response.data.accessToken) await saveToStorage(response.data)
    return response
  } catch (error) {}
}
