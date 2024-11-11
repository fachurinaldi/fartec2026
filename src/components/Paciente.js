import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Paciente = ({item}) => {
    // console.log(item);
    const{paciente, fecha} = item

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones)
        
    }


    return (
    <View style={estilo.contenedor}>
    <Text style={estilo.label}>Paciente</Text>
    <Text style={estilo.texto}>{paciente}</Text>
    <Text style={estilo.fecha}>{fecha}</Text>
    </View>
  )
}
const estilo= StyleSheet.create({
    contenedor:{
        backgroundColor: '#FFF',
        padding: 20,
        borderBottomColor: '#94a3b8',
        borderBottomWidth: 1,//esto es para que tenga un borde abajo linea
    },
    label:{
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700'

    },
    texto:{
        color: '#6d28d9',
        fontSize: 24,
        fontWeight: '700',


    },
    fecha: {
        color: '#374151',
        fontWeight: '800',
        fontSize: 18,

    }

})


export default Paciente
