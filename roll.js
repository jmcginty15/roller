const rollOne = (sides) => Math.floor(Math.random() * sides + 1);

const roll = (dice, sides) => {
  let rolls = "";
  for (let i = 0; i < dice; i++) rolls += `${rollOne(sides)}\t`;
  console.log(`${dice}d${sides}:\t${rolls.trim()}`);
};

const trimmedArgs = process.argv.slice(2).filter((val) => !!val);
trimmedArgs.map((rollStr) => {
  const [dice, sides] = rollStr.split("d");
  roll(dice, sides);
});
