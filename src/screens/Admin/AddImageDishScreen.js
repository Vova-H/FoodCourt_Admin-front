import React, {useEffect, useState} from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {useSelector} from 'react-redux';
import CustomButton from '../../components/UI/CustomButton';
import theme from '../../../theme';
import {useAddDishMutation} from "../../redux/services/DishesService";
import {useNavigation} from "@react-navigation/native";

const AddImageDishScreen = (props) => {
    const dish = props.route.params.values;
    const [imageFromProps, setImageFromProps] = useState(props.route.params.image)
    const [, setHasGalleryPermission] = useState(false);
    const [, setImageURI] = useState('');
    const [image, setImage] = useState('');
    const [loader, setLoader] = useState(false);
    useSelector((state) => state.langReducer.lang);
    const [addDish] = useAddDishMutation()
    const navigation = useNavigation();
    useEffect(() => {
        galleryStatusHandler();
    }, []);

    const galleryStatusHandler = async () => {
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasGalleryPermission(galleryStatus.status === 'granted');
    };

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 0.2,
        });

        if (!result.canceled) {
            setImageFromProps(undefined)
            setImageURI(result.assets[0].uri);
            await uploadImageHandler(result.assets[0].uri);
        }
    };

    const uploadImageHandler = async (uri) => {
        try {
            setLoader(true);
            setImage(uri);
            setTimeout(() => {
                setImageURI('');
                setLoader(false);
            }, 1500);
        } catch (e) {
            console.log('Add dish Error:', e);
            setLoader(false);
        }
    };

    const createDishHandler = async () => {
        try {
            const formData = new FormData();
            formData.append('image', {
                uri: image,
                name: 'dish.png',
                type: 'image/png',
            });
            formData.append('dish', JSON.stringify(dish));
            const response = await addDish(formData)
            Alert.alert("Message", response.data.message)
            navigation.reset({
                index: 0,
                routes: [{name: 'HomeScreen'}],
            });
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <View style={styles.container}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.dishWrapper}>
                    {
                        imageFromProps !== undefined ?
                            <Image
                                source={image.length ? {uri: imageFromProps} : {uri: `data:image/jpeg;base64,${imageFromProps}`}}
                                style={styles.dish}
                            /> :
                            !image.length ?
                                <View style={styles.dish}></View>
                                :
                                <Image
                                    source={image.length ? {uri: image} : {uri: `data:image/jpeg;base64,${image}`}}
                                    style={styles.dish}
                                />
                    }
                </View>

                {loader ? (
                    <CustomButton title={'Chose'} pressFunc={pickImage} propsIsLoading={true}/>
                ) : image ? (
                    <CustomButton title={'Chose'} pressFunc={pickImage}/>
                ) : (
                    <CustomButton title={'Chose'} pressFunc={pickImage}/>
                )}
            </View>

            {image && !loader ? (
                <CustomButton title={'Create'} pressFunc={createDishHandler}/>
            ) : (
                <CustomButton title={'Create'} inActive={true}/>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dishWrapper: {
        marginBottom: 10,
    },
    dish: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 1
    },
});

export default AddImageDishScreen;
