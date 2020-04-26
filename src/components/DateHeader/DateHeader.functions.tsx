export const humanDateHeader = (dateObject: Date) => {
  const month = MonthsOfYear[dateObject.getMonth()];
  return `${month} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
};

export const getDayOfWeek = (dateObject: Date) => {
  return DaysOfWeek[dateObject.getDay()];
};

export const getGreeting = (dateObject: Date) => {
  const greetingType = Math.floor(Math.random() * 10);

  if (greetingType <= 2) {
    return MonthGreetings[Math.floor(Math.random() * 10)].replace("{0}", MonthsOfYear[dateObject.getMonth()]);
  }
  if (greetingType > 2 && greetingType <= 5) {
    // Good morning
    return TimeGreeting(dateObject);
  }
  if (greetingType > 5 && greetingType <= 8) {
    // Generic
    return GenericGreetings[Math.floor(Math.random() * 10)];
  }
  if (greetingType === 9) {
    // Totally random fact
    return RandomFacts[Math.floor(Math.random() * 10)];
  }
};

const DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const MonthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthGreetings = [
  "Have a great {0}!",
  "Hope you're enjoying {0}",
  "Nothing like a good {0}",
  "{0} happy times",
  "Let's make this the best {0} ever",
  "{0}? Best month",
  "Let's crush this {0}",
  "Another {0}, another dollar",
  "The month: {0}. You: Awesome",
  "Is {0} over yet?",
];

const GenericGreetings = [
  "Hey good looking",
  "You're doing great!",
  "Have a great day today",
  "Let's get this bread",
  "Can't stop, won't stop",
  "What up dawg",
  "Better is the enemy of good enough",
  "One step at a time",
  "Wake up determined. Sleep satisfied",
  "Little things make big days",
];

const RandomFacts = [
  "Most toilets flush in E flat",
  "Jupiter is bigger than all the other planets in our solar system combined",
  "A duck`s quack doesn`t echo",
  "Canada makes up 6.67 percent of the Earth`s land area",
  "Cows have best friends",
  "Google hired a camel to create the Street View of a desert",
  "Science suggests that when dogs dream, they dream about their owners",
  "Cheetahs can't roar, they meow",
  "Rats laugh when tickled",
  "Dogs exist",
];

const TimeGreeting = (dateObject: Date) => {
  if (dateObject.getHours() === 0) {
    return "It's midnight";
  }
  if (dateObject.getHours() > 0 && dateObject.getHours() < 12) {
    return "Good morning";
  }
  if (dateObject.getHours() >= 12 && dateObject.getHours() < 18) {
    return "Good Afternoon";
  }
  if (dateObject.getHours() >= 18) {
    return "Good Evening";
  }
  return "Good Day";
};
