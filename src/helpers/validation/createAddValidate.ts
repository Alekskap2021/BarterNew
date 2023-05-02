import * as Yup from "yup";

export const createAddSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  category: Yup.string().required("Обязательное поле"),
  subcategory: Yup.string().required("Обязательное поле"),
  sscategory: Yup.string().required("Обязательное поле"),
  description: Yup.string().required("Обязательное поле"),
  price: Yup.number().required("Обязательное поле"),
  length: Yup.number().required("Обязательное поле"),
  width: Yup.number().required("Обязательное поле"),
  height: Yup.number().required("Обязательное поле"),
  weight: Yup.number().required("Обязательное поле"),
  building: Yup.number().required("Обязательное поле"),
  flat: Yup.number().required("Обязательное поле"),
  street: Yup.string().required("Обязательное поле"),
  userName: Yup.string().required("Обязательное поле"),
  userEmail: Yup.string().required("Обязательное поле"),
  userPhone: Yup.string().required("Обязательное поле"),
});
