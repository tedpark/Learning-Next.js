// @flow
import { colors } from "@atlaskit/theme";
import jakeImg from "./assets/jake.png";
import finnImg from "./assets/finn.png";
import bmoImg from "./assets/bmo.png";
import princessImg from "./assets/princess.png";

// let jakeImg = "jakeImg";
// let finnImg = "finnImg";
// let bmoImg = "bmoImg";
// let princessImg = "princessImg";

const jake = {
  id: "1",
  name: "Jake",
  url: "http://adventuretime.wikia.com/wiki/Jake",
  avatarUrl: jakeImg,
  colors: {
    soft: colors.Y50,
    hard: colors.Y200
  }
};

const BMO = {
  id: "2",
  name: "BMO",
  url: "http://adventuretime.wikia.com/wiki/BMO",
  avatarUrl: bmoImg,
  colors: {
    soft: colors.G50,
    hard: colors.G200
  }
};

const finn = {
  id: "3",
  name: "Finn",
  url: "http://adventuretime.wikia.com/wiki/Finn",
  avatarUrl: finnImg,
  colors: {
    soft: colors.B50,
    hard: colors.B200
  }
};

const princess = {
  id: "4",
  name: "Princess bubblegum",
  url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.P200
  }
};

const prin = {
  id: "5",
  name: "Prin",
  url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.P200
  }
};

const ted = {
  id: "6",
  name: "Ted",
  url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.P200
  }
};

export const authors = [jake, BMO, finn, princess, prin, ted];

export const quotes = [
  {
    id: "1",
    content: "Sometimes life is scary and dark",
    author: BMO
  },
  {
    id: "2",
    content:
      "Sucking at something is the first step towards being sorta good at something.",
    author: jake
  },
  {
    id: "3",
    content: "You got to focus on what's real, man",
    author: jake
  },
  {
    id: "4",
    content: "Is that where creativity comes from? From sad biz?",
    author: finn
  },
  {
    id: "5",
    content: "Homies help homies. Always",
    author: finn
  },
  {
    id: "6",
    content: "Responsibility demands sacrifice",
    author: princess
  },
  {
    id: "7",
    content: "That's it! The answer was so simple, I was too smart to see it!",
    author: princess
  },
  {
    id: "8",
    content: "People make mistakes. It’s a part of growing up",
    author: finn
  },
  {
    id: "9",
    content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
    author: finn
  },
  {
    id: "10",
    content: "I should not have drunk that much tea!",
    author: princess
  },
  {
    id: "11",
    content: "Please! I need the real you!",
    author: princess
  },
  {
    id: "12",
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    author: prin
  },
  {
    id: "13",
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    author: prin
  },
  {
    id: "14",
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    author: prin
  }
];

// So we do not have any clashes with our hardcoded ones
let idCount = quotes.length + 2;

export const getQuotes = count =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];

    const custom = {
      ...random,
      id: `G${idCount++}`
    };

    return custom;
  });

export const getAuthors = count =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random = authors[Math.floor(Math.random() * authors.length)];

    const custom = {
      ...random,
      id: `author-${idCount++}`
    };

    return custom;
  });

const getByAuthor = (author, items) =>
  items.filter(quote => quote.author === author);

export const authorQuoteMap = authors.reduce(
  (previous, author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes)
  }),
  {}
);

export const generateQuoteMap = quoteCount =>
  authors.reduce(
    (previous, author) => ({
      ...previous,
      [author.name]: getQuotes(quoteCount / authors.length)
    }),
    {}
  );
