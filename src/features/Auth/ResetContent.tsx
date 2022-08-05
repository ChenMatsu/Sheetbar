import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, Button, Card, Grid, Image, Link } from "@nextui-org/react";
import { FormInput } from "../../components/Form/Form";
import { InfoText } from "../../components/Text/Text";
import { FaWineBottle } from "react-icons/fa";
import { AuthContainer, AuthInnerContainer, AuthGridContainer } from "./AuthStlyeComponent";
import ResetImage from "../../assets/images/ResetPassword.png";
import "./common.scss";
import "./ResetContent.scss";

const ResetContent: React.FC = () => {
    const navigator = useNavigate();
    const { theme } = useTheme();

    const onReset = () => {
        /**
         * TODO: Rest... (RTK)
         */

        navigator("/", { replace: true });
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
                                    <InfoText b h3>
                                        Reset Password
                                    </InfoText>
                                </Card.Header>

                                <Card.Body>
                                    <FormInput required placeholder="Email@email.com" type="email" />

                                    <Grid.Container
                                        justify="space-between"
                                        style={{
                                            marginTop: 32,
                                        }}>
                                        <Link className="auth-link" color="text" onClick={() => navigator("/")}>
                                            Back to login
                                        </Link>

                                        <Button shadow className="auth-button" type="submit" onClick={onReset}>
                                            Confirm
                                        </Button>
                                    </Grid.Container>
                                </Card.Body>
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
                                <Image src={ResetImage} alt="ResetImage" objectFit="cover" />
                            </Card.Body>
                        </Card>
                    </Grid>
                </AuthGridContainer>
            </AuthInnerContainer>
        </AuthContainer>
    );
};

export default ResetContent;
