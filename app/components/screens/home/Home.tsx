import React from 'react'
import { Text, View } from 'react-native'
import { Dimensions } from 'react-native'

import Layout from '@/components/layout/Layout'

import { useGetAllRequests } from '../Requests/useGetAllRequests'
import Header from './Header'

const Home = () => {
  const { requests, isLoading } = useGetAllRequests()
  const { width } = Dimensions.get('window')
  return (
    <Layout>
      <Header/>
      <Text>Home</Text>
    </Layout>
  )
}

export default Home
