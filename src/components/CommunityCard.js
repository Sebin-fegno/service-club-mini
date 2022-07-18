import react from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const CommunityCard = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('Vehicles')}}>
      <View style={styles.community_card_container}>
        <View style={styles.building_image_wrapper}>
          <Image
            source={require("../images/flat.jpg")}
            style={styles.building_image}
          />
        </View>
        <View style={styles.community_card_detail}>
          <Text style={styles.commmunity_title}>Trinity Building</Text>
          <Text style={styles.commmunity_wash_types}>
            Water wash,Power wash
          </Text>
          <Text style={styles.commmunity_place}>Kakkanad</Text>
        </View>
        <View style={styles.community_card_wash}>
          <Text style={styles.community_card_wash_count}>0</Text>
          <Text style={styles.community_card_wash_total}>280</Text>
          <Image
            source={require("../images/car.png")}
            style={{ width: "30px", height: "30px" }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  community_card_container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    // borderColor: "red",
    // borderWidth: "1px",
  },
  building_image: {
    width: "100px",
    height: "100px",
    borderBottomRightRadius: "50%",
    borderBottomLeftRadius: "50%",
    borderTopRightRadius: "50%",
    borderTopLeftRadius: "50%",
  },
  building_image_wrapper: {
    paddingRight: "10px",
  },
  community_card_detail: {
    flex: "auto",
    justifyContent: "center",
  },
  commmunity_title: {
    fontSize: "20px",
    fontWeight: "600",
  },
  commmunity_wash_types: {
    height: "35px",
  },
  commmunity_place: {},
  community_card_wash: {
    justifyContent: "center",
    alignItems: "center",
  },
  community_card_wash_count: {
    fontSize: "18px",
    fontWeight: "600",
  },
  community_card_wash_total: {
    fontSize: "18px",
    fontWeight: "600",
    borderTopColor: "#000",
    borderTopWidth: "1px",
  },
});
export default CommunityCard;
