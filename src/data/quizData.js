export const quizData = {
  categories: [
    {
      categoryName: "F.R.I.E.N.D.s",
      questions: [
        {
          question: "What is the name of Ross's kid ?",
          incorrectOptions: ["Joey", "Chandler", "Monica"],
          answer: "Ben",
        },
        {
          question: "What was Rachels first job ?",
          incorrectOptions: ["Doctor", "Web developer", "IT Engineer"],
          answer: "Waitress",
        },
        {
          question:
            "As a bestfriend, which food item did joey share with chandler?",
          incorrectOptions: ["Pizza", "Noodles", "Pasta"],
          answer: "Sandwich",
        },
        {
          question: "Who was the first to find out about Chandler & Monica ?",
          incorrectOptions: ["Ross", "Rachel", "Joey"],
          answer: "Phoebe",
        },
        {
          question: "What is name of Ross & Rachels daughter ?",
          incorrectOptions: ["Stephanie", "Bennie", "Lacey"],
          answer: "Emma",
        },
      ],
    },
    {
      categoryName: "Neog",
      questions: [
        {
          question: "Who is the CEO of Neog Camp ?",
          incorrectOptions: ["Tanay Pratap","Akanksha Choudhary","Vikram Santhalia"],
          answer: "Tanvi Priya",
        },
        {
          question: "In which year did the first batch of Neog took place ?",
          incorrectOptions: ["2020","2019","2022"],
          answer: "2021",
        },
        {
          question: "What's the duration of camp ?",
          incorrectOptions: ["1 Year","8 Months","10 Months"],
          answer: "6 Months",
        },
        {
          question: "Who is the main mentor of Neog Camp ?",
          incorrectOptions: ["Tanvi Priya","Akanksha Choudhary","Vikram Santhalia"],
          answer: "Tanay Pratap",
        },
        {
          question: "What was markOne project in levelZero ?",
          incorrectOptions: ["Profit Or Loss","Minionese","Fun With Triangles"],
          answer: "CLI App",
        },
      ],
    },
  ]
};

console.log(quizData.categories[1].questions[0].incorrectOptions);

