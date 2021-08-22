const Bingo = () => {
  const createNumbers = (min = 1, max = 75) => {
    return Array.from({ length: max - min + 1 }).map((_, index) => {
      let letter = "";
      if (index < 15) {
        letter = "B";
      } else if (index >= 15 && index < 30) {
        letter = "I";
      } else if (index >= 30 && index < 45) {
        letter = "N";
      } else if (index >= 45 && index < 60) {
        letter = "G";
      } else {
        letter = "O";
      }
      return letter + (index + min);
    });
  };

  const printRandomNumbers = (numbers) => {
    while (numbers.length > 0) {
      const index = Math.round(Math.random() * (numbers.length - 1));
      const selectedNumber = numbers[index];
      console.log(selectedNumber);
      numbers.splice(index, 1);
    }
  };
  const bingoNumbers = createNumbers();

  printRandomNumbers(bingoNumbers);
};
