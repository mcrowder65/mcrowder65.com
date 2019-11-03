---
title: Testing React
presentations:
  [
    {
      date: "09/21/2019",
      title: "React Boston Conference",
      source: "https://www.youtube.com/watch?v=BUXJIg2Wve4",
    },
    {
      date: "10/04/2019",
      title: "Scenic City Summit Conference",
      source: "https://sceniccitysummit.com/speaker/matt-crowder/",
    },
    {
      date: "11/15/2019",
      title: "RVA.js Conference",
      source: "https://www.rvajavascript.com/speakers",
    },
    {
      date: "12/06/2019",
      title: "NationJS Front Runners",
      source: "http://nationjs.com",
    },
  ]
---

If you had to rewrite your tests when writing a hook in your React application, then you’re writing tests wrong.

react-testing-library is what it sounds like, but more importantly, it encourages writing tests in the way that your end users will be using your components.

In this talk, I will first introduce react-testing-library, what it is, what it encourages, and what it does best. I’ll then dive into how to effectively test a react component, first a smaller component, then a “larger” component with redux, i18n dependencies, etc., then I will show all of the different APIs that react-testing-library provides, and how to effectively use them. Then, I’ll show how to write effective tests across an entire application (writing reusable, effective tests that are not brittle).
