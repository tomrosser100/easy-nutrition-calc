import React from 'react'
import styled, { css } from 'styled-components'
import type { UserReport } from '../types'
import { useNavigate } from 'react-router-dom'
import { StyledButton, StyledCentralised, StyledHeader } from '../styledComponents'

const StyledResultsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 255, 0.1);
`
const StyledUnorderedList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const StyledListElement = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: rgb(0, 0, 255, 0.1);
  height: 100%;
  width: 100%;
`

const StyledNutrient = styled.div<{ $header?: boolean }>`
  display: grid;

  ${(props) => {
    switch (props.$header) {
      case true:
        return css`
          place-items: center;
        `
      default:
        return css`
          justify-items: left;
          align-items: center;
          padding-left: 5px;
        `
    }
  }}
`
const StyledAdvice = styled(StyledCentralised)`
`
const StyledYou = styled(StyledCentralised)`
`

export default ({ userReport }: { userReport: UserReport }) => {
  const navigate = useNavigate()

  return (
    <StyledResultsContainer>
      <StyledUnorderedList>
        <StyledListElement>
          <StyledNutrient $header={true}>
            <StyledHeader>Nutrient</StyledHeader>
          </StyledNutrient>
          <StyledAdvice>
            <StyledHeader>Advice</StyledHeader>
          </StyledAdvice>
          <StyledYou>
            <StyledHeader>You</StyledHeader>
          </StyledYou>
        </StyledListElement>
        {Object.keys(userReport).map((nutrient, i) => (
          <StyledListElement key={i}>
            <StyledNutrient>
              <div>{nutrient}</div>
            </StyledNutrient>
            <StyledAdvice>
              <div>{userReport[nutrient].advice.operator}</div>
              <div>{userReport[nutrient].advice.grams}</div>
            </StyledAdvice>
            <StyledYou>
              <div>{userReport[nutrient].total}</div>
              <StyledButton onClick={() => navigate('more/' + nutrient)}>More</StyledButton>
            </StyledYou>
          </StyledListElement>
        ))}
      </StyledUnorderedList>
    </StyledResultsContainer>
  )
}
