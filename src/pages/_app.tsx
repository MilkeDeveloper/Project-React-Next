import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import tema from '../ui/themes/tema'
import Header from '../ui/components/Header/Header'
import HeaderAdm from '../ui/components/HeaderAdm/HeaderAdm'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <ThemeProvider theme={tema}>
      {router.pathname === '/' ? <Header /> : <HeaderAdm />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
