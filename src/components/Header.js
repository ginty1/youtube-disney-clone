import styled from "styled-components"
import {auth,provider} from '../firebase/firebase';
// dispatch allows to add user info to store.js select allows to retrieve info from store
import {useDispatch,useSelector}from 'react-redux';
import {useHistory} from 'react-router-dom';
import {selectUserEmail, selectUserName,
        selectUserPhoto,
        setSignOutState,
       setUserLoginDetails
       } from '../features/users/userSlice';

import { useEffect } from "react";



function Header() {
const dispatch=useDispatch();
    const history=useHistory();
    const userName=useSelector(selectUserName);
    const userEmail=useSelector(selectUserEmail);
    const userPhoto=useSelector(selectUserPhoto);
    
    useEffect(() => {
        // runs when userName is updated
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user)
                history.push('/home')
            }
        })
    }, [userName])

 // handle auth
 const handleAuth=()=>{
     if(!userName){

         //sign in with google auth Popup provider
              auth.signInWithPopup(provider)
              //return a promise
              .then(result=>{
                  setUser(result.user);
              })
              //catch if there is an error
              .catch(error=>alert(error.massage)
              ); }else if (userName){
                  auth.signOut().then(()=>{
                      dispatch(setSignOutState());
                      history.push("/");
                  }).catch((error)=> alert(error.message));
              }
 }
//  set a user
const setUser=user=>{
    dispatch(
        setUserLoginDetails({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL,
        })
    )
}
return (
        <Nav>
           <Logo>
               <img
               src='/img/logo.svg' alt='Disney+'/>
           </Logo>
           {/* if the user name doesnot exist -> login.js */}
          {!userName ? (
                <Login onClick={handleAuth}>Login</Login> 
                 ):
                // if it does -> home.js
                 (
                  <>
                 <NavMenu>
                      <a href="/home">
                             <img src="/img/home-icon.svg" alt="HOME"/>
                         <span>
                            HOME
                         </span>
                         </a>
                      <a href="/search">
                             <img src="/img/search-icon.svg" alt="SEARCH"/>
                         <span>
                            SEARCH
                         </span>
                         </a>
                      <a href="/watchlist">
                      <img src="/img/watchlist-icon.svg" alt="HOME"/>
                         <span>
                            WATCHLIST
                         </span>
                         </a>
                      <a href="/original">
                             <img src="/img/original-icon.svg" alt="HOME"/>
                         <span>
                            ORIGINALS
                         </span>
                         </a>
                      <a href="/movies">
                             <img src="/img/movie-icon.svg" alt="HOME"/>
                         <span>
                            MOVIE
                         </span>
                         </a>
                 </NavMenu>
                  <SignOut>
                 <UseImage src={userPhoto} alt={userName}/>
                 <DropDown>
                     <span onClick={handleAuth}>Sign out </span>
                 </DropDown>
                      </SignOut> 
                  </>)}
      
           
           

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
         font-size: 12px;
         letter-spacing:1.42px;
         line-height:1.08px;
         padding: 2px 0px; 
         white-space: nowrap;
         position:relative;
       
         &:before {
          background-color:rgb(249,249,249);
          border-radius: 0px 0px 4px 4px;
          bottom:-6px;
          content:'';
          height: 2px;
          left: 0px;
          opacity: 0;
          right: 0px;
          position: absolute;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
          visibility: hidden;
          width:outo;
      }
  } 

  &:hover {
      span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
     }
    }
  }
`;
 const Login=styled.a`
  background-color: rgb(0,0,0,06); 
  padding:8px 16px;
  text-transform:uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
   &:hover{
       background-color: #f9f9f9; 
       color: #000;
       border-color: transparent;
   }
 `;
const UseImage=styled.img`
      height:100px;
`;

const DropDown=styled.div`
position:absolute;
top:48px;
right:0px;
background:rgb(19,19,19);
border:1px solid rgba(151,151,151,0.34);
border-radius:4px;
box-shadow:rgb(0 0 0 / 50%)0px 0px 18px 0px;
padding:10px;
font-size:14px;
letter-spacing:3px;
width:100px;
opacity:0;

`;
const SignOut=styled.div`
position:relative;
height:48px;
width:48px;
display:flex;
cursor:pointer;
align-items:center;
justify-content:center;

${UseImage}{
    border-radius:50%;
    width:100%;
    height:100%;
}
&:hover{
    ${DropDown}{
     opacity:1;
     transition-duration:2s;  
    }
}
`;
export default Header
