import { StyleSheet, Platform, Text, View, Button, SafeAreaView, BackHandler, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';


const colors = ["#f7dc6f", "#a2d9ce", "#d7bde2"]

export default function App() {

  const [isWorking, setisWorking] = useState(false)
  const [time, setTime] = useState(25*60)
  const [currenTime, setcurrenTime] = useState("POMO" | "SHORT" | "BREAK")
  const [isActive, setisActive] = useState(false)
  

  useEffect(() => {
    let interval = null;
    if (isActive){
      interval = setInterval(() => {
        setTime(time - 1 )
      }, 1000);
    } else {
      clearInterval(interval)
    }

    if (time === 0){
      setisActive(false)
      setisWorking(prev => !prev)
      setTime(isWorking ? 300 : 1500)
    }

    return () => clearInterval(interval)
  }, [isActive, time])
  


  function handleStartStop(){
    setisActive(!isActive)
  }

  return (

    <SafeAreaView style={[styles.container, {backgroundColor: colors [currenTime] }]}>
      <View style= {{
        flex:1, 
        paddingHorizontal: 15, 
        paddingTop: Platform.OS ==="android" && 40 , 

        }}>
        <Text style={styles.text}> Cronometro </Text>
        <Header 
        currenTime={currenTime} 
        setcurrenTime={setcurrenTime} 
        setTime={setTime} />
        <Timer time={time}></Timer>
        <TouchableOpacity onPress={handleStartStop} style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>{isActive ? "STOP" : "START" }</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 32, fontWeight: "bold"
  },
  button: {
    padding:15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor : "#333333",

  }
});
