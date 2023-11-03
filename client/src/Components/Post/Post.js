import {
    Grid,
    Card,
    Form,
    Button,
    Icon,
    Segment,
    Feed,
    Header,
    Comment,
  } from "semantic-ui-react";
  import dp from "../Assets/man.jpg";
  import { useEffect, useState } from "react";
  function Post({props}) {
    const [post,setPost] = useState({
      from:{
        firstName:'',
        lastName:''
      },
      msg:''
    });
  
    function close(){
      props.closePost();
    }
  
    const reqObj = {
      operationName: '',
      variables: {},
      query: ''
    };
  
    useEffect(()=>{
      if(props.postId!==-1){
          reqObj.operationName = 'getPostById';
              reqObj.query = `query getPostById { getPostById(postId: "${props.postId}") { from { _id firstName lastName email } msg likes comments time _id } }`;
                
              fetch("http://localhost:4000/",{
                        method: 'POST',
                        body: JSON.stringify(reqObj),
                        headers: {
                            'Content-type': 'application/json' 
                        }
                  })
                  .then((res)=> res.json())
                  .then((res)=>{
                      setPost(res.data.getPostById);
                      console.log("Fecthed res " + JSON.stringify(res));
                  })
                  .catch((e)=>{
                        console.log("Error fetching resources " + e);
                  })
      }
    },[]);
  
    const text =
      "Have you seen what's going on in Israel? Can you believe it. Have you seen what's going on in Israel? Can you believe it. Have you seen what's going on in Israel? Can you believe it. Have you seen what's going on in Israel? Can you believe it.";
  
    return (
      <>
          <Grid.Column className="colMain colMid">
            <Card
              style={{
                width: "100%",
                textAlign: "start",
                padding: "15px 15px 0 15px",
                borderRadius: "15px",
                cursor: "default",
              }}
              link
            >
  
              <Feed>
                <Feed.Event onClick={close} style={{color:'black',fontWeight:'500',marginBottom:'10px',cursor:'pointer'}}>&#8592; Back</Feed.Event>
                <Feed.Event>
                  
                  <Feed.Label image={dp} />
                  <Feed.Content>
                    <Feed.Summary style={{ margin: "-0.5rem 0 0" }}>
                      <a>{post.from.firstName +' '+ post.from.lastName}</a>
                    </Feed.Summary>
                    <Feed.Date style={{ margin: "0" }}>3 days ago</Feed.Date>
                    <Feed.Extra text style={{ maxWidth: "95%" }}>
                      {post.msg}
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon
                          name="like"
                          className="likeButton"
                          onClick={(e) =>
                            e.target.classList.toggle("likeButtonActive")
                          }
                        />
                        4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                    <Comment.Group style={{maxWidth:'95%',marginTop:'30px'}}>
                      <Header as="h3" dividing>
                        Comments
                      </Header>
  
                      <Comment >
                        <Comment.Avatar src={dp} />
                        <Comment.Content>
                          <Comment.Author as="a">Matt</Comment.Author>
                          <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                          </Comment.Metadata>
                          <Comment.Text>How artistic!</Comment.Text>
                        </Comment.Content>
                      </Comment>
                      <Form reply style={{marginTop:'30px'}}>
                        <Form.TextArea rows={3} style={{minHeight:'50px',maxHeight:'100px'}}/>
                        <Button
                          content="Add Comment"
                          icon="edit"
                          primary
                          style={{float:'right'}} 
                        />
                      </Form>
                    </Comment.Group>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card>
          </Grid.Column>
      </>
    );
  }
  
  export default Post;
  