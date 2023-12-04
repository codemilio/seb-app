import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { UserData } from '../../components/FormClient'

const registerUser = async ({name, email, gender, password, tell }: UserData) => {
    try {
        const { user: { uid } } = await auth().createUserWithEmailAndPassword(email, password);
        await firestore().collection('users').doc(uid).set({ name, gender, tell })
    } catch(error) {
        console.error(error)
    }
}

const authenticateUser = async (email: string, password: string) => {
    try {
        await auth().signInWithEmailAndPassword(email, password);
    } catch(error) {
        console.error(error)
    }    
}

export {
    registerUser,
    authenticateUser
}