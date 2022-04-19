/* eslint-disable @typescript-eslint/no-empty-interface */
// import original module declarations
import 'styled-components'
import { CustomDefaultTheme } from '@app/styles/theme/default'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends CustomDefaultTheme {
    //
  }
}
