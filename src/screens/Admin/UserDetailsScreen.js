import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Switch, Text, View} from "react-native";
import theme from "../../../theme";
import {useAddRoleWorkerMutation, useRemoveRoleWorkerMutation} from "../../redux/services/UsersService";
import {useDispatch, useSelector} from "react-redux";
import {changeRoleForUser} from "../../redux/features/UsersSlice";
import {i18n} from "../../redux/features/LangSlice";
import Roles from "../../helpers/rolesTranslationHelper";

const UserDetailsScreen = (props) => {
    const dispatch = useDispatch()
    const lang = useSelector(state => state.langReducer.lang)
    const user = props.route.params.user;
    const [isWorker, setIsWorker] = useState(user.roles.some(role => role.role === 'WORKER'));
    const [roles, setRoles] = useState(user.roles)
    const [addRoleWorker] = useAddRoleWorkerMutation()
    const [removeRoleWorker] = useRemoveRoleWorkerMutation()
    const locJoined = i18n.t("userDetailsScreen.joined")
    const locDiscountLabel = i18n.t("userDetailsScreen.discountLabel")
    const locYes = i18n.t("global.yes")
    const locNo = i18n.t("global.no")
    const locIsWorker = i18n.t("userDetailsScreen.isWorker")
    const addRoleWorkerHandler = async () => {
        const result = await addRoleWorker({userId: user.id, lang: lang})
        setRoles(result.data)
    }

    const removeRoleWorkerHandler = async () => {
        const result = await removeRoleWorker({userId: user.id, lang: lang})
        setRoles(result.data)
    }

    useEffect(() => {
        dispatch(changeRoleForUser({userId: user.id, roles: roles}))
    }, [roles]);

    return (
        <View style={styles.container}>
            <View style={styles.avatarWrapper}>
                <Image
                    source={{uri: `data:image/jpeg;base64,${user.avatar}`}}
                    style={styles.avatar}
                />
            </View>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.createdAt}>{locJoined}: {user.createdAt.slice(0, 10)}</Text>
            <Text style={styles.discount}>{locDiscountLabel} {user.discount_is_using ? locYes : locNo}</Text>
            <Roles roles={roles}/>
            <View style={styles.isWorkerContainer}>
                <Text style={styles.isWorkerText}>{locIsWorker}: </Text>
                <Switch
                    trackColor={{false: 'white', true: 'black'}}
                    thumbColor={isWorker ? 'black' : 'white'}
                    value={isWorker}
                    onValueChange={(value) => {
                        setIsWorker(value)
                        value ?
                            addRoleWorkerHandler()
                            :
                            removeRoleWorkerHandler()
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
        backgroundColor: theme.colors.yellow
    },
    avatarWrapper: {
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        marginBottom: 10,
    },
    createdAt: {
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 10,
    },
    discount: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    isWorkerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    isWorkerText: {
        fontSize: 16,
        marginRight: 10,
    },

});

export default UserDetailsScreen;
