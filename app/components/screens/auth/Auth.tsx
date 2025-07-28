import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Loader } from '@/components/ui/Loader'
import CustomBtn from '@/components/ui/button/Button'
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel
} from '@/components/ui/checkbox'
import { Field } from '@/components/ui/field/Field'
import { CheckIcon } from '@/components/ui/icon'

import { IAuthFormData } from '@/types/auth.interface'

const Auth = () => {
  const [isReg, setIsReg] = useState(false)
  const [checked, setChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { control } = useForm<IAuthFormData>({
    mode: 'onChange'
  })

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid
      extraScrollHeight={20}
      keyboardShouldPersistTaps='handled'
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className='flex-1 items-center justify-center bg-white px-4'>
          <View className='w-10/12 max-w-md'>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <Text className='text-2xl text-center mb-4'>
                  {isReg ? 'Sign up' : 'Sign in'}
                </Text>

                <Field<IAuthFormData>
                  placeholder='Введите логин'
                  keyboardType='email-address'
                  control={control}
                  name='email'
                  rules={{ required: 'Email is required!' }}
                />

                <Field<IAuthFormData>
                  placeholder='Введите пароль'
                  control={control}
                  name='password'
                  secureTextEntry
                  rules={{ required: 'Password is required!' }}
                />

                <View className='items-center mt-4'>
                  <CheckboxGroup>
                    <Checkbox
                      value='accept'
                      isInvalid={false}
                      isDisabled={false}
                    >
                      <CheckboxIndicator className='w-6 h-6 border border-gray-400 rounded-md justify-center items-center'>
                        <CheckboxIcon
                          as={CheckIcon}
                          className='w-4 h-4 text-primary'
                          style={{ fill: 'none' }}
                        />
                      </CheckboxIndicator>

                      <CheckboxLabel className='text-primary '>
                        Запомнить логин и пароль
                      </CheckboxLabel>
                    </Checkbox>
                  </CheckboxGroup>
                </View>

                <View className='items-center'>
                  <CustomBtn className='rounded-3xl mt-4 h-[45px] w-[150px]'>
                    Войти
                  </CustomBtn>
                </View>
              </>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

export default Auth
