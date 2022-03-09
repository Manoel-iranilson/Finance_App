import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { ViewBtn } from "./styles";

const index: React.FC = () => {
  const navigation = useNavigation();

  function Alimentação() {
    navigation.navigate("expenditure", {
      nome: "alimentação",
      icon: <AntDesign name="isv" size={50} color="#3b5998" />,
    });
  }
  function Assinaturas() {
    navigation.navigate("expenditure", {
      nome: "Assinaturas",
      icon: <Entypo name="link" size={50} color="#3b5998" />,
    });
  }

  function Compras() {
    navigation.navigate("expenditure", {
      nome: "Compras",
      icon: <AntDesign name="shoppingcart" size={50} color="#3b5998" />,
    });
  }

  function Dividas() {
    navigation.navigate("expenditure", {
      nome: "Dividas",
      icon: <AntDesign name="creditcard" size={50} color="#3b5998" />,
    });
  }

  function Outros() {
    navigation.navigate("expenditure", {
      nome: "Outros",
      icon: <AntDesign name="bars" size={50} color="#3b5998" />,
    });
  }

  return (
    <View>
      {/* Alimentação */}
      <TouchableOpacity onPress={() => Alimentação()}>
        <ViewBtn>
          <Text style={{ fontSize: 15 }}>
            <AntDesign name="isv" size={50} color="#3b5998" />
          </Text>
          <View style={{ padding: 10 }}>
            <Text>Alimentação</Text>
          </View>
        </ViewBtn>
      </TouchableOpacity>
      {/* Assinaturas */}
      <TouchableOpacity onPress={() => Assinaturas()}>
        <ViewBtn>
          <Text style={{ fontSize: 15 }}>
            <Entypo name="link" size={50} color="#3b5998" />
          </Text>
          <View style={{ padding: 10 }}>
            <Text>Assinaturas e serviços</Text>
          </View>
        </ViewBtn>
      </TouchableOpacity>
      {/* Compras */}
      <TouchableOpacity onPress={() => Compras()}>
        <ViewBtn>
          <Text style={{ fontSize: 15 }}>
            <AntDesign name="shoppingcart" size={50} color="#3b5998" />
          </Text>
          <View style={{ padding: 10 }}>
            <Text>Compras</Text>
          </View>
        </ViewBtn>
      </TouchableOpacity>
      {/* Dividas */}
      <TouchableOpacity onPress={() => Dividas()}>
        <ViewBtn>
          <Text style={{ fontSize: 15 }}>
            <AntDesign name="creditcard" size={50} color="#3b5998" />
          </Text>
          <View style={{ padding: 10 }}>
            <Text>Dividas e emprestimos</Text>
          </View>
        </ViewBtn>
      </TouchableOpacity>
      {/* Outros */}
      <TouchableOpacity onPress={() => Outros()}>
        <ViewBtn>
          <Text style={{ fontSize: 15 }}>
            <AntDesign name="bars" size={50} color="#3b5998" />
          </Text>
          <View style={{ padding: 10 }}>
            <Text>Outros</Text>
          </View>
        </ViewBtn>
      </TouchableOpacity>
    </View>
  );
};

export default index;
