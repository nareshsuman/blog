import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext'
const editScreen = ({ navigation }) => {
    const id = navigation.getParam('id')

    const { state, editPost } = useContext(Context)
    const blogPost = state.find((post) => post.id === id)
    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)


    return <View>
        <Text>Enter New Title </Text>
        <TextInput style={Styles.input} value={title} onChangeText={setTitle} />
        <Text>Enter New Content</Text>
        <TextInput style={Styles.input} value={content} onChangeText={(value) => { setContent(value) }} />
        <Button title='Save' onPress={() => editPost(id,title, content,()=>{
            navigation.navigate('Home')
        })} />
    </View>
}

const Styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        backgroundColor: 'grey',
        borderWidth: 1,
        padding: 5,
        margin: 10
    }
})
export default editScreen;