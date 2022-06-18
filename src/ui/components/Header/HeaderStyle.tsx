import { styled } from "@mui/material";

export const HeaderContainer = styled('header')`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #dfdfdf;
    padding: ${({theme}) => theme.spacing(6)};

`;

<HeaderContainer />

export const Logo = styled('img')`
    width: 230px;
`;