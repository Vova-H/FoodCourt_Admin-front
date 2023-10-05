import React, {useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import theme from "../../../theme";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {i18n} from "../../redux/features/LangSlice";
import defineCurrency from "../../helpers/defineCurrency";
import {hideDishSlice, showDishSlice} from "../../redux/features/DishesSlice";
import {useHideDishMutation, useShowDishMutation} from "../../redux/services/DishesService";

const headerImg = require("../../../assets/img/MenuItemHeader.png")
const flame = require("../../../assets/img/Flame.png")


const DishDetailScreen = (props) => {
    const dish = props.route.params.dish
    const lang = useSelector(state => state.langReducer.lang)
    const dispatch = useDispatch()
    const currencies = useSelector(state => state.currencyReducer.currencies)
    const navigation = useNavigation()
    const locDishDetail = i18n.t("dishDetails.foodDetail")
    const price = defineCurrency(lang, currencies, dish.price)
    const [isActive, setIsActive] = useState(dish.isActive)

    const [hideDish] = useHideDishMutation()
    const [showDish] = useShowDishMutation()

    const hideDishHandler = async (id) => {
        dispatch(hideDishSlice(id))
        await hideDish(id)
        setIsActive(false)
    }
    const showDishHandler = async (id) => {
        dispatch(showDishSlice(id))
        await showDish(id)
        setIsActive(true)
    }

    const goToEditScreenHandler = (dishId) => {
        navigation.navigate('EditDishScreen', {
            dishId
        })
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={headerImg}
                                 style={styles.headerImg}
                >
                    <View style={styles.headerIcons}>
                        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                            <Ionicons name={"md-arrow-back"} size={40} color="#000"/>
                        </TouchableOpacity>
                        <View style={{flexDirection: "row", width: "30%", justifyContent: "space-between"}}>
                            {
                                isActive ?
                                    <TouchableOpacity style={{marginRight: 5}} onPress={() => hideDishHandler(dish.id)}>
                                        <Ionicons name={"eye-outline"} size={40} color="#000"/>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={{marginRight: 5}} onPress={() => showDishHandler(dish.id)}>
                                        <Ionicons name={"eye-off-outline"} size={40} color="#000"/>
                                    </TouchableOpacity>
                            }
                            <TouchableOpacity onPress={() => goToEditScreenHandler(dish.id)}>
                                <Ionicons name={"pencil"} size={40} color="#000"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View><Text style={styles.headerTitle}>{dish.name}</Text></View>
                    <View>
                        <Text style={styles.headerSubtitle}>
                            <Image source={flame}/> {dish.calories} - kcal {dish.weight}g
                        </Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Image
                            source={{uri: `data:image/jpeg;base64,${dish.image}`}}
                            style={styles.dishImage}
                        />
                        <View>
                            <Text style={styles.price}>{price.price} {price.sign}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.detailTitle}>{locDishDetail}</Text>
                        <Text style={styles.detailDescription}>{dish.description}</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    headerImg: {
        height: "80%",
        maxHeight: "83%",
        paddingTop: 40,
        paddingHorizontal: 30
    },
    headerIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "10%",
    },
    headerTitle: {
        textAlign: "center",
        marginBottom: 5,
        fontFamily: theme.fonts.robotoBold,
        fontSize: 24,
        letterSpacing: 1,
        textTransform:"capitalize"
    },
    headerSubtitle: {
        textAlign: "center",
        marginBottom: "10%",
        fontFamily: theme.fonts.robotoRegular,
        fontSize: 16,
        opacity: .9,
        letterSpacing: 1
    },
    dishImage: {
        width: 250,
        height: 250,
        borderRadius: 125,
        marginBottom: 25
    },
    price: {
        fontSize: 20,
        marginBottom: 10
    },
    detailTitle: {
        fontFamily: theme.fonts.robotoMedium,
        fontSize: 20,
        marginBottom: 5
    },
    detailDescription: {
        fontFamily: theme.fonts.robotoRegular,
        fontSize: 15
    },
    orderBtnWrapper: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        flex: 1,
        bottom: 10,
        right: 0,
        left: 0
    },
})

export default DishDetailScreen;
