import * as yup from 'yup';
import {i18n} from "../redux/features/LangSlice";


const DishSchema = (lang) => {
    const requiredNameError = i18n.t('formValidation.addNewDishScreenErrors.name', {locale: lang});
    const requiredDescriptionError = i18n.t('formValidation.addNewDishScreenErrors.description', {locale: lang});
    const requiredWeightError = i18n.t('formValidation.addNewDishScreenErrors.weight', {locale: lang});
    const requiredCaloriesError = i18n.t('formValidation.addNewDishScreenErrors.calories', {locale: lang});
    const requiredPriceError = i18n.t('formValidation.addNewDishScreenErrors.price', {locale: lang});

    return yup.object().shape({
        name: yup.string().required(requiredNameError),
        description: yup.string().required(requiredDescriptionError),
        weight: yup.number().required(requiredWeightError),
        calories: yup.number().required(requiredCaloriesError),
        price: yup.number().required(requiredPriceError),
    });
};


export default DishSchema
