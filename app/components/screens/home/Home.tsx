import React from 'react'
import { Dimensions, Text } from 'react-native'

import Layout from '@/components/layout/Layout'

import { useGetAllRequests } from '../Requests/useGetAllRequests'

import Header from './Header'
import Slide from './Slide'

const Home = () => {
  const { requests, isLoading } = useGetAllRequests()
  const { width } = Dimensions.get('window')
  return (
    <Layout>
      <Header />
      <Slide />
      <Text>Home</Text>
    </Layout>
  )
}

export default Home
