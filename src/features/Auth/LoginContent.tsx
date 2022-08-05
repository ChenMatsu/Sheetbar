import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, Button, Card, Grid, Image, Link } from "@nextui-org/react";
import { FormInput } from "../../components/Form/Form";
import { InfoText } from "../../components/Text/Text";
import { FaWineBottle } from "react-icons/fa";
import { RiGithubFill, RiGoogleFill, RiFacebookCircleFill } from "react-icons/ri";
import { AuthContainer, AuthInnerContainer, AuthGridContainer } from "./AuthStlyeComponent";
import LoginImage from "../../assets/images/Login.png";
import "./common.scss";
import "./LoginContent.scss";

const LoginContent: React.FC = () => {
    const navigator = useNavigate();
    const { theme } = useTheme();

    const onLogin = () => {
        /**
         * TODO: Login... (RTK)
         */

        navigator("/home", { replace: true });
    };

    return (
        <AuthContainer className="auth-container">
            <AuthInnerContainer
                className="auth-container--inner"
                style={{
                    borderWidth: theme?.borderWeights.normal.value,
                }}>
                <AuthGridContainer className="auth-container__grid">
                    <InfoText h3>
                        <FaWineBottle id="auth__wine" />
                        <InfoText b>Sheetbar</InfoText>
                    </InfoText>

                    <Grid.Container gap={8} justify="center">
                        <Grid xs={12}>
                            <Card style={{ backgroundColor: "transparent", width: "75%", margin: "auto" }}>
                                <Card.Header style={{ margin: "auto" }}>
                                    <InfoText b h2>
                                        Welcome
                                    </InfoText>
                                </Card.Header>

                                <Card.Body>
                                    <FormInput required placeholder="Email@email.com" type="email" />
                                    <FormInput.Password required placeholder="Password" type="password" />

                                    <Grid.Container
                                        justify="space-between"
                                        style={{
                                            marginTop: 32,
                                        }}>
                                        <Link className="auth-link" color="text" onClick={() => navigator("/reset")}>
                                            Forget Password?
                                        </Link>

                                        <Button shadow className="auth-button" type="submit" onClick={onLogin}>
                                            Submit
                                        </Button>
                                    </Grid.Container>
                                </Card.Body>

                                <Card.Footer className="auth__card--footer">
                                    <Grid.Container>
                                        <Grid xs={12}>
                                            <InfoText h5>New Musician?</InfoText>
                                        </Grid>

                                        <Grid xs={8}>
                                            <Link
                                                className="auth-link"
                                                color="text"
                                                onClick={() => navigator("/signup")}>
                                                <InfoText h5 style={{ height: "auto", margin: "auto" }}>
                                                    Sign up or
                                                </InfoText>
                                            </Link>

                                            <Button.Group ghost color="gradient" size="sm">
                                                <Button>
                                                    <RiGithubFill />
                                                </Button>
                                                <Button>
                                                    <RiGoogleFill />
                                                </Button>
                                                <Button>
                                                    <RiFacebookCircleFill />
                                                </Button>
                                            </Button.Group>
                                        </Grid>
                                    </Grid.Container>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    </Grid.Container>
                </AuthGridContainer>

                <AuthGridContainer gap={6} direction="row">
                    <Grid xs={12}>
                        <Card
                            style={{
                                backgroundColor: "transparent",
                            }}>
                            <Card.Body>
                                <Image src={LoginImage} alt="LoginImage" objectFit="cover" />
                            </Card.Body>
                        </Card>
                    </Grid>
                </AuthGridContainer>
            </AuthInnerContainer>
        </AuthContainer>
    );
};

export default LoginContent;
