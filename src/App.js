import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import Leaderboard from "./components/Leaderboard";

const localQuizData = [
  
      // General Knowledge
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris",
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "CO2", "H2O", "NaCl"],
        answer: "H2O",
      },
      
      // History
      {
        question: "Who was the first president of the United States?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        answer: "George Washington",
      },
      {
        question: "In which year did World War II end?",
        options: ["1942", "1945", "1948", "1950"],
        answer: "1945",
      },
      {
        question: "What was the name of the ship on which the Pilgrims traveled to America?",
        options: ["Mayflower", "Santa Maria", "Endeavour", "Beagle"],
        answer: "Mayflower",
      },
      {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
        answer: "Alexander Fleming",
      },
      {
        question: "Who was the first man to step on the moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong",
      },
    
      // Science
      {
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C",
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
      {
        question: "What is the nearest planet to the sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Mercury",
      },
      {
        question: "What is the center of an atom called?",
        options: ["Electron", "Proton", "Nucleus", "Neutron"],
        answer: "Nucleus",
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: "Diamond",
      },
    
      // Technology
      {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"],
        answer: "Charles Babbage",
      },
      {
        question: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "HyperText Transmission Protocol",
          "HighText Transfer Protocol",
          "HyperText Transfer Process",
        ],
        answer: "HyperText Transfer Protocol",
      },
      {
        question: "What is the name of the first electronic general-purpose computer?",
        options: ["ENIAC", "UNIVAC", "IBM PC", "Altair 8800"],
        answer: "ENIAC",
      },
      {
        question: "Which company developed the Android operating system?",
        options: ["Apple", "Google", "Microsoft", "Samsung"],
        answer: "Google",
      },
      {
        question: "What does CPU stand for?",
        options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Central Processing Utility"],
        answer: "Central Processing Unit",
      },
    
      // Geography
      {
        question: "Which country has the most number of islands?",
        options: ["Indonesia", "Sweden", "Philippines", "Canada"],
        answer: "Sweden",
      },
      {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Arctic", "Antarctic", "Gobi"],
        answer: "Antarctic",
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile",
      },
      {
        question: "Which mountain range includes Mount Everest?",
        options: ["Rockies", "Andes", "Himalayas", "Alps"],
        answer: "Himalayas",
      },
      {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        answer: "Pacific",

      },

        // Soccer Questions
        {
          question: "Which country won the FIFA World Cup in 2018?",
          options: ["Brazil", "Germany", "France", "Argentina"],
          answer: "France",
        },
        {
          question: "Who is often referred to as the 'GOAT' in soccer?",
          options: ["Cristiano Ronaldo", "Lionel Messi", "Diego Maradona", "Pelé"],
          answer: "Lionel Messi",
        },
        {
          question: "Which club has won the most UEFA Champions League titles?",
          options: ["FC Barcelona", "Manchester United", "Real Madrid", "Bayern Munich"],
          answer: "Real Madrid",
        },
        {
          question: "Which country hosted the FIFA World Cup in 2014?",
          options: ["South Africa", "Brazil", "Russia", "Germany"],
          answer: "Brazil",
        },
        {
          question: "What is the nickname of the Italian soccer team?",
          options: ["La Roja", "Azzurri", "Les Bleus", "Oranje"],
          answer: "Azzurri",
        },
      
        // Basketball Questions
        {
          question: "Who is known as 'The King' in basketball?",
          options: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Shaquille O'Neal"],
          answer: "LeBron James",
        },
        {
          question: "Which team won the NBA championship in 2020?",
          options: ["Golden State Warriors", "Los Angeles Lakers", "Miami Heat", "Toronto Raptors"],
          answer: "Los Angeles Lakers",
        },
        {
          question: "How many points is a free throw worth in basketball?",
          options: ["1", "2", "3", "4"],
          answer: "1",
        },
        {
          question: "What does 'NBA' stand for?",
          options: ["National Basketball Association", "National Ball Association", "North Basketball Association", "National Board Association"],
          answer: "National Basketball Association",
        },
        {
          question: "Which player holds the record for the most points scored in an NBA game?",
          options: ["Wilt Chamberlain", "Michael Jordan", "LeBron James", "Kobe Bryant"],
          answer: "Wilt Chamberlain",
        },
      
        // Cricket Questions
        {
          question: "Which country won the first ICC Cricket World Cup in 1975?",
          options: ["India", "Australia", "West Indies", "England"],
          answer: "West Indies",
        },
        {
          question: "Who is the highest run-scorer in international cricket?",
          options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
          answer: "Sachin Tendulkar",
        },
        {
          question: "Which bowler has taken the most wickets in Test cricket?",
          options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
          answer: "Muttiah Muralitharan",
        },
        {
          question: "What is the maximum number of overs allowed in an ODI match?",
          options: ["20", "50", "100", "60"],
          answer: "50",
        },
        {
          question: "What is the term used when a batsman scores 100 runs in cricket?",
          options: ["Century", "Half-century", "Double-century", "Ton"],
          answer: "Century",
        },
      
        // Tennis Questions
        {
          question: "Who has won the most Grand Slam titles in tennis history (as of 2023)?",
          options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
          answer: "Novak Djokovic",
        },
        {
          question: "What is the name of the tennis tournament held in London?",
          options: ["US Open", "Australian Open", "Wimbledon", "French Open"],
          answer: "Wimbledon",
        },
        {
          question: "What is the scoring term used for a score of zero in tennis?",
          options: ["Love", "Deuce", "Advantage", "Fault"],
          answer: "Love",
        },
        {
          question: "Which surface is the French Open played on?",
          options: ["Grass", "Clay", "Hard Court", "Carpet"],
          answer: "Clay",
        },
        {
          question: "How many sets are played in a men's Grand Slam final?",
          options: ["3", "5", "7", "9"],
          answer: "5",
        },
      
        // Olympics Questions
        {
          question: "In which year were the first modern Olympic Games held?",
          options: ["1896", "1900", "1924", "1936"],
          answer: "1896",
        },
        {
          question: "What is the Olympic motto?",
          options: ["Faster, Higher, Stronger", "Stronger Together", "Play Fair", "Sports for All"],
          answer: "Faster, Higher, Stronger",
        },
        {
          question: "Which country has won the most Olympic gold medals?",
          options: ["Russia", "China", "United States", "Germany"],
          answer: "United States",
        },
        {
          question: "What is the symbol of the Olympic Games?",
          options: ["A torch", "Five rings", "A flag", "A medal"],
          answer: "Five rings",
        },
        {
          question: "How often are the Olympic Games held?",
          options: ["Every 2 years", "Every 4 years", "Every 6 years", "Every 8 years"],
          answer: "Every 4 years",
        },
      
        // Miscellaneous Sports Questions
        {
          question: "What sport is known as 'the gentleman's game'?",
          options: ["Golf", "Tennis", "Cricket", "Rugby"],
          answer: "Cricket",
        },
        {
          question: "Which country is the birthplace of golf?",
          options: ["United States", "Scotland", "England", "Australia"],
          answer: "Scotland",
        },
        {
          question: "Which sport is associated with the Ryder Cup?",
          options: ["Tennis", "Golf", "Cricket", "Rugby"],
          answer: "Golf",
        },
        {
          question: "How many players are there in a rugby team?",
          options: ["11", "13", "15", "18"],
          answer: "15",
        },
        {
          question: "What is the national sport of Japan?",
          options: ["Karate", "Sumo Wrestling", "Judo", "Baseball"],
          answer: "Sumo Wrestling",
        },
        {
          question: "Which sport is Michael Phelps associated with?",
          options: ["Swimming", "Diving", "Gymnastics", "Rowing"],
          answer: "Swimming",
        },
        {
          question: "What sport uses the term 'home run'?",
          options: ["Baseball", "Cricket", "Hockey", "Basketball"],
          answer: "Baseball",
        },
        {
          question: "Which country won the Rugby World Cup in 2019?",
          options: ["New Zealand", "England", "South Africa", "Australia"],
          answer: "South Africa",
        },
        {
          question: "What sport uses a shuttlecock?",
          options: ["Badminton", "Tennis", "Squash", "Table Tennis"],
          answer: "Badminton",
        },
        {
          question: "Which country is famous for its Haka dance before rugby matches?",
          options: ["Australia", "Fiji", "New Zealand", "Samoa"],
          answer: "New Zealand",
        },
      ];
      
      // Add 150 more questions based on categories like entertainment, sports, literature, etc.


const App = () => {
  const [step, setStep] = useState("start");
  const [score, setScore] = useState(0);
  const [quizData] = useState(localQuizData);
  const [leaderboard, setLeaderboard] = useState([]);

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
    const playerName = prompt("Enter your name for the leaderboard:");
    setLeaderboard((prev) => [...prev, { name: playerName, score: finalScore }].sort((a, b) => b.score - a.score));
    setStep("result");
  };

  return (
    <div className="app">
      {step === "start" && <StartScreen onStart={() => setStep("quiz")} />}
      {step === "quiz" && (
        <QuizScreen
          quizData={quizData}
          onComplete={handleQuizCompletion}
          initialScore={score}
        />
      )}
      {step === "result" && (
        <ResultScreen
          score={score}
          leaderboard={leaderboard}
          onRestart={() => setStep("start")}
          onViewLeaderboard={() => setStep("leaderboard")}
        />
      )}
      {step === "leaderboard" && (
        <Leaderboard leaderboard={leaderboard} onBack={() => setStep("result")} />
      )}
    </div>
  );
};

export default App;
