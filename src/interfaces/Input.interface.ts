import { KeyboardTypeOptions } from "react-native";

export interface inputProps {
    value: string;
    onChange: ( e:any ) => void;
    label: string;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
}