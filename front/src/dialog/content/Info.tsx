import React from 'react'
import { useNavigate } from 'react-router'
import {
  StyledInfo,
  StyledInfoBody,
  StyledInfoFoot,
  StyledInfoHead,
} from './About'
import { StyledButton } from '../../styledComponents'

export default ({
  labelId,
  descriptionId,
}: {
  labelId: string
  descriptionId: string
}) => {
  const navigate = useNavigate()

  return (
    <StyledInfo>
      <StyledInfoHead id={labelId}>
        <div>Where does this data come from?</div>
      </StyledInfoHead>
      <StyledInfoBody id={descriptionId}>
        <div>Great question! Here's where I got the reference data from</div>
      </StyledInfoBody>
      <StyledInfoFoot>
        <StyledButton onClick={() => navigate('/')}>Return</StyledButton>
      </StyledInfoFoot>
    </StyledInfo>
  )
}
