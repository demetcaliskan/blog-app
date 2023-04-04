import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
  const navigation = useNavigation()
  const { state, addBlogPost, deleteBlogPost } = useContext(Context)
  return (
    <>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Show', { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name='trash' />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
})

export default IndexScreen
