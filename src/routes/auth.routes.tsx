import SignIn from '../screens/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
    return (
     <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
    )
    
}

export default AuthRoutes;