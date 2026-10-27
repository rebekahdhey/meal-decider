
import { useMealDecider } from './hooks/useMealDecider'

function App() {
  const { meals, selectedMeal, decideMeal } = useMealDecider()

  return (
    <main className="min-h-screen bg-[#F8F7F2] px-5 py-12 text-[#202A24] sm:py-16">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <header className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9EEE5] text-3xl">
            🍲
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Meal Decider
          </h1>

          <p className="mt-3 text-base text-[#788078] sm:text-lg">
            Can't decide what to eat? Let's make it easy.
          </p>

          <button
            onClick={decideMeal}
            disabled={meals.length === 0}
            className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#426447] px-8 py-4 font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#304C35] hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="text-lg">✦</span>
            Decide for me!
          </button>
        </header>

        {/* Featured meal */}
        <section className="mb-8 rounded-3xl border border-[#DDE4D7] bg-gradient-to-br from-[#EDF1E8] to-[#F5F5EF] px-6 py-10 text-center shadow-sm sm:px-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#DDE6D7] px-4 py-2 text-xs font-bold tracking-widest text-[#426447]">
            ✦ YOUR MEAL FOR TODAY
          </span>

          {selectedMeal ? (
            <div className="mt-7 animate-[fadeIn_0.3s_ease-out]">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white text-5xl shadow-md">
                🍽️
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight">
                {selectedMeal.name}
              </h2>

              <p className="mt-2 text-sm text-[#788078]">
                Your next delicious meal is decided.
              </p>

              <button
                onClick={decideMeal}
                className="mt-6 rounded-full border border-[#C8D3C2] bg-white/70 px-6 py-3 text-sm font-semibold text-[#426447] transition hover:bg-white hover:shadow-sm"
              >
                ↻ Pick Again
              </button>
            </div>
          ) : (
            <div className="py-7">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow-sm">
                🥗
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                What's on the menu?
              </h2>

              <p className="mt-2 text-sm text-[#788078]">
                Let fate choose your next meal.
              </p>
            </div>
          )}
        </section>

        {/* Meal list */}
        <section className="rounded-3xl border border-[#E9E7DE] bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Your Meals
              </h2>

              <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#E9EEE5] px-2 text-sm font-semibold text-[#426447]">
                {meals.length}
              </span>
            </div>

            <span className="text-sm text-[#788078]">
              Your personal menu
            </span>
          </div>

          {meals.length > 0 ? (
            <ul className="grid gap-3 sm:grid-cols-2">
              {meals.map((meal, index) => (
                <li
                  key={meal.id}
                  className="group flex items-center gap-4 rounded-2xl border border-[#E9E7DE] bg-[#FDFCF9] p-4 transition duration-200 hover:border-[#C8D3C2] hover:bg-[#F5F7F1] hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9EEE5] text-xs font-bold text-[#426447]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="min-w-0 flex-1 text-sm font-semibold">
                    {meal.name}
                  </span>

                  <span className="text-lg text-[#A2ADA0] transition group-hover:translate-x-0.5 group-hover:text-[#426447]">
                    ↗
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-2xl bg-[#F8F7F2] px-4 py-10 text-center text-sm text-[#788078]">
              Your meal list is empty. Add some meals to get started!
            </p>
          )}

          <div className="mt-7 border-t border-[#E9E7DE] pt-5 text-center">
            <p className="text-xs leading-5 text-[#8A9088]">
              Made for the days when choosing is the hardest part.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}

export default App
