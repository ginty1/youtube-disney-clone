import styled from "styled-components";
import React, { useState,useEffect } from 'react';
import db from "../firebase/firebase";
import {useParams} from "react-router-dom"

function Detail(props) {
const [detailData, setDetailData]=useState({});
const {id}=useParams();
useEffect(() => {
    db.collection("Movies")
    .doc(id)
    .get()
    .then((doc)=>{
         if(doc.exists){
             setDetailData(doc.data());
        }else{
            console.log('no such movie');
         }
    })
    .catch(error=>console.log('error getting doc',error))
},
// making sure when the page changes the id gets updated 
[id]);
    console.log(detailData.titleImg);
    return (
        <Container>
            <Background>
              <img 
                 src={detailData.backgroundImg}
              alt={detailData.title}/>
            </Background>
              <ImageTitle>
                <img
                src={detailData.titleImg}
                   alt={detailData.title}/>
            </ImageTitle>
        <ContentMeta>
          <Controls>
              <Players>
                 <img src="/img/play-icon-black.png" alt=""/>
              <span>play</span>
              </Players>
              <Trailer>
                  <img src="/img/play-icon-white.png" alt=""/>
                  <span>Trailers</span>
              </Trailer>
              <AddList>
                  <span/>
              </AddList>
            <GroupWatch>
            
                <div>
                    <img src="/img/group-icon.png" alt=""/>
                </div>
            </GroupWatch>
          </Controls>
          <SubTitle>
              {detailData.subTitle}
          </SubTitle>
          <Description>
              {detailData.description}
          </Description>
        </ContentMeta>
        </Container>
    )
}
const Container=styled.div`
position: relative;
min-height:calc(100vh-250px);
overflow-x:hidden;
display:block;
top:72px;
padding:0 calc(3.5vw + 5px);`

const Background=styled.div`
left:0px;
position:fixed;
opacity:0.8;
right:0px;
top:0px;
z-index:-1;
img{
    width:100vw;
    height:100vh;
   
    @media (max-width: 768px){
     width:initial;
    }
}
`
const ImageTitle=styled.div`
display:flex;
align-items:flex-end;
-webkit-box-pack:start;
justify-content:flex-start;
margin:100px auto;
height:30vw;
min-height:170px;
padding-bottom:24px;
width:100%;
img{
    max-width:600px;
    height:300px;
    min-with:200px;
    width:33vw;;
}`
const ContentMeta=styled.div`
max-width:87px;
top:70px;
`
const Controls=styled.div`
display:flex;
align-items:center;
flex-flow: row nowrap;
margin:24px 0px;
min-height:56px;
`
const Players=styled.button`
font-size:15px;
margin:0px 22px opx 0px;
padding:0px 24px;
height:56px;
border-radius:4px;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center
letter-spacing:1.8px;
text-align:center;
text-transform:uppercase;
background:rgb(249,249,249);
border:none
color:rgb(0, 0, 0);
img{
    width:32px;
}
&:hover{
    background: rgb(198,198,198);
}
@media(max-width: 768px){
   height:45px;
   padding:0px 12px;
   font-size:11px;
   margin: 0px 10px 0px 0px;
   img{
       width: 23px;
   } 
}
`
const Trailer=styled(Players)`
background: rgb(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
`
const AddList=styled.div`
margin-right:16px;
width:44px;
height:44px;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.6);
border-radius:50%;
border:2px solid white;
span {
    background-color:rgb(249,249,249);
    display:inline-block;
    &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width:16px;
    }
    &:nth-child(2) {
        height:16px;
        transform:translateX(-8px) rotete(0deg);
        width: 2px;
    }
}
`
const GroupWatch=styled.div`
height:44px;
width:44px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
background:#fff;
div {
    height:40px;
    width:40px;
    background:rgb(0,0,0);
    border-radius:50%;
    img{
        width:100%;
    }
}
`
const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20;
@media(max-width: 768px){
 font-size:12px;
}
`
const Description=styled.div`
 line-height:1.4;
 font-size:20px;
 padding:16px 0px;
 color:rgb(249,249,249);
  @media(max-width: 768px){
      font-size:14px;
  }
`

export default Detail
