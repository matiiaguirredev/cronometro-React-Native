import {View, Text, TouchableOpacity, StyleSheet} from "react-native"


const options = ["Pomodoro", "Short Break", "Long Break"]


export default function Header({setTime, currenTime, setcurrenTime}){

function handlePress(index){
    const newTime = index === 0 ? 25 : index ===  1 ? 5 : 15;
    setcurrenTime(index);
    setTime (newTime * 60);
}

    return (
        <View style={{ flexDirection: "row" }}>
            {options.map((item, index) =>(
                <TouchableOpacity key={index} onPress={() => handlePress(index)} style={[styles.itemStyle, currenTime !== index && {borderColor: "transparent"}]}>
                    <Text style={{fontWeight:"bold"}}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    itemStyle: {
        width: "33%",
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        alignItems: "center",
        borderColor: "white",
        marginVertical: 20,

    }
})

