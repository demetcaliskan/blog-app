import React, { useState } from 'react'
import { Text, TextInput, Button, StyleSheet } from 'react-native'

const BlogPostForm = ({
  initialTitle,
  initialContent,
  buttonText,
  onSubmit,
}) => {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)
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
      <Button title={buttonText} onPress={() => onSubmit(title, content)} />
    </>
  )
}

BlogPostForm.defaultProps = {
  initialTitle: '',
  initialContent: '',
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

export default BlogPostForm
