import { Button, StyleSheet, TextInput, View } from "react-native";
import Item from "../Components/Item";
import globalStyles from "./../Styles/Global";
import { color } from "./../Styles/Global";


const Layout = () => {
  return (
      <View style={globalStyles.container}>
          <View style={viewStyles.topContainer}>
            <TextInput style={viewStyles.input}
            
            />
            <Button
            
            />
          </View>
          <View>
              <Item></Item>
          </View>
      </View>
  )
}

export default Layout;

const viewStyles = StyleSheet.create({
    topContainer: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    input: {
        padding: 4,
        backgroundColor: color.lightViolet,
    }
})