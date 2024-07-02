import { Text, View, StyleSheet, Image } from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
          source={require('@/assets/images/Kalvin.png')}
          style={styles.Photo}
        />
      <Text style={styles.Text}>Passion: My passion is helping others. I love helping others, and if i could find a job that somewhat does that I would consider myself sucessful in life.</Text>
      <Text style={styles.Text}>Role: Developer</Text>
      <Text style={styles.Text}>Dream Carrer: My dream carrer is to be a computer engineer for Riot because I love their company and I think it would be cool to work there.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontWeight: "bold",
    fontSize: 40,
    margin: 50,
    top: 50,
  },

  Photo: {
    height: 225,
    width: 225,
    margin: "auto",
    position: 'absolute',
    borderRadius: 150,
    bottom: 600,
  },

});