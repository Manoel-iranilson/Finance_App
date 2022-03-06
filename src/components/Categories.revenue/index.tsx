import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { ViewBtn } from "./styles";

const index: React.FC = () => {
  const navigation = useNavigation();

  function Investimentos() {
    navigation.navigate("revenue", {
      nome: "investimentos",
      icon: <FontAwesome name="money" size={50} color="#3b5998" />,
    });
  }

  function Salario() {
    navigation.navigate("revenue", {
      nome: "Salario",
      icon: <Entypo name="briefcase" size={50} color="#3b5998" />,
    });
  }

  function Emprestimos() {
    navigation.navigate("revenue", {
      nome: "Emprestimos",
      icon: <Entypo name="credit" size={50} color="#3b5998" />,
    });
  }

  function Outros() {
    navigation.navigate("revenue", {
      nome: "Outros",
      icon: <AntDesign name="bars" size={50} color="#3b5998" />,
    });
  }

  return (
    <View>
      {/* Investimentos */}
      <TouchableOpacity onPress={() => Investimentos()}>
        <ViewBtn>
          <Text style={{ fontSize: 15 }}>
            <FontAwesome name="money" size={50} color="#3b5998" />
          </Text>
          <View style={{ padding: 10 }}>
            <Text>Investimentos</Text>
          </View>
        </ViewBtn>
      </TouchableOpacity>
      {/* Salario */}
      <TouchableOpacity onPress={() => Salario()}>
        <ViewBtn>
          <Text style={{ fontSize: 15 }}>
            <Entypo name="briefcase" size={50} color="#3b5998" />
          </Text>
          <View style={{ padding: 10 }}>
            <Text>Salario</Text>
          </View>
        </ViewBtn>
      </TouchableOpacity>
      {/* Emprestimos */}
      <TouchableOpacity onPress={() => Emprestimos()}>
        <ViewBtn>
          <Text style={{ fontSize: 15 }}>
            <Entypo name="credit" size={50} color="#3b5998" />
          </Text>
          <View style={{ padding: 10 }}>
            <Text>Emprestimos</Text>
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
