import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import CarrerasStack from "./CarreraStack";
import CursosStack from "./CursoStack";
import DocentesStack from "./DocenteStack";
import AlumnosStack from "./AlumnoStack";
import CalificacionesStack from "./CalificacionStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="carreras"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680"
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name="alumnos"
          component={AlumnosStack}
          options={{ title: "Alumnos" }}
        />
       
         
        <Tab.Screen
          name="carreras"
          component={CarrerasStack}
          options={{ title: "Carreras" }}
        />


        <Tab.Screen
          name="cursos"
          component={CursosStack}
          options={{ title: "Cursos" }}
        />

        <Tab.Screen
          name="docentes"
          component={DocentesStack}
          options={{ title: "Docentes" }}
        />


        <Tab.Screen
          name="calificaciones"
          component={CalificacionesStack}
          options={{ title: "Calificaciones" }}
        />
 




      </Tab.Navigator>
    </NavigationContainer>
  );
}
function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "alumnos":
      iconName = "account";
      break;
    
    

    case "carreras":
      iconName = "seal-variant";
      break;

    case "cursos":
      iconName = "language-php";
      break;

    case "docentes":
      iconName = "account-check";
    break;

    
    case "calificaciones":
      iconName = "pen";
    break;




    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
