import React from "react"
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert("Login Successful");
      console.log('values', values)
    },
    validate: values => {
      let errors = {};
      if(!values.email) {
        errors.email = 'Field required.'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username must be a email address.'
      }
      if(!values.password) {
        errors.password = 'Field required.'
      }

      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input id="emailField" name="email" type="text" value={formik.values.email} onChange={formik.handleChange} />
        <div id="emailError">{formik.errors.email}</div>
        <div>Password:</div>
        <input id="pswField" name="password" type="text" value={formik.values.password} onChange={formik.handleChange} />
        <div id="pswError">{formik.errors.password}</div>
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
