import React from 'react'
import styled from 'styled-components'
import type { UserReport } from '../types'
import { useNavigate } from 'react-router-dom'

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
  grid-template-areas: 'nutrient advice you';
  background-color: rgb(0, 0, 255, 0.1);
  height: 100%;
  width: 100%;
`

const StyledNutrient = styled.div`
  grid-area: 'nutrient';
`
const StyledAdvice = styled.div`
  grid-area: 'advice';
`
const StyledYou = styled.div`
  grid-area: 'you';
`

export default ({ userReport }: { userReport: UserReport }) => {
  const navigate = useNavigate()

  return (
    <StyledResultsContainer>
      <StyledUnorderedList>
        <StyledListElement>
          <StyledNutrient>nutrient</StyledNutrient>
          <StyledAdvice>advice</StyledAdvice>
          <StyledYou>you</StyledYou>
        </StyledListElement>
        {Object.keys(userReport).map((nutrient, i) => (
          <StyledListElement key={i}>
            <StyledNutrient>{nutrient}</StyledNutrient>
            <StyledAdvice>
              {userReport[nutrient].advice.operator}
              {userReport[nutrient].advice.grams}
            </StyledAdvice>
            <StyledYou>
              {userReport[nutrient].total}
              <button onClick={() => navigate('more/' + nutrient)}>More</button>
            </StyledYou>
          </StyledListElement>
        ))}
      </StyledUnorderedList>
    </StyledResultsContainer>
  )
}
