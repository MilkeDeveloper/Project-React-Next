import { Link, Box } from '@mui/material'
import NextLink from 'next/link'

import { HeaderContainer, Logo, LinksContainer } from './HeaderAdmStyle'

export default function HeaderAdm() {
     return (
        <HeaderContainer>
            <div>
                <Logo src={'/img/logo.svg'} alt={'Adote um pet'} />
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/registration'}>
                        <a><strong>Cadastrar Pet</strong></a>
                    </Link>
                    <Link component={NextLink} href={'/pets/report'}>
                        <a><strong>Relatório</strong>
                            <Box component={'span'}
                                sx={{display: { sm: 'initial', xs: 'none'}}}
                            >
                                <strong>de Adoção</strong>
                            </Box> 
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </HeaderContainer>
     );
}