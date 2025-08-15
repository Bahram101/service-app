import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

import CustomBtn from '@/components/ui/button/Button'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { savePinCode } from '@/utils/pinStore'

type Props = {}

const SetPin = (props: Props) => {
  const { navigate } = useTypedNavigation()
  const [confirmPin, setConfirmPin] = useState('')
  const [pin, setPin] = useState('')

  const handleSave = async () => {
    if (pin.length !== 4) {
      alert('PIN должен состоять из 4 цифр')
      return
    }
    if (pin !== confirmPin) {
      alert('PIN коды не совпадают')
      return
    }
    await savePinCode(pin.toString())
    navigate('Home')
  }

  console.log('pin', pin)
  return (
    <View className='flex-1 justify-center items-center '>
      <View>
        <View className='mb-4'>
          <Text>Введите новый PIN</Text>
          <TextInput
            value={pin}
            onChangeText={setPin}
            secureTextEntry
            keyboardType='numeric'
            maxLength={4}
          />
        </View>
        <View className='mb-4'>
          <Text>Подтвердите PIN</Text>
          <TextInput
            value={confirmPin}
            onChangeText={setConfirmPin}
            secureTextEntry
            keyboardType='numeric'
            maxLength={4}
          />
        </View>
        <CustomBtn onPress={handleSave}>Сохранить</CustomBtn>
      </View>
    </View>
  )
}

export default SetPin
