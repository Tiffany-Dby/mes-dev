import { TextInput } from "react-native-gesture-handler"; 

export default function BaseInput() {
  return (
    <TextInput placeholder="Email" id="email" className="input" />
  );
}