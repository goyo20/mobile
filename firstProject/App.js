import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';
import Card from './components/Card';
import profiles from './data/Profiles';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Personajes del manga</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {profiles.map((profile) => (
          <Card
            key={profile.id}
            title={profile.name}
            age={profile.age}
            description={profile.description}
            imgUrl={profile.image}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8, // Espacio hacia abajo para el título
    marginTop: 50,
  }
});

// return (
//   <View style={styles.container}>
//     <Text>HOLA POTO!</Text>
//     <StatusBar style="auto" />
//   </View>
// );
