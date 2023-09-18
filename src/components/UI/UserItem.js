import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const UserItem = ({user}) => {
    const navigation = useNavigation()

    const navigationHandler = () => {
        navigation.navigate("UserDetailsScreen", {
            user: user
        })
    }

    return (
        <TouchableOpacity style={styles.userWrapper} onPress={navigationHandler}>
            <View style={styles.imageWrapper}>
                <Image style={styles.avatar}
                       source={{uri: `data:image/jpeg;base64,${user.avatar}`}}
                       resizeMode={"cover"}
                />
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    userWrapper: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderStyle: "solid",
        width: "80%",
        alignSelf: "center",
        marginTop: "10%",
        marginBottom: "5%",
    },
    spinner: {
        flex: 1,
        alignSelf: "center",
        marginTop: "10%",
        marginBottom: "5%",
    },
    imageWrapper: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    infoWrapper: {
        justifyContent: "space-around",
        margin: 10,
    },
    username: {fontSize: 20},
    email: {fontSize: 16}
})

export default UserItem;
