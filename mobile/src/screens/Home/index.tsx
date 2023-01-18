import { Text, View } from "react-native"
import { generateDatesFromYearBeginning } from "../../utils/generate-dates-from-year-beginning"
import { DAY_SIZE, HabitDay } from "../HabitDay"
import { Header } from "../Header"

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]
const datesFromYearStart = generateDatesFromYearBeginning()

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => (
          <Text
            key={`${weekDay}-${index}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <View className="flex-row flex-wrap">
        {datesFromYearStart.map((date) => (
          <HabitDay key={date.toISOString()} />
        ))}
      </View>
    </View>
  )
}
