import React, {useState} from 'react'
import { Modal, Text, Button, StyleSheet, View, SafeAreaView, TextInput, ScrollView, Pressable,
  Alert

} from 'react-native'



const Formulario = ({ modalVisible, setModalVisble,pacientes, setPacientes }) => {
  const [paciente, setPaciente] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState('5 de agsoto 2021')
  const [sintomas, setSintomas] = useState('')

  const handleCita = () => {
    // Validar
    // if ([paciente, propietario, email, telefono, sintomas].includes('')) {//si alguno esta vacio
    //   Alert.alert(
    //     'Error',
    //     'Todos los campos son obligatorios',
    //     // [{text: 'Recordarme despues'}, {text: 'cancelar'}, {text: 'ok'}]
    //   )
    //   return//esto es para que no continue con el registro
    // }
    const nuevoPaciente = { 
      id: Date.now(),
      paciente, 
      propietario, 
      email, 
      telefono, 
      fecha,
      sintomas 
    }
      setPacientes([...pacientes, nuevoPaciente])//esto es para que se agrege el nuevo paciente
      setModalVisble(!modalVisible)//esto es para que se cierre el modal

      setPaciente('')
      setPropietario('')
      setEmail('')
      setTelefono('')
      setFecha('5 de agsoto 2021') 
      setSintomas('')
  }


  return (
    <Modal
      animationType='slide'
      visible={modalVisible}
    >
      <SafeAreaView style={styles.contenido}>
        <ScrollView>

        <Text style={styles.titulo}>Nueva {''}
          <Text style={styles.tituloBold}>Cita</Text>
        </Text>
/////////////////////////////////////////////////////////////////      
        <Pressable 
          style={styles.btnCancelar} 
          onPress={() => setModalVisble(!modalVisible)}//esto es para que se cierre el modal
          //escribe lo contrario a modalVisible
        >
          <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
        </Pressable>  

/////////////////////////////////////////////////////////////////      
      <View style={styles.campo}>
        <Text style={styles.label}>Nombre Paciente</Text>
        <TextInput
            style={styles.input}
            placeholder='Nombre Paciente'
            placeholderTextColor={'#666'}
            value={paciente}
            onChangeText={setPaciente}
        />
      </View>
/////////////////////////////////////////////////////////////////      
      <View style={styles.campo}>
        <Text style={styles.label}>Nombre Propietario</Text>
        <TextInput
            style={styles.input}
            placeholder='Nombre Propietario'
            placeholderTextColor={'#666'}
            value={propietario}
            onChangeText={setPropietario}
        />
      </View>
/////////////////////////////////////////////////////////////////            
      <View style={styles.campo}>
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor={'#666'}
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
        />
      </View>
/////////////////////////////////////////////////////////////////      

      <View style={styles.campo}>
        <Text style={styles.label}>Telefono Propietario</Text>
        <TextInput
            style={styles.input}
            placeholder='Telefono Propietario'
            placeholderTextColor={'#666'}
            keyboardType='numeric'//
            maxLength={10}//esto es para que solo se puedan ingresar 10 digitos
            value={telefono}
            onChangeText={setTelefono}
        />
      </View>
/////////////////////////////////////////////////////////////////      

      <View style={styles.campo}>
        <Text style={styles.label}>Fecha</Text>
        <TextInput
            style={[styles.input, {height: 100}]}
            placeholder='Fecha'
            placeholderTextColor={'#666'}
            value={fecha}
            onChangeText={setFecha}

        />
      </View>
/////////////////////////////////////////////////////////////////      
      <View style={styles.campo}>
        <Text style={styles.label}>Sintomas</Text>
        <TextInput
            style={[styles.input, {height: 100}]}
            placeholder='Sintomas'
            placeholderTextColor={'#666'}
            value={sintomas}
            onChangeText={setSintomas}
            multiline={true}
            numberOfLines={4}
        />
      </View>
/////////////////////////////////////////////////////////////////      
      <Pressable 
          style={styles.btnNuevaCita}
          onPress={handleCita} 
      
        >
          <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
        </Pressable>  

/////////////////////////////////////////////////////////////////      
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}
const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6d28d9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar: {
    backgroundColor: '#5827a4',//esto es el color del boton
    marginHorizontal: 30,//esto es para que no se pegue a los lados
    padding: 10,//esto es para que no se pegue al texto
    marginTop: 15,//esto es para que no se pegue al titulo
    borderRadius: 10,//
  },
  btnCancelarTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    textAlign: 'center',
  },
  campo: {
    marginTop: 10,//esto es para que no se pegue al titulo
    marginHorizontal: 30, //esto es para que no se pegue a los lados
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input:{
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBotton: 15,
  },
  sintomasInput: {
    height: 100,
  },  
  btnNuevaCita: {
    marginVertical: 50,// esto es para que no se pegue al texto
    backgroundColor: '#f59e0b',
    paddingVertical: 15,//esto es para que no se pegue al texto
    marginHorizontal: 30,//esto es para que no se pegue a los lados
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
})
export default Formulario
