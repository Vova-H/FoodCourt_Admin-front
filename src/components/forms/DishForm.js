import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import dishValidationSchema from "../../validations/dish-validation.Schema";
import theme from "../../../theme";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";


const DishForm = ({onSubmit}) => {

    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                weight: '',
                calories: '',
                price: '',
            }}
            validationSchema={dishValidationSchema}
            onSubmit={(values) => {
                onSubmit({...values});
            }}
        >
            {({handleChange, handleSubmit, values, errors}) => (
                <ScrollView style={styles.container}>
                    <View>
                        <CustomInput
                            inputLabel={"Name of dish"}
                            onChangeText={handleChange('name')}
                            value={values.name}
                            placeholder="Name"
                        />
                        {errors.name && <Text style={styles.validationErrorText}>{errors.name}</Text>}

                        <Text style={styles.label}>Description of dish</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={handleChange('description')}
                            value={values.description}
                            placeholder="Description"
                            multiline={true}
                            numberOfLines={6}
                            maxLength={255}
                        />
                        {errors.description && <Text style={styles.validationErrorText}>{errors.description}</Text>}
                        <CustomInput
                            inputLabel={"Weight ( g ) "}
                            onChangeText={handleChange('weight')}
                            value={values.weight}
                            placeholder="Weight"
                            keyboardType="numeric"
                        />
                        {errors.weight && <Text style={styles.validationErrorText}>{errors.weight}</Text>}

                        <CustomInput
                            inputLabel={"Calories ( KCal ) "}
                            onChangeText={handleChange('calories')}
                            value={values.calories}
                            placeholder="Calories"
                            keyboardType="numeric"
                        />
                        {errors.calories && <Text style={styles.validationErrorText}>{errors.calories}</Text>}

                        <CustomInput
                            inputLabel={"Price ( in $ )"}
                            onChangeText={handleChange('price')}
                            value={values.price}
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

export default DishForm;
