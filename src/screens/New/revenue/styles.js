import styled from "styled-components";
import { View, SafeAreaView, Text, TextInput, Modal } from "react-native";
import MaskInput from "react-native-mask-input";

export const Container = styled(SafeAreaView)`
  flex: 1;
  position: relative;
`;

export const ViewAdd = styled(View)`
  background-color: #fa8072;
  height: 150px;
  justify-content: center;
  padding: 30px;
`;

export const TextAdd = styled(MaskInput)`
  text-align: right;
  color: white;
  font-size: 40px;
`;

export const ViewDetails = styled(View)`
  padding: 25px;
`;

export const TitleDetails = styled(Text)`
  color: gray;
  font-size: 20px;
`;

export const ViewDesc = styled(View)`
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  border-bottom-color: #a9a9a9;
  border-bottom-width: 0.5px;
`;

// Textinput da Descrição
export const TextDesc = styled(TextInput)`
  font-size: 20px;
`;

//categorias

export const ViewModal = styled(View)`
  margin-top: 350px;
  height: 400px;
`;
export const ViewCate = styled(View)`
  flex-direction: row;
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  border-color: gray;
  padding: 20px;
`;

export const BtnEnviar = styled(View)`
  border-width: 2px;
  border-radius: 100px;
  border-color: #3cb371;
  margin-top: 30px;
  height: 100px;
  width: 100px;
  background-color: #3cb371;
  justify-content: center;
  align-items: center;
`;
