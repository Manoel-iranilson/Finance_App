import React, { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ViewAdd,
  TextAdd,
  ViewDetails,
  TitleDetails,
  ViewDesc,
  TextDesc,
  ViewCate,
} from "./styles";

import Categories from "../../../components/Categories.revenue/index";
import { Modalize } from "react-native-modalize";

const revenue = ({ route }) => {
  const modalizeRef = useRef(null);
  const navigation = useNavigation();
  const [add, setAdd] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [cateName, setCateName] = useState(null);
  const [cateIcon, setCateIcon] = useState(null);

  function onOpen() {
    modalizeRef.current?.open();
  }

  function enviar() {
    navigation.navigate("Home");
  }

  useEffect(() => {
    setCateIcon(route.params?.icon);
    setCateName(route.params?.nome);
    modalizeRef.current?.close();
  });

  return (
    <Container>
      <StatusBar backgroundColor="#FA8072" />
      <ViewAdd>
        {/* <TextAdd
          defaultValue={""}
          keyboardType="numeric"
          value={String(add)}
          mask={Masks.BRL_CURRENCY}
          onChangeText={(texto) => setAdd(texto)}
        /> */}
        <TextAdd
          value={add}
          keyboardType="numeric"
          onChangeText={(texto) => setAdd(texto)}
        />
      </ViewAdd>
      {/* detalhes */}
      <ViewDetails>
        {/* Descrição */}
        <TitleDetails>Descriçao</TitleDetails>
        <ViewDesc>
          <FontAwesome name="pencil" size={20} />
          <TextDesc placeholder="Adicione a descrição" />
        </ViewDesc>
        {/* Categorias */}
        <View>
          <TitleDetails>Categorias</TitleDetails>
          {/* botão para mudar o modal */}
          <TouchableOpacity onPress={() => onOpen()}>
            <ViewCate>
              <View>{cateIcon}</View>
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20 }}>{cateName}</Text>
              </View>
            </ViewCate>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => enviar()}>
          <Text>Enviar </Text>
        </TouchableOpacity>
      </ViewDetails>
      <Modalize ref={modalizeRef} snapPoint={400}>
        <View>
          <Categories />
        </View>
      </Modalize>
    </Container>
  );
};

export default revenue;