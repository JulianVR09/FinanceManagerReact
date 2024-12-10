import { Image, StyleSheet } from "react-native";
import useNavigation from "../../navigation/hook/useNavigation";
import Onboarding from "react-native-onboarding-swiper";

const OnBoarding = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
      onSkip={() => navigation.navigate("AppTab")}
      onDone={() => navigation.navigate("AppTab")}
      pages={[
        {
          backgroundColor: "#FFEBD0", // Fondo beige claro
          image: (
            <Image
              style={styles.image}
              source={require('../../assets/img/Bank.png')}
            />
          ),
          title: "Welcome to Fintrack",
          subtitle: "",
        },
        {
          backgroundColor: "#F5F5DC", // Fondo beige
          image: (
            <Image
              style={styles.image}
              source={require("../../assets/img/enter-remove.png")}
            />
          ),
          title: "Enter or remove",
          subtitle: "You can enter expenses and income that you did not count at any time.",
        },
        {
          backgroundColor: "#FFEDD5", // Fondo amarillo claro
          image: (
            <Image
              style={styles.image}
              source={require("../../assets/img/interactive-graphics.png")}
            />
          ),
          title: "Interactive graphics",
          subtitle: "Charts of expenditures and remaining budget will be shown.",
        },
        {
          backgroundColor: "#3C4A59", // Fondo azul oscuro
          image: (
            <Image
              style={styles.image}
              source={require("../../assets/img/budget.png")}
            />
          ),
          title: "Budget",
          subtitle:
            "Here you can enter a general monthly budget and specific budgets by categories.",
        },
      ]}
    />
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
