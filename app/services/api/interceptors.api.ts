import axios from 'axios'

import { getAccessToken, getNewTokens } from '@/services/auth/auth.helper'

import { API_URL } from '@/config/api.config'

import { logoutWithContext } from '../auth/auth.helper-context'
import { AuthService } from '../auth/auth.service'

import { errorCatch } from './error.api'

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(async config => {
  console.log('interceptors.request')
  const accessToken = await getAccessToken()
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

instance.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config
    console.log('IIInterceptors.response', error)
    if (error.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        console.log('INTERCEPTOR response')
        await getNewTokens()
        return instance.request(originalRequest)
      } catch (refreshError) {
        console.log('refreshError', refreshError)
        if (errorCatch(refreshError) === 'jwt expired') {
          console.log('Interceptor JWT expired')
          await logoutWithContext(AuthService.logout)
        }
      }
    }else{
      console.log('Interceptor ELSE')
    }

    throw error
  }
)

export default instance
