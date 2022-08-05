import styled from "styled-components";
import { Grid } from "@nextui-org/react";

export const AuthContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const AuthInnerContainer = styled.div`
    width: 75%;
    height: 75%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
`;

export const AuthGridContainer = styled(Grid.Container)`
    width: 100%;
    height: 100%;
`;
