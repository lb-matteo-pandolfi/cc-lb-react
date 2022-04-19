import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@app/styles/theme/default'
import { Title } from '@components/examples/Title'

const setup = ({ name }: { name: string }) => {
  const utils = render(
    <ThemeProvider theme={defaultTheme}>
      <Title name={name} data-testid={'title-test'} />
    </ThemeProvider>
  )
  const component = utils.getByTestId('title-test') as HTMLHeadingElement
  return {
    component,
    ...utils,
  }
}

test('It should be rendered', () => {
  const { component } = setup({ name: 'Hello world' })
  expect(component).toBeInTheDocument()
})
