import { TypeRootStackParamList } from "@/navigation/navigation.types";
import { TypeFeatherIconNames } from "@/types/icon.interface";

export interface IMenuItem {
  iconName: TypeFeatherIconNames
  path?: keyof TypeRootStackParamList
  label: string
}

export type TypeNavigate = (screen: keyof TypeRootStackParamList) => void;