const getRandomWord = (wordsArray) => {
  var index = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[index];
};

const getRandomSymbol = () => {
  SymbolArray = ["@", "#", "$", "."];
  var index = Math.floor(Math.random() * SymbolArray.length);
  return SymbolArray[index];
};

const word_with_DOB = (userdata) => {
  let words = Object.entries(userdata)
    .map((data) => {
      if (
        data[0] === "firstName" ||
        data[0] === "lastName" ||
        data[0] === "Password" ||
        data[0] === "role" ||
        data[0] === "emailID"
      )
        return;
      if (data[0] === "DOB")
        data[1] = [
          data[1].getFullYear(),
          data[1].getMonth() + 1,
          data[1].getDate(),
        ];

      if (data[0] === "Questions")
        data[1] = data[1].map((que) => que.answer.split(" ").filter((i) => i));

      return data[1].flat();
    })
    .filter((i) => i);

  words = words.flat();

  // console.log(words);
  return words;
};

const generate_words = (userdata) => {
  let words = userdata.Questions.map((que) =>
    que.answer.split(" ").filter((i) => i)
  );

  words = words.flat();

  // console.log(words);
  return words;
};

const randomDate = () => {
  let start = new Date(1900, 0, 1);
  let end = new Date();
  let date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
};

function HoneyWord(userdata) {
  let words = generate_words(userdata);

  // adding random dates
  let randDate1 = randomDate();
  let randDate2 = randomDate();
  newDate = randDate1.concat(randDate2);

  words = words.concat(newDate);

  // shuffling words
  let wordsArray = words
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  // console.log(wordsArray);

  var newWordPart1 = getRandomWord(wordsArray);
  var newWordPart2 = getRandomWord(wordsArray);
  var symbol = getRandomSymbol();

  // this will prevent new words like oneone twotwo, etc.
  // if you want the repeated words, just remove this while entirely
  while (
    newWordPart2 === newWordPart1 ||
    typeof newWordPart1 === typeof newWordPart2
  ) {
    newWordPart2 = getRandomWord(wordsArray);
  }

  return newWordPart1 + symbol + newWordPart2;
}

// const userdata = {
//   role: "user",
//   firstName: "Madhavan",
//   lastName: "Madhavan",
//   emailID: "gyanamadhavan@gmail.com",
//   DOB: new Date("2022-06-01T18:30:00.000Z"),
//   Password: "test@123",
//   Questions: [
//     {
//       question: "What is the name of your first pet?",
//       answer: "scooby doo",
//     },
//     {
//       question: "What was your first car?",
//       answer: "tesla",
//     },
//     {
//       question: "What elementary school did you attend?",
//       answer: "Sree Iyppa ",
//     },
//     {
//       question: "What is the name of the town where you were born?",
//       answer: "tamil nadu",
//     },
//   ],
// };

function generate_honey_words(userdata, no_of_words) {
  const honey_word_list = [];
  //   no_of_words = 10;

  for (let i = 1; i < no_of_words + 1; i++) {
    // console.log(createNewWord(words));
    honey_word_list.push(HoneyWord(userdata));
  }

  return honey_word_list;
}

// console.log(generate_honey_words(userdata, 10));

module.exports = generate_honey_words;
