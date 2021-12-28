import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Modal, TextInput, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

  const [door, setDoor] = useState(false);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(false);
  const [link, setLink] = useState('');
  const [descript, setDescript] = useState('');
  

  
  function verify(){
    if (input === '') {alert('Insira um nome válido!'); return;};

    setDoor(true);
  }
  function grid1(){
    setImage(true);
    setLink(require('./src/images/hot1.jpg'));
    setDescript('R$ 17,03 / Hot Wheels - Sky Dome - Basquete Tokyo 2020 - GHC97');
  }
  function grid2(){
    setImage(true);
    setLink(require('./src/images/hot2.jpg'));
    setDescript('R$ 19,99 / Hot Wheels - Hi Beam - Ginástica Artistíca Tokyo 2020 - GHF54');
  }
  function grid3(){
    setImage(true);
    setLink(require('./src/images/hot3.jpg'));
    setDescript('R$ 15,99 / Hot Wheels - Velocita - Natação Tokyo 2020 - GHC99');
  }
  function grid4(){
    setImage(true);
    setLink(require('./src/images/hot4.jpg'));
    setDescript('R$ 24,99 / Hot Wheels - 10 Toyota Tundra - Baseball Tokyo 2020 - GHC92');
  }
  function grid5(){
    setImage(true);
    setLink(require('./src/images/hot5.jpg'));
    setDescript('R$ 29,99 / Hot Wheels - Skate Grom - Skateboard Tokyo 2020 - GHC96');
  }
  function grid6(){
    setImage(true);
    setLink(require('./src/images/hot6.jpg'));
    setDescript('R$ 17,03 / Hot Wheels - Toyota 2000 GT - Karate Tokyo 2020 - GHC98');
  }
  function grid7(){
    setImage(true);
    setLink(require('./src/images/hot7.jpg'));
    setDescript('R$ 11,99 / Hot Wheels Carros Básicos Sortidos - C4982 - Mattel');
  }
  function grid8(){
    setImage(true);
    setLink(require('./src/images/hot8.jpg'));
    setDescript('R$ 24,99 / Hot Wheels Trator a Ficção - Modelos Sortidos - Pica Pau');
  }
  function grid9(){
    setImage(true);
    setLink(require('./src/images/hot8.jpg'));
    setDescript('R$ 24,99 / Hot Wheels Trator a Ficção - Modelos Sortidos - Pica Pau');
  }
  function endall(){
    setDoor(false);
    setImage(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#5865F2' barStyle='light-content' />

      <Animatable.View animation="fadeInUp" useNativeDriver>
        <Text style={styles.title}>Loja de Hotwheels do Jhon</Text>
        
        <TextInput 
        placeholder='Insira seu usuário'
        placeholderTextColor='#747474'
        value={input}
        style={styles.input}
        onChangeText={ (texto) => setInput(texto) }
        />

          <TouchableOpacity onPress={verify} style={styles.head}>
            <Text style={styles.titleIn}>Entrar</Text>
            <Ionicons style={{marginLeft: 5, marginRight: 5}}name="arrow-forward-outline" size={40} color="#DDD" />  
          </TouchableOpacity>

      </Animatable.View>

     <Modal animationtype='bounceInUp' transparent={false} visible={door} >
       <SafeAreaView style={styles.container}>
        
           <Text style={styles.title}>Loja de Hotwheels do Jhon</Text>
           <Text style={styles.subtitle}> Usuário: {input} </Text>
           <Button title="Encerrar Compra"onPress={ () => endall() }></Button>      

         <View style={styles.images}>
         <TouchableOpacity onPress={grid1}><Image  source={require('./src/images/hot1.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.subdecription}>R$ 17,03 / Hot Wheels - Sky Dome</Text>
         <TouchableOpacity onPress={grid2}><Image  source={require('./src/images/hot2.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.subdecription}>R$ 19,99 / Hot Wheels - Hi Beam</Text>
         <TouchableOpacity onPress={grid3}><Image  source={require('./src/images/hot3.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.subdecription}>R$ 15,99 / Hot Wheels - Velocita</Text>
         <TouchableOpacity onPress={grid4}><Image  source={require('./src/images/hot4.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.subdecription}>R$ 24,99 / Hot Wheels - 10 Toyota Tundra</Text>
         <TouchableOpacity onPress={grid5}><Image  source={require('./src/images/hot5.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.subdecription}>R$ 29,99 / Hot Wheels - Skate Grom</Text>
         <TouchableOpacity onPress={grid6}><Image  source={require('./src/images/hot6.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.subdecription}>R$ 17,03 / Hot Wheels - Toyota 2000 GT</Text>
         <TouchableOpacity onPress={grid7}><Image  source={require('./src/images/hot7.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.subdecription}>R$ 11,99 / Hot Wheels Carros Básicos </Text>
         <TouchableOpacity onPress={grid8}><Image  source={require('./src/images/hot8.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
          <Text style={styles.subdecription}>R$ 24,99 / Hot Wheels Trator a Ficção</Text> 
          <TouchableOpacity onPress={grid9}><Image  source={require('./src/images/hot9.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
          <Text style={styles.subdecription}>R$ 24,99 / Hot Wheels Trator a Ficção</Text>  
          </View>
            
       </SafeAreaView>
     </Modal>

     <Modal animationtype='bounceInUp' transparent={false} visible={image} style={{backgroundColor: '#5865F2'}}>
     <Button title="Encerrar Compra"onPress={ () => endall() }></Button>
       <TouchableOpacity onPress={ () => setImage(false) }>
         <Ionicons style={{marginLeft: 5, marginRight: 5}}name="md-arrow-back" size={40} color="#DDD" />
       </TouchableOpacity>
       <Image source={link} style={styles.into} />
       <Text style={{textAlign:'center'}}>{descript}</Text>   
     </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  images:{
    height: 700,
    width: 400,
    backgroundColor: '#2C2F33',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#5865F2',
    borderWidth:1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems:'center',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
  },
  into:{
    height: 460,
    width: 320,
    backgroundColor: '#99AAB5',
    justifyContent: 'center',
    borderColor: '#000',
    flexDirection: 'column',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
    textAlign: 'center',

  },
  input:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    backgroundColor:'#99AAB5',
    padding:9,
    height: 45,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  container:{
    flex:1,
    backgroundColor: "#2C2F33"
  },
  title:{
    fontSize: 25,
    textAlign: 'center',
    color: '#DDD',
    backgroundColor:'#404EED'
  },
  titleIn:{
    fontSize: 25,
    textAlign: 'center',
    color: '#DDD',
  },
  subtitle:{
    fontSize: 25,
    textAlign: 'center',
    color: '#DDD',
    backgroundColor:'#5865F2'
  },
  enter:{
    color: '#FFF',
    fontSize: 20,
    marginLeft: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  head:{
    marginLeft:10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#5865F2',
    alignSelf: 'center',
  },
  subdecription:{
    textAlign:'center',
    color:'#99AAB5',
    height: 100, 
    width: 100, 
    flexDirection: 'row'
  }
})


