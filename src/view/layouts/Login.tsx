import React from "react";
import "../../assets/css/vendors.min.css";
import "../../assets/css/style-rtl.min.css";
import "../../assets/css/materialize.min.css";
import "../../assets/css/style.min.css";
import "../../assets/css/login.css";
import "../../assets/css/custom.css";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import MaterialIcon from "../components/MaterialIcon";
import Button from "../components/Button";
import {authenticate, isAuthenticated} from "../../controller/authentication";
import {Redirect} from "react-router-dom";
import InputField from "../components/InputField";

class Login extends React.Component {
    render() {
        if (isAuthenticated()) {
            return <Redirect to="/"/>
        }

        return (
            <div className="login-bg">
                <Row>
                    <Col className="s12">
                        <Container>
                            <Row id="login-page">
                                <Col className="s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                                    <form className="login-form">
                                        <Row>
                                            <Col className="input-field s12">
                                                <h5 className="ml-4">ورود به حساب کاربری</h5>
                                            </Col>
                                        </Row>
                                        <Row className="margin">
                                            <Col className="s12">
                                                <InputField id="username" type="text" label="نام کاربری">
                                                    <MaterialIcon iconName="person_outline"/>
                                                </InputField>
                                            </Col>
                                        </Row>
                                        <Row className="margin">
                                            <Col className="s12">
                                                <InputField id="password" type="password" label="رمز عبور">
                                                    <MaterialIcon iconName="lock_outline"/>
                                                </InputField>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="input-field s12">
                                                <Button
                                                    className="waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                                                    onClick={this.login}
                                                >
                                                    ورود
                                                </Button>
                                            </Col>
                                        </Row>
                                    </form>
                                </Col>
                            </Row>
                        </Container>
                        <div className="content-overlay"/>
                    </Col>
                </Row>
            </div>
        );
    }

    private login = () => {
        const getInputElement = (id: string) => document.getElementById(id) as HTMLInputElement;
        const usernameElement = getInputElement("username");
        const passwordElement = getInputElement("password");
        if (usernameElement && passwordElement) {
            const getInputValue = (inputElement: HTMLInputElement) => inputElement.value;
            const username: string = getInputValue(usernameElement);
            const password: string = getInputValue(passwordElement);
            if (username && password) {
                authenticate({id: username, password: password});
                this.forceUpdate();
            }
        }
    };
}

export default Login;