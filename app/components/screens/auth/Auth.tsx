import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import { Loader } from '@/components/ui/Loader'
import { Field } from '@/components/ui/field/Field'

import { IAuthFormData } from '@/types/auth.interface'

const Auth = () => {
  const [isReg, setIsReg] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { control } = useForm<IAuthFormData>({
    mode: 'onChange'
  })

  return (
    <View className='flex-1 items-center justify-center'>
      <View className='w-10/12'>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Text className='text-2xl text-center'>
              {isReg ? 'Sign up' : 'Sign in'}
            </Text>

            <Field<IAuthFormData>
              placeholder='Enter email'
              keyboardType='email-address'
              control={control}
              name='email'
              rules={{ required: 'Email is required!' }}
            />
          </>
        )}
      </View>
    </View>
  )
}

export default Auth
