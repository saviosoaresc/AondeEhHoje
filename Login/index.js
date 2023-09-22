import React, { useState } from "react";


import {
  View,
  Pressable,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Vibration
} from "react-native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [hidePass, setHidepass] = useState(true);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [confirmation, setConfirmation] = useState(null)


function validationField(){
  if(email != null && password != null){
      // setErrorMessage("LOGIN SUCCESS")
      setErrorMessage(null)
      setEmail(null)
      setPassword(null)
  }
  else{
        Vibration.vibrate();
        setErrorMessage("Insira sua senha e email")
        setPassword(null)        
        setEmail(null)
  }
}

function loginSavio(){
  if(email == "saviosoaresc" && password == "0000"){
    setConfirmation("SIM")
  }
}

  return (
    <SafeAreaView>
      <Pressable onPress={Keyboard.dismiss}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Aonde é hoje?</Text>
        </View>

        <View style={styles.form}>
          <TextInput style={styles.imputForm} value={email} onChangeText={setEmail} placeholder="Email" />
          <View style={styles.inputArea}>
            <TextInput
              style={styles.imputForm}
              placeholder="Senha"
              value={password}
              onChangeText={(texto) => setPassword(texto)}
              secureTextEntry={hidePass}
            />

            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidepass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" color="#000" size={25} />
              ) : (
                <Ionicons name="eye-off" color="#000" size={25} />
              )}
            </TouchableOpacity>
          </View>
                <TouchableOpacity style={styles.buttonForm} onPress={() => {validationField()}}>
                  <Text style={styles.textButtonForm}>LOGIN</Text>
                </TouchableOpacity>
        </View>

        <View style={styles.passwordRemember}>
          <TouchableOpacity>
            <Text style={{ color: "red" }}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
                
          <Text style={styles.errorMessage}>{errorMessage}</Text>

        <View style={styles.containerRegister}>
          <Text style={styles.textRegister}>Você ainda não possui conta?</Text>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.textButtonRegister}>REGISTRA-SE</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
