import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Alumnos from "../screens/Alumno/Alumno";
import AlumnosInfo from "../screens/Alumno/AlumnoInfo";
import AlumnosAdd from "../screens/Alumno/AlumnoAdd";

import AlumnosUpdate from "../screens/Alumno/AlumnoUpdate";
import AlumnosDelete from "../screens/Alumno/AlumnoDelete";




const Stack = createStackNavigator();

export default function AlumnoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="maestros"
        component={Alumnos}
        options={{ title: "Alumnos" }}
      />
      <Stack.Screen
        name="alumnos-info"
        component={AlumnosInfo}
        options={{ title: "Detalle de los alumnos" }}
      />
      <Stack.Screen
        name="alumnos-add"
        component={AlumnosAdd}
        options={{ title: "Agregar alumno" }}
      />
    
      <Stack.Screen
        name="alumnos-update"
        component={AlumnosUpdate}
        options={{ title: "Modificar alumno" }}
      />

      <Stack.Screen
        name="alumnos-delete"
        component={AlumnosDelete}
        options={{ title: "Eliminar alumno" }}
      />







    </Stack.Navigator>
  );
}
