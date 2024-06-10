import React from 'react'
import type { ListElement, UserReport } from '../types'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Results from './Results'
import Inputs from './Inputs'

const StyledMainContainer = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  min-width: 350px;
  height: 100%;
  align-items: center;
  background-color: rgb(0, 0, 255, 0.2);
`

const StyledMainItem = styled.div`
  min-width: 350px;
  min-height: 450px;
  max-height: 500px;
  flex: 1 1 0px;
  display: flex;
  align-self: stretch;
  background-color: rgb(0, 0, 255, 0.1);
`

export default ({
  userReport,
  list,
}: {
  userReport: UserReport
  list: ListElement[]
}) => {
  const navigate = useNavigate()

  return (
    <StyledMainContainer>
      <StyledMainItem>
        <Results userReport={userReport} />
      </StyledMainItem>
      <StyledMainItem>
        <Inputs list={list} />
      </StyledMainItem>
    </StyledMainContainer>
  )
}
