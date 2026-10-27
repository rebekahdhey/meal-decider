
import { useState } from 'react'
import { starterMeals, type Meal } from '../data/meals'
import { useLocalStorage } from './useLocalStorage'

export function useMealDecider() {
  const [meals, setMeals] = useLocalStorage<Meal[]>(
    'meal-decider-meals',
    starterMeals
  )

  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null)

  function decideMeal() {
    if (meals.length === 0) return

    const randomIndex = Math.floor(Math.random() * meals.length)
    const randomMeal = meals[randomIndex]

    setSelectedMeal(randomMeal)
  }

  return {
    meals,
    setMeals,
    selectedMeal,
    decideMeal,
  }
}
