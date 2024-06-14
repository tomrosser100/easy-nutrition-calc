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
        <div>This web app uses information provided in the <a href="https://www.gov.uk/government/publications/the-eatwell-guide">UK government's Eatwell Guide</a>.</div>
      </StyledDescription>
      <StyledInfoFoot>
        <StyledButton onClick={() => navigate('/')}>Return</StyledButton>
      </StyledInfoFoot>
    </StyledAbout>
  )
}
