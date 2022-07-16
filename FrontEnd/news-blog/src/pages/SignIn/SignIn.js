
import BorderWrapper from '../../components/BorderWrapper/BorderWrapper';

const SignIn = () => {
    return (
        <BorderWrapper>
            <div>
                <h1>SignIn</h1>
                <form action="">
                    <BorderWrapper>
                        <p>Email</p>
                        <input type="email" id="email" />
                    </BorderWrapper>
                    <BorderWrapper>
                        <p >Password</p>
                        <input type="password" id="password" />
                    </BorderWrapper>
                    <button type="submit">Sign In</button>
                </form>
                <p>Don't have an account? <a href="">Register</a></p>
            </div>
        </BorderWrapper>
    );
}
export default SignIn;