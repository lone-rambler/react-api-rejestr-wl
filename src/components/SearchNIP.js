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

export default function SearchNIP(props){

const { register, handleSubmit } = useForm()
const [podmiot, setPodmiot] = useState([])

const onSubmit = async (data)=>{
  let date = new Date().toISOString().split('T')[0]
  
  fetch(`/api/search/nip/${data.nip.replace(/-/g,'')}/?date=${date}`)
  .then(res => res.json())
  .then(data => {
    // console.log('Output: ', data)
    if (!data.result){
      return alert(data.message)
    }else if (!data.result.subject){
      return alert('Brak danych.')      
    }else{
      let danePodmiotu = {
        nazwa: data.result.subject.name,
        regon: data.result.subject.regon,
        krs: data.result.subject.krs ? data.result.subject.krs : 'BRAK',
        ulica: data.result.subject.workingAddress.split(',')[0],
        kod_pocztowy: data.result.subject.workingAddress.split(',')[1].split(' ')[1],
        miasto: data.result.subject.workingAddress.split(',')[1].split(' ')[2]
      }
      setPodmiot(danePodmiotu)
    }
  });
}

return(
  <FitBox height={'60%'}>
    <Title height={'20%'}>Wyszukiwanie pojedynczego podmiotu po numerze NIP</Title>
    <StyledForm onSubmit={handleSubmit(onSubmit)} height={'40%'}>
    <StyledInput
      placeholder='Numer NIP'
      {...register('nip', { required: true })}></StyledInput>
    <StyledSubmitButton type='submit' value='Submit' width='25%'>
      Szukaj
    </StyledSubmitButton>
    </StyledForm>
    {podmiot.nazwa &&
     <table>
      <tr><StyledTh>NAZWA</StyledTh><StyledTh>REGON</StyledTh><StyledTh>KRS</StyledTh><StyledTh>ULICA</StyledTh><StyledTh>KOD POCZTOWY</StyledTh><StyledTh>MIASTO</StyledTh></tr>
      <tr><StyledTd>{podmiot.nazwa}</StyledTd><StyledTd>{podmiot.regon}</StyledTd><StyledTd>{podmiot.krs}</StyledTd><StyledTd>{podmiot.ulica}</StyledTd><StyledTd>{podmiot.kod_pocztowy}</StyledTd><StyledTd>{podmiot.miasto}</StyledTd></tr>
     </table>}
    <StyledLink to='/' width='25%'>Powrót</StyledLink>
   </FitBox>
  )
}