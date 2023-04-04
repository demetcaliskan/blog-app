import React, { useContext, useState } from 'react'
import { Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import { useNavigation } from '@react-navigation/native'

const CreateScreen = () => {
  const navigation = useNavigation()
  const { addBlogPost } = useContext(Context)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title='Add Blog Post'
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate('Index')
          })
        }
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    margin: 5,
  },
})

export default CreateScreen
