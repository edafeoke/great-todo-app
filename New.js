import React, { useState } from 'react'
import { View, StyleSheet, Text,  } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'


const Line = () => {
    return (
        <View style={styles.line}></View>
    )
}

const AddTodo = ({ setTodos, todos }) => {
    const [text, setText] = useState('')
    const p = (v) => {
        if (v != "") {
            console.log(v)
            setTodos([...todos, 
                {
                    title:v
                }
            ]);
            setText("")
        }

    }
    return (
        <View style={styles.card}>
            <TextInput value={text} onChangeText={(value) => setText(value)} style={styles.input} />
            <Button onPress={() => p(text)} title="INSERT" styles={{ ...styles.button }} />
        </View>
    )
}
const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}
            style={
                {
                    backgroundColor: "green",
                    marginTop: 5,
                    padding: 5,
                }
            }>
            <Text style={{
                color: "#fff",
            }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const Todo = ({ title }) => {
    return (
        <View style={styles.todoItem}>
            <Text>{title}</Text>
            
        </View>
    )
}
const Todos = ({ todos }) => {
    return (
        <View style={[styles.card, { flex: 1, marginVertical: 10 }]}>
            {todos.map((v, i) => (
                <Todo title={v.title} key={i} style={styles.todoItem}/>
            ))}
        </View>
    )
}

const New = () => {
    const [todos, setTodos] = useState([
        {
            title:"Complete video creation",
            key:'1',
            isCompleted: false
        },
        {
            title:"Complete video creation",
            key:'2',
            isCompleted: false
        },
        {
            title:"Complete video creation",
            key:'3',
            isCompleted: false
        },
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>great todo</Text>
            <Line />
            <AddTodo todos={todos} setTodos={setTodos} />
            <Todos todos={todos} />

        </View>
    )
}

export default New

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'brown',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    heading: {
        fontSize: 24,
        color: 'white',
        margin: 8,
        textTransform: 'uppercase'
    },
    line: {
        width: '90%',
        height: .5,
        backgroundColor: '#fff',
        margin: 8,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    input: {
        width: '90%',
        padding: 5,
        borderColor: 'brown',
        borderWidth: .5,
        color: 'black',
        // borderRadius:10,
    },
    button: {
        backgroundColor: 'green',
        color: "white",
    },
    todoItem: {
        backgroundColor: '#fff',
        width:'90%',
        flexDirection:'row',
        marginVertical:5,
        padding:5,

    }
})