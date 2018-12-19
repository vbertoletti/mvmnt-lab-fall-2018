import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { AppStack } from "./NavigationLayout";
import { CoachStack } from "./NavigationLayout";
import SignInScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import CoachSignInScreen from "../screens/CoachAccess";
import { sharedNavigationOptions } from "./config";

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    ForgotPassword: ForgotPasswordScreen,
    CoachAccess: CoachSignInScreen
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
    App: AppStack,
    Coach: CoachStack
  },
  {
    initialRouteName: "Auth"
  }
);

export default createAppContainer(AppNavigator);
