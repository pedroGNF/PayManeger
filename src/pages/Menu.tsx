import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Modal } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from '../components/Button';
import {Header} from '../components/Header';


export function Menu(){
  const[loading, setLoadinig] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const navigation = useNavigation(); 
  function handleStart(){
    navigation.navigate('EnviarRecibo')
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Header/>
        <Text style={style.title}>
          Bem vindo a suas vendas !!!
        </Text>
      </View>

      <View  style={style.button}>
        <Button
        title={'+Novo'}
        onPress={()=>{setVisible(true)}}/>
      </View>

      <View style={style.centeredView}> 
        <Modal visible={isVisible} 
        transparent={true}>
          <View style={style.centeredView}> 
            <View style={style.modalView}>
              <View style={style.containerInput}>
                <Text style={style.textInput}> Produtos </Text>
                <TextInput
                  style={style.input}
                  placeholder="Digite os produtos"
                />
                <Text style={style.textInput}>Valor</Text>
                <TextInput 
                  style= {style.input}
                  placeholder="Digite o valor total"/>
              </View>

              <View  style={style.buttonModal}>
                <Button
                title={'Criar'}
                onPress={handleStart}/>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F1B656'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  title:{
    fontSize:17,
    color:'#0C141F',
    lineHeight:20,
    marginTop:15,

  },
  button:{
    paddingVertical:20,
    alignItems:'center'
  },
  buttonModal:{
    paddingVertical:20,
    alignItems:'center',
    width: '60%'
  },
  header:{
    paddingHorizontal:30,
  },
  input: {
    backgroundColor:'white',
    borderRadius:8,
    color: 'gray',
    width:'100%',
    fontSize:18,
    marginTop:5,
    padding:10,
    textAlign:'center'
  },
  containerInput: {
      justifyContent:'center',
      marginTop:50,
      paddingHorizontal:40,
      width:'100%'
  },
  textInput: {
      marginVertical:5,
      color:'#0C141F',
      fontSize:18,
      marginTop:5
  }
})