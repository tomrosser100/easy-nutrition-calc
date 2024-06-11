import styled from 'styled-components'

export const theme = {
  main: 'blue',
  borderRadius: '10px',
}

export const StyledButton = styled.button`
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
  padding: 5px;
  border-radius: ${(props) => props.theme.borderRadius};
`

export const StyledSelect = styled.select`
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
  padding: 5px;
  border-radius: ${(props) => props.theme.borderRadius};
`

export const StyledInput = styled.input`
  accent-color: ${(props) => props.theme.main};
  height: 20px;
  width: 20px;
  vertical-align: middle;
  border-radius: ${(props) => props.theme.borderRadius};
`

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.main};
  border: 1px solid ${(props) => props.theme.main};
  padding: 5px;
  border-radius: ${(props) => props.theme.borderRadius};
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

