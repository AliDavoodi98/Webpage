import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Twitter } from '../components/AllSvgs'
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import styled from 'styled-components'
import {darkTheme} from '../components/Themes'
 


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(:last-child){
    margin: 0.5rem -0.5rem;
}
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props=> props.color ==='dark' ?  darkTheme.text : darkTheme.body}
`


const SocialIcons = (props) => {
  return (
    <Icons>

        <div>
            <NavLink style={{color: 'inherit'}} target="_blank"  to = {{pathname: "https://github.com/AliDavoodi98"}}>
                <FaGithub size={25} fill={props.theme==='dark' ? darkTheme.text :darkTheme.body }/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.linkedin.com/in/ali-davoodi-moghadam"}}>
                <BsLinkedin size={25} fill={props.theme==='dark' ? darkTheme.text :darkTheme.body }/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: 'https://www.instagram.com/ali._.david/'}}>
                <BsInstagram size={25} fill={props.theme==='dark' ? darkTheme.text :darkTheme.body }/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.linkedin.com/in/ali-davoodi-moghadam"}}>
                <BsTwitter  size={25} fill={props.theme==='dark' ? darkTheme.text :darkTheme.body }/>
            </NavLink>
        </div>

        <Line color={props.theme}/>
    </Icons>
  )
}

export default SocialIcons