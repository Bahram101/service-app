import cn from 'clsx'
import { useState } from 'react'
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native'
import { TabBar, TabBarItem, TabBarProps, TabView } from 'react-native-tab-view'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { getColorByStatus, getStatusColors } from './helpers'

type Order = {
  id: string
  title: string
  number: string
  date: string
  time: string
  address: string
  status: number
}

const activeData: Order[] = [
  {
    id: '1',
    title: 'ЗАМЕНА КАРТРИДЖА',
    number: '1564654',
    date: '13 август',
    time: '11:00 — 11:40',
    address: 'Мкр. Мамыр-4, дом 138',
    status: 1
  },
  {
    id: '2',
    title: 'УСТАНОВКА СИСТЕМЫ',
    number: '1564674',
    date: '13 август',
    time: '11:40 — 12:20',
    address: 'Мкр. Аксаи-4, дом 96, кв 10',
    status: 2
  },
  {
    id: '3',
    title: 'ЗАМЕНА КАРТРИДЖА',
    number: '1564632',
    date: '13 август',
    time: '11:00 — 11:40',
    address: 'Мкр. Таугуль-2, дом 17',
    status: 3
  },
  {
    id: '4',
    title: 'ПОТОП',
    number: '1564854',
    date: '13 август',
    time: '11:00 — 11:40',
    address: 'Мкр. Мамыр-4, дом 138',
    status: 4
  }
]

const Requests = () => {
  const layout = useWindowDimensions()
  const { navigate } = useTypedNavigation()
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'active', title: 'Активные' },
    { key: 'done', title: 'Выполненные' },
    { key: 'finished', title: 'Завершенные' }
  ])

  const List = ({ data }: { data: any }) => {
    if (!data.length) return <Text className='text-center mt-4'>Пусто</Text>
    return (
      <FlatList
        data={data}
        keyExtractor={i => i.id}
        renderItem={({ item }) => <OrderCard item={item} />}
        // contentContainerStyle={{ padding: 12 }}
      />
    )
  }

  const OrderCard = ({ item }: { item: Order }) => {
    return (
      <Pressable
        className='bg-white mt-3 rounded-2xl p-4'
        onPress={() => navigate('RequestDetail', { id: item.id })}
      >
        <View className='flex-row justify-between items-center mb-3'>
          <Text className={cn('bg-success-50 px-2 py-1 rounded-lg text-xs')}>
            {item.title}
          </Text>
          <Text className='text-[#374151] text-sm'>ЗАЯВКА № {item.number}</Text>
        </View>
        <View className='flex-row justify-between'>
          <View className='flex-row items-start gap-3 border-l-4 border-primary pl-3'>
            <View className='gap-2'>
              <Text>{item.date}</Text>
              <Text>{item.time}</Text>
              <Text>{item.address}</Text>
            </View>
          </View>
          <View className='flex-col-reverse'>
            <View className='flex-row items-center'>
              <Text
                className={cn('text-sm mr-2', getStatusColors(item.status).text)}
              >
                {item.status === 1
                  ? 'Активная'
                  : item.status === 2
                    ? 'Срочная'
                    : ''}
              </Text>
              <View className='bg-success-50 w-6 h-6 rounded-full justify-center items-center ml-2'>
                <View className={cn('w-4 h-4 rounded-full', getStatusColors(item.status).bg)} />
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    )
  }

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case 'active':
        return <List data={activeData} />
      case 'done':
        return <List data={activeData} />
      case 'finished':
        return <List data={activeData} />
      default:
        return null
    }
  }

  return (
    <Layout>
      <Heading>Заявки</Heading>
      <View className='px-4 h-full pt-2'>
        <TabView
          lazy
          style={{ position: 'relative' }}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          removeClippedSubviews={false}
          renderTabBar={(props: TabBarProps<any>) => {
            return (
              <TabBar
                {...props}
                activeColor='black'
                inactiveColor='black'
                style={{
                  backgroundColor: '#D4D4D4',
                  height: 43,
                  borderRadius: 40
                }}
                contentContainerStyle={{
                  backgroundColor: 'transparent',
                  borderRadius: 30,
                  alignItems: 'center'
                }}
                indicatorStyle={{
                  backgroundColor: 'white',
                  height: '88%',
                  width: '32%',
                  borderRadius: 9999,
                  marginVertical: 2,
                  marginLeft: 3
                }}
                tabStyle={{
                  flex: 1
                  // width: 'auto',
                }}
                renderTabBarItem={itemProps => {
                  const { key, ...rest } = itemProps
                  return (
                    <TabBarItem
                      {...rest}
                      key={itemProps.key}
                      label={({ focused, color, labelText }) => (
                        <Text
                          style={{
                            fontSize: focused ? 14 : 14,
                            padding: 0
                            // fontSize: 12,
                            // fontWeight: focused ? 'bold' : '500',
                            // color
                          }}
                        >
                          {labelText}
                        </Text>
                      )}
                    />
                  )
                }}
              />
            )
          }}
        />
      </View>
    </Layout>
  )
}

export default Requests
