import React from "react";
import HeaderEN from "../../componentsEN/HeaderEN";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils";
import { setToken } from "../../utils/utils";
import { setProfile } from "../../redux/reducers/auth/auth.actions";
import { connect } from "react-redux";
import { Form, Input, message } from "antd";
import axios from "../../utils/request";

function SignUp(props) {

  const [form] = Form.useForm();

  function err_msg_resolver(res_body) {
    if (res_body.code == 201 || res_body.code == 200)
      return res_body.data.error_message
    else {
      return res_body.message
    }
  }

  const onFinish = (values) => {

    let payload = {
        "username": values.username,
        "password": values.password,
        "confirmed_password": values.confirmed_password
      }

      axios.post(`${BASE_URL}/account/register/`, payload)
        .then(resp => {
          if (resp.data.code === 201) {
            setToken(resp.data.data.result);
            props.setProfile({ username: payload.username })
  
            setTimeout(() => {
              window.location.href = "#/en/verification-code"
              message.success("A verification code has been sent to you")
            }, 1000);
          }
        })
        .catch(err => {
          message.error({
            content: err_msg_resolver(err.response.data),
            className: 'text-danger',
            style: {
              marginTop: '10vh',
            },
          })
        })
  }

  return (
    <>
      <div dir="">
        <HeaderEN boxShadow={{ boxShadow: " none" }} />
        <Form
        onFinish={onFinish}
          class="container containercs align-items-center"
          id="signup-page"
          form={form}
        >
          <div class="inner-cover signup">
            <div class="signup-container">
              <div class="login-block">
                <div class="main-title">
                  <h2 class="default titr">Sign up</h2>
                </div>
                <p>
                  {" "}
                  By registering and logging in to the site, you agree to
                  <a href="#">Policy</a> and <a href="#">terms of use</a>.
                </p>
                    <Form.Item
                    className="w-100"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: "Please input your username!",
                        },
                    ]}
                    >
                    <Input
                        className="default-input"
                        placeholder="Enter email or phone number"
                    />
                    </Form.Item>
             
               
                <Form.Item
                  className="w-100"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    {
                      min: 8,
                      message: "At least 8 characters must be entered!",
                    },
                  ]}
                >
                  <Input
                    className="default-input"
                    type="password"
                    placeholder="Enter password"
                  />
                </Form.Item>
                
                <Form.Item
                  className="w-100"
                  name="confirmed_password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your confirmed password!",
                    },
                    {
                      min: 8,
                      message: "At least 8 characters must be entered!",
                    },
                  ]}
                >
                  <Input
                    className="default-input"
                    type="password"
                    placeholder="Repeat password"
                  />
                </Form.Item>

                <div class="btn-container">
                  <button
                    htmlType="submit"
                    class="btn-default"
                  >
                    Sign up
                  </button>
                </div>

              </div>
              <p class="l-signup">
              Already have account?<Link to="/en/login"> Login</Link>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}


const mapDispatchToProps = (dispatch) => {
    return {
      setProfile: (data) => dispatch(setProfile(data)),
    }
  }
  
  const mapStateToProps = (store) => {
    return {
      auth: store.authReducer,
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)