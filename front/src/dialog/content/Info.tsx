import React from 'react'
import { useNavigate } from 'react-router'
import {
  StyledAbout,
  StyledInfo,
  StyledInfoBody,
  StyledInfoFoot,
  StyledInfoHead,
} from './About'
import { StyledButton } from '../../styledComponents'
import { loremIpsum } from '../../constants'
import { StyledDescription, StyledHeader } from './Clear'

export default ({
  labelId,
  descriptionId,
}: {
  labelId: string
  descriptionId: string
}) => {
  const navigate = useNavigate()

  return (
    <StyledAbout>
      <StyledHeader id={labelId}>
        <div>Where does this information come from?</div>
      </StyledHeader>
      <StyledDescription id={descriptionId}>
        <div>Here is the source of my information {loremIpsum}</div>
      </StyledDescription>
      <StyledInfoFoot>
        <StyledButton onClick={() => navigate('/')}>Return</StyledButton>
      </StyledInfoFoot>
    </StyledAbout>
  )
}
