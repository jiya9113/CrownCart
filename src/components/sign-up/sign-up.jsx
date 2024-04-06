import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";


import FormInput from "../form-input/form-input";
import Button from "../button/button";

import { SignUpContainer, Heading } from './sign-up.styles.jsx'

const defaultformFields = {
    'displayName' : '',
    'email' : '',
    'password' : '',
    'confirmPassword' : ''
}

const SignUp = () =>{

    const [formFields,setFormFields] = useState(defaultformFields);

    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields);

    const resetFormField = () =>{
        setFormFields(defaultformFields);
    }

    const onChangeHandler = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password!=confirmPassword){
            alert("passwords do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
        } catch(error){
            console.log(error);
        }
        finally{
            resetFormField();
        }
    };

    return (
        <SignUpContainer>
            <form onSubmit={handleSubmit}>
                <Heading>Don't have an account</Heading>
                <span>Sign Up with your email and password</span>

                <FormInput label='Display Name' type="text" onChange={onChangeHandler} value={displayName} name="displayName" required/>

                <FormInput label='Email' type="email" onChange={onChangeHandler} value={email} name="email" required/>

                <FormInput label='Password' type="password" onChange={onChangeHandler} value={password} name="password" required/>

                <FormInput label='Confirm Password' type="password" onChange={onChangeHandler} value={confirmPassword} name="confirmPassword" required/>

                <Button children='Sign-up' type="submit"/>
            </form>
        </SignUpContainer>
    )
}

export default SignUp;