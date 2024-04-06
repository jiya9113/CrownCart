import { useState } from 'react';

// import { getRedirectResult } from 'firebase/auth';
import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, auth } from '../../utils/firebase/firebase';

import FormInput from '../form-input/form-input';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button';

import { SignInContainer, ButtonsContainer, Heading } from './sign-in.styles.jsx';

const defaultformFields = {
    'email' : '',
    'password' : '',
}

const SignIn = () => {
    const [formFields,setFormFields] = useState(defaultformFields);

    const {email, password} = formFields;

    // useEffect(()=>{const call=async ()=>{
    //     const response = await getRedirectResult(auth);
    //     if(response){   
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    //     console.log(response);
    // };
    // call()},[]);

    const logGoogleUser = async () => {
        try{
            await signInWithGooglePopup(auth);
        }
        catch(error){
            if(error.code=='cancelled-popup-request'){
                alert('cannot sign-in');
            }
        }
        // console.log(user);
    }

    // const logWithRedirect = async () => {
    //     await signInWithGoogleRedirect();
    // }

    const resetFormField = () =>{
        setFormFields(defaultformFields);
    }

    const onChangeHandler = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            resetFormField();
        } catch(error){
            if(error.code=='auth/invalid-credential'){
                alert('incorrect email or password');
            }
            console.log(error);
        }
    };

    return(
        <SignInContainer>
            <form onSubmit={handleSubmit}>
                <Heading>Already have an account</Heading>
                <span>Sign In with your email and password</span>

                <FormInput label='Email' type="email" onChange={onChangeHandler} value={email} name="email" required/>

                <FormInput label='Password' type="password" onChange={onChangeHandler} value={password} name="password" required/>

                <ButtonsContainer>
                    <Button children='Sign-in' type="submit"/>
                    <Button children='google sign-in' onClick={logGoogleUser} buttonType={BUTTON_TYPE_CLASSES.google} type='button'/>
                </ButtonsContainer>
                {/* <button onClick={logWithRedirect}>
                    sign in with google Redirect
                </button> */}
            </form>
        </SignInContainer>
    )
}

export default SignIn;