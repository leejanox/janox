import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@styles/global.styles'
import { theme, lightColor, darkColor } from '@styles/theme.styles'
import AppRouter  from '@pages/appRouter'

function App() {

  const currentMode = useSelector((state:RootState)=>state.mode.value);

  return (
    <>
      <ThemeProvider theme={{theme,lightColor,darkColor}}>
          <GlobalStyle mode={currentMode}/>
          <AppRouter/>
      </ThemeProvider>
    </>
  )
}

export default App
