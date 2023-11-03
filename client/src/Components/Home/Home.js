import FeedView from "../Feed/FeedView";
import Navbar from "../Navbar/Navbar";
import {Grid,Card,Form,Button,Icon,Segment,Feed,Header,Comment,Dimmer,Loader,Image} from "semantic-ui-react"
import AccountInfo from "../AccountInfo/AccountInfo";
import Suggestions from "../Sides/Suggestions";
import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import loadingGIF from "../Assets/loading_gif.gif";
import "./Home.css";

function Home(){
     const [isLoading,setLoading] = useState(true);

     const reqObj = {
          operationName: '',
          variables: {},
          query: ''
     };

     const [homeData,setHomeData] = useState({
        user:{},
        posts:[]
     });
     const navigate = useNavigate();
     const [cookies, removeCookie] = useCookies([]);

     useEffect (()=>{

        const getData = async()=>{
            try {
                
                if (!cookies.token) {
                    navigate("/");
                }
                const { data } = await axios.post(
                  "https://letterbox.onrender.com/api/feed/home",{},
                  { withCredentials: true }
                );
                setLoading(false);
                console.log(data);
                
                if (data.code==1006) {
                    setHomeData(data.data);
                } else {
                }
                
              } catch (error) {
                console.log(error);
              }
        }
        
        getData();
        
        

     },[]);

     return (<>
     <Navbar />
     {isLoading && <div style={{minHeight:'99vh', minWidth:'99vw',position:'absolute'}}>
        <img style={{width:'28vw',minWidth:'350px',display:'block',margin:'20vh auto 0'}} src={loadingGIF}/>
     </div>}
     
     {!isLoading && <Grid stackable columns={3} textAlign='center' className="main containerAnimationInBottom" verticalAlign='middle'>
         <AccountInfo data={{newPost:true,userInfo:homeData.user}}/>
         <FeedView data={{newPost:true,posts:homeData.posts}} />
         <Suggestions />
      </Grid>}
     </>)
}

export default Home;