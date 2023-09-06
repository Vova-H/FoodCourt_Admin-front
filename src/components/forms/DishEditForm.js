import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik, useFormik} from 'formik';
import dishValidationSchema from "../../validations/dish-validation.Schema";
import theme from "../../../theme";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";

const DishEditForm = ({onSubmit, dish}) => {

    const [localName, setLocalName] = useState(dish?.name || '');
    const [localDescription, setLocalDescription] = useState(dish?.description || '');
    const [localWeight, setLocalWeight] = useState(dish?.weight.toString() || '');
    const [localCalories, setLocalCalories] = useState(dish?.calories.toString() || '');
    const [localPrice, setLocalPrice] = useState(dish?.price.toString() || '');

    const formik = useFormik({
        initialValues: {
            id: dish?.id || '',
            name: dish?.name || '',
            description: dish?.description || '',
            weight: dish?.weight.toString() || '',
            calories: dish?.calories.toString() || '',
            price: dish?.price.toString() || '',
        },
        validationSchema: dishValidationSchema,
        onSubmit: (values) => {
            onSubmit({
                ...values,
                name: localName,
                description: localDescription,
                weight: localWeight,
                calories: localCalories,
                price: localPrice,
            })
            ;
        },
    });

    return (
        <Formik
            initialValues={formik.initialValues}
            validationSchema={formik.validationSchema}
            onSubmit={(values) => {
                onSubmit({
                    ...values,
                    name: localName,
                    description: localDescription,
                    weight: localWeight,
                    calories: localCalories,
                    price: localPrice
                });
            }}
        >
            {({handleSubmit, errors}) => (
                <ScrollView style={styles.container}>
                    <View>
                        <CustomInput
                            inputLabel={"Name of dish"}
                            onChangeText={(value) => {
                                setLocalName(value);
                            }}
                            value={localName}
                            placeholder="Name"
                        />
                        {errors.name && <Text style={styles.validationErrorText}>{errors.name}</Text>}

                        <Text style={styles.label}>Description of dish</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(value) => {
                                setLocalDescription(value);
                            }}
                            value={localDescription}
                            placeholder="Description"
                            multiline={true}
                            numberOfLines={6}
                            maxLength={255}
                        />
                        {errors.description && <Text style={styles.validationErrorText}>{errors.description}</Text>}
                        <CustomInput
                            inputLabel={"Weight ( g ) "}
                            onChangeText={(value) => {
                                setLocalWeight(value);
                            }}
                            value={localWeight}
                            placeholder="Weight"
                            keyboardType="numeric"
                        />
                        {errors.weight && <Text style={styles.validationErrorText}>{errors.weight}</Text>}

                        <CustomInput
                            inputLabel={"Calories ( KCal ) "}
                            onChangeText={(value) => {
                                setLocalCalories(value);
                            }}
                            value={localCalories}
                            placeholder="Calories"
                            keyboardType="numeric"
                        />
                        {errors.calories && <Text style={styles.validationErrorText}>{errors.calories}</Text>}

                        <CustomInput
                            inputLabel={"Price ( in $ )"}
                            onChangeText={(value) => {
                                setLocalPrice(value);
                            }}
                            value={localPrice}
                            placeholder="Price"
                            keyboardType="numeric"
                        />
                        {errors.price && <Text style={styles.validationErrorText}>{errors.price}</Text>}

                        <CustomButton title="Next" pressFunc={handleSubmit}
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

export default DishEditForm;
