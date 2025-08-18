import React from 'react'
import { FlatList, Text, View } from 'react-native'

type Props = {}

const Slide = (props: Props) => {
  type Scheme = 'red' | 'blue' | 'green'
  type StatItem = {
    id: string
    title: string
    value: number
    scheme: Scheme
    icon: 'doc' | 'check' | 'card'
  }

 
  // const ICONS = {
  //   doc: (c = '#0B0B0B') => <FileText size={18} color={c} />,
  //   check: (c = '#0B0B0B') => <BadgeCheck size={18} color={c} />,
  //   card: (c = '#0B0B0B') => <CreditCard size={18} color={c} />
  // }

  const DATA: StatItem[] = [
    {
      id: 'active',
      title: 'Активные заявки на сегодня',
      value: 17,
      scheme: 'red',
      icon: 'doc'
    },
    {
      id: 'done',
      title: 'Выполненные заявки на сегодня',
      value: 7,
      scheme: 'blue',
      icon: 'check'
    },
    {
      id: 'total',
      title: 'Заявки всего',
      value: 32,
      scheme: 'green',
      icon: 'card'
    }
  ]
  return (
    <View>
      <FlatList
        data={DATA}
        // keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View className='flex-row justify-between items-center bg-gray-50 rounded-xl px-4 py-3 mx-4 mt-3'>
            <Text className='text-green-800 text-base'>
             asdf
            </Text>
            <Text className='text-gray-600 font-semibold'>
              asdf
            </Text>
          </View>
        )}
      />
    </View>
  )
}

export default Slide
