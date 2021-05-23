import React from 'react'
import styled from "styled-components";

function Detail(props) {
    return (
        <Container>
            <Background>
              <img src='https://s1.1zoom.me/big3/582/Inside_Out_(2015_film)_441512.jpg'/>
            </Background>
              <ImageTitle>
                <img src='https://www.seekpng.com/png/full/72-724774_disneypixar-inside-out-scented-products-scentco-disney-inside.png' alt=''/>
            </ImageTitle>
        <ContentMeta>
          <Controls>
              controls
          </Controls>
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
margin:24;px 0px;
min-height:56px;
`
export default Detail
