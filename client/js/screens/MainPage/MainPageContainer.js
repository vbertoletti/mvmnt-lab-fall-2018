import React, { Component } from "react";
import MainPage from "./MainPage";

class MainPageContainer extends Component {
  
    static navigationOptions = {
        title: "GROUND CONTROL",
        headerTitleStyle: {
            color: "white",
            fontSize: 24
        }
    };
    render() {
        return <MainPage navigation={this.props.navigation}/>;
    }
}

export default MainPageContainer;
