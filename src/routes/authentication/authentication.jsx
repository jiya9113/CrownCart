import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import { AuthenticationContainer } from './authentication.styles.jsx';

const Authentication = () => {
    

    return(
        <AuthenticationContainer>
            <SignIn/>
            <SignUp/>
        </AuthenticationContainer>
    )
}

export default Authentication;