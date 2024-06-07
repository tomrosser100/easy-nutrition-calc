import styled from 'styled-components'

export const theme = {
  main: 'blue',
  borderRadius: '10px',
}

export const StyledCalibrateSection = styled.div`
  background-color: cyan;
  border: 0px;
`

export const StyledButton = styled.button`
  color: ${props => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
  height: 30px;
  width: 30px;
  border-radius: ${props => props.theme.borderRadius};
`

export const StyledSelect = styled.select`
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
  padding: 5px;
  border-radius: ${props => props.theme.borderRadius};
`

export const StyledInput = styled.input`
  accent-color: ${(props) => props.theme.main};
  height: 20px;
  width: 20px;
  vertical-align: middle;
  border-radius: ${props => props.theme.borderRadius};
`

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.main};
  border: 0px solid ${(props) => props.theme.main};
  padding: 5px;
  border-radius: ${props => props.theme.borderRadius};
`
