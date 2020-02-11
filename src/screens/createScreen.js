import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext'
const createScreen = ({ navigation }) => {
    const { addPosts } = useContext(Context)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return <View>
        <Text>Enter Title</Text>
        <TextInput style={Styles.input} value={title} onChangeText={setTitle} />
        <Text>Enter Content</Text>
        <TextInput style={Styles.input} value={content} onChangeText={(value) => { setContent(value) }} />

        <Button title='create' onPress={() => addPosts(title, content, () => {
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
export default createScreen;