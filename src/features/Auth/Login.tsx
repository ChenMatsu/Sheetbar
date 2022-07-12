import React from "react";
import styled from "styled-components";
import { useTheme } from "@nextui-org/react";

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const LoginInnerContainer = styled.div`
    width: 50%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
`;

const Login: React.FC<any> = () => {
    const { theme } = useTheme();

    return (
        <LoginContainer
            style={{
                backgroundColor: theme?.colors.primaryLight.value,
            }}>
            <LoginInnerContainer
                style={{
                    borderStyle: "solid",
                    borderColor: theme?.colors.accents3.value,
                    borderWidth: theme?.borderWeights.bold.value,
                    backgroundColor: theme?.colors.white.value,
                }}>
                {/*  */}
            </LoginInnerContainer>
        </LoginContainer>
    );
};

export default Login;
