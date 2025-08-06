import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

import { EnumAsyncStorage, EnumSecureStore } from '@/types/auth.interface'

import { saveToStorage } from '@/services/auth/auth.helper'

import { API_URL } from '@/config/api.config'

import { IAuthResponse } from './../types/auth.interface'

export const getNewTokens = async () => { 
  try {
    const refresh_token = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
    const response = await axios.post<
      { refresh_token: string },
      { data: IAuthResponse }
    >(
      API_URL + '/api/login/access-token',
      { refresh_token },
      { headers: { 'Content-Type': 'application/json' } }
    )
    if (response.data.access_token) await saveToStorage(response.data)
    return response
  } catch (error) {}
}
