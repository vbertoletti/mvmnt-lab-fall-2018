import React, { Fragment } from "react";
import {
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { Form, Field } from "react-final-form";

const onSubmit = async (values, signup) => {
  const res = await signup({ variables: values });
};

const required = value => (value ? undefined : "*Required Field");

const Signup = ({ signup }) => {
  return (
    <Fragment>
      <ImageBackground
        source={require("../../assets/images/Signup.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.register}>REGISTER</Text>
        <Form
          onSubmit={values => onSubmit(values, signup)}
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
                onPress={() => handleSubmit(values)}
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
