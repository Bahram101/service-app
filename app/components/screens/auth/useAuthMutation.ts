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
    mutationFn: ({ email, password }: IAuthFormData) => {
      return AuthService.login(email, password)
    },
    onSuccess: data => {
      reset()
      setUser(data.user)
    }
  })

  // return { loginSync, isLoading: isPending }
  return useMemo(
    () => ({
      loginSync,
      isLoading: isPending
    }),
    []
  )
}
