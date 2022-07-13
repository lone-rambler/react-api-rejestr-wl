import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {
  FitBox,
  Title,
  StyledLink,
  StyledForm,
  StyledInput,
  StyledSubmitButton,
  StyledTh,
  StyledTd,
} from './Style.js'

export default function CheckNIPBankAccount(props){

const { register, handleSubmit } = useForm()
const [podmiot, setPodmiot] = useState([])

const onSubmit = async (data)=>{
  let date = new Date().toISOString().split('T')[0]
  let formattedNip = data.nip.replace(/-/g,'')

  fetch(`/api/check/nip/${formattedNip}/bank-account/${data.bank_account}/?date=${date}`)
  .then(res => res.json())
  .then(data => {
    console.log('Output: ', data)
    if (!data.result){
      return alert(data.message)
    }else{
      let danePodmiotu = {
        biala_lista: data.result.accountAssigned,
      }
      setPodmiot(danePodmiotu)
    }
  });
}

return(
  <FitBox height={'60%'}>
    <Title height={'20%'} width={'80%'}>Sprawdzenie pojedynczego podmiotu po numerze NIP i numerze konta</Title>
    <StyledForm onSubmit={handleSubmit(onSubmit)} height={'40%'}>
    <StyledInput
      placeholder='Numer NIP'
      {...register('nip', { required: true })}></StyledInput>
    <StyledInput
      placeholder='Numer konta'
      {...register('bank_account', { required: true })}></StyledInput>
    <StyledSubmitButton type='submit' value='Submit' width='25%'>
      Szukaj
    </StyledSubmitButton>
    </StyledForm>
    {podmiot.biala_lista &&
     <table>
      <tr><StyledTh>BIAŁA LISTA</StyledTh></tr>
      <tr><StyledTd>{podmiot.biala_lista}</StyledTd></tr>
     </table>}
    <StyledLink to='/' width='25%'>Powrót</StyledLink>
   </FitBox>
  )
}