import React, { useEffect, useState } from 'react'
import { Text,View , Image , TouchableOpacity, StyleSheet,
  StatusBar
 } from 'react-native';
// calling the image.
import Dice1 from './assets/dice1.png';
import Dice2 from './assets/dice2.png';
import Dice3 from './assets/dice3.png';
import Dice4 from './assets/dice4.png';
import Dice5 from './assets/dice5.png';
import Dice6 from './assets/dice6.png';

const App = () => {
  const dices = [Dice1, Dice2, Dice3,Dice4, Dice5, Dice6];
  const [diceIndex, setDiceIndex]=useState(Dice1)

  const rolDice = ()=>{
    const randomNum = Math.floor(Math.random()*dices.length);
    setDiceIndex(dices[randomNum])
  }
  
 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" />
      <View style={styles.contentContainer}>
        <Image source={diceIndex}/>
        <TouchableOpacity >
          <Text style={styles.button} onPress={rolDice}>Press Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1000,
  },
  button: {
    backgroundColor: 'rgba(25, 25, 55, 0.5)',
    color:'white',
    padding: 17,
    paddingHorizontal: 30,
    borderRadius: 8,
    margin: 12,
  },
});


export default App;