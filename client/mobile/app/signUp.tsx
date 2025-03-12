import SignUpForm from "@/components/signUpForm";
import { View } from "react-native";

export default function SignUp() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignUpForm />
    </View>
  );
}