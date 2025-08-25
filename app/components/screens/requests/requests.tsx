import { useState } from 'react'
import {
  FlatList,
  ScrollView,
  Text,
  View,
  useWindowDimensions
} from 'react-native'
import { TabBar, TabBarItem, TabBarProps, TabView } from 'react-native-tab-view'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

import { IRequest } from '@/types/request.interface'

import RequestCard from './RequestCard/RequestCard'

const activeData: IRequest[] = [
  {
    id: 1,
    title: 'ЗАМЕНА КАРТРИДЖА',
    number: '1564654',
    date: '13 август',
    time: '11:00 — 11:40',
    address: 'Мкр. Мамыр-4, дом 138',
    status: 1,
    paymentType: '1'
  },
  {
    id: 2,
    title: 'УСТАНОВКА СИСТЕМЫ',
    number: '1564674',
    date: '13 август',
    time: '11:40 — 12:20',
    address: 'Мкр. Аксаи-4, дом 96, кв 10',
    status: 2,
    paymentType: '2'
  },
  {
    id: 3,
    title: 'ЗАМЕНА КАРТРИДЖА',
    number: '1564632',
    date: '13 август',
    time: '11:00 — 11:40',
    address: 'Мкр. Таугуль-2, дом 17',
    status: 3,
    paymentType: '1'
  },
  {
    id: 4,
    title: 'ПОТОП',
    number: '1564854',
    date: '13 август',
    time: '11:00 — 11:40',
    address: 'Мкр. Мамыр-4, дом 138',
    status: 4,
    paymentType: '1'
  }
]

const Requests = () => {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'active', title: 'Активные' },
    { key: 'done', title: 'Выполненные' },
    { key: 'finished', title: 'Завершенные' }
  ])

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

  const List = ({ data }: { data: any }) => {
    if (!data.length) return <Text className='text-center mt-4'>Пусто</Text>

    return (
      <>
        {index === 2 && (
          <Text className='mt-2 text-lg font-bold'>
            Завершенные заявки с 1 августа
          </Text>
        )}
        <FlatList
          data={data}
          keyExtractor={i => i.id}
          renderItem={({ item }) => (
            <RequestCard item={item} tabIndex={index} />
          )}
        />
      </>
    )
  }

  console.log('index', index)

  return (
    <Layout>
      <Heading>Заявки</Heading>
      <View className='px-4 h-full pt-2'>
        {/* <ScrollView
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 70 }}
        > */}
        <TabView
          lazy
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
                      key={itemProps.key}
                      {...rest}
                      label={({ labelText }) => (
                        <Text
                          style={{
                            fontSize: 14,
                            padding: 0
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
        {/* </ScrollView> */}
      </View>
    </Layout>
  )
}

export default Requests
