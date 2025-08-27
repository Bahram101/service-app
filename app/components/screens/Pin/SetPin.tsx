import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import CustomBtn from '@/components/ui/button/Button'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { savePinCode } from '@/utils/pinStore'

type Props = {}

const SetPin = (props: Props) => {
  const { navigate } = useTypedNavigation()
  const [confirmPin, setConfirmPin] = useState('')
  const [pin, setPin] = useState('')
  const [isConfirmStep, setIsConfirmStep] = useState(false)

  const handlePress = (num: string) => {
    // console.log('Pressed number:', num)
    if (isConfirmStep) {
      if (confirmPin.length < 4) setConfirmPin(confirmPin + num)
    } else {
      if (pin.length < 4) setPin(pin + num)
    }
  }

  const handleBackspace = () => {
    if (isConfirmStep) {
      setConfirmPin(confirmPin.slice(0, -1))
    } else {
      setPin(pin.slice(0, -1))
    }
  }

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

  if (!isConfirmStep && pin.length === 4) {
    setIsConfirmStep(true)
  }

  console.log('pin', pin)
  console.log('confirmPin', confirmPin)
  return (
    <View className='flex-1 justify-center items-center'>
      <View className='mb-16'>
        <View className='flex-row'>
          {[0, 1, 2, 3].map(i => {
            // console.log('item', i)
            return (
              <View
                key={i}
                className={`w-4 h-4 ml-4 mr-4 rounded-full ${
                  (isConfirmStep ? confirmPin : pin).length > i
                    ? 'bg-black'
                    : 'border border-gray-400'
                }`}
              />
            )
          })}
        </View>
      </View>
      <View className='w-3/4'>
        {[
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
          ['', '0', '<']
        ].map((row, rIndex) => (
          <View key={rIndex} className='flex-row justify-around mb-6'>
            {row.map((item, iIndex) => {
              if (item === '')
                return <View key={iIndex} className='w-16 h-16' />
              if (item === '<')
                return (
                  <TouchableOpacity
                    key={iIndex}
                    onPress={handleBackspace}
                    className='w-16 h-16 rounded-full bg-gray-100 justify-center items-center'
                  >
                    <Text className='text-2xl'>⌫</Text>
                  </TouchableOpacity>
                )
              return (
                <TouchableOpacity
                  key={iIndex}
                  onPress={() => {
                    handlePress(item)
                    if (isConfirmStep && confirmPin.length === 3) {
                      handleSave()
                    }
                  }}
                  className='w-20 h-20 rounded-full bg-grayLight justify-center items-center'
                >
                  <Text className='text-2xl'>{item}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        ))}
      </View>
    </View>
  )
}

export default SetPin
