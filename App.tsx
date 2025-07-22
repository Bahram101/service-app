import { StatusBar } from "expo-status-bar";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text, View } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider mode="light" >
      <View className="flex-1 items-center justify-center bg-background">
        <Text>Open up App.tsx !</Text>
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
  );
}
