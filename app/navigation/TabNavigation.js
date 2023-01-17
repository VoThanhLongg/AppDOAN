import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { COLORS } from '../contains'
import MyTabs from './MyTab'

import { HeaderScreen } from '../components'
import 'react-native-gesture-handler'
import ProfileEditScreen from '../components/Profile/ProfileEditScreen'
import CartScreen from '../components/Cart/CartScreen'
import FillterScreen from '../components/Fillter/FillterScreen'
import ProductScreen from '../components/Product/ProductScreen'
import InfoShipScreen from '../components/Cart/InfoShipScreen'
import AddressScreen from '../components/Cart/AddressScreen'
import ProfileInfoScreen from '../components/Profile/ProfileInfoScreen'
import SearchScreen from '../components/Search/SearchScreen'

const Stack = createStackNavigator()

const TabStackScreen = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.second
            }}
        >
            <Stack.Screen name='MyTabs' component={MyTabs} options={{ headerShown: false }} />
            <Stack.Screen
                name='FillterScreen'
                component={FillterScreen}
                options={{
                    header: () => <HeaderScreen product right={false} name={'Lọc sản phẩm'} />
                }}
            />
            <Stack.Screen
                name='CartScreen'
                component={CartScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ProductScreen'
                component={ProductScreen}
                options={{ header: () => <HeaderScreen product /> }}
            />
            <Stack.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{ header: () => <HeaderScreen right={false} /> }}
            />
            <Stack.Screen
                name='InfoShipScreen'
                component={InfoShipScreen}
                options={{
                    header: () => <HeaderScreen product right={false} name={'Thông tin cá nhân'} />
                }}
            />
            <Stack.Screen
                name='AddressScreen'
                component={AddressScreen}
                options={{
                    header: () => (
                        <HeaderScreen product right={false} name={'Thông tin giao hàng'} />
                    )
                }}
            />
            <Stack.Screen
                name='ProfileEditScreen'
                component={ProfileEditScreen}
                options={{
                    header: () => (
                        <HeaderScreen product right={false} name={'Chỉnh sửa thông tin cá nhân'} />
                    )
                }}
            />
            <Stack.Screen
                name='ProfileInfoScreen'
                component={ProfileInfoScreen}
                options={{
                    header: () => <HeaderScreen product right={false} name={'Thông tin cá nhân'} />
                }}
            />
        </Stack.Navigator>
    )
}

export default TabStackScreen
