import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cursos from "../screens/Curso/Curso";
import CursosInfo from "../screens/Curso/CursoInfo";
import CursosAdd from "../screens/Curso/CursoAdd";

const Stack = createStackNavigator();

export default function CursoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cursos"
        component={Cursos}
        options={{ title: "Cursos" }}
      />
      <Stack.Screen
        name="cursos-info"
        component={CursosInfo}
        options={{ title: "Detalle de los cursos" }}
      />
      <Stack.Screen
        name="cursos-add"
        component={CursosAdd}
        options={{ title: "Agregar curso" }}
      />
    </Stack.Navigator>
  );
}
