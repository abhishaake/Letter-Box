import {Grid,Card,Form,Button,Icon,Image,Feed,Header,Comment} from "semantic-ui-react"
import "./FeedView.css";
import dp from "../Assets/man.jpg";
import AccountInfo from "../AccountInfo/AccountInfo";
import Post from "../Post/Post";
import { useState, useEffect } from "react";


function FeedView({data}){

    const reqObj = {
        operationName: '',
        variables: {},
        query: ''
    };
   
    const [showPost,setShowPost] = useState({
        show: false,
        postId: -1
    });

    const [posts, setPosts] = useState([]);
    const newPost = data.newPost;

    const openPost = (_id) => {
        setShowPost({show: true, postId: _id});
    }
    function closePost (){
        setShowPost({show: false, postId: -1});
    }

    useEffect(()=>{
        setPosts(data.posts);
    },[data.posts]);


    return(
        <>
                
                {showPost.show && <Post props={{postId: showPost.postId,closePost}}/>}               

                {!showPost.show && <Grid.Column className="colMain colMid">
                {newPost && <Card
                        className="mobilePost"
                        style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                        link
                    >
                        <Feed>
                            <Feed.Event>
                                <Feed.Label >
                                    <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                    <a>{''}</a>
                                    </Feed.Summary>
                                    <Form post>
                                        <Form.TextArea rows={3} maxRows={5} className="newPostInput" placeholder="Hey..."/>
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

                    {
                        posts.map(function(post){
                            return (
                                <Card
                                    style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                                    link
                                    key={post._id}
                                >
                                    <Feed>
                                        <Feed.Event>
                                            <Feed.Label >
                                                <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                            </Feed.Label>
                                            <Feed.Content>
                                                <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                                <a>{post.from.firstName +" " + post.from.lastName}</a>
                                                </Feed.Summary>
                                                <Feed.Date style={{margin:'0'}}>3 days ago</Feed.Date>
                                                <Feed.Extra text style={{maxWidth:'95%'}}>
                                                    {post.msg.length>110 ? post.msg.slice(0,110) + "..." : post.msg}
                                                    {post.msg.length>110 ? <a onClick={()=>openPost(1)}> see more</a>:""}
                                                </Feed.Extra>
                                                <Feed.Meta>
                                                    <Feed.Like>
                                                        <Icon name='like' className="likeButton" onClick={e=> e.target.classList.toggle('likeButtonActive')} />4 Likes
                                                    </Feed.Like>
                                                </Feed.Meta>
                                            </Feed.Content>
                                            
                                        </Feed.Event>
                                        <Comment.Group style={{float:'right',margin:'0',position:'relative',top:'-26px'}}>
                                            <Comment>
                                                <Comment.Content>
                                                    <Comment.Actions>
                                                            <Comment.Action onClick={()=>openPost(post._id)}>Comments</Comment.Action>
                                                    </Comment.Actions>
                                                </Comment.Content>
                                            </Comment>
                                        </Comment.Group>
                                    </Feed>
                                </Card>
                            );
                        })
                    }
                    
                </Grid.Column>
                }

        </>
    );
}

export default FeedView;