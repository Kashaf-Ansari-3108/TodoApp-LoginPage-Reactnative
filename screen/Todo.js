import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import styling from '../styling/styling';
import {useState} from 'react'
const styles = StyleSheet.create(styling)
const Todo = ({navigation,route}) => {
    const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [indexVal, setindexVal] = useState()

  const add = () => {
    if (isEdit) {
      // editing 
      list[indexVal] = text
      setList([...list])
      setIsEdit(false)
      setText('')
    } else {
      //add
      setList([...list, text])
      setText('')
    }

  }
  const del = () => {
    setList([]);
  }

  const deleteTodo = (ind) => {
    list.splice(ind, 1)
    setList([...list])
  }
  const editTodo = (ind) => {
    setText(list[ind])
    setIsEdit(true)
    setindexVal(ind)
  }
  return (
    <View style= {[styles.h100,styles.w100,styles.bgdark,styles.p1]}>
        <View style={[styles.m1,styles.p1,styles.fs5,styles.borderBottom1]}>
            <Text style={[styles.txtWhite,]}>Email: {route.params.email}</Text>
        </View>
      <Text style={[styles._h1,styles.txtWhite,styles.textCenter]}>ADD TODO LIST</Text>
      <View style={[styles.inputBox,styles.flexRow]}>
          <TextInput  placeholder="Add task...." placeholderTextColor={'#999'} value={text} onChangeText={(e) => setText(e)}style={[styles.input,{width:'70%'}]}/>
          <TouchableOpacity>
              <Text style={styles.txtWhite} onPress={add}><Icon
          name='add-task'
          type='MaterialIcons'
          color='#fff'
          size={50}
          /></Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.txtWhite} onPress={del}><Icon
          name='delete-forever'
          type='MaterialIcons'
          color='#fff'
          size={50}
          /></Text>
          </TouchableOpacity>
      </View>
      <ScrollView style={styles.card}>
         
          {list.map((e, i) => <View style={[{borderBottomColor: '#bbb',borderBottomWidth: StyleSheet.hairlineWidth},styles.flexRow,styles.justifyContentBetween,styles.m1,styles.p1]} key={i}>
              <View style={[styles.flexRow]}>
              <Icon
          name='list'
          type='Feather'
          color='#1b568d'
          size={30}
          />
              <Text style={[styles.fs3,styles.txtprime]}> {e}</Text>
              </View>
              <View style={[styles.flexRow,{justifyContent:'space-evenly'}]}>
                <TouchableOpacity onPress={() => editTodo(i)}>
                    <Text><Icon
          name='edit'
          type='FontAwesome'
          color='#1b568d'
          size={30}
          /></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTodo(i)}>
                    <Text><Icon
          name='delete'
          type='Feather'
          color='#1b568d'
          size={30}
          /></Text>
                </TouchableOpacity>
              </View>
              </View>)}
          
          
          </ScrollView>
    </View>
  );
}

export default Todo;