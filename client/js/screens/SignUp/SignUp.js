import React, { Fragment } from "react";
import {
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import styles from "./styles";
import { Form, Field } from "react-final-form";

const inputResult = async (values, signup) => {
  await signup({ variables: values }).then(() => {
    Alert.alert("Register Complete!", "Thank You For Registering!", [
      { text: "Got it!" }
    ]);
  });
};

const required = value => (value ? undefined : "*Required Field");

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Required";
  }
  if (!values.lastname) {
    errors.lastname = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Does not match password";
  }

  return errors;
};

const SignUp = ({ signup }) => {
  return (
    <Fragment>
      <ImageBackground
        source={require("../../assets/images/Signup.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.register}>REGISTER</Text>
        <Form
          validate={validate}
          onSubmit={values => inputResult(values, signup)}
          render={({ handleSubmit, pristine, invalid }) => (
            <Fragment>
              <Field name="firstname" validate={required}>
                {({ input, meta }) => (
                  <Fragment>
                    <TextInput
                      {...input}
                      style={styles.input}
                      placeholder="First name"
                      placeholderTextColor="white"
                    />
                    {meta.error && meta.touched && <Text>{meta.error}</Text>}
                  </Fragment>
                )}
              </Field>
              <Field name="lastname" validate={required}>
                {({ input, meta }) => (
                  <Fragment>
                    <TextInput
                      {...input}
                      style={styles.input}
                      placeholder="Last name"
                      placeholderTextColor="white"
                    />
                    {meta.error && meta.touched && <Text>{meta.error}</Text>}
                  </Fragment>
                )}
              </Field>
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <Fragment>
                    <TextInput
                      {...input}
                      style={styles.input}
                      placeholder="Email"
                      placeholderTextColor="white"
                    />
                    {meta.error && meta.touched && <Text>{meta.error}</Text>}
                  </Fragment>
                )}
              </Field>
              <Field name="password" validate={required}>
                {({ input, meta }) => (
                  <Fragment>
                    <TextInput
                      {...input}
                      style={styles.input}
                      placeholder="Password"
                      placeholderTextColor="white"
                      secureTextEntry={true}
                    />
                    {meta.error && meta.touched && <Text>{meta.error}</Text>}
                  </Fragment>
                )}
              </Field>
              <Field name="confirmPassword" validate={required}>
                {({ input, meta }) => (
                  <Fragment>
                    <TextInput
                      {...input}
                      style={styles.input}
                      placeholder="Confirm password"
                      placeholderTextColor="white"
                      secureTextEntry={true}
                    />
                    {meta.error && meta.touched && <Text>{meta.error}</Text>}
                  </Fragment>
                )}
              </Field>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit(signup)}
              >
                <Text style={styles.text}>REGISTER</Text>
              </TouchableOpacity>
            </Fragment>
          )}
        />
      </ImageBackground>
    </Fragment>
  );
};

export default SignUp;
