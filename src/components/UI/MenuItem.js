import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import theme from "../../../theme";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {i18n} from "../../redux/features/LangSlice";
import defineCurrency from "../../helpers/defineCurrency";


const MenuItem = ({dish}) => {
    const currencies = useSelector(state => state.currencyReducer.currencies)
    const lang = i18n.locale
    const price = defineCurrency(lang, currencies, dish.price)
    const navigation = useNavigation()

    const dishDetailHandler = () => {
        navigation.navigate('DishDetailScreen', {
            dish
        })
    }

    return (
        <Pressable onPress={dishDetailHandler}
                   style={{
                       ...styles.itemContainer,
                       opacity: dish.isActive ? 1 : 0.5,
                   }}
        >
            <View style={styles.imageWrapper}>
                <Image
                    source={{uri: `data:image/jpeg;base64,${dish.image}`}}
                    resizeMode={"cover"}
                    style={styles.image}
                />
            </View>
            <Text style={styles.title}>{dish.name}</Text>
            <Text style={styles.price}>{price.price} {price.sign}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        flexGrow: 1,
        backgroundColor: "white",
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 15,
        borderRadius: 5,
        paddingBottom: 10,
        paddingTop: 10,
        maxWidth: "47%",
    },
    imageWrapper: {
        alignSelf: "center",
        marginBottom: 10,
        width: 100,
        height: 100,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
    title: {
        paddingHorizontal: 10,
        fontFamily: theme.fonts.robotoRegular,
        fontSize: 14,
        textTransform: "capitalize"
    },
    price: {
        paddingHorizontal: 10,
        fontFamily: theme.fonts.robotoBold,
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        fontFamily: theme.fonts.robotoBold,
        color: "#bbbbbb",
        paddingHorizontal: 10,
        fontSize: 14
    },
    newPrice: {
        fontFamily: theme.fonts.robotoBold,
        color: "#f86767",
    }
})

export default MenuItem;
