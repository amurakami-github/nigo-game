const SPEECH_RATE = 0.82;
const OUTCOME_FEEDBACK_PAUSE_MS = 650;

const feedbackByAction = Object.freeze({
  get: "どうぞ！",
  please: "どうぞ！",
  open: "どうぞ！",
  want: "どうぞ！",
  come: "きたよ",
  hug: "どうぞ！",
  help: "どうぞ！",
  watch: "どうぞ！",
  change: "できたね！",
  go: "できたね！",
  cameout: "できたね！",
});

const firstCards = [
  { id: "bottle", word: "お水", label: "おみず", image: "./assets/cards/v40/water.png", emoji: "", color: "#d8eef7" },
  { id: "milk", word: "牛乳", label: "ぎゅうにゅう", image: "./assets/cards/v40/milk.png", emoji: "", color: "#f2eee2" },
  { id: "ipad", word: "iPad", label: "あいぱっど", image: "./assets/cards/v40/ipad.png", emoji: "", color: "#e4e2f5" },
  { id: "snack", word: "お菓子", label: "おかし", image: "./assets/cards/v40/snack.png", emoji: "", color: "#dcebf5" },
  { id: "chocolate", word: "チョコ", label: "ちょこ", image: "./assets/cards/v40/chocolate.png", emoji: "", color: "#f3e2d8" },
  { id: "yogurt", word: "ヨーグルト", label: "よーぐると", image: "./assets/cards/v40/yogurt.png", emoji: "", color: "#f4e8ed" },
  { id: "diaper", word: "おむつ", label: "おむつ", image: "./assets/cards/v40/diaper.png", emoji: "", color: "#d9eee9" },
  { id: "toilet", word: "トイレ", label: "といれ", image: "./assets/cards/v40/toilet.png", emoji: "", color: "#dceff3" },
  { id: "mom", word: "ママ", label: "まま", image: "./assets/cards/v57/mom.png", emoji: "", color: "#f5e3dc" },
  { id: "plarail", word: "プラレール", label: "ぷられーる", image: "./assets/cards/v57/plarail.png", emoji: "", color: "#dbeaf8" },
  { id: "tv", word: "テレビ", label: "てれび", image: "./assets/cards/v57/tv.png", emoji: "", color: "#e5e9ed" },
  { id: "poop", word: "うんち", label: "うんち", image: "./assets/cards/v57/poop.png", emoji: "", color: "#f2e1cf" },
];

const secondCards = [
  { id: "get", word: "取って", label: "とって", image: "./assets/cards/v40/get.png", emoji: "", color: "#d8eee3" },
  { id: "please", word: "ちょうだい", label: "ちょうだい", image: "./assets/cards/v40/please.png", emoji: "", color: "#dce7f8" },
  { id: "more", word: "もっと", label: "もっと", image: "./assets/cards/v40/more.png", emoji: "", color: "#f7dfc3" },
  { id: "open", word: "あけて", label: "あけて", image: "./assets/cards/v40/open.png", emoji: "", color: "#f8e0d7" },
  { id: "change", word: "かえて", label: "かえて", image: "./assets/cards/v40/change.png", emoji: "", color: "#d8edf1" },
  { id: "go", word: "行きたい", label: "いきたい", image: "./assets/cards/v40/go.png", emoji: "", color: "#dcefe5" },
  { id: "want", word: "やりたい", label: "やりたい", image: "./assets/cards/v40/want.png", emoji: "", color: "#e2e8f7" },
  { id: "come", word: "来て", label: "きて", image: "./assets/cards/v57/come.png", emoji: "", color: "#f5e3dc" },
  { id: "hug", word: "だっこ", label: "だっこ", image: "./assets/cards/v57/hug.png", emoji: "", color: "#f7e1d8" },
  { id: "help", word: "手伝って", label: "てつだって", image: "./assets/cards/v57/help.png", emoji: "", color: "#dceaf7" },
  { id: "watch", word: "見たい", label: "みたい", image: "./assets/cards/v57/watch.png", emoji: "", color: "#e1edf3" },
  { id: "cameout", word: "出た", label: "でた", image: "./assets/cards/v57/cameout.png", emoji: "", color: "#f1e1cf" },
];

const scenarios = [
  {
    id: "ipad-get",
    image: "./assets/scenes/v45/ipad-usm-KJ-mom-v2.jpg",
    first: "ipad",
    second: "get",
    phrase: "iPad、取って",
    before: "3段のUSMハラーの上にある、手の届かないiPadを取ってほしい場面",
    after: "ママがUSMハラーの上からiPadを取って渡した場面",
  },
  {
    id: "ipad-please",
    image: "./assets/scenes/v45/ipad-please-KJ-mom-v2.jpg",
    first: "ipad",
    second: "please",
    phrase: "iPad、ちょうだい",
    before: "目の前でママが持っているiPadがほしい場面",
    after: "ママからiPadを受け取った場面",
  },
  {
    id: "milk-please",
    image: "./assets/scenes/v45/milk-please-KJ-mom-v2.jpg",
    first: "milk",
    second: "please",
    phrase: "牛乳、ちょうだい",
    before: "ママが持っている牛乳をほしい場面",
    after: "ママから牛乳を受け取った場面",
  },
  {
    id: "water-bottle",
    image: "./assets/scenes/v45/water-bottle-KJ-mom-v2.jpg",
    first: "bottle",
    second: "get",
    phrase: "お水、取って",
    before: "手の届かない場所にある水筒を取ってほしい場面",
    after: "ママから水筒を受け取った場面",
  },
  {
    id: "water-bottle-please",
    image: "./assets/scenes/v45/water-bottle-please-KJ-mom-v2.jpg",
    first: "bottle",
    second: "please",
    phrase: "お水、ちょうだい",
    before: "目の前でママが持っている水筒がほしい場面",
    after: "ママから水筒を受け取った場面",
  },
  {
    id: "water-bottle-open",
    image: "./assets/scenes/v45/water-bottle-open-KJ-mom-v2.jpg",
    first: "bottle",
    second: "open",
    phrase: "お水、あけて",
    before: "慧樹が閉じた水筒をママに持ってきて、開けてほしいと伝える場面",
    after: "ママが水筒のふたを開けた場面",
  },
  {
    id: "snack-get",
    image: "./assets/scenes/v45/snack-get-KJ-mom-v2.jpg",
    first: "snack",
    second: "get",
    phrase: "お菓子、取って",
    before: "高い棚にある、手の届かないお菓子を取ってほしい場面",
    after: "ママが棚からお菓子を取って渡した場面",
  },
  {
    id: "snack-please",
    image: "./assets/scenes/v45/snack-please-KJ-mom-v2.jpg",
    first: "snack",
    second: "please",
    phrase: "お菓子、ちょうだい",
    before: "目の前でママが持っているお菓子がほしい場面",
    after: "ママがお皿にお菓子を置いた場面",
  },
  {
    id: "snack-open",
    image: "./assets/scenes/v45/snack-open-KJ-mom-v2.jpg",
    first: "snack",
    second: "open",
    phrase: "お菓子、あけて",
    before: "慧樹が閉じたお菓子の袋をママに持ってきて、開けてほしいと伝える場面",
    after: "ママがお菓子の袋を開けた場面",
  },
  {
    id: "chocolate-get",
    image: "./assets/scenes/v45/chocolate-get-KJ-mom-v2.jpg",
    first: "chocolate",
    second: "get",
    phrase: "チョコ、取って",
    before: "高い棚にある、手の届かないチョコを取ってほしい場面",
    after: "ママが棚からチョコを取って渡した場面",
  },
  {
    id: "chocolate-please",
    image: "./assets/scenes/v45/chocolate-please-KJ-mom-v2.jpg",
    first: "chocolate",
    second: "please",
    phrase: "チョコ、ちょうだい",
    before: "ママが持っているGOONAのチョコがほしい場面",
    after: "ママから丸いチョコをもらった場面",
  },
  {
    id: "chocolate-open",
    image: "./assets/scenes/v45/chocolate-open-KJ-mom-v2.jpg",
    first: "chocolate",
    second: "open",
    phrase: "チョコ、あけて",
    before: "閉じたチョコの袋を開けてほしい場面",
    after: "ママがチョコの袋を開けた場面",
  },
  {
    id: "yogurt-get",
    image: "./assets/scenes/v45/yogurt-get-KJ-mom-v2.jpg",
    first: "yogurt",
    second: "get",
    phrase: "ヨーグルト、取って",
    before: "冷蔵庫の中にある、見えないヨーグルトを取ってほしい場面",
    after: "ママが冷蔵庫からヨーグルトを取り出して渡した場面",
  },
  {
    id: "yogurt-please",
    image: "./assets/scenes/v45/yogurt-please-KJ-mom-v2.jpg",
    first: "yogurt",
    second: "please",
    phrase: "ヨーグルト、ちょうだい",
    before: "目の前でママが持っているヨーグルトがほしい場面",
    after: "ママからヨーグルトを受け取った場面",
  },
  {
    id: "yogurt-open",
    image: "./assets/scenes/v45/yogurt-open-KJ-mom-v2.jpg",
    first: "yogurt",
    second: "open",
    phrase: "ヨーグルト、あけて",
    before: "ふたが閉じたヨーグルトを開けてほしい場面",
    after: "ママがヨーグルトのふたを開けた場面",
  },
  {
    id: "ipad-want",
    image: "./assets/scenes/v45/ipad-want-KJ-mom-v2.jpg",
    first: "ipad",
    second: "want",
    phrase: "iPad、やりたい",
    before: "iPadをママに持ってきて、やってもよいか伝える場面",
    after: "ママに見守られながらiPadを楽しんでいる場面",
  },
  {
    id: "diaper-change",
    image: "./assets/scenes/v45/diaper-change-KJ-mom-v2.jpg",
    first: "diaper",
    second: "change",
    phrase: "おむつ、かえて",
    before: "おしっこやうんちの後におむつを替えてほしい場面",
    after: "おむつを替えてもらい安心した場面",
  },
  {
    id: "toilet-go",
    image: "./assets/scenes/v45/toilet-go-KJ-mom-v2.jpg",
    first: "toilet",
    second: "go",
    phrase: "トイレ、行きたい",
    before: "トイレに行きたくなり、トイレを指さして伝える場面",
    after: "アンパンマンの補助便座に座り、ママとトイレの練習ができた場面",
  },
  {
    id: "mom-come",
    image: "./assets/scenes/v57/mom-come-KJ-v1.jpg",
    first: "mom",
    second: "come",
    phrase: "ママ、来て",
    before: "離れたところにいるママを呼ぶ場面",
    after: "ママが近くまで来て、目を合わせてくれた場面",
  },
  {
    id: "mom-hug",
    image: "./assets/scenes/v57/mom-hug-KJ-v1.jpg",
    first: "mom",
    second: "hug",
    phrase: "ママ、だっこ",
    before: "ママに向かって両手を広げ、だっこを求める場面",
    after: "ママにだっこしてもらった場面",
  },
  {
    id: "mom-help",
    image: "./assets/scenes/v57/mom-help-KJ-v1.jpg",
    first: "mom",
    second: "help",
    phrase: "ママ、手伝って",
    before: "プラレールの列車を連結できず、ママに手伝ってほしいと伝える場面",
    after: "ママに列車を連結してもらった場面",
  },
  {
    id: "plarail-get",
    image: "./assets/scenes/v57/plarail-get-KJ-v1.jpg",
    first: "plarail",
    second: "get",
    phrase: "プラレール、取って",
    before: "USMハラーの上にある、手の届かない透明ボックスを指さす場面",
    after: "ママにプラレールのボックスを取ってもらった場面",
  },
  {
    id: "tv-watch",
    image: "./assets/scenes/v57/tv-watch-KJ-v1.jpg",
    first: "tv",
    second: "watch",
    phrase: "テレビ、見たい",
    before: "消えているテレビを指さし、見たいと伝える場面",
    after: "ママがWALLスタンドのテレビをつけてくれた場面",
  },
  {
    id: "poop-cameout",
    image: "./assets/scenes/v57/poop-cameout-KJ-v1.jpg",
    first: "poop",
    second: "cameout",
    phrase: "うんち、出た",
    before: "おむつの中でうんちが出たことをママに伝える場面",
    after: "ママにおむつを替えてもらい、きれいになった場面",
  },
];

const requestedScenarioId = new URLSearchParams(window.location.search).get("scene");
const requestedScenarioIndex = scenarios.findIndex((scenario) => scenario.id === requestedScenarioId);
const initialScenarioIndex =
  requestedScenarioIndex >= 0 ? requestedScenarioIndex : Math.floor(Math.random() * scenarios.length);
let scenarioQueue = shuffle(
  scenarios.map((_, index) => index).filter((index) => index !== initialScenarioIndex),
);

const state = {
  scenarioIndex: initialScenarioIndex,
  stage: "first",
  selectedFirst: null,
  selectedSecond: null,
  mistakes: 0,
  roundId: 0,
  firstChoices: [],
  secondChoices: [],
};

const elements = {
  sceneFrame: document.querySelector("#scene-frame"),
  sceneImage: document.querySelector("#scene-image"),
  sceneDescription: document.querySelector("#scene-description"),
  firstSlot: document.querySelector("#first-slot"),
  secondSlot: document.querySelector("#second-slot"),
  choicesArea: document.querySelector("#choices-area"),
  choiceTitle: document.querySelector("#choice-title"),
  choiceGrid: document.querySelector("#choice-grid"),
  celebration: document.querySelector("#celebration"),
  toast: document.querySelector("#toast"),
};

let celebrationTimer;
let toastTimer;
let autoNextTimer;
let speechRunId = 0;

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
    return `<img class="${className} card-picture" data-card-id="${card.id}" src="${card.image}" alt="" aria-hidden="true" />`;
  }
  return `<span class="${className}" aria-hidden="true">${card.emoji}</span>`;
}

function cardLabel(card) {
  return card.label || card.word;
}

function longLabelClass(card) {
  return Array.from(cardLabel(card)).length >= 5 ? " long-word" : "";
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
    <span class="slot-word${longLabelClass(card)}">${cardLabel(card)}</span>
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
    button.setAttribute("aria-label", `${cardLabel(card)}を選ぶ`);
    button.innerHTML = `
      ${cardVisual(card, "card-emoji")}
      <span class="card-word${longLabelClass(card)}">${cardLabel(card)}</span>
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
    speakSequence(["ちがうよ"]);
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
  const feedback = feedbackByAction[scenario.second] || "できたね！";
  elements.sceneFrame.classList.add("show-result");
  elements.sceneFrame.dataset.feedback = feedback;
  elements.sceneDescription.textContent = scenario.after;
  speakSequence(
    [state.selectedSecond.word, scenario.phrase, feedback],
    () => {
      if (state.roundId !== outcomeRoundId) return;
      clearTimeout(autoNextTimer);
      autoNextTimer = setTimeout(() => {
        if (state.roundId === outcomeRoundId) nextRound();
      }, 1800);
    },
    [100, OUTCOME_FEEDBACK_PAUSE_MS],
  );
  celebrate();
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
  delete elements.sceneFrame.dataset.feedback;
  elements.sceneDescription.textContent = scenario.before;
  renderSentence();
  renderChoices();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextRound() {
  if (scenarioQueue.length === 0) {
    scenarioQueue = shuffle(
      scenarios.map((_, index) => index).filter((index) => index !== state.scenarioIndex),
    );
  }
  state.scenarioIndex = scenarioQueue.shift();
  loadRound();
}

function chooseJapaneseVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find((voice) => voice.lang === "ja-JP") || voices.find((voice) => voice.lang.startsWith("ja")) || null;
}

function speakSequence(texts, onComplete = null, pausesAfter = []) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    showToast("この端末では音声を利用できません。");
    if (onComplete) onComplete();
    return;
  }
  const currentSpeechRunId = ++speechRunId;
  window.speechSynthesis.cancel();
  const voice = chooseJapaneseVoice();
  let finished = false;
  const finish = () => {
    if (finished || currentSpeechRunId !== speechRunId) return;
    finished = true;
    elements.firstSlot.classList.remove("speaking");
    elements.secondSlot.classList.remove("speaking");
    if (onComplete) onComplete();
  };

  const speakAt = (index) => {
    if (currentSpeechRunId !== speechRunId) return;
    const text = texts[index];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = SPEECH_RATE;
    utterance.pitch = 1;
    if (voice) utterance.voice = voice;
    if (index === 0) {
      utterance.onstart = () => {
        elements.firstSlot.classList.add("speaking");
        elements.secondSlot.classList.add("speaking");
      };
    }
    utterance.onend = () => {
      if (currentSpeechRunId !== speechRunId) return;
      if (index === texts.length - 1) {
        finish();
        return;
      }
      const pauseMs = pausesAfter[index] || 0;
      setTimeout(() => speakAt(index + 1), pauseMs);
    };
    utterance.onerror = finish;
    window.speechSynthesis.speak(utterance);
  };

  speakAt(0);
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

function init() {
  loadRound();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(console.error));
  }
}

init();
