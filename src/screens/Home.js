import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native'
import { Context } from '../context/BlogContext'
import { Entypo } from '@expo/vector-icons'
const HomeScreen = ({ navigation }) => {

    const { state, deletePost } = useContext(Context)
    return (
        <>
            <FlatList
                data={state}
                keyExtractor={(item) => (item.title + item.id)}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                        <View style={styles.row}>
                            <Text>{item.title}-{item.id}</Text>
                            <TouchableOpacity onPress={() => deletePost(item.id)}>
                                <Entypo name='trash' style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                }}
            />
        </>
    )
}

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Entypo style={styles.addIcon}  name='plus'  />
            </TouchableOpacity>
        }
    }

}
const styles = StyleSheet.create({
    addIcon: {
        fontSize: 30,
        margin:10
    },
    icon: {
        fontSize: 35
    },
    text: {
        fontSize: 40
    },
    button: {
        backgroundColor: "grey",
        padding: 15,
        marginHorizontal: 50,
        margin: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        borderTopColor: 'grey',
        borderBottomWidth: 1,
    }
})

export default HomeScreen;