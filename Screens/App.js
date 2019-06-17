/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { StackNavigator} from 'react-navigation'

import Loginscreen from 'C:\Users\ARUN NIMMOJU\Documents\GitHub\PROJECTNECTAR\Screens\Login.js'
import Signupscreen from 'C:\Users\ARUN NIMMOJU\Documents\GitHub\PROJECTNECTAR\Screens\Signup.js'

const Navigation = StackNavigator({
    First: {screen:Loginscreen},
    Second:{screen:Signupscreen}
})
export default App;



