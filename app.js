const SETTINGS_KEY = "futakoto-settings";

const firstCards = [
  { id: "bottle", word: "お水", image: "./assets/cards/water-bottle.svg", emoji: "", color: "#d8eef7" },
  { id: "milk", word: "牛乳", emoji: "🥛", color: "#f2eee2" },
  { id: "ipad", word: "iPad", image: "./assets/cards/ipad-mini.svg", emoji: "", color: "#e4e2f5" },
  { id: "snack", word: "お菓子", image: "./assets/cards/shrimp-cracker.svg", emoji: "", color: "#dcebf5" },
  { id: "chocolate", word: "チョコ", image: "./assets/cards/chocolate-goona.svg", emoji: "", color: "#f3e2d8" },
  { id: "yogurt", word: "ヨーグルト", image: "./assets/cards/yogurt-strawberry.svg", emoji: "", color: "#f4e8ed" },
  { id: "diaper", word: "おむつ", image: "./assets/cards/diaper.svg", emoji: "", color: "#d9eee9" },
  { id: "toilet", word: "トイレ", image: "./assets/cards/toilet.svg", emoji: "", color: "#dceff3" },
];

const secondCards = [
  { id: "get", word: "取って", emoji: "🤲", color: "#d8eee3" },
  { id: "please", word: "ちょうだい", emoji: "🙏", color: "#dce7f8" },
  { id: "more", word: "もっと", emoji: "➕", color: "#f7dfc3" },
  { id: "open", word: "あけて", emoji: "👐", color: "#f8e0d7" },
  { id: "change", word: "かえて", emoji: "🔄", color: "#d8edf1" },
  { id: "go", word: "行きたい", image: "./assets/cards/go.svg", emoji: "", color: "#dcefe5" },
  { id: "want", word: "やりたい", image: "./assets/cards/want.svg", emoji: "", color: "#e2e8f7" },
];

const scenarios = [
  {
    id: "ipad-get",
    image: "./assets/scenes/ipad-usm-keiju-v7.jpg",
    first: "ipad",
    second: "get",
    phrase: "iPad、取って",
    before: "USMハラーの中にある、手の届かないiPadを取ってほしい場面",
    after: "ママがiPadを取り出して渡した場面",
  },
  {
    id: "ipad-please",
    image: "./assets/scenes/ipad-please-keiju-v1.jpg",
    first: "ipad",
    second: "please",
    phrase: "iPad、ちょうだい",
    before: "目の前でママが持っているiPadがほしい場面",
    after: "ママからiPadを受け取った場面",
  },
  {
    id: "ipad-open",
    image: "./assets/scenes/ipad-open-keiju-v1.jpg",
    first: "ipad",
    second: "open",
    phrase: "iPad、あけて",
    before: "青いカバーが閉じたiPadを開いてほしい場面",
    after: "ママがiPadのカバーを開いた場面",
  },
  {
    id: "milk-get",
    image: "./assets/scenes/milk-get-keiju-v1.jpg",
    first: "milk",
    second: "get",
    phrase: "牛乳、取って",
    before: "冷蔵庫の中にある、見えない牛乳を取ってほしい場面",
    after: "ママが冷蔵庫から牛乳を取り出して渡した場面",
  },
  {
    id: "milk-please",
    image: "./assets/scenes/milk-please-keiju-v3.jpg",
    first: "milk",
    second: "please",
    phrase: "牛乳、ちょうだい",
    before: "ママが持っている牛乳をほしい場面",
    after: "ママから牛乳を受け取った場面",
  },
  {
    id: "milk-open",
    image: "./assets/scenes/milk-open-keiju-v1.jpg",
    first: "milk",
    second: "open",
    phrase: "牛乳、あけて",
    before: "ふたが閉じた牛乳を開けてほしい場面",
    after: "ママが牛乳のふたを開けた場面",
  },
  {
    id: "water-bottle",
    image: "./assets/scenes/water-bottle-keiju-v5.jpg",
    first: "bottle",
    second: "get",
    phrase: "お水、取って",
    before: "手の届かない場所にある水筒を取ってほしい場面",
    after: "ママから水筒を受け取った場面",
  },
  {
    id: "water-bottle-please",
    image: "./assets/scenes/water-bottle-please-keiju-v1.jpg",
    first: "bottle",
    second: "please",
    phrase: "お水、ちょうだい",
    before: "目の前でママが持っている水筒がほしい場面",
    after: "ママから水筒を受け取った場面",
  },
  {
    id: "water-bottle-open",
    image: "./assets/scenes/water-bottle-open-keiju-v1.jpg",
    first: "bottle",
    second: "open",
    phrase: "お水、あけて",
    before: "ふたが閉じた水筒を開けてほしい場面",
    after: "ママが水筒のふたを開けた場面",
  },
  {
    id: "snack-get",
    image: "./assets/scenes/snack-get-keiju-v1.jpg",
    first: "snack",
    second: "get",
    phrase: "お菓子、取って",
    before: "高い棚にある、手の届かないお菓子を取ってほしい場面",
    after: "ママが棚からお菓子を取って渡した場面",
  },
  {
    id: "snack-please",
    image: "./assets/scenes/snack-more-keiju-v4.jpg",
    first: "snack",
    second: "please",
    phrase: "お菓子、ちょうだい",
    before: "目の前でママが持っているお菓子がほしい場面",
    after: "ママがお皿にお菓子を置いた場面",
  },
  {
    id: "snack-open",
    image: "./assets/scenes/snack-open-keiju-v4.jpg",
    first: "snack",
    second: "open",
    phrase: "お菓子、あけて",
    before: "開いていないお菓子の袋を開けてほしい場面",
    after: "ママがお菓子の袋を開けた場面",
  },
  {
    id: "chocolate-get",
    image: "./assets/scenes/chocolate-get-keiju-v1.jpg",
    first: "chocolate",
    second: "get",
    phrase: "チョコ、取って",
    before: "高い棚にある、手の届かないチョコを取ってほしい場面",
    after: "ママが棚からチョコを取って渡した場面",
  },
  {
    id: "chocolate-please",
    image: "./assets/scenes/chocolate-please-keiju-v1.jpg",
    first: "chocolate",
    second: "please",
    phrase: "チョコ、ちょうだい",
    before: "ママが持っているGOONAのチョコがほしい場面",
    after: "ママから丸いチョコをもらった場面",
  },
  {
    id: "chocolate-open",
    image: "./assets/scenes/chocolate-open-keiju-v1.jpg",
    first: "chocolate",
    second: "open",
    phrase: "チョコ、あけて",
    before: "閉じたチョコの袋を開けてほしい場面",
    after: "ママがチョコの袋を開けた場面",
  },
  {
    id: "yogurt-get",
    image: "./assets/scenes/yogurt-get-keiju-v1.jpg",
    first: "yogurt",
    second: "get",
    phrase: "ヨーグルト、取って",
    before: "冷蔵庫の中にある、見えないヨーグルトを取ってほしい場面",
    after: "ママが冷蔵庫からヨーグルトを取り出して渡した場面",
  },
  {
    id: "yogurt-please",
    image: "./assets/scenes/yogurt-please-keiju-v2.jpg",
    first: "yogurt",
    second: "please",
    phrase: "ヨーグルト、ちょうだい",
    before: "目の前でママが持っているヨーグルトがほしい場面",
    after: "ママからヨーグルトを受け取った場面",
  },
  {
    id: "yogurt-open",
    image: "./assets/scenes/yogurt-open-keiju-v1.jpg",
    first: "yogurt",
    second: "open",
    phrase: "ヨーグルト、あけて",
    before: "ふたが閉じたヨーグルトを開けてほしい場面",
    after: "ママがヨーグルトのふたを開けた場面",
  },
  {
    id: "ipad-want",
    image: "./assets/scenes/ipad-want-keiju-v4.jpg",
    first: "ipad",
    second: "want",
    phrase: "iPad、やりたい",
    before: "iPadをママに持ってきて、やってもよいか伝える場面",
    after: "ママに見守られながらiPadを楽しんでいる場面",
  },
  {
    id: "diaper-change",
    image: "./assets/scenes/diaper-change-keiju-v2.jpg",
    first: "diaper",
    second: "change",
    phrase: "おむつ、かえて",
    before: "おしっこやうんちの後におむつを替えてほしい場面",
    after: "おむつを替えてもらい安心した場面",
  },
  {
    id: "toilet-go",
    image: "./assets/scenes/toilet-go-keiju-v3.jpg",
    first: "toilet",
    second: "go",
    phrase: "トイレ、行きたい",
    before: "トイレに行きたくなり、トイレを指さして伝える場面",
    after: "アンパンマンの補助便座に座り、ママとトイレの練習ができた場面",
  },
];

const requestedScenarioId = new URLSearchParams(window.location.search).get("scene");
const requestedScenarioIndex = scenarios.findIndex((scenario) => scenario.id === requestedScenarioId);

const state = {
  scenarioIndex: requestedScenarioIndex >= 0 ? requestedScenarioIndex : 0,
  stage: "first",
  selectedFirst: null,
  selectedSecond: null,
  mistakes: 0,
  roundId: 0,
  firstChoices: [],
  secondChoices: [],
  settings: loadSettings(),
};

const elements = {
  appTitle: document.querySelector("#app-title"),
  appTitleInput: document.querySelector("#app-title-input"),
  progress: document.querySelector("#progress"),
  sceneFrame: document.querySelector("#scene-frame"),
  sceneImage: document.querySelector("#scene-image"),
  sceneDescription: document.querySelector("#scene-description"),
  resultBadge: document.querySelector("#result-badge"),
  firstSlot: document.querySelector("#first-slot"),
  secondSlot: document.querySelector("#second-slot"),
  resetRound: document.querySelector("#reset-round"),
  choicesArea: document.querySelector("#choices-area"),
  choiceTitle: document.querySelector("#choice-title"),
  choiceGrid: document.querySelector("#choice-grid"),
  outcomePanel: document.querySelector("#outcome-panel"),
  completedPhrase: document.querySelector("#completed-phrase"),
  dialog: document.querySelector("#settings-dialog"),
  openSettings: document.querySelector("#open-settings"),
  closeSettings: document.querySelector("#close-settings"),
  rate: document.querySelector("#speech-rate"),
  rateOutput: document.querySelector("#rate-output"),
  celebrateCorrect: document.querySelector("#celebrate-correct"),
  testVoice: document.querySelector("#test-voice"),
  celebration: document.querySelector("#celebration"),
  toast: document.querySelector("#toast"),
};

let celebrationTimer;
let toastTimer;
let autoNextTimer;

function loadSettings() {
  const defaults = { rate: 0.82, appTitle: "ふたこと つくろう", celebrateCorrect: true };
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}") };
  } catch {
    return defaults;
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function currentScenario() {
  return scenarios[state.scenarioIndex];
}

function cardById(cards, id) {
  return cards.find((card) => card.id === id);
}

function cardVisual(card, className) {
  if (card.image) {
    return `<img class="${className} card-picture" src="${card.image}" alt="" aria-hidden="true" />`;
  }
  return `<span class="${className}" aria-hidden="true">${card.emoji}</span>`;
}

function threeChoices(cards, targetId) {
  const target = cardById(cards, targetId);
  const alternatives = shuffle(cards.filter((card) => card.id !== targetId)).slice(0, 2);
  return shuffle([target, ...alternatives]);
}

function makeRoundChoices() {
  const scenario = currentScenario();
  state.firstChoices = threeChoices(firstCards, scenario.first);
  state.secondChoices = threeChoices(secondCards, scenario.second);
}

function renderProgress() {
  elements.progress.innerHTML = `<span class="progress-count" aria-hidden="true">⭐ ${state.scenarioIndex + 1} / ${scenarios.length}</span>`;
  elements.progress.setAttribute("aria-label", `${scenarios.length}場面中${state.scenarioIndex + 1}場面目`);
}

function renderSlot(element, card, number) {
  if (!card) {
    element.className = "word-slot empty";
    element.style.removeProperty("--slot-color");
    element.innerHTML = `<span class="slot-number">${number}</span><span class="slot-placeholder" aria-hidden="true">？</span>`;
    return;
  }
  element.className = "word-slot filled";
  element.style.setProperty("--slot-color", card.color);
  element.innerHTML = `
    <span class="slot-number">${number}</span>
    ${cardVisual(card, "slot-emoji")}
    <span class="slot-word">${card.word}</span>
  `;
}

function renderSentence() {
  renderSlot(elements.firstSlot, state.selectedFirst, 1);
  renderSlot(elements.secondSlot, state.selectedSecond, 2);
}

function renderChoiceCards(cards, targetId) {
  elements.choiceGrid.innerHTML = "";
  for (const card of cards) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "picture-card";
    button.dataset.id = card.id;
    button.style.setProperty("--card-color", card.color);
    button.setAttribute("aria-label", `${card.word}を選ぶ`);
    button.innerHTML = `
      ${cardVisual(card, "card-emoji")}
      <span class="card-word">${card.word}</span>
    `;
    button.addEventListener("click", () => chooseCard(card, targetId, button));
    elements.choiceGrid.append(button);
  }
}

function renderChoices() {
  const scenario = currentScenario();
  if (state.stage === "first") {
    elements.choiceTitle.innerHTML = '<span class="choice-step" aria-hidden="true">1</span><span class="choice-hand" aria-hidden="true">👇</span><span class="visually-hidden">一つめを三枚から選んでください</span>';
    renderChoiceCards(state.firstChoices, scenario.first);
    return;
  }
  if (state.stage === "second") {
    elements.choiceTitle.innerHTML = '<span class="choice-step" aria-hidden="true">2</span><span class="choice-hand" aria-hidden="true">👇</span><span class="visually-hidden">二つめを三枚から選んでください</span>';
    renderChoiceCards(state.secondChoices, scenario.second);
    return;
  }
  elements.choiceGrid.innerHTML = "";
  elements.choiceTitle.innerHTML = '<span class="finished-symbol" aria-hidden="true">🖼️ ＋ 🖼️ ＝ ✨</span>';
}

function chooseCard(card, targetId, button) {
  if (card.id !== targetId) {
    speakSequence([card.word]);
    state.mistakes += 1;
    button.classList.remove("try-again");
    void button.offsetWidth;
    button.classList.add("try-again");
    setTimeout(() => button.classList.remove("try-again"), 500);
    if (state.mistakes >= 2) {
      const correct = elements.choiceGrid.querySelector(`[data-id="${targetId}"]`);
      correct?.classList.add("hint-card");
    }
    return;
  }

  button.classList.add("chosen");
  state.mistakes = 0;
  if (state.stage === "first") {
    speakSequence([card.word]);
    state.selectedFirst = card;
    renderSentence();
    setTimeout(() => {
      state.stage = "second";
      renderChoices();
    }, 320);
    return;
  }

  state.selectedSecond = card;
  state.stage = "complete";
  renderSentence();
  renderChoices();
  setTimeout(showOutcome, 150);
}

function showOutcome() {
  const scenario = currentScenario();
  const outcomeRoundId = state.roundId;
  elements.sceneFrame.classList.add("show-result");
  elements.sceneDescription.textContent = scenario.after;
  elements.resultBadge.hidden = false;
  elements.completedPhrase.textContent = scenario.phrase;
  elements.outcomePanel.hidden = false;
  speakSequence([state.selectedSecond.word, scenario.phrase, "正解！"], () => {
    if (state.roundId !== outcomeRoundId) return;
    clearTimeout(autoNextTimer);
    autoNextTimer = setTimeout(() => {
      if (state.roundId === outcomeRoundId) nextRound();
    }, 1800);
  });
  if (state.settings.celebrateCorrect) celebrate();
  requestAnimationFrame(() => elements.outcomePanel.scrollIntoView({ behavior: "smooth", block: "nearest" }));
}

function loadRound() {
  const scenario = currentScenario();
  clearTimeout(autoNextTimer);
  state.roundId += 1;
  state.stage = "first";
  state.selectedFirst = null;
  state.selectedSecond = null;
  state.mistakes = 0;
  makeRoundChoices();
  elements.sceneImage.src = scenario.image;
  elements.sceneImage.alt = "";
  elements.sceneFrame.classList.remove("show-result");
  elements.sceneDescription.textContent = scenario.before;
  elements.resultBadge.hidden = true;
  elements.outcomePanel.hidden = true;
  renderProgress();
  renderSentence();
  renderChoices();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetRound() {
  clearTimeout(autoNextTimer);
  window.speechSynthesis?.cancel();
  loadRound();
}

function nextRound() {
  state.scenarioIndex = (state.scenarioIndex + 1) % scenarios.length;
  loadRound();
}

function chooseJapaneseVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find((voice) => voice.lang === "ja-JP") || voices.find((voice) => voice.lang.startsWith("ja")) || null;
}

function speakSequence(texts, onComplete = null) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    showToast("この端末では音声を利用できません。");
    if (onComplete) onComplete();
    return;
  }
  window.speechSynthesis.cancel();
  const voice = chooseJapaneseVoice();
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    elements.firstSlot.classList.remove("speaking");
    elements.secondSlot.classList.remove("speaking");
    if (onComplete) onComplete();
  };
  texts.forEach((text, index) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = Number(state.settings.rate);
    utterance.pitch = 1;
    if (voice) utterance.voice = voice;
    if (index === 0) {
      utterance.onstart = () => {
        elements.firstSlot.classList.add("speaking");
        elements.secondSlot.classList.add("speaking");
      };
    }
    if (index === texts.length - 1) {
      utterance.onend = finish;
      utterance.onerror = finish;
    }
    window.speechSynthesis.speak(utterance);
  });
}

function celebrate() {
  clearTimeout(celebrationTimer);
  elements.celebration.hidden = true;
  void elements.celebration.offsetWidth;
  elements.celebration.hidden = false;
  celebrationTimer = setTimeout(() => {
    elements.celebration.hidden = true;
  }, 1450);
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  toastTimer = setTimeout(() => {
    elements.toast.hidden = true;
  }, 2300);
}

function rateLabel(rate) {
  if (rate < 0.78) return "とてもゆっくり";
  if (rate < 0.92) return "ゆっくり";
  if (rate < 1.03) return "ふつう";
  return "少しはやい";
}

function updateTitle(value) {
  state.settings.appTitle = value.trim() || "ふたこと つくろう";
  elements.appTitle.textContent = state.settings.appTitle;
  document.title = state.settings.appTitle;
  saveSettings();
}

function updateRate(value) {
  state.settings.rate = Number(value);
  elements.rateOutput.textContent = rateLabel(state.settings.rate);
  saveSettings();
}

function bindEvents() {
  elements.resetRound.addEventListener("click", resetRound);
  elements.openSettings.addEventListener("click", () => elements.dialog.showModal());
  elements.closeSettings.addEventListener("click", () => elements.dialog.close());
  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) elements.dialog.close();
  });
  elements.appTitleInput.addEventListener("change", () => updateTitle(elements.appTitleInput.value));
  elements.rate.addEventListener("input", () => updateRate(elements.rate.value));
  elements.celebrateCorrect.addEventListener("change", () => {
    state.settings.celebrateCorrect = elements.celebrateCorrect.checked;
    saveSettings();
  });
  elements.testVoice.addEventListener("click", () => speakSequence(["牛乳、ちょうだい"]));
}

function init() {
  elements.appTitleInput.value = state.settings.appTitle;
  elements.rate.value = state.settings.rate;
  elements.celebrateCorrect.checked = state.settings.celebrateCorrect;
  updateTitle(state.settings.appTitle);
  updateRate(state.settings.rate);
  bindEvents();
  loadRound();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(console.error));
  }
}

init();
