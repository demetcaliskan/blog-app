import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ route }) => {
  const navigation = useNavigation()
  const id = route.params.id
  const { state, editBlogPost } = useContext(Context)
  const blogPost = state.find((post) => post.id === id)
  return (
    <>
      <BlogPostForm
        initialTitle={blogPost.title}
        initialContent={blogPost.content}
        buttonText={'Edit Blog Post'}
        onSubmit={(title, content) =>
          editBlogPost(id, title, content, () => {
            navigation.navigate('Index')
          })
        }
      />
    </>
  )
}

export default EditScreen
