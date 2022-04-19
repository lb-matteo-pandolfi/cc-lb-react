import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@app/styles/theme/default'
import { GlobalAppStyle } from '@app/styles/GlobalAppStyle'

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalAppStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
