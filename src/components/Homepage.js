import React from "react";
import {
  FitBox,
  Title,
  colors,
  StyledLink
} from './Style.js'

export default function Homepage(props){

  return(
    <FitBox height={'60%'}>
      <Title height={'20%'}>Wyszukiwarka podatników VAT</Title>
      <FitBox height={'80%'}>
      <Title color={colors.blue} fontSize={'2rem'} height={'10%'}>Wybierz opcję:</Title>
      <StyledLink to='/search-nip'>Wyszukiwanie pojedynczego podmiotu po numerze NIP</StyledLink>
      <StyledLink to='/check-nip-bank-account'>Sprawdzenie pojedynczego podmiotu po numerze NIP i numerze konta</StyledLink>

      </FitBox>
    </FitBox>
  )
 
}