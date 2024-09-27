import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CameraComponent } from './src/components/CameraComponent';
import { AudioRecorder } from './src/components/AudioRecorder';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Camera') {
              iconName = 'camera';
            } else if (route.name === 'Audio Recorder') {
              iconName = 'mic';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Camera" component={CameraComponent}  options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'blue'} // Cambia el color de fondo aquí
        }} />
        <Tab.Screen name="Audio Recorder" component={AudioRecorder}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#000'} // Cambia el color de fondo aquí
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
