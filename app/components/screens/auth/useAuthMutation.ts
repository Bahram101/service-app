import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/types/auth.interface'

import { AuthService } from '@/services/auth/auth.service'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
  const { setUser } = useAuth()

  const { mutate: loginSync, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: ({ username, password }: IAuthFormData) => { 
      return AuthService.login(username, password)
    },
    onSuccess: data => {
      reset()
      setUser(data)
    }
  })

  return useMemo(
    () => ({
      loginSync,
      isLoading: isPending
    }),
    [loginSync, isPending]
  )
}
