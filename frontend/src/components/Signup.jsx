import React from 'react'
import {useState} from 'react'
import styled from 'styled-components';

const RedStar = styled.span`
color: red;`

const LoginLink = styled.a`
color:#5865f2;
text-decoration:none;
`

const Label = styled.label`
color:white`

const EmailLabel = styled.label`
color: ${(props) => (props.isValid ? 'white':'red')}
`

const H1 = styled.h1`
color:white; text-align:center`

const LoginDiv = styled.div`

display:flex;
justify-content:center;
 margin-top: 5%;
background-color: #313338;

padding: 2rem 1rem;

width: 30%;


`

const LoginForm = styled.form`
display:flex;
flex-direction: column;
gap: 1.7rem;
padding: 2rem;

width: 100%;


`

const Container = styled.div`
display:flex;
justify-content:center;
align-content:center;

`


const Input = styled.input`

background-color:#1e1f22;
color:#b4b9c0;
padding: 0.7rem;
border: 1px solid #1e1f22;
font-size: 1.1rem;

width: 100%;
margin-top: 10px;
`

const Button = styled.button`

background-color:#5865f2;
color: white;
padding: 1rem 2rem;
font-size: 1.1rem;
border-radius: 6px;

`

const UserSpan = styled.div`
padding-top: 5px;
color: ${(props) => (props.isValid ? 'green':'#e16e73')}


`

const inputDiv = styled.div``
function Signup()
{
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [emailLabel, setEmailLabel] = useState('EMAIL');
    const [passwordLabel, setPasswordLabel] = useState('Password');
    
    
    const [usernameIsValid, setUsernameIsValid] = useState();
    const [usernameError, setUsernameError] = useState('');
    const [emailValid, setEmailValid] = useState(true)

    function validateMail(email)
    {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let res =  emailPattern.test(email);
        console.log(res);
        setEmailValid(res);
        if (res)
            {
                setEmailLabel('EMAIL ')
            }
            else {
                setEmailLabel('EMAIL Required')
            }
    }


    

   

    function handleUsernameLabel(username){
        if (username.length < 3)
            {
                setUsernameIsValid(false);
                setUsernameError('Username is unavailable. Try adding numbers, letters, underscores _ , or periods.')
            }
            else {
                setUsernameIsValid(true);
                setUsernameError('Username is avaliable. Nice!')
            }
    };

    function handlePasswordLabel(){};

    return (
        <Container>
        <LoginDiv>
            <LoginForm action="POST">
            <H1>Create an account</H1>
                <inputDiv>
                <EmailLabel isValid={emailValid} htmlFor="email">{emailLabel}<RedStar> *</RedStar></EmailLabel>
                <Input type="email"    onChange={(e) => {
          setEmail(e.target.value); // Update the state with the email value
          validateMail(e.target.value); // Validate the email format
          handleEmailLabel(); // Handle any label changes or other related tasks
        }}/>

                </inputDiv>
                <inputDiv>

                <Label htmlFor="displayName">Display Name</Label>
                <Input type="text" onChange={(e) => {setDisplayName(e.target.value)}}/>

                </inputDiv>

                <inputDiv>
                <Label htmlFor="username">Username<RedStar> *</RedStar></Label>
                <Input type="text" onChange={(e) => {setUsername(e.target.value); handleUsernameLabel(e.target.value)}} />
                <UserSpan isValid={usernameIsValid}>{usernameError}</UserSpan>
                </inputDiv>
                <inputDiv>

                <Label htmlFor="password">{passwordLabel}<RedStar> *</RedStar></Label>
                <Input type="password" onChange={(e) => {setPassword(e.target.value); handlePasswordLabel()}} />

                </inputDiv>

                <Button type="submit">Continue</Button>
            <LoginLink href="/login">Already have an account</LoginLink>
            </LoginForm>


        </LoginDiv>
        </Container>
    )
}

export default Signup;