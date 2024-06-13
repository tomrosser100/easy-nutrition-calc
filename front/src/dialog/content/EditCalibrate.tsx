import { nanoid } from 'nanoid'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import type { ListElement } from '../../types'
import { StyledDenominatedBox, StyledDenominatedInput, StyledDenomination, StyledInput } from '../../styledComponents'

const StyledCalibrate = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  padding: ${(props) => props.theme.minorSpacing}px;
  border: 1px solid ${(props) => props.theme.borderColour};
  border-radius: ${(props) => props.theme.borderRadius}px;
  gap: ${(props) => props.theme.majorSpacing}px;
`

const StyledCalibrateElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: ${(props) => props.theme.minorSpacing}px;
  border-radius: ${(props) => props.theme.borderRadius}px;
`

const StyledNameLabel = styled.label`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
`
const StyledAmountLabel = styled.label`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
`

export default ({
  buttonDisabled,
  listElement,
}: {
  buttonDisabled: boolean
  listElement: ListElement
}) => {
  const idExists = typeof useParams().id === 'string'

  return (
    <StyledCalibrate>
      {!idExists && (
        <input type='hidden' name='id' value={nanoid().slice(0, 7)} />
      )}
      <StyledCalibrateElement>
        <StyledNameLabel>Name:</StyledNameLabel>
        <StyledInput
          disabled={buttonDisabled}
          type='text'
          name='name'
          placeholder='e.g. Baked Beans'
          defaultValue={listElement && listElement?.name}
        />
      </StyledCalibrateElement>
      <StyledCalibrateElement>
        <StyledAmountLabel>Amount:</StyledAmountLabel>
        <StyledDenominatedBox>
          <StyledDenominatedInput
            disabled={buttonDisabled}
            type='number'
            min='0'
            name='userAmount'
            placeholder='0'
            defaultValue={listElement && listElement?.userAmount}
          />
          <StyledDenomination><div>g</div></StyledDenomination>
        </StyledDenominatedBox>
      </StyledCalibrateElement>
    </StyledCalibrate>
  )
}
