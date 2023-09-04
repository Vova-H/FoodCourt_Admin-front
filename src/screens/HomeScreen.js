import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from "react-native";
import theme from "../../theme";
import WelcomeInfo from "../components/WelcomeInfo";
import Menu from "../components/Menu";
import {useDispatch, useSelector} from "react-redux";
import {useGetUserByIdQuery} from "../redux/services/UsersService";
import {saveUser} from "../redux/features/UserSlice";
import {i18n} from "../redux/features/LangSlice";
import {useGetCurrenciesQuery} from "../redux/services/CurrenciesService";
import {saveCurrencies} from "../redux/features/CurrenciesSlice";
import MySpinner from "../components/UI/MySpiner";

const HomeScreen = () => {
    const lang = useSelector(state => state.langReducer.lang)
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.userFromJWT)
    const {data, isLoading} = useGetUserByIdQuery(user.id)
    const locMenu = i18n.t("homeScreen.menu")
    const currencies = useGetCurrenciesQuery()

    useEffect(() => {
        if (!isLoading) {
            dispatch(saveUser(data))
        }
        if (!currencies.isLoading && currencies.isSuccess) {
            dispatch(saveCurrencies(currencies.data))
        }

    }, [isLoading, currencies.isLoading])

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <View style={styles.welcomeInfoWrapper}>
                    {data ? (
                        <WelcomeInfo/>
                    ) : (
                        <MySpinner colorProps={"#000"}/>
                    )}
                </View>
                <View>
                    <Text style={styles.title}>{locMenu}</Text>
                    <View style={{height: "83%", width: "100%"}}>
                        <Menu/>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray,
    },
    contentWrapper: {
        paddingHorizontal: 20,
        paddingTop: 30,
        flex: 1
    },

    welcomeInfoWrapper: {
        marginBottom: 10
    },

    discountWrapper: {
        height: "20%",
        minHeight: "20%",
    },

    title: {
        fontFamily: theme.fonts.robotoMedium,
        fontSize: 20,
        marginBottom: 10
    }
})

export default HomeScreen;
