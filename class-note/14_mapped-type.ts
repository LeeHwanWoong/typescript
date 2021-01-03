type Heroes = "Hulk" | "Capt" | "Thor";
type HeroAges = { [k in Heroes]: number };

const ages: HeroAges = {
  Hulk: 100,
  Capt: 100,
  Thor: 100,
};
