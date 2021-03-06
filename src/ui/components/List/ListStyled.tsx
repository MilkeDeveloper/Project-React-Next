import { styled } from "@mui/material";

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(2) };
`

export const ItemList = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(5) };
    margin-bottom: ${({ theme }) => theme.spacing(5) };

    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing(2) };
        margin-bottom: ${({ theme }) => theme.spacing(10) };
    }
`

export const Photo = styled('img')`
    width: 100%;
    height: 250px;
    border: thick double rebeccapurple;
    border-radius: 6px;
`

export const Info = styled('div')`
    display: flex;
    flex-direction: column;
    gap : ${({ theme }) => theme.spacing(2) };

`

export const Name = styled('h2')`
    margin: 0;

`

export const Desc = styled('p')`
    margin: 0;
    word-break: break-word;
`