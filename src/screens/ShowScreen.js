import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Entypo } from '@expo/vector-icons'
const Bloglist = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state } = useContext(Context)
    const blogPost = state.find((post) => post.id === id)
    return (
        <View>
            <Text>Title-{blogPost.title}</Text>
            <Text>Content-{blogPost.content}</Text>
        </View>
    )

}
Bloglist.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return <TouchableOpacity onPress={()=>{navigation.navigate('Edit',{id:navigation.getParam('id')})}}>
                <Entypo name="edit" size={35} />
            </TouchableOpacity>
        }
    }
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