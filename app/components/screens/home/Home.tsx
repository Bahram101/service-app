import React from 'react'
import { Dimensions, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'

import Banner from './Banner'
import Header from './Header'
import RequestTypeList from './request-types/RequestTypeList'

const Home = () => {
  const { width } = Dimensions.get('window')

  return (
    <Layout>
      <Header />
      <View className='px-4 h-full pt-2'>
        <Banner />
        <RequestTypeList />
      </View>
    </Layout>
  )
}

export default Home
