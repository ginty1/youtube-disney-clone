import styled from "styled-components"
import React from 'react'

function Header() {
    return (
        <Nav>
           <Logo>
               <img
               src='/img/logo.svg' alt='Disney+'/>
           </Logo>

           <NavMenu>
                <a href="/home">
                       <img src="/img/home-icon.svg" alt="HOME"/>
                   <span>
                      HOME
                   </span>
                   </a>
           </NavMenu>
        </Nav>
    )
}

const Nav=styled.nav`
position:fixed;
height:70px;
padding:0 36px;
display:flex;
align-items:center;
justify-content:space-between;
top:0;
left:0;
right:0;
background-color:#090b13;
letter-spacing: 16px;
z-index:3;
`;

const Logo=styled.a`
  padding:0;
  width:80px;
  margin-top:4px;
  max-height:70px;
  font-size:0;
  display:inline-block;

  img{
      display:block;
      width:100%
  }
`;

const NavMenu=styled.div`
  display:flex;
  flex-flow:row nowrap;
  align-items:center;
  justify-content:flex-end;
  margin:0px;
  padding:0px;
  position:relative;
  margin-right:auto;
  margin-left:25px;
   
  a{
      display:flex;
      align-items:center;
      padding:0 12px;

      img {
          height: 20px;
          min-width: 20px;
          width: 20px;
          z-index:auto;
      }
      span{
         color: rgb(249,249,249);
         font-size: 13px;
         letter-spacing:1.42;
         line-height:1.03;
         padding: 2px 0px; 
         white-space: nowrap;
         position:relative;
      }

      &:before {
          display:block;
          background-color:rgb(249,249,249);
          border-radius: 0px 0px 4px 4px;
          bottom:-6px;
          content:'';
          height: 2px;
          opacity:0;
          position: absolute;
          right:0px;
          transform-origin: left center;
          transform: scale(0);
          transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
          visibility:hidden;
          width:outo;
      }
  } 
`;
 
// &:before{
//     background-color: rgb(249,249,249);
//     border-radius:0px 0px 4px 4px;
//     bottom:-6px;
//     content:"";
//     height:2px;
//     left:0px
//     opacity:0;
//     position:absolute;
//     right:0px;
//     transform-origin:left center;
//     transform:scaleX(0);
//     transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
//     visibility:hidden;
//     width:auto;
// }
// }
// &:hover{
//     &span:before{
//         opacity:1 !important;
//         visibility:visible;
//         transform:scaleX(1);
//     }

// }
// //   @media (max-width:768px){
// //       display:none;
// //   }



export default Header
