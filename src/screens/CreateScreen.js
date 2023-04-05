import React, { useContext, useState } from 'react'
import { Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import { useNavigation } from '@react-navigation/native'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = () => {
  const navigation = useNavigation()
  const { addBlogPost } = useContext(Context)
  return (
    <>
      <BlogPostForm
        buttonText={'Add Blog Post'}
        onSubmit={(title, content) =>
          addBlogPost(title, content, () => {
            navigation.navigate('Index')
          })
        }
      />
    </>
  )
}

export default CreateScreen
