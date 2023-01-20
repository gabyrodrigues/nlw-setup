import { View, ScrollView, Text } from "react-native"
import { useRoute } from "@react-navigation/native"
import { BackButton } from "../../components/BackButton"

import dayjs from "dayjs"

interface ProgressBarProps {
  progress?: number
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  return (
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <View
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${progress}%` }}
      />
    </View>
  )
}
