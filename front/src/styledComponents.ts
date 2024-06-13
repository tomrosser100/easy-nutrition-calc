import styled from 'styled-components'

export const theme = {
  main: 'blue',
  borderRadius: 10,
  majorSpacing: 10,
  minorSpacing: 5,
  borderColour: 'black',
}

export const StyledButton = styled.button`
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
  padding: 5px;
  border-radius: ${(props) => props.theme.borderRadius}px;
  height: 100%;
  width: 100%;
`

export const StyledSelect = styled.select`
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
  padding: 5px;
  border-radius: ${(props) => props.theme.borderRadius}px;
`

export const StyledInput = styled.input`
  accent-color: ${(props) => props.theme.main};
  height: 100%;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  border: 0.25px solid lightgray;
`

export const StyledRadio = styled.input`
  accent-color: ${(props) => props.theme.main};
  height: 20px;
  width: 20px;
  text-align: center;
  vertical-align: middle;
`

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.main};
  border: 1px solid ${(props) => props.theme.main};
  padding: 5px;
  border-radius: ${(props) => props.theme.borderRadius}px;
`

export const StyledHeader = styled.div`
  color: ${(props) => props.theme.main};
  font-weight: bold;
`

export const StyledCentralised = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`

export const StyledDenominatedBox = styled(StyledCentralised)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 0.25px solid lightgray;
`

export const StyledDenomination = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  padding: ${(props) => props.theme.minorSpacing}px;
`

export const StyledDenominatedInput = styled(StyledInput)`
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  padding: ${(props) => props.theme.minorSpacing}px;
`

export const StyledDenominatedDiv = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
`
