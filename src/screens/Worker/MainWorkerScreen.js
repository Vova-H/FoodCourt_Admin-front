import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useGetAllActiveOrdersMutation} from '../../redux/services/OrdersService';
import {saveOrders} from '../../redux/features/OrdersSlice';
import {saveUser} from '../../redux/features/UserSlice';
import {useGetUserByIdQuery} from '../../redux/services/UsersService';
import theme from '../../../theme';
import OrderItem from '../../components/UI/Worker/OrderItem';

const MainWorkerScreen = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authReducer.userFromJWT);
    const {data, isLoading} = useGetUserByIdQuery(user.id);
    const [activeOrders] = useGetAllActiveOrdersMutation();
    const lang = useSelector((state) => state.langReducer.lang);

    const [orders, setOrders] = useState([]);
    const fetchAndSetOrders = useCallback(async () => {
        if (!isLoading) {
            try {
                const response = await activeOrders({
                    lang: lang,
                });
                const newOrders = response.data || [];
                if (JSON.stringify(newOrders) !== JSON.stringify(orders)) {
                    setOrders(newOrders);
                    dispatch(saveOrders(newOrders));
                }
            } catch (error) {
                console.error('Error receiving orders:', error);
            }
        }
    }, [isLoading, lang, orders, dispatch]);

    useEffect(() => {
        if (!isLoading) {
            dispatch(saveUser(data));
        }
    }, [isLoading, lang]);

    useEffect(() => {
        fetchAndSetOrders();
        const intervalId = setInterval(() => {
            fetchAndSetOrders();
        }, 10000);
        return () => {
            clearInterval(intervalId);
        };
    }, [isLoading, fetchAndSetOrders, lang]);

    const renderOrder = ({item}) => <OrderItem order={item}/>;

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderOrder}
                keyExtractor={(item) => {
                    return item.id;
                }}
                numColumns={1}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.yellow,
        paddingTop: 30,
        position: 'relative',
    },
    title: {
        fontFamily: theme.fonts.playfairDisplayBold,
        fontSize: 30,
        maxWidth: '90%',
    },
});

export default MainWorkerScreen;
