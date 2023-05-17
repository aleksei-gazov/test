import * as yup from 'yup';

export const loginValidatorschema = yup.object({
    idInstance: yup.string().required('IdInstance is required'),
    apiTokenInstanc: yup.string().required('ApiTokenInstanc is required'),
})