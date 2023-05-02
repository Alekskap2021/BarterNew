import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  phone: Yup.string().required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
});

export const registerSchema = Yup.object().shape({
  phone: Yup.string().required("Обязательное поле"),
  email: Yup.string().required("Обязательное поле").email("Некорректный почтовый адрес"),
});
