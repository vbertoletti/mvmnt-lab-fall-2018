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
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";

const required = value => (value ? undefined : "* Required Field");

const SignIn = ({ login, storeSessionToken, navigation }) => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.background}
      >
        <Fragment>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.companyLogo}
          />
        </Fragment>
        <View style={styles.loginForm}>
          <Form
            onSubmit={async values => {
              try {
                let response = await login({ variables: values });
                storeSessionToken(
                  response.data.authenticateUser.token,
                  response.data.authenticateUser.id
                );
              } catch (error) {
                Alert.alert(
                  "Wrong email or password",
                  "please re-enter your username or password",
                  [{ text: "Got it" }]
                );
              }
            }}
          >
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
                  onPress={() => {
                    handleSubmit(values);
                  }}
                  style={styles.button}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#1DC6C2", "#17C687"]}
                    style={styles.button}
                  >
                    <Text style={styles.loginButtons}>LOG IN</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ForgotPassword");
                  }}
                >
                  <Text style={styles.loginButtons}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                >
                  <Image source={require("../../assets/images/Register.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("CoachAccess");
                  }}
                >
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

export default SignIn;

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  storeSessionToken: PropTypes.func.isRequired
};
