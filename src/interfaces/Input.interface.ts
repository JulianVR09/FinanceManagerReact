import { KeyboardTypeOptions } from "react-native";

export interface inputProps {
    value: string;
    onChange: (text: string) => void;
    label: string;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
}