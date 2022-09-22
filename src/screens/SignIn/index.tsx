import { View, Button } from 'react-native';

import { useAuth } from '../../contexts/auth';

export default function SignIn(){
    const { signed, signIn } = useAuth();
   console.log(signed);
    function handleSignIn(){
        signIn();
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button title='Sign in' onPress={handleSignIn} />
        </View>
    )
}