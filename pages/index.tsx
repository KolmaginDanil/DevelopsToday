import React, { ReactElement } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'

const Main = styled.div`
  margin: 50px;
  font-size: 100px;
  text-align: center;
`

const Index = (): ReactElement => (
	<>
		<Header title='Main' />
		<Main>Main</Main>
	</>
)

export default Index
