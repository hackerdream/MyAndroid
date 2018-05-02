import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TabNavigator,TabBarBottom } from 'react-navigation';

class ClassScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>课程</Text>
          <Button
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate('Settings')}
          />
           <Button
            title="通信"
          />
        </View>
      );
    }
  }

  class SettingsScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>个人</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
  }

 export default TabNavigator(
    {
        Home: { screen: ClassScreen },
        Settings: { screen: SettingsScreen },
    },
    {
        //自定义外观
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Settings') {
              iconName = `ios-options${focused ? '' : '-outline'}`;
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
      }
 )


 const styles = StyleSheet.create({

 })