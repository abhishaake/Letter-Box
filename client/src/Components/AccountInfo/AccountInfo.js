import {Grid,Card,Form,Button,Icon,Segment,Feed,Header,Image} from "semantic-ui-react"
import dp from "../Assets/man.jpg";
import { useEffect, useState } from "react";


function AccountInfo({data}){

    const newPost = data.newPost;

    const [userInfo,setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const reqObj = {
        operationName: '',
        variables: {},
        query: ''
    };

    useEffect(()=>{
        // 
        setUserInfo(data.userInfo)
    },[data.userInfo])

        return(<>
            <Grid.Column  className="colMain colLeft">
                    
                    <Grid style={{background:'white',borderRadius:'15px',margin:'0 0'}}>                    
                        <Grid.Column className="profilePicCol">                     
                        <Card
                            className="profilePic"
                        >
                            <div><Image style={{width:'100%',aspectRatio : '1 / 0.95',borderRadius:'50%'}} src={dp}></Image></div>
                            
                        </Card>
                        </Grid.Column>
                        <Grid.Column className="profileInfoCol">
                            <Segment className="profileInfoText"> 
                                    <Icon name='user' />
                                    {userInfo.firstName + ' ' + userInfo.lastName}
                            </Segment>
                            <Segment className="profileInfoText"> 
                            <Icon name='mail' />
                                    {userInfo.email}
                            </Segment>
                            <Segment className="profileInfoText"> 
                                    <Icon name='users' />
                                    10 Followers
                            </Segment>
                           
                        </Grid.Column>
                    </Grid>
                    <Grid className="desktopPost" style={{marginTop:'35px'}}>
                        {newPost && <Card
                            style={{width:'100%',textAlign:'start',padding:'25px 15px 20px 15px',borderRadius:'15px',cursor:'default'}}   
                            link
                        >
                            <Feed>
                                <Feed.Event>
                                    <Feed.Content>
                                        <Feed.Summary style={{margin:'-0.5rem 0 0',marginBottom:'20px',fontSize:"16px"}}>
                                        <Icon name="write" color="black"></Icon> Write a new Post ! 
                                        </Feed.Summary>
                                        
                                       
                                        <Form post>
                                            <Form.TextArea rows={4} maxRows={5} className="newPostInput" placeholder="Hey..."/>
                                            <Button
                                                content='New Post'
                                                labelPosition='right'
                                                icon='edit'
                                                primary
                                                className="postButton"
                                            />
                                        </Form>
                                    </Feed.Content>
                                    
                                </Feed.Event>
                            </Feed>
                        </Card> }
                        {!newPost && <Card
                            style={{width:'100%',textAlign:'start',padding:'25px 15px 20px 15px',borderRadius:'15px',cursor:'default'}}   
                            link
                        >
                            <Feed>
                                <Feed.Event>
                                    <Feed.Content>
                                        <Feed.Summary style={{margin:'-0.5rem 0 0',marginBottom:'20px',fontSize:"16px"}}>
                                        <Icon name="write" color="black"></Icon> Write a personal message ! 
                                        </Feed.Summary>
                                        
                                       
                                        <Form post>
                                            <Form.TextArea rows={4} maxRows={5} className="newPostInput" placeholder="Hey..."/>
                                            <Button
                                                content='Send'
                                                labelPosition='right'
                                                icon='edit'
                                                primary
                                                className="postButton"
                                            />
                                        </Form>
                                    </Feed.Content>
                                    
                                </Feed.Event>
                            </Feed>
                        </Card> }
                    </Grid>

                </Grid.Column>
        </>);

}

export default AccountInfo;

