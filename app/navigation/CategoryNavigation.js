import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import Header from '../components/common/Header/Header'
import CategoryAllScreen from '../components/CategoryAll/CategoryAllScreen'
import COLORS from '../controller/Constant'

const Stack = createStackNavigator()

const CategoryStackScreen = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.second
            }}
        >
            <Stack.Screen
                name='CategoryAllScreen'
                component={CategoryAllScreen}
                options={{ header: () => <Header name={'Danh mục'} product /> }}
            />
        </Stack.Navigator>
    )
}

export default CategoryStackScreen
