import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from "react";

const DishItem = ({dish, completeCheck}) => {
    const [isDone, setIsDone] = useState(false);

    const toggleCompletion = () => {
        setIsDone(!isDone);
        if (!isDone) {
            completeCheck((prevState) => [...prevState, dish.OrdersDishesModel.id]);
        } else {
            completeCheck((prevState) => prevState.filter((id) => id !== dish.OrdersDishesModel.id));
        }
    };
    return (
        <TouchableOpacity style={styles.dishItem} onPress={toggleCompletion}>
            {
                isDone ?
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <View>
                            <Text style={{fontSize: 18}}>Dish: {dish.name}</Text>
                            <Text style={{fontSize: 18}}>Price: ${dish.price}</Text>
                            <Text style={{fontSize: 18}}>Quantity: {dish.OrdersDishesModel.quantity}</Text>
                        </View>
                        <Ionicons name={"checkmark"} size={40} color={"green"}/>
                    </View> :
                    <View>
                        <Text style={{fontSize: 18}}>Dish: {dish.name}</Text>
                        <Text style={{fontSize: 18}}>Price: ${dish.price}</Text>
                        <Text style={{fontSize: 18}}>Quantity: {dish.OrdersDishesModel.quantity}</Text>
                    </View>

            }
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    dishItem: {
        marginBottom: 8,
        borderWidth: 2,
        borderColor: 'black',
        padding: 8,
    },
});

export default DishItem;
