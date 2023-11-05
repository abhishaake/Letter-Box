import {
  Grid,
  Form,
  Segment,
  Button,
  Message,
  Header,
  Image,
} from "semantic-ui-react";
import "./Login.css";
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../Assets/letterBox-Logo.png";
import axios from "axios";


function Login() {
  const baseURL = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState(false);
  const [signInForm, setSignInForm] = useState({ email: "", password: "" });
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const showSignUpHandler = () => {
    setShowSignUp(!showSignUp);
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post(
          baseURL+"user/login",
          signInForm,
          { withCredentials: true }
        );
        console.log(data);
        
        if (data.code===1005) {
          setTimeout(() => {    
            navigate("/home");
          }, 1000);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <>
      <Header
        style={{ margin: "50px 10px 0" }}
        as="h2"
        color="teal"
        textAlign="center"
      >
        <Image style={{ width: "30vw", maxWidth: "200px" }} src={logo} />
      </Header>
      <Grid textAlign="center" className="page" verticalAlign="middle">
        <Grid.Column className="pageColumn">
          <div
            className={
              !showSignUp
                ? "containerAnimationInLeft loginContainer"
                : "loginContainer containerAnimationOutLeft"
            }
          >
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  value={signInForm.email}
                  onChange={(e) =>
                    setSignInForm({
                      ...signInForm,
                      email: e.currentTarget.value,
                    })
                  }
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  value={signInForm.password}
                  onChange={(e) =>
                    setSignInForm({
                      ...signInForm,
                      password: e.currentTarget.value,
                    })
                  }
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button color="teal" fluid size="large" onClick={signInHandler}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New User?{" "}
              <a style={{ cursor: "pointer" }} onClick={showSignUpHandler}>
                Sign Up
              </a>
            </Message>
          </div>

          <div
            style={{ zIndex: "10", top: "-250px" }}
            className={
              showSignUp
                ? "containerAnimationInRight loginContainer"
                : "loginContainer containerAnimationOutRight"
            }
          >
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  value={signUpForm.email}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
                      email: e.currentTarget.value,
                    })
                  }
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  value={signUpForm.userName}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
                      userName: e.currentTarget.value,
                    })
                  }
                  fluid
                  icon="edit"
                  iconPosition="left"
                  placeholder="User Name"
                />
                <Form.Input
                  value={signUpForm.firstName}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
                      firstName: e.currentTarget.value,
                    })
                  }
                  fluid
                  icon="edit"
                  iconPosition="left"
                  placeholder="First Name"
                />
                <Form.Input
                  value={signUpForm.lastName}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
                      lastName: e.currentTarget.value,
                    })
                  }
                  fluid
                  icon="edit"
                  iconPosition="left"
                  placeholder="Last Name"
                />

                <Form.Input
                  value={signUpForm.password}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
                      password: e.currentTarget.value,
                    })
                  }
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                />

                <Button color="teal" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              Already Registered?{" "}
              <a style={{ cursor: "pointer" }} onClick={showSignUpHandler}>
                Sign In
              </a>
            </Message>
          </div>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Login;
