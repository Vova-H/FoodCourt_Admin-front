import * as yup from 'yup';

const dishValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    description: yup.string().required('Description is required'),
    weight: yup.number().required('Weight is required'),
    calories: yup.number().required('Calories are required'),
    price: yup.number().required('Price is required'),
})

export default dishValidationSchema
