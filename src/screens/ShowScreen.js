import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ route }) => {
  const id = route.params.id
  const { state } = useContext(Context)
  const blogPost = state.find((post) => post.id === id)
  return (
    <>
      <Text>Show Screen</Text>
      <Text>{blogPost.title}</Text>
    </>
  )
}

const styles = StyleSheet.create({})

export default ShowScreen
