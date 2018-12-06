import React, { Fragment } from "react";
import {
  Text,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { Form, Field } from "react-final-form";

const onSubmit = async (values, createUser) => {
  const res = await createUser({ variables: values });
};

const Signup = ({ data }) => {
  return (
    <Fragment>
      <ImageBackground
        source={require("../../assets/images/Signup.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.register}>REGISTER</Text>
        <Form
          onSubmit={values => onSubmit(values, createUser)}
          render={({ handleSubmit, pristine, invalid }) => (
            <View>
              <Field name="firstname">
                {({ input, meta }) => (
                  <View>
                    <TextInput
                      {...input}
                      style={styles.input}
                      placeholder="First name"
                      placeholderTextColor="white"
                    />
                  </View>
                )}
              </Field>
              <Field name="lastname">
                {({ input, meta }) => (
                  <View>
                    <TextInput
                      {...input}
                      style={styles.input}
                      placeholder="Last name"
                      placeholderTextColor="white"
                    />
                  </View>
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <View>
                    <TextInput
                      {...input}
                      style={styles.input}
                      placeholder="Email"
                      placeholderTextColor="white"
                    />
                  </View>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <View>
                    <TextInput
                      {...input}
                      style={styles.input}
                      placeholder="Password"
                      placeholderTextColor="white"
                    />
                  </View>
                )}
              </Field>
              <Field name="confirmPassword">
                {({ input, meta }) => (
                  <View>
                    <TextInput
                      {...input}
                      style={styles.input}
                      placeholder="Confirm password"
                      placeholderTextColor="white"
                    />
                  </View>
                )}
              </Field>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit(values)}
              >
                <Text style={styles.text}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ImageBackground>
    </Fragment>
  );
};

export default SignUp;
