import { nanoid } from 'nanoid'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import type { ListElement } from '../../types'
import { StyledDenominatedInputBox } from './EditNutrientInputs'

const StyledCalibrate = styled.div`
  background-color: rgb(0, 0, 255, 0.1);
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
`

const StyledNameLabel = styled.label`
  display: grid;
  place-items: center;
`

const StyledNameInput = styled.input`
  display: grid;
  place-items: center;
  text-align: center;

`

const StyledAmountLabel = styled.label`
  display: grid;
  place-items: center;
`

const StyledAmountInput = styled.input`
  display: grid;
  place-items: center;
  text-align: center;

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
      <StyledNameLabel>Name:</StyledNameLabel>
      <StyledNameInput
        disabled={buttonDisabled}
        type='text'
        name='name'
        placeholder='e.g. Baked Beans'
        defaultValue={listElement && listElement?.name}
      />
      <StyledAmountLabel>Amount:</StyledAmountLabel>
      <StyledDenominatedInputBox>
      <StyledAmountInput
        disabled={buttonDisabled}
        type='number'
        min='0'
        name='userAmount'
        placeholder='0'
        defaultValue={listElement && listElement?.userAmount}
      />
      <div>g</div>
      </StyledDenominatedInputBox>
    </StyledCalibrate>
  )
}
