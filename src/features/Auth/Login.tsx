import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTheme, Button, Card, Grid, Image, Link } from "@nextui-org/react";
import { FormInput } from "../Layout/Form/Form";
import { InfoText } from "../Layout/Text/Input";
import { FaWineBottle } from "react-icons/fa";
import { TbLock, TbLockOpen } from "react-icons/tb";
import { RiGithubFill, RiGoogleFill, RiFacebookCircleFill } from "react-icons/ri";
import Consts from "../../common/consts";
import LoginImage from "../../assets/images/Login.png";

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const LoginInnerContainer = styled.div`
    width: 75%;
    height: 75%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
`;

const LoginGridContainer = styled(Grid.Container)`
    width: 100%;
    height: 100%;
`;

const Login: React.FC<any> = () => {
    const navigator = useNavigate();
    const { theme } = useTheme();

    const onLogin = () => {
        /**
         * TODO: Login...
         */

        navigator("/home", { replace: true });
    };

    return (
        <LoginContainer
            style={{
                backgroundColor: Consts.LAYOUT_COLORS.MAIN,
            }}>
            <LoginInnerContainer
                style={{
                    borderStyle: "solid",
                    borderColor: Consts.LAYOUT_COLORS.AUXILIARY,
                    borderWidth: theme?.borderWeights.normal.value,
                    backgroundColor: Consts.LAYOUT_COLORS.OPPOSITE,
                    overflow: "hidden",
                }}>
                <LoginGridContainer alignContent="center" justify="center">
                    <InfoText
                        h3
                        style={{
                            textAlign: "left",
                        }}>
                        <FaWineBottle />
                        Sheetbar
                    </InfoText>

                    <Grid.Container gap={8} justify="center">
                        <Grid xs={12}>
                            <Card style={{ backgroundColor: "transparent" }}>
                                <Card.Header style={{ margin: "auto" }}>
                                    <InfoText h3>Welcome</InfoText>
                                </Card.Header>

                                <Card.Body>
                                    <FormInput required placeholder="Email@email.com" type="email" />
                                    <FormInput.Password required placeholder="Password" type="password" />

                                    <Grid.Container
                                        justify="space-between"
                                        style={{
                                            marginTop: 32,
                                        }}>
                                        <Link color="text" onClick={() => navigator("/reset")}>
                                            Oops! Forget Password?
                                        </Link>

                                        <Button shadow type="submit" onClick={onLogin}>
                                            Submit
                                        </Button>
                                    </Grid.Container>
                                </Card.Body>

                                <Card.Footer
                                    style={{
                                        margin: 8,
                                    }}>
                                    <Grid.Container>
                                        <Grid xs={12}>
                                            <InfoText h5>New Musician?</InfoText>
                                        </Grid>

                                        <Grid xs={8}>
                                            <InfoText h5 style={{ height: "auto", margin: "auto" }}>
                                                Register or
                                            </InfoText>

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
                </LoginGridContainer>

                <LoginGridContainer gap={6} direction="row">
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
                </LoginGridContainer>
            </LoginInnerContainer>
        </LoginContainer>
    );
};

export default Login;
