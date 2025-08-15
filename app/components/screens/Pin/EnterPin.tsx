import React, { useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'

import CustomBtn from '@/components/ui/button/Button'

import { getPinCode } from '@/utils/pinStore'

const EnterPin = ({ onSuccess }: { onSuccess: () => void }) => {
  const [pin, setPin] = useState('')

  const handleCheck = async () => {
    const savedPin = await getPinCode()
    if (pin === savedPin) {
      onSuccess()
    } else {
      Alert.alert('Ошибка', 'Неверный PIN')
      setPin('')
    }
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='mb-4'>Введите PIN</Text>
      <TextInput
        value={pin}
        onChangeText={setPin}
        secureTextEntry
        keyboardType='numeric'
        maxLength={4}
        style={{ borderWidth: 1, padding: 8, width: 100, textAlign: 'center' }}
      />
      <CustomBtn onPress={handleCheck}>Войти</CustomBtn>
    </View>
  )
}

export default EnterPin
