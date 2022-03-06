import styled from 'styled-components';
import { View,SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
    flex:1;
    background-color: #DCDCDC;
    align-items: center;
    position: relative;
    `

export const Top = styled(View)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 200px;
    width: 100%;
    background-color: #3CB371;
    justify-content: center;
    justify-content: space-around;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 50px;
`
export const ViewUsuario =styled(View)`

`


export const ViewPhoto = styled(View)`
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background-color: #2E8B57;
    `

export const Photo = styled(View)`
    align-items: center;
    height: 75px;
    width: 75px;
    border-radius: 50px;
    background-color: white;
`

export const Date = styled(View)`
    top: 140px;
    position: absolute;
    height: 100%;
    width: 80%;
    border-radius: 8px;
    background-color: white;
    padding: 20px;
`

export const Greenbar = styled(View)`
    background-color: #3CB371;
    height: 100%;
    width: 5px;
    border-radius: 8px;

`
export const Viewbalance = styled(View)`
    margin-left: 5px;
    flex-direction: row;
`

export const IconEyes = styled(View)`
    margin-left: 140px;
    margin-top: 10px;
`

