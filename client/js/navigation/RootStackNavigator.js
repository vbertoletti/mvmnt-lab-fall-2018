import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { AppStack } from "./NavigationLayout";
import SignInScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";
import { sharedNavigationOptions } from "./config";

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    signUp: SignUpScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: "Auth"
  }
);

export default createAppContainer(AppNavigator);
