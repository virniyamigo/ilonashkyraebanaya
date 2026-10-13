const diagnoses = [
  "Гострий синдром «ще 5 хвилин і піду спати».",
  "Хронічна кавозалежна продуктивність.",
  "Підозра на передекзаменаційне зникнення пам’яті.",
  "Стабільна форма «я це точно вчила».",
  "Синдром фантомного повідомлення від викладача.",
  "Професійна деформація: дивитися на вени у випадкових людей."
];

const wisdoms = [
  "Не все, що звучить страшно, буде на екзамені. Але саме воно й буде.",
  "Медик без кави — це просто людина з підручником.",
  "Найдовша хвилина — коли чекаєш, чи викличуть тебе відповідати.",
  "Спокій — це коли викладач ще не зайшов.",
  "Якщо нічого не зрозуміло — відкрий конспект і зроби розумне обличчя."
];

const shifts = [
  "Спокійне чергування. Підозріло спокійне.",
  "2 кави, 4 питання, 1 фраза «а ви точно медик?»",
  "Завантаження: 73%. Настрій: залежить від кави.",
  "Черговий прогноз: «ну, наче тихо…» — і саме тут усе починається.",
  "Все буде добре. Але не відразу."
];

const emergencyMessages = [
  "🧃 Протокол активовано: вода, їжа, 10 хвилин без навчання.",
  "😂 Реанімація настрою успішна. Пацієнт сміється.",
  "🫡 Термінове призначення: один мем і мінус одна тривога.",
  "💗 Стан стабілізовано. Можна далі рятувати світ."
];

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

let coffeeLevel = 20;

function setText(id, text){
  document.getElementById(id).textContent = text;
}

function diagnose(){
  setText("diag", randomItem(diagnoses));
}

function checkPulse(){
  const bpm = Math.floor(Math.random() * 55) + 75;
  const note =
    bpm > 110
      ? " — хтось сказав «залік»."
      : bpm > 95
      ? " — кава працює."
      : " — підозрілий дзен.";

  setText("pulse", `Пульс: ${bpm} уд/хв${note}`);
}

function updateCoffee(){
  const labels = {
    20: "20% — ще людина, але вже студент-медик.",
    40: "40% — вже можеш читати дрібний шрифт.",
    60: "60% — з’явилась віра в себе.",
    80: "80% — готова пояснювати терміни іншим.",
    100: "100% — небезпечно продуктивний медик."
  };

  document.getElementById("coffeeBar").style.width = `${coffeeLevel}%`;
  setText("coffeeText", labels[coffeeLevel]);
}

function addCoffee(){
  coffeeLevel = Math.min(100, coffeeLevel + 20);
  updateCoffee();
}

function resetCoffee(){
  coffeeLevel = 20;
  updateCoffee();
}

function shift(){
  setText("shift", randomItem(shifts));
}

function wisdom(){
  setText("wisdom", `«${randomItem(wisdoms)}»`);
}

function emergency(){
  setText("emergency", randomItem(emergencyMessages));
}

const actions = {
  diagnose,
  pulse: checkPulse,
  coffee: addCoffee,
  "reset-coffee": resetCoffee,
  shift,
  wisdom,
  emergency
};

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  actions[action]?.();
});
