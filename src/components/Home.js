import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { selectUserName } from "../features/users/userSlice"
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import db from "../firebase/firebase";
import { setMovies } from "../features/movie/movieSlice";

function Home(props) {

    const dispatch=useDispatch();
    const userName=useSelector(selectUserName);
    let recommends=[];
    let newDisneys=[];
    let originals=[];
    let trending=[];

    useEffect(()=>{
        //puling data from firebase collection
        db.collection('Movies').onSnapshot((snapshot)=>{
            //mapping through the doc
         snapshot.docs.map((doc)=>{
           // console.log(recommends);
                    switch(doc.data().type){
                        //when type in db is recommened
                   case 'recommends':
                   recommends=[...recommends, {id: doc.id, ...doc.data()}]; 
                   
                       break;
                   case 'newDisneys':
                         //when type in db is newDisneys
                    newDisneys=[...newDisneys, {id: doc.id, ...doc.data()}] ;
                    
                       break;
                   case 'originals':
                       //when type in db originals
                    originals=[...originals, {id: doc.id, ...doc.data()}] ;
                     break;
                   case 'trending':
                       //when type in db trending
                    trending=[...trending, {id: doc.id, ...doc.data()}] ;
                       break;
               }
           }); 
           dispatch(
               setMovies({
                   recommend:recommends,
                   newDisney:newDisneys,
                   original:originals,
                   trending:trending,
                })
           );
        });
    },[userName]);


    return (
        <Container>
            <ImgSlider/> 
            <Viewers/>   
            <Recommends/> 
            <NewDisney/>   
            <Originals/>
            <Trending/> 
        </Container>
    )
}

 const Container=styled.main`
    position:relative;
    min-height:calc(100vh-250px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background:url('/img/home-background.png') center center / cover no-repeat fixed;
        content:"";
        position:absolute;
        inset:0px;
        opacity:1;
        z-index:-1;
    }
    `;
export default Home;
