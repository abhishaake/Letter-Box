import {Grid,Card,Form,Button,Icon,Segment,Feed,Header,Comment} from "semantic-ui-react"
import dp from "../Assets/man.jpg";

function Suggestions(){
    return (<>
        <Grid.Column className="colMain colRight">
                    <Header as='h2' style={{display:'flex',justifyContent:'center'}}>
                        <Icon name='envelope' style={{color:'goldenrod',fontSize:'larger'}}/>
                        <Header.Content style={{color:'white',fontSize:'large'}}>Notifications</Header.Content>
                    </Header>
                     <Feed size='medium'>
                        <Feed.Event style={{background:'white',borderRadius:'5px',margin:'10px 0',padding:'6px'}}>
                        <Feed.Label image={dp} />
                        <Feed.Content>
                            <Feed.Date>1 Hour Ago</Feed.Date>
                            <Feed.Summary>
                            <Feed.User>Elliot Fu</Feed.User> followed you !
                            
                            </Feed.Summary>
                        </Feed.Content>
                        </Feed.Event>

                        <Feed.Event style={{background:'white',borderRadius:'5px',margin:'10px 0',padding:'6px'}}>
                        <Feed.Label icon='pencil' />
                        <Feed.Content>
                            <Feed.Date>3 days ago</Feed.Date>
                            <Feed.Summary>
                            You submitted a new post to the page
                            
                            </Feed.Summary>
                        </Feed.Content>
                        </Feed.Event>

                        <Feed.Event style={{background:'white',borderRadius:'5px',margin:'10px 0',padding:'6px'}}>
                        <Feed.Label image={dp} />
                        <Feed.Content>
                            <Feed.Date>4 days ago</Feed.Date>
                            <Feed.Summary>
                            <a>Helen Troy</a> added a <a>new post</a>
                            </Feed.Summary>
                        </Feed.Content>
                        </Feed.Event>

                        <Feed.Event style={{background:'white',borderRadius:'5px',margin:'10px 0',padding:'6px'}}>
                        <Feed.Label image={dp} />
                        <Feed.Content>
                            <Feed.Date>4 days ago</Feed.Date>
                            <Feed.Summary>
                            <a>Helen Troy</a> added a <a>new post</a>
                            </Feed.Summary>
                        </Feed.Content>
                        </Feed.Event>

                        <Feed.Event style={{background:'white',borderRadius:'5px',margin:'10px 0',padding:'6px'}}>
                        <Feed.Label image={dp} />
                        <Feed.Content>
                            <Feed.Date>4 days ago</Feed.Date>
                            <Feed.Summary>
                            <a>Helen Troy</a> added a <a>new post</a>
                            </Feed.Summary>
                        </Feed.Content>
                        </Feed.Event>
                        
                        
                    </Feed>
                </Grid.Column>
    </>);
}

export default Suggestions;