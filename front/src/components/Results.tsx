import React from 'react'
import styled, { css } from 'styled-components'
import type { UserReport } from '../types'
import { useNavigate } from 'react-router-dom'
import {
  StyledButton,
  StyledCentralised,
  StyledDenominatedBox,
  StyledDenominatedDiv,
  StyledDenomination,
  StyledHeader,
} from '../styledComponents'

const StyledResultsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const StyledListElement = styled.li<{ $top?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;

  ${(props) => {
    switch (props.$top) {
      case true:
        return css`
          border-top: none;
        `
      default:
        return css`
          border-top: 0.5px solid ${(props) => props.theme.borderColour};
        `
    }
  }}
`

const StyledNutrient = styled.div<{ $header?: boolean }>`
  display: grid;
  border-right: 0.5px solid ${(props) => props.theme.borderColour};
  padding: ${(props) => props.theme.minorSpacing}px;

  ${(props) => {
    switch (props.$header) {
      case true:
        return css`
          place-items: center;
        `
      default:
        return css``
    }
  }}
`
const StyledAdvice = styled.div<{ $header?: boolean }>`
  display: grid;
  place-items: center;
  gap: 5px;
  border-right: 0.5px solid ${(props) => props.theme.borderColour};
  padding: ${(props) => props.theme.minorSpacing}px;

  ${(props) => {
    switch (props.$header) {
      case true:
        return css`
          grid-template-columns: 1fr;
        `
      default:
        return css`
          grid-template-columns: 1fr 1fr;
        `
    }
  }}
`
const StyledYou = styled(StyledCentralised)<{ $header?: boolean }>`
  display: grid;
  place-items: center;
  gap: 5px;
  padding: ${(props) => props.theme.minorSpacing}px;

  ${(props) => {
    switch (props.$header) {
      case true:
        return css`
          grid-template-columns: 1fr;
        `
      default:
        return css`
          grid-template-columns: 1fr 1fr;
        `
    }
  }}
`

const StyledNutrientText = styled.div`
  width: 100%;
  height: 100%;
  //border: 0.5px solid ${(props) => props.theme.borderColour};
  display: grid;
  place-items: center;
`

export default ({ userReport }: { userReport: UserReport }) => {
  const navigate = useNavigate()

  return (
    <StyledResultsContainer>
      <StyledUnorderedList>
        <StyledListElement $top={true}>
          <StyledNutrient $header={true}>
            <StyledHeader>Nutrient</StyledHeader>
          </StyledNutrient>
          <StyledAdvice $header={true}>
            <StyledHeader>Advice</StyledHeader>
          </StyledAdvice>
          <StyledYou $header={true}>
            <StyledHeader>You</StyledHeader>
          </StyledYou>
        </StyledListElement>
        {Object.keys(userReport).map((nutrient, i) => (
          <StyledListElement key={i}>
            <StyledNutrient>
              <StyledNutrientText>
                <div>{nutrient}</div>
              </StyledNutrientText>
            </StyledNutrient>
            <StyledAdvice>
              <StyledNutrientText>
                <div>{userReport[nutrient].advice.operator}</div>
              </StyledNutrientText>
              <StyledDenominatedBox>
                <StyledDenominatedDiv>
                  <div>{userReport[nutrient].advice.grams}</div>
                </StyledDenominatedDiv>
                {nutrient !== 'calories' ? (
                  <StyledDenomination>
                    <div>g</div>
                  </StyledDenomination>
                ) : (
                  <div></div>
                )}
              </StyledDenominatedBox>
            </StyledAdvice>
            <StyledYou>
              <StyledDenominatedBox>
                <StyledDenominatedDiv>
                  <div>{userReport[nutrient].total}</div>
                </StyledDenominatedDiv>
                {nutrient !== 'calories' ? (
                  <StyledDenomination>
                    <div>g</div>
                  </StyledDenomination>
                ) : (
                  <div></div>
                )}
              </StyledDenominatedBox>
              <StyledButton onClick={() => navigate('more/' + nutrient)}>
                more
              </StyledButton>
            </StyledYou>
          </StyledListElement>
        ))}
      </StyledUnorderedList>
    </StyledResultsContainer>
  )
}
