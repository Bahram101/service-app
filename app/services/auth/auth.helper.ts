import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'

import {
  EnumAsyncStorage,
  EnumSecureStore,
  IAuthResponse,
  ITokens
} from '@/types/auth.interface'

import { API_URL } from '@/config/api.config'

export const getAccessToken = async () => {
  const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN)
  return accessToken || null
}

export const getRefreshToken = async () => {
  const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
  return refreshToken || null
}

export const getUserFromStorage = async () => {
  console.log('GETUserFromStorage')
  try {
    return JSON.parse(
      (await AsyncStorage.getItem(EnumAsyncStorage.USER)) || '{}'
    )
  } catch (error) {
    return null
  }
}

export const saveAccessToken = async (token: string) => {
  await setItemAsync(EnumSecureStore.ACCESS_TOKEN, token)
}

export const saveTokensToStorage = async (data: ITokens) => {
  await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.access_token)
  await setItemAsync(EnumSecureStore.REFRESH_TOKEN, data.refresh_token)
}

export const deleteTokensFromStorage = async () => {
  await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)
  await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)
}

export const saveToStorage = async (data: IAuthResponse) => {
  await saveTokensToStorage(data)
  try {
    await AsyncStorage.setItem(
      EnumAsyncStorage.USER,
      JSON.stringify({
        user_full_name: data.user_full_name,
        user_id: data.user_id
      })
    )
  } catch (error) {}
}

export const getNewTokens = async () => {
  console.log('getNewTokens')
  try {
    const refreshToken = await getRefreshToken()

    if (!refreshToken || typeof refreshToken !== 'string') {
      throw new Error('Refresh token is missing or invalid!!')
    }

    const response = await axios.post<string, { data: IAuthResponse }>(
      API_URL + '/auth/refresh-token',
      { refreshToken },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    console.log('response', response)

    if (response.data.access_token)
      await saveAccessToken(response.data.access_token)

    return response
  } catch (e) {
    console.log('Error new token', e)
    throw e
  }
}
