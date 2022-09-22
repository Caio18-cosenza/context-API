import { createContext, useState, useEffect, useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn } from '../service/auth';

interface User {
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData(){
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');
           
            await new Promise((resolve) => setTimeout(resolve, 2000));

            if(storageUser && storageToken){
             setUser(JSON.parse(storageUser));
             setLoading(false);
           }
        }
        loadStorageData();
    },[])

    async function handleSignIn(){
        const response = await signIn();
        setUser(response.user);

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);

    }

    function signOut(){
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
        
    }

    if(loading){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color={"#666"} />
            </View>
        );
    }

    return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn: handleSignIn, signOut }}>
        {children}
    </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}