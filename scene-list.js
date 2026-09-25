const reviewScenes = [
  { id: "ipad-get", group: "basic", action: "取って", phrase: "iPad・取って", image: "./assets/scenes/v45/ipad-usm-KJ-mom-v2.jpg", description: "3段のUSMハラーの上にある、手の届かないiPadを取ってもらいます。" },
  { id: "ipad-please", group: "basic", action: "ちょうだい", phrase: "iPad・ちょうだい", image: "./assets/scenes/v45/ipad-please-KJ-mom-v2.jpg", description: "ママが目の前で持っているiPadをもらいます。" },
  { id: "milk-please", group: "basic", action: "ちょうだい", phrase: "牛乳・ちょうだい", image: "./assets/scenes/v45/milk-please-KJ-mom-v2.jpg", description: "ママが目の前で持っている牛乳をもらいます。" },
  { id: "water-bottle", group: "basic", action: "取って", phrase: "お水・取って", image: "./assets/scenes/v45/water-bottle-KJ-mom-v2.jpg", description: "手の届かない場所にある水筒を取ってもらいます。" },
  { id: "water-bottle-please", group: "basic", action: "ちょうだい", phrase: "お水・ちょうだい", image: "./assets/scenes/v45/water-bottle-please-KJ-mom-v2.jpg", description: "ママが目の前で持っている水筒をもらいます。" },
  { id: "water-bottle-open", group: "basic", action: "あけて", phrase: "お水・あけて", image: "./assets/scenes/v45/water-bottle-open-KJ-mom-v2.jpg", description: "慧樹が閉じた水筒を持ってきて、ママに開けてもらいます。" },
  { id: "snack-get", group: "basic", action: "取って", phrase: "お菓子・取って", image: "./assets/scenes/v45/snack-get-KJ-mom-v2.jpg", description: "高い棚にある、手の届かないお菓子を取ってもらいます。" },
  { id: "snack-please", group: "basic", action: "ちょうだい", phrase: "お菓子・ちょうだい", image: "./assets/scenes/v45/snack-please-KJ-mom-v2.jpg", description: "ママが目の前で持っているお菓子をもらいます。" },
  { id: "snack-open", group: "basic", action: "あけて", phrase: "お菓子・あけて", image: "./assets/scenes/v45/snack-open-KJ-mom-v2.jpg", description: "慧樹が閉じたえびせんべいの袋を持ってきて、ママに開けてもらいます。" },
  { id: "chocolate-get", group: "basic", action: "取って", phrase: "チョコ・取って", image: "./assets/scenes/v45/chocolate-get-KJ-mom-v2.jpg", description: "高い棚にある、手の届かないチョコを取ってもらいます。" },
  { id: "chocolate-please", group: "basic", action: "ちょうだい", phrase: "チョコ・ちょうだい", image: "./assets/scenes/v45/chocolate-please-KJ-mom-v2.jpg", description: "ママが目の前で持っているGOONAのチョコをもらいます。" },
  { id: "chocolate-open", group: "basic", action: "あけて", phrase: "チョコ・あけて", image: "./assets/scenes/v45/chocolate-open-KJ-mom-v2.jpg", description: "閉じているGOONAの袋を開けてもらいます。" },
  { id: "yogurt-get", group: "basic", action: "取って", phrase: "ヨーグルト・取って", image: "./assets/scenes/v45/yogurt-get-KJ-mom-v2.jpg", description: "見えない冷蔵庫の中からヨーグルトを取ってもらいます。" },
  { id: "yogurt-please", group: "basic", action: "ちょうだい", phrase: "ヨーグルト・ちょうだい", image: "./assets/scenes/v45/yogurt-please-KJ-mom-v2.jpg", description: "ママが目の前で持っているいちごヨーグルトをもらいます。" },
  { id: "yogurt-open", group: "basic", action: "あけて", phrase: "ヨーグルト・あけて", image: "./assets/scenes/v45/yogurt-open-KJ-mom-v2.jpg", description: "閉じているヨーグルトのふたを開けてもらいます。" },
  { id: "ipad-want", group: "special", action: "特別", phrase: "iPad・やりたい", image: "./assets/scenes/v45/ipad-want-KJ-mom-v2.jpg", description: "iPadをママに持ってきて、やってもよいか伝えます。" },
  { id: "diaper-change", group: "special", action: "特別", phrase: "おむつ・かえて", image: "./assets/scenes/v45/diaper-change-KJ-mom-v2.jpg", description: "おしっこやうんちの後に、おむつを替えてもらいます。" },
  { id: "toilet-go", group: "special", action: "特別", phrase: "トイレ・行きたい", image: "./assets/scenes/v45/toilet-go-KJ-mom-v2.jpg", description: "トイレに行きたいと伝え、補助便座に座ります。" },
  { id: "mom-come", group: "special", action: "生活", phrase: "ママ・きて", image: "./assets/scenes/v57/mom-come-KJ-v1.jpg", description: "離れたところにいるママを呼び、近くまで来てもらいます。" },
  { id: "mom-hug", group: "special", action: "生活", phrase: "ママ・だっこ", image: "./assets/scenes/v57/mom-hug-KJ-v1.jpg", description: "ママに向かって両手を広げ、だっこしてもらいます。" },
  { id: "mom-help", group: "special", action: "生活", phrase: "ママ・てつだって", image: "./assets/scenes/v57/mom-help-KJ-v1.jpg", description: "プラレールの列車と列車の連結を手伝ってもらいます。" },
  { id: "plarail-get", group: "special", action: "生活", phrase: "プラレール・とって", image: "./assets/scenes/v57/plarail-get-KJ-v1.jpg", description: "USMハラーの上にある透明ボックスを指さし、取ってもらいます。" },
  { id: "tv-watch", group: "special", action: "生活", phrase: "テレビ・みたい", image: "./assets/scenes/v57/tv-watch-KJ-v1.jpg", description: "WALLスタンドのテレビを指さし、ママにつけてもらいます。" },
  { id: "poop-cameout", group: "special", action: "生活", phrase: "うんち・でた", image: "./assets/scenes/v57/poop-cameout-KJ-v1.jpg", description: "うんちが出たことをママに伝え、おむつを替えてもらいます。" },
];

function createSceneCard(scene, index) {
  const article = document.createElement("article");
  article.className = `scene-card${scene.group === "special" ? " special" : ""}`;
  article.id = `scene-${index + 1}`;

  const title = document.createElement("div");
  title.className = "scene-title";
  title.innerHTML = `<span class="number">${index + 1}</span><div><small></small><h3></h3></div>`;
  title.querySelector("small").textContent = scene.action;
  title.querySelector("h3").textContent = scene.phrase;

  const image = document.createElement("img");
  image.src = scene.image;
  image.alt = `${scene.phrase}の場面`;

  const description = document.createElement("p");
  description.textContent = scene.description;

  const link = document.createElement("a");
  link.href = `./index.html?v=63&scene=${scene.id}`;
  link.textContent = "ゲームで確認";

  article.append(title, image, description, link);
  return article;
}

reviewScenes.forEach((scene, index) => {
  const grid = document.querySelector(scene.group === "special" ? "#special-grid" : "#basic-grid");
  grid.append(createSceneCard(scene, index));
});
