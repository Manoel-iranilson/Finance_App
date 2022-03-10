import { View,Text } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    margin-top: 100px;
    width: 270px ;
`

export const Historico = styled(View)`
    border-width: 2px ;
    border-color: gray;
    height: 450px ;
    padding:8px ;
`

export const Title = styled(View)`
    align-items:center ;
    margin-top: 5px ;
`

export const Dados = styled(View)`
    margin-top: 5px;
    width: 250px ;
    border-width: 1px;
    border-color:#000;
    border-radius: 5px ;
    padding: 4px;
    flex-direction: row ;
    
`

export const Texto = styled(Text)`
    color: white ;
`