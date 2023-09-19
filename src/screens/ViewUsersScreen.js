import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from "react-native";
import theme from "../../theme";
import {useDispatch, useSelector} from "react-redux";
import {useGetAllUsersMutation} from "../redux/services/UsersService";
import UserItem from "../components/UI/UserItem";
import {saveUsers} from "../redux/features/UsersSlice";
import MySpinner from "../components/UI/MySpiner";

const ViewUsersScreen = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)
    const [searchQuery, setSearchQuery] = useState('');
    const [initialLoading, setInitialLoading] = useState(true)
    const [getAllUsers, {isLoading}] = useGetAllUsersMutation()
    const searchDishesHandler = async () => {
        return getAllUsers({words: searchQuery})
    }
    useEffect(() => {
        const delayTimer = setTimeout(async () => {
            const {data: clients} = await searchDishesHandler()
            dispatch(saveUsers(clients))
            setInitialLoading(false)
        }, 1000);
        return () => clearTimeout(delayTimer);
    }, [searchQuery]);

    const renderUser = useCallback(({item}) => (
        <UserItem user={item} isLoading={isLoading}/>
    ), []);


    if (initialLoading) {
        return (
            <View
                style={styles.loadingContainer}><MySpinner
                colorProps={"black"}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchUserInputWrapper}>
                <TextInput
                    placeholder="Введите текст"
                    cursorColor={"black"}
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
            </View>
            <View style={styles.userList}>
                {
                    isLoading ?
                        <View style={styles.loadingContainer}>
                            <MySpinner colorProps={"black"}/>
                        </View> :
                        <FlatList data={users} renderItem={renderUser}/>
                }

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.yellow,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.yellow
    },

    searchUserInputWrapper: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: "90%",
        alignSelf: "center",
        marginTop: "10%"
    },
    userList: {
        height: "80%"
    }
})

export default ViewUsersScreen;
