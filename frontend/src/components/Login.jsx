import {useState} from 'react'

import styled from 'styled-components';

const RedStar = styled.span`
color: #AF5D65;`
import logo from '../assets/discord.svg';

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const Div = styled.div`
padding: 2rem;
display:flex;
flex-direction:column;
justify-content:center;
margin-top: 10%;
border: 2px solid white;
width: 30%;
background-color:#313338


`

const Label = styled.label`
color:#E4E4E7;
font-weight: 600;
font-size: 1.1rem;
`

const FormElement = styled.div`

display:flex;

flex-direction:column;
gap: 10px;
width: 100%;

`

const Greeting = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;

`

const Input = styled.input`
padding: 8px 12px;
width: 100%;
background-color:#202225;
border: 1px solid #202225;
padding: 12px;
font-size: 1rem;
color: #E2EADB
`

const Form = styled.form `

display:flex;
flex-direction:column;

gap: 3rem;
padding: 12px
`

const Button = styled.button`
padding: 8px 8px;
background-color: #6468F1;
color: white;
padding: 12px;
font-weight: 600;
font-size: 1.1rem;  
`

const P = styled.p`
color:#A1A1AA;stroke-width: 500;
font-size: 1.1rem;
text-align:center;

`

const A = styled.a`
text-decoration: none;
color:#3F66F2
`

function Login()
{

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


async function login(e)
{
    e.preventDefault();
    try{
        let req = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
    console.log(req);
    let reqJson = await req.json();
    console.log(reqJson)
    
    if (reqJson.access_token)
    {
        console.log(reqJson)
        localStorage.setItem('token', reqJson.access_token)
    }

    }

    catch(err)
    {
        console.error('Failed to login');
    }



}



return (

    <Container>
        <Div>

        <Greeting>
        <img  src={logo}  alt="Logo" width="100" height="100" />
        <h2>Welcome back!</h2>
        <p>We're so excited to see you again</p>
        </Greeting>

        <Form action="http://localhost:5000/login" method="POST" onSubmit={login}>

        <FormElement>
            <Label htmlFor="username">Username <RedStar>*</RedStar></Label>
            <Input type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder='Enter your username'/>
        </FormElement>        

        <FormElement>
            <Label htmlFor="password">Password <RedStar>*</RedStar></Label>
            <Input type="text" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your password"></Input>
        </FormElement>


        <Button type="submit">Log In</Button>
        <P>Need an account?    <A href="/signup">Register</A></P>

        </Form>
        </Div>

    </Container>
)

}

export default Login;