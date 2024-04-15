import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 2) {
    errors.name = "Must be over 2 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      amount: 0,
      currency: "",
      text: "",
      terms: false,
    },
    validate,
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Отправить пожертвование</h2>
      <label htmlFor="name">Ваше имя</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name ? (
        <div style={{ color: "red" }}>{formik.errors.name}</div>
      ) : null}
      <label htmlFor="email">Ваша почта</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="amount">Количество</label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
      />
      <label htmlFor="currency">Валюта</label>
      <select
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
      >
        <option value="">Выберите валюту</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
      </select>
      <label htmlFor="text">Ваше сообщение</label>
      <textarea
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
      />
      <label className="checkbox">
        <input
          name="terms"
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
        />
        Соглашаетесь с политикой конфиденциальности?
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
