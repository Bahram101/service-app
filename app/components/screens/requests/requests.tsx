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
import { TabBar, TabView } from 'react-native-tab-view'

import Layout from '@/components/layout/Layout'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

type Order = {
  id: string
  title: string
  number: string
  date: string
  time: string
  address: string
}

const activeData: Order[] = [
  {
    id: '1',
    title: 'ЗАМЕНА КАРТРИДЖА',
    number: '1564654',
    date: '13 август',
    time: '11:00 — 11:40',
    address: 'Мкр. Мамыр-4, дом 138'
  },
  {
    id: '2',
    title: 'УСТАНОВКА СИСТЕМЫ',
    number: '1564674',
    date: '13 август',
    time: '11:40 — 12:20',
    address: 'Мкр. Аксаи-4, дом 96, кв 10'
  },
  {
    id: '3',
    title: 'ЗАМЕНА КАРТРИДЖА',
    number: '1564632',
    date: '13 август',
    time: '11:00 — 11:40',
    address: 'Мкр. Таугуль-2, дом 17'
  },
  {
    id: '4',
    title: 'ПОТОП',
    number: '1564854',
    date: '13 август',
    time: '11:00 — 11:40',
    address: 'Мкр. Мамыр-4, дом 138'
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
          <Text className='bg-[#DCFCE7] px-2 py-1 rounded-lg text-xs'>
            {item.title}
          </Text>
          <Text className='text-[#374151] text-sm'>ЗАЯВКА № {item.number}</Text>
        </View>
        <View className='flex-row items-start gap-3'>
          <View className='w-1 h-16 bg-[#16A34A] rounded-lg' />
          <View style={{ flex: 1 }}>
            <Text className='mb-2'>{item.date}</Text>
            <Text className='mb-2'>{item.time}</Text>
            <Text className='mb-2'>{item.address}</Text>
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
      <View className='px-4 h-full pt-2'>
        <Text className='text-xl text-center font-bold mb-2'>Заявки</Text>
        <View className='flex-1'>
          <TabView
            lazy
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            removeClippedSubviews={false}
            renderTabBar={props => {
              return (
                <TabBar
                  {...props}
                  style={{ backgroundColor: 'transparent' }}
                  contentContainerStyle={{
                    // marginHorizontal: 12,
                    backgroundColor: '#d2d2d2',
                    borderRadius: 9999
                  }}
                  indicatorStyle={{
                    // backgroundColor: '#fff', // фон активной вкладки — белый
                    backgroundColor: 'transparent',
                    height: '85%',
                    borderRadius: 9999,
                    marginVertical: 3
                  }}
                  tabStyle={{ width: 'auto' }}
                  pressColor='transparent'
                  renderLabel={({ route, focused }) => (
                    <Text
                      className={`px-4 py-1 ${focused ? 'font-bold' : 'font-semibold'}`}
                      style={{ color: focused ? '#000000' : '#374151' }}
                    >
                      {route.title}
                    </Text>
                  )}
                />
              )
            }}
          />
        </View>
      </View>
    </Layout>
  )
}

export default Requests
