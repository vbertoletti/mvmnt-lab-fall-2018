import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { AppStack } from "./NavigationLayout";
<<<<<<< HEAD
import SignInScreen from "../screens/SignIn";
=======
import SignInScreen from "../screens/LogIn";
>>>>>>> fix merge conflict
import SignUpScreen from "../screens/SignUp";
import { sharedNavigationOptions } from "./config";

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen
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
