import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductDetailsScreen from "./Screens/ProductDetailsScreen";
import ShoppingCart from "./Screens/ShoppingCart";
import ProductsScreen from "./Screens/ProductsScreen";
import { Modal, Pressable, Text, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();

import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={20} color="black" />
                <Text style={{ marginLeft: 5, fontWeight: 500 }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          options={{ presentation: Modal }}
          component={ProductDetailsScreen}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
