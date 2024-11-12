
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  Button,
  FlatList
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

// agrego este comentario solo para crear un nuevo commit
//no se por que no funciona el git push



const App = () => {
  //Los hooks se colocan en la parte superior del componente, no pueden ser registrados de forma condicional, nunca despues de un return
  const [modalVisible, setModalVisble] = useState([false])  //useState es un hook
  const [pacientes, setPacientes] = useState([])
  console.log('pacientes', pacientes);


  return (//View se utiliza para poder tener varios elementos text
    <View styles={styles.container}> 
      <Text style={styles.titulo}>Administrador de citass {''}
      <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

    <Pressable
      style={styles.btnNuevaCita}
      onPress ={()=> setModalVisble(!modalVisible)} 
      
    >
      <Text
      style={styles.btnTextoNuevaCita}>
        Agregar cita</Text>
    </Pressable>  
/////////////////////////////////////////////
    {pacientes.length === 0 ?
     <Text style={styles.noPacientes}>No hay pacientes aun</Text> :
     <FlatList
      style={styles.listado}
      data={pacientes}
      keyExtractor={(item) => item.id}
      renderItem={({item})=>{
        return(
          <Paciente
            item={item}           
          />
        )
      }}
     
     />

    }


///////////////////////////////////////////////
      <Formulario
        modalVisible={modalVisible}
        setModalVisble={setModalVisble}
        pacientes={pacientes} 
        setPacientes={setPacientes}
      />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f</Text>3f4f6',
    flex: 1,
  },
titulo: {
    color: '#374151',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },  
  tituloBold: {
    color: '#6d28d9',
},
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
    },
    noPacientes: {
      marginTop: 40,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: '800',
    },
    listado: {
      marginTop: 20,
      marginHorizontal: 30,
    },
});



export default App;