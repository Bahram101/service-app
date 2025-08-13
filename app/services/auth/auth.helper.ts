import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'
import { get } from 'node_modules/axios/index.cjs'

import {
  EnumAsyncStorage,
  EnumSecureStore,
  IAuthResponse,
  ITokens
} from '@/types/auth.interface'

import { API_URL } from '@/config/api.config'
import { request } from '../api/request.api'

export const getAccessToken = async () => {
  const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN)
  return accessToken || null
}

export const getRefreshToken = async () => {
  const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
  return refreshToken || null
}

export const getUserFromStorage = async () => {
  // console.log('GETUserFromStorage')
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

    var bodyFormData = new FormData()
    bodyFormData.set('grant_type', 'refresh_token')
    bodyFormData.set('refresh_token', refreshToken)

    // const response = await axios.post<string, { data: IAuthResponse }>(
    //   API_URL + '/oauth/token',
    //   bodyFormData,
    //   {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       Authorization: 'Basic V0VSUDpwYXNzd29yZA=='
    //     }
    //   }
    // )
    const response = await request<IAuthResponse>({
      method: 'POST',
      url: API_URL + '/oauth/token',
      data: bodyFormData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic V0VSUDpwYXNzd29yZA=='
      }
    })

    // console.log('response', JSON.stringify(response, null, 2))

    if (response.access_token)
      await saveAccessToken(response.access_token)

    return response
  } catch (e) {
    console.log('Error new token', e)
    throw e
  }
}
