import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
      <Container>
          <Content>
              <CTA>
               <CTALogoOne src="/img/cta-logo-one.svg" alt=""/>   
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                Sony’s theatrical releases from 2022 through 2026 are included in the deal, and Disney will get access to them following their “Pay 1 TV window.” Starting in 2022, that window, which follows a film’s theatrical and home video runs   
                </Description>
                <CTALogoTwo
                src="/img/cta-logo-two.png" alt=""/>
                 
              </CTA>
               <BgImage/>
          </Content>
      </Container>
    )
}
const Container=styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh
`;
const Content=styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:80px 40px;
    height:100%;
`;
const BgImage=styled.div`
  height:100%;
  right:0;
  top:0;
  left:0;
  z-index:-1;
  background-repeat:no-repeat;
  bacground-size:cover;
  background-position:top;
  position:absolute;
  background-image: url("/img/login-background.jpg");
`;
const CTA=styled.div`
max-width:650px;
width:100%;
display:flex;
flex-direction:column;
`;
const CTALogoOne=styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px
display:block;
width:100%;
`;
const SignUp=styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border:1px solid transparent:
border-radius:4px;
&:hover{
    background-color:#0483ee
}
`;


const Description=styled.p`
   color:hsla(0,0%,95.3&, 1);
   font-size:11px;
   margin:0 0 24px;
   line-height:1.5;
   letter-spacing:1.5px
`;

const CTALogoTwo =styled.img`
max-width:600px;
margin-bottom:20pxs;
display:inline-block
vertical-align:bottom;
width:100%;
`
export default Login
