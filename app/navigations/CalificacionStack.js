import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Calificaciones from "../screens/Calificacion/Calificacion";
import CalificacionesInfo from "../screens/Calificacion/CalificacionInfo";
import CalificacionesAdd from "../screens/Calificacion/CalificacionAdd";

const Stack = createStackNavigator();

export default function CalificacionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="calificaciones"
        component={Calificaciones}
        options={{ title: "Calificaciones" }}
      />
      <Stack.Screen
        name="calificaciones-info"
        component={CalificacionesInfo}
        options={{ title: "Detalle de las calificaciones" }}
      />
      <Stack.Screen
        name="calificaciones-add"
        component={CalificacionesAdd}
        options={{ title: "Agregar calificacion" }}
      />
    </Stack.Navigator>
  );
}
