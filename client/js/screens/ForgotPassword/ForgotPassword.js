import React from "react";
import { Form, Field } from "react-final-form";
import LinearGradient from "react-native-linear-gradient";
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import styles from "./styles";

const ForgotPassword = ({navigation}) => {
  return (
    <React.Fragment>
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
        <View>
          <Text style={styles.header}>Forgotten your Password?</Text>
          <Text style={styles.text}>
            Please enter your email and we'll send you a link to change your
            password.
          </Text>
        </View>
        <View style={styles.loginForm}>
          <Form onSubmit={values => null}>
            {() => (
              <View>
                <Field name="email">
                  {() => (
                    <View style={styles.fieldLines}>
                      <Text style={styles.formFields}>Email</Text>
                      <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                      />
                    </View>
                  )}
                </Field>
                <TouchableOpacity>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#1DC6C2", "#17C687"]}
                    style={styles.button}
                  >
                    <Text style={styles.loginButtons}>SUBMIT</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          </Form>
        </View>
        <TouchableOpacity>
          <Text style={styles.return}>RETURN TO LOG IN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </React.Fragment>
  );
};

export default ForgotPassword;
