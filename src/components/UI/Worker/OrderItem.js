import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import theme from "../../../../theme";
import CustomButton from "../CustomButton";
import {useNavigation} from "@react-navigation/native";
import {i18n} from "../../../redux/features/LangSlice";

const OrderItem = ({order}) => {
    useSelector(state => state.langReducer.lang)
    const locButtonOrderTitle = i18n.t("myOrdersScreen.detailsBtn")
    const navigation = useNavigation()
    const detailHandler = () => {
        navigation.navigate("OrderDetailsScreen", {
            order
        })
    }

        return (
            <View style={styles.orderContainer}>
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.orderNumber}>№ {order.id}</Text>
                    <View style={{alignItems: "flex-end"}}>
                        <Text style={styles.time}>{order.time}</Text>
                        <Text style={styles.date}>{order.date}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 15}}>
                    <CustomButton title={locButtonOrderTitle}
                                  propsButtonStyles={{width: "30%", height: "80%"}}
                                  propsTitleStyles={{fontSize: 16}}
                                  pressFunc={() => detailHandler()}
                    />
                </View>
            </View>
        );
    };
    const styles = StyleSheet.create({
        orderContainer: {
            flex: 1,
            backgroundColor: theme.colors.gray,
            marginVertical: 10,
            minWidth: "90%",
            paddingHorizontal: 10,
            paddingVertical: 5,
        },

        orderNumber: {
            marginRight: "auto",
            fontFamily: theme.fonts.latoBold,
            fontSize: 20,
        },

        date: {
            fontFamily: theme.fonts.latoRegular,
            fontSize: 16
        },

        time: {
            fontFamily: theme.fonts.latoRegular,
            fontSize: 15
        },

        orderStatus: {
            fontFamily: theme.fonts.latoRegular,
            fontSize: 15,
            marginBottom: 5
        },

        totalPrice: {
            fontFamily: theme.fonts.latoRegular,
            fontSize: 16,
            textDecorationLine: "underline"
        }
    })
    export default OrderItem;
