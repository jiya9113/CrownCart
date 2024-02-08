import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        // console.log(user);
    }

    return(
        <div>
            <h1>sign-in page</h1>
            <button onClick={logGoogleUser}>
                sign in with google
            </button>
        </div>
    )
}

export default SignIn