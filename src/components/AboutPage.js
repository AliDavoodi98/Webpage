import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {darkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        I'm an AI-focused software developer. Currently, I am studying for a Master of Computer Science at Simon Fraser University.
<br /> <br/>
As an avid fan of Agile 
development teams, I am passionate about how high-tech companies manage to gather highly skilled software engineers and 
data scientists to cooperate to deliver cutting-edge products at excellent 
timing while having a meaningful impact on clients' issues. 
<br/> <br/>
Besides coding, I love doing street photography as a hobby and capturing day-to-day life moments. You can connect with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage