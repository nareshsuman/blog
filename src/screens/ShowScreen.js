import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
const Bloglist = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state } = useContext(Context)
    const blogPost = state.find((post) => post.id === id)
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

})

export default Bloglist;