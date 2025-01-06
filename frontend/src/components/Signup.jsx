import React from 'react'
import {useState} from 'react'
import styled from 'styled-components';

const RedStar = styled.span`
color: #AF5D65;`

const LoginLink = styled.a`
color:#5865f2;
text-decoration:none;
`

const Label = styled.label`
color:white`

const EmailLabel = styled.label`
color: ${(props) => (props.isValid ? 'white':'#AF5D65')}
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
color: ${(props) => (props.isValid ? '#50905D':'#e16e73')}

`


const PasswordLabel = styled.label`

color: ${(props) => (props.isValid ? '#50905D':'#e16e73')}


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
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);


    const [errors, setErrors] = useState([]); // For backend validation errors


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
    

    function handlePasswordLabel(password){


        if (password == '')
        {
            setPasswordLabel('PASSWORD - Required');
            // setPasswordValid(false)
        }

        if (password.length > 8)
        {
            // setPasswordValid(true);
            setPasswordLabel('PASSWORD *');
            
        }
        else {
            // setPasswordValid(false);
            setPasswordLabel('PASSWORD - Must be at least 8 characters long')
        }

    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]); // Clear previous errors
    
        try {
          const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, displayName, username, password }),
          });
    
          if (!response.ok) {
            const data = await response.json();
            if (data.errors) {
              setErrors(data.errors); // Set validation errors from backend
            }
          } else {
            alert('Account created successfully!');
            // Optionally, redirect or clear form
          }
        } catch (error) {
          console.error('Error:', error);
          setErrors([{ msg: 'An unexpected error occurred. Please try again.' }]);
        }
      };

    return (
        <Container>
        <LoginDiv>
            <LoginForm action="http://localhost:5000/signup" method="POST" onSubmit={handleSubmit}>
            <H1>Create an account</H1>
                <inputDiv>
                <EmailLabel isValid={emailValid} htmlFor="email">{emailLabel}<RedStar> *</RedStar></EmailLabel>
                <Input name="email" type="email"    onChange={(e) => {
          setEmail(e.target.value); // Update the state with the email value
          validateMail(e.target.value); // Validate the email format
          handleEmailLabel(); // Handle any label changes or other related tasks
        }}/>

                </inputDiv>
                <inputDiv>

                <Label htmlFor="displayName">Display Name</Label>
                <Input name="display_name" type="text" onChange={(e) => {setDisplayName(e.target.value)}}/>

                </inputDiv>

                <inputDiv>
                <Label htmlFor="username">Username<RedStar> *</RedStar></Label>
                <Input name="username" type="text" onChange={(e) => {setUsername(e.target.value); handleUsernameLabel(e.target.value)}} />
                <UserSpan isValid={usernameIsValid}>{usernameError}</UserSpan>
                </inputDiv>
                <inputDiv>

                <PasswordLabel isValid={passwordValid} htmlFor="password">{passwordLabel}   </PasswordLabel>
                <Input name="password" type="password" onChange={(e) => {setPassword(e.target.value); handlePasswordLabel(e.target.value)}} />

                </inputDiv>

                <Button type="submit">Continue</Button>
            <LoginLink href="/login">Already have an account</LoginLink>
            </LoginForm>


        </LoginDiv>
        </Container>
    )
}

export default Signup;