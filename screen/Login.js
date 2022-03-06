import React,{useState} from 'react';
import { Text,Image, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';
import styling from '../styling/styling';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create(styling)

const Login = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const login = () => {
        let obj = {
            email,password
        }
        navigation.navigate('Todo App',obj);
    }

  return (
    <View style={[styles.h100,styles.w100,styles.flexCenter]}>
    <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png' }} />
    <View style={[styles.w100,styles.p1]}>
      <TextInput required onChangeText={(e)=>setEmail(e)} keyboardType='email-address' placeholder='Email' style={[styles.input,styles.w100]} />
    </View>
    <View style={[styles.w100,styles.p1]}>
      <TextInput onChangeText={(e)=>setPassword(e)}  secureTextEntry={true} placeholder='Password' style={[styles.input,styles.w100]} />
    </View>
    <View style={[styles.w100,styles.p1,styles.flexRow]}>
      <TouchableOpacity onPress={login}style={styles.btn}>
        <Text style={[styles.txtWhite,styles.fs5,styles.textCenter]}><Icon
          name='login'
          type='AntDesign'
          color='#f50'
          />Login</Text>
      </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity>
        <Text style={[styles.fs,styles.txtprime]}>Don't have Account? Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

export default Login;