import React from 'react'
import type { ListElement } from '../types'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton, StyledCentralised } from '../styledComponents'

const StyledList = styled.div`
  background-color: rgb(0, 0, 255, 0.1);
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px;
`

const StyledUnorderedList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  //border: 1px solid ${props => props.theme.borderColour};
  //border-radius: ${props => props.theme.borderRadius}px;
`

const StyledListElement = styled.li`
  height: 60px;
  background-color: rgb(0, 0, 255, 0.1);
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 10px;
  border-radius: ${props => props.theme.borderRadius}px;
  padding: ${props => props.theme.majorSpacing}px;
  border: 1px solid ${props => props.theme.borderColour};
`

const StyledListName = styled.div`
  background-color: rgb(0, 0, 255, 0.1);
  display: grid;
  justify-items: left;
  align-items: center;
`

const StyledListEdit = styled.div`
  background-color: rgb(0, 0, 255, 0.1);
  display: grid;
  place-items: center;
`

const StyledListDelete = styled.div`
  background-color: rgb(0, 0, 255, 0.1);
  display: grid;
  place-items: center;
`

export default ({ list }: { list: ListElement[] }) => {
  const navigate = useNavigate()

  return (
    <StyledList>
      <StyledUnorderedList>
        {list.map((entry, i) => (
          <StyledListElement key={i}>
            <StyledListName>
              <div>{entry.name}</div>
            </StyledListName>
            <StyledListEdit>
              <StyledButton onClick={() => navigate(`edit/` + entry.id)}>
                edit
              </StyledButton>
            </StyledListEdit>
            <StyledListDelete>
              <StyledButton onClick={() => navigate('delete/' + entry.id)}>
                del
              </StyledButton>
            </StyledListDelete>
          </StyledListElement>
        ))}
        <StyledListElement>
          <StyledListName>
            <div>Test</div>
          </StyledListName>
          <StyledListEdit>
            <StyledButton>edit</StyledButton>
          </StyledListEdit>
          <StyledListDelete>
            <StyledButton>del</StyledButton>
          </StyledListDelete>
        </StyledListElement>
        <StyledListElement>
          <StyledListName>
            <div>Test</div>
          </StyledListName>
          <StyledListEdit>
            <StyledButton>edit</StyledButton>
          </StyledListEdit>
          <StyledListDelete>
            <StyledButton>del</StyledButton>
          </StyledListDelete>
        </StyledListElement>
        <StyledListElement>
          <StyledListName>
            <div>Test</div>
          </StyledListName>
          <StyledListEdit>
            <StyledButton>edit</StyledButton>
          </StyledListEdit>
          <StyledListDelete>
            <StyledButton>del</StyledButton>
          </StyledListDelete>
        </StyledListElement>
      </StyledUnorderedList>
    </StyledList>
  )
}
