import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";
import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  StatusBar,
  Alert
} from "react-native";
import styles from "./styles";

const showResults = async (values, login) => {
  try {
    await login({ variables: values });
  } catch (error) {
    Alert.alert(
      "Wrong email or password",
      "please re-enter your username or password",
      [{ text: "Got it" }]
    );
  }
};

const required = value => (value ? undefined : "* Required Field");

const LogIn = ({ login }) => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.background}
      >
        <View>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.companyLogo}
          />
        </View>
        <View style={styles.loginForm}>
          <Form onSubmit={values => showResults(values, login)}>
            {({ handleSubmit, values }) => (
              <View>
                <Field name="email" validate={required}>
                  {({ input, meta }) => (
                    <View style={styles.fieldLines}>
                      <Text style={styles.formFields}>Email</Text>
                      <TextInput
                        {...input}
                        style={styles.textInput}
                        autoCapitalize="none"
                      />

                      {meta.error && meta.touched && (
                        <Text style={styles.inputFields}>{meta.error}</Text>
                      )}
                    </View>
                    //if the user didnt touch the fields but try to login, required error message will show up
                  )}
                </Field>

                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <View style={styles.fieldLines}>
                      <Text style={styles.formFields}>Password</Text>
                      <TextInput
                        {...input}
                        secureTextEntry={true}
                        style={styles.textInput}
                      />

                      {meta.error && meta.touched && (
                        <Text style={styles.inputFields}>{meta.error}</Text>
                      )}
                    </View>
                  )}
                </Field>

                <TouchableOpacity
                  onPress={() => handleSubmit(values)}
                  style={styles.button}
                >
                  <Text style={styles.loginButtons}>LOG IN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.loginButtons}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                  <Text style={styles.loginButtons}>REGISTER</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.loginButtons}>COACH ACCESS</Text>
                </TouchableOpacity>
              </View>
            )}
          </Form>
        </View>
      </ImageBackground>
    </Fragment>
  );
};

export default LogIn;
