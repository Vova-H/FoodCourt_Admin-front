import React from 'react';
import {StyleSheet, View} from "react-native";
import theme from "../../../theme";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import DishCreateForm from "../../components/forms/DishCreateForm";

const AddNewDishScreen = () => {

    const navigation = useNavigation()
    useSelector(state => state.langReducer.lang)

    const addImageHandler = async (values) => {
        navigation.navigate('AddImageDishScreen', {
            values
        })
    };

    return (
        <View style={styles.container}>
            <DishCreateForm onSubmit={addImageHandler}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.yellow,
    },
    linkWrapper: {
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    link: {
        fontFamily: theme.fonts.robotoMedium,
        fontSize: 25,
        letterSpacing: 1,
        marginLeft: 10,
    }
})

export default AddNewDishScreen;
