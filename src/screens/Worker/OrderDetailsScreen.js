import React, {useEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from "react-native";
import CustomButton from "../../components/UI/CustomButton";
import theme from "../../../theme";
import DishItem from "../../components/UI/Worker/DishItem";
import {useCompleteOrderByIdMutation} from "../../redux/services/OrdersService";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {i18n} from "../../redux/features/LangSlice";

const OrderDetailsScreen = (props) => {
    const order = props?.route?.params.order;
    const dishes = order.dishes;
    const [completedDishesIds, setCompletedDishesIds] = useState([]);
    const [completeOrderById] = useCompleteOrderByIdMutation()
    const navigation = useNavigation()
    const lang = useSelector(state => state.langReducer.lang);
    const locMessage = i18n.t("global.message")
    const locCompleteMessage = i18n.t("ordersDetailsScreenWorker.completeMessage")
    const locBtnTitle = i18n.t("ordersDetailsScreenWorker.btnTitle")

    const locOrder = i18n.t("ordersDetailsScreenWorker.order")
    const locDate = i18n.t("ordersDetailsScreenWorker.date")
    const locTime = i18n.t("ordersDetailsScreenWorker.time")
    const locStatus = i18n.t("ordersDetailsScreenWorker.status")
    const locDiscount = i18n.t("ordersDetailsScreenWorker.discount")
    const locYes = i18n.t("global.yes")
    const locNo = i18n.t("global.no")
    const locDishes = i18n.t("ordersDetailsScreenWorker.dishes")
    const locCompleted = i18n.t("ordersDetailsScreenWorker.completed")
    const locInProcess = i18n.t("ordersDetailsScreenWorker.inProcess")

    const completeCheckHandler = () => {
        const sum1 = completedDishesIds.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        const sum2 = dishes.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.OrdersDishesModel.id;
        }, 0);
        return sum1 === sum2;
    }

    useEffect(() => {

    }, [lang]);

    const finishOrderHandler = async () => {
        const result = completeCheckHandler()
        if (result) {
            const response = await completeOrderById({orderId: order.id, lang: lang})
            Alert.alert(locMessage, `${response.data.message}`)
            if (response.data.status === 200) {
                navigation.navigate("MainWorkerScreen")
            } else {
                Alert.alert(locMessage, `${response.data.message}`)
            }
        } else {
            Alert.alert(locMessage, locCompleteMessage)
        }
    }
    const renderDishItem = ({item}) => {
        return <DishItem dish={item} completeCheck={setCompletedDishesIds}/>;
    };

    return (
        <View style={styles.container}>
            <View style={styles.orderInfo}>
                <View>
                    <Text style={{fontSize: 22, textDecorationLine: "underline", fontWeight: "bold"}}>
                        {locOrder} № {order.id}
                    </Text>
                    <Text style={{fontSize: 20}}>{locDate}: {order.date}</Text>
                    <Text style={{fontSize: 20}}>{locTime}: {order.time}</Text>
                    <Text style={{fontSize: 20}}>{locStatus}: {order.status ? locCompleted : locInProcess}</Text>
                    <Text style={{fontSize: 20}}>{locDiscount}: {order.discount ? locYes : locNo}</Text>
                </View>
                <View>
                    <CustomButton title={locBtnTitle}
                                  pressFunc={finishOrderHandler}
                                  propsButtonStyles={{width: "100%", height: "25%", padding: 10, paddingHorizontal: 30}}
                                  inActive={false}
                    />
                </View>
            </View>


            <View style={styles.dishesContainer}>
                <Text style={styles.dishesHeader}>{locDishes}:</Text>
                <FlatList
                    data={dishes}
                    renderItem={renderDishItem}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 25,
        backgroundColor: theme.colors.yellow
    },
    orderInfo: {
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    orderInfoWrapper: {},
    dishesContainer: {
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "black",
        padding: 16,
        flex: 1,
    },
    dishesHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    dishItem: {
        marginBottom: 8,
        borderWidth: 2,
        borderColor: 'black',
        padding: 8,
    },
});

export default OrderDetailsScreen;
