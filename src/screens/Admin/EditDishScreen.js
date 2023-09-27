import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import theme from "../../../theme";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import DishEditForm from "../../components/forms/DishEditForm";
import {useGetDishByIdQuery} from "../../redux/services/DishesService";

const EditDishScreen = (props) => {
    const id = props?.route?.params?.dishId
    const navigation = useNavigation()
    useSelector(state => state.langReducer.lang)
    const [dish, setDish] = useState(null)
    const {data, isLoading, refetch} = useGetDishByIdQuery(id)

    useEffect(() => {
        if (!isLoading) {
            setDish(data)
        }
        refetch()
    }, [isLoading, data]);

    const addImageHandler = async (values) => {
        navigation.navigate('EditImageDishScreen', {
            values,
            image: dish?.image
        })
    };

    return (
        <View style={styles.container}>
            <DishEditForm key={dish ? dish?.id : 'null'} onSubmit={addImageHandler} dish={dish}/>
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

export default EditDishScreen;
