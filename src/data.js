
const quiz_data =  [
    {
      question: "Are you looking to manage your health or the health of someone else? [Select all that apply]",
      answerindex : 0,
      answers: [
        {
          id: 0,
          content: "My own",
          answer : false
        },
        {
          id: 1,
          content: "My parent(s)",
          answer : false
        },
        {
          id: 2,
          content: "My child(ren)",
          answer : false
        },
        {
          id: 3,
          content: "My partner ",
          answer : false
        }
      ]
    },
    {
      question: "When was the last time you saw a healthcare provider?",
      answerindex : 1,
      answers: [
        {
          id: 0,
          content: "In the last month ",
          answer : false
        },
        {
          id: 1,
          content: "In the last 6 months ",
          answer : false
        },
        {
          id: 2,
          content: "Last year",
          answer : false
        },
        {
          id: 3,
          content: "A few years ago ",
          answer : false
        },
        {
          id: 4,
          content: "I can’t remember ",
          answer : false
        },
      ]
    },
    {
      question: "How many times have you visited a clinic, hospital, or other healthcare provider in the last 5 years?",
      answerindex : 2,
      answers: [
        {
          id: 0,
          content: "Less than 3 times ",
          answer : false
        },
        {
          id: 1,
          content: "3–5 times",
          answer : false
        },
        {
          id: 2,
          content: "5-10 times",
          answer : false
        },
        {
          id: 3,
          content: "More than 10 times ",
          answer : false
        },
        {
          id: 4,
          content: "Not sure",
          answer : false
        },
      ]
    },
    {
      question: "Do you take any prescription medications?",
      answerindex : 3,
      answers: [
        {
          id: 0,
          content: "Yes",
          answer : false
        },
        {
          id: 1,
          content: "No",
          answer : false
        },
        {
          id: 2,
          content: "Prefer not to say",
          answer : false
        }
      ]
    },
    {
      question: "Are you currently managing an acute or ongoing medical condition? (e.g. diabetes, MS, Crohns)",
      answerindex : 4,
      answers: [
        {
          id: 0,
          content: "Yes",
          answer : false
        },
        {
          id: 1,
          content: "No",
          answer : false
        },
        {
          id: 2,
          content: "Prefer not to say",
          answer : false
        }
      ]
    }
  ];


export default quiz_data;