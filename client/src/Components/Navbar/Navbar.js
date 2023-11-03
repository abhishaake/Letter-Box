import { useState } from "react";
import { Dropdown,Input,Image, Sidebar, Container, Icon, Menu } from "semantic-ui-react";
import "./Navbar.css";
import logo from "../Assets/letterBox-Logo.png";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const handleToggle = () => setSidebarOpened(!sidebarOpened);

  const logoutHandler = () => {
    removeCookie("token");
    navigate("/");
  }

  return (
    <>
    <div style={{overflowx:'hidden', height:'100%'}}>
    
      <Sidebar.Pushable style={{position:'relative',overflow:'hidden'}}>
        
        <Sidebar.Pusher style={{ height: "50px" }}>
          <Menu fixed="top" inverted style={{height:'50px', background:'transparent'}}>
            <Menu.Menu position="left" style={{width:'120px'}}>
                <Menu.Item style={{color:'white',width:'100%'}}><Image className="logo" src={logo} /></Menu.Item>
            </Menu.Menu>
            <Menu.Menu style={{width:'100%',margin: '10px 8px 5px 8px',justifyContent:'center'}}>
                <Input placeholder='Search...' icon={<Icon name='search' link onClick={()=>console.log("")} />}  className="searchInput" />
            </Menu.Menu>
            <Menu.Menu position="right" style={{width:'80px'}}>
              <Menu.Item style={{color:'white',width:'100%'}} onClick={handleToggle}>
                <Icon style={{width:'100%'}} name="sidebar" />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Sidebar.Pusher>
      </Sidebar.Pushable>

      
      </div>
      <Sidebar.Pushable className="menubar">
        <Sidebar
          className="sideMenu"
          as={Menu}
          direction="right"
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={sidebarOpened}
        >
          <Menu className="sideMenu">
            <Menu.Item className="sideMenuItem"><Link to="/home" style={{color:'black'}}>Home</Link></Menu.Item>
          </Menu>
          <Menu className="sideMenu">
            <Menu.Item className="sideMenuItem"><Link to="/profile" style={{color:'black'}}>Profile</Link></Menu.Item>
          </Menu>
          <Menu className="sideMenu">
           <Menu.Item className="sideMenuItem" onClick={logoutHandler}><Link style={{color:'black'}}>Log Out</Link></Menu.Item>
          </Menu>
        </Sidebar>
        
      </Sidebar.Pushable>
    </>
    
  );
}

export default Navbar;
