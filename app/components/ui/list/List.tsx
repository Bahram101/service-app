import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { IList } from './list.interface'

export const List: FC<IList> = ({ title, requests }) => {
  return (
    <View>
      {requests?.length ? (
        <View className=''>
          {requests.map(app => (
            <View
              key={app.id}
              className='p-5 bg-white mb-2 rounded-xl text- border-gray-200 flex-row justify-between'
            >
              <View className='flex-row items-center'>
                <Feather name={app.icon} size={24} />
                <Text className='ml-2'>{app.title}</Text>
              </View>
              <Text>3 шт</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text>Не найдено </Text>
      )}
    </View>
  )
}
