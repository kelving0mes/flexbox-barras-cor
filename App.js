import { View } from "react-native";

function App() {
  return (
    <View style={{ display: "flex", flexDirection: "column", flex: 1, padding:"3px", backgroundColor:"black" }}>
      <View style={{ display: "flex", flexDirection: "row", flex: 7 }}>
        <View style={{ backgroundColor: "white", flex: 1 }}></View>
        <View style={{ backgroundColor: "#f8fb0d", flex: 1 }}></View>
        <View style={{ backgroundColor: "#11f5ea", flex: 1 }}></View>
        <View style={{ backgroundColor: "#06fa35", flex: 1 }}></View>
        <View style={{ backgroundColor: "#f608f5", flex: 1 }}></View>
        <View style={{ backgroundColor: "#f8050a", flex: 1 }}></View>
        <View style={{ backgroundColor: "#3409f4", flex: 1 }}></View>
      </View>
      <View style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <View style={{ backgroundColor: "#3409f4", flex: 1 }}></View>
        <View style={{ backgroundColor: "black", flex: 1 }}></View>
        <View style={{ backgroundColor: "#f608f5", flex: 1 }}></View>
        <View style={{ backgroundColor: "black", flex: 1 }}></View>
        <View style={{ backgroundColor: "#11f5ea", flex: 1 }}></View>
        <View style={{ backgroundColor: "black", flex: 1 }}></View>
        <View style={{ backgroundColor: "white", flex: 1 }}></View>
      </View>
      <View style={{ display: "flex", flexDirection: "row", flex: 2 }}>
        <View style={{ backgroundColor: "#316768", flex: 1 }}></View>
        <View style={{ backgroundColor: "white", flex: 1 }}></View>
        <View style={{ backgroundColor: "#660098", flex: 1 }}></View>
        <View style={{ backgroundColor: "black", flex: 2 }}></View>
      </View>
    </View>
  );
}

export default App;