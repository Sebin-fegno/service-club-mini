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
            style={{ width: 30, height: 30 }}
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
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent:"space-between"
  },
  building_image: {
    width: 100,
    height: 100,
    borderRadius:50,
  },
  building_image_wrapper: {
    paddingRight: 10,
  },
  community_card_detail: {
    justifyContent: "center",
  },
  commmunity_title: {
    fontSize: 20,
    fontWeight: '600',
  },
  commmunity_wash_types: {
    height: 35,
  },
  commmunity_place: {},
  community_card_wash: {
    justifyContent: "center",
    alignItems: "center",
  },
  community_card_wash_count: {
    fontSize: 18,
    fontWeight: '600',
  },
  community_card_wash_total: {
    fontSize: 18,
    fontWeight: '600',
    borderTopColor: "#000",
    borderTopWidth: 1,
  },
});
export default CommunityCard;
