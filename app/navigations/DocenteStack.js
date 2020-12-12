import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Docentes from "../screens/Docente/Docente";
import DocentesInfo from "../screens/Docente/DocenteInfo";
import DocentesAdd from "../screens/Docente/DocenteAdd";

const Stack = createStackNavigator();

export default function DocenteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="docentes"
        component={Docentes}
        options={{ title: "Docentes" }}
      />
      <Stack.Screen
        name="docentes-info"
        component={DocentesInfo}
        options={{ title: "Detalle de los Docentes" }}
      />
      <Stack.Screen
        name="docentes-add"
        component={DocentesAdd}
        options={{ title: "Agregar docente" }}
      />
    </Stack.Navigator>
  );
}
