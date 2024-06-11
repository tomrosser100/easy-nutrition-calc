import React from 'react'
import type { ListElement } from '../types'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton, StyledCentralised } from '../styledComponents'

const StyledList = styled.div`
  grid-area: 'list';
  background-color: rgb(0, 0, 255, 0.1);
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`

const StyledUnorderedList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`

const StyledListElement = styled.li`
  height: 60px;
  background-color: rgb(0, 0, 255, 0.1);
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'name edit delete';
`
const StyledListName = styled.div`
  grid-area: 'name';
  background-color: rgb(0, 0, 255, 0.1);
  display: grid;
  justify-items: left;
  align-items: center;
  padding-left: 5px;
`

const StyledListEdit = styled.div`
  grid-area: 'edit';
  background-color: rgb(0, 0, 255, 0.1);
  display: grid;
  place-items: center;
`

const StyledListDelete = styled.div`
  grid-area: 'delete';
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
