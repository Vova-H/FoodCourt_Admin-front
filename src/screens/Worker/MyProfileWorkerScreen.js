import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import theme from "../../../theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../redux/features/UserSlice";
import {logoutUser} from "../../redux/features/AuthSlice";
import {i18n} from "../../redux/features/LangSlice";

const MyProfileWorkerScreen = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    useSelector(state => state.langReducer.lang)
    const locMySettings = i18n.t("myProfileScreen.mySettings")
    const locLogout = i18n.t("myProfileScreen.logout")

    const logOutHandler = () => {
        dispatch(logoutUser())
        dispatch(removeUser())
        navigation.pop()
    }

    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.linkWrapper}
                              onPress={() => navigation.navigate("MySettingsScreen")}
            >
                <Ionicons name={"settings-outline"} size={40} color={"#000000"}/>
                <Text style={styles.link}>{locMySettings}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkWrapper}
                              onPress={logOutHandler}
            >
                <Ionicons name={"exit-outline"} size={40} color={"#000000"}/>
                <Text style={styles.link}>{locLogout}</Text>
            </TouchableOpacity>
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

export default MyProfileWorkerScreen;
