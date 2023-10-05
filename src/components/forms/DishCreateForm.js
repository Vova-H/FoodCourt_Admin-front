import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';

import theme from "../../../theme";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";
import {i18n} from "../../redux/features/LangSlice";
import DishSchema from "../../validations/dish-validation.Schema";
import {useSelector} from "react-redux";

const DishCreateForm = ({onSubmit}) => {
    const lang = useSelector(state => state.langReducer.lang);
    const [formValues] = useState({
        name: '',
        description: '',
        weight: '',
        calories: '',
        price: '',
    });

    const locBtnTittle = i18n.t("addNewDishScreen.buttonTitle")
    const locNameOfDish = i18n.t("addNewDishScreen.name")
    const locDescriptionOfDish = i18n.t("addNewDishScreen.description")
    const locWeightOfDish = i18n.t("addNewDishScreen.weight")
    const locCaloriesOfDish = i18n.t("addNewDishScreen.calories")
    const locPriceOfDish = i18n.t("addNewDishScreen.price")

    return (
        <Formik
            initialValues={formValues}
            validationSchema={DishSchema(lang)}
            onSubmit={(values) => {
                onSubmit({...values});
            }}
        >
            {({handleChange, handleSubmit, values, errors}) => (
                <ScrollView style={styles.container}>
                    <View>
                        <CustomInput
                            inputLabel={locNameOfDish}
                            onChangeText={handleChange('name')}
                            value={values.name}
                            placeholder={locNameOfDish}
                        />
                        {errors.name && <Text style={styles.validationErrorText}>{errors.name}</Text>}

                        <Text style={styles.label}>{locDescriptionOfDish}</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={handleChange('description')}
                            value={values.description}
                            placeholder={locDescriptionOfDish}
                            multiline={true}
                            numberOfLines={6}
                            maxLength={255}
                        />
                        {errors.description && <Text style={styles.validationErrorText}>{errors.description}</Text>}
                        <CustomInput
                            inputLabel={locWeightOfDish}
                            onChangeText={handleChange('weight')}
                            value={values.weight}
                            placeholder={locWeightOfDish}
                            keyboardType="numeric"
                        />
                        {errors.weight && <Text style={styles.validationErrorText}>{errors.weight}</Text>}

                        <CustomInput
                            inputLabel={locCaloriesOfDish}
                            onChangeText={handleChange('calories')}
                            value={values.calories}
                            placeholder={locCaloriesOfDish}
                            keyboardType="numeric"
                        />
                        {errors.calories && <Text style={styles.validationErrorText}>{errors.calories}</Text>}

                        <CustomInput
                            inputLabel={locPriceOfDish}
                            onChangeText={handleChange('price')}
                            value={values.price}
                            placeholder={locPriceOfDish}
                            keyboardType="numeric"
                        />
                        {errors.price && <Text style={styles.validationErrorText}>{errors.price}</Text>}

                        <CustomButton title={locBtnTittle} pressFunc={handleSubmit}
                                      propsButtonStyles={{width: "100%", marginBottom: 30}}
                        />

                    </View>
                </ScrollView>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        width: "90%",
    },
    textInput: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
    },
    validationErrorText: {
        textAlign: "center",
        marginTop: -10,
        marginBottom: 5,
        fontFamily: theme.fonts.latoRegular,
        lineHeight: 17,
        fontSize: 14,
        letterSpacing: .4,
        color: "#d91717"
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontFamily: theme.fonts.robotoRegular
    },
});

export default DishCreateForm;
