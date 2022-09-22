import { View, Button, Text } from 'react-native';

import { useAuth } from '../../contexts/auth';

export default function Dashboard(){
    const { signed, signOut, user } = useAuth();
   console.log(signed);
    function handleSignOut(){
        signOut();
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> {user?.name} </Text>
          <Button title='Sign out' onPress={handleSignOut} />
        </View>
    )
}