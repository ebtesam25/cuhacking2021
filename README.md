Inspiration
-Online classes
-Zoom fatigue
-Pomodoro

 Due to the outbreak of COVID-19, many schools and universities have switched to online learning. However, it is hard to keep track of student's progress and keep them engaged in learning activities remotely due to distractions. Reports showed that it is not uncommon that students skip classes or missed assignments.
Though there are challenges for the new learning normal, emerging technologies help to take e-learning to the next level. 
We would like to incorporate a gaze tracker to identify when students are tired and need a break. 
To help reduce workload for teachers, we also incorporated a auto-quiz generation function for pop-up quiz during lecture to ensure students are following
What it does

Online learning platform for teachers to stream lectures/ play pre-recorded videos 
Students can react during lectures
Gaze tracking to monitor if students are tired 
Auto quiz generation based on lecture materials
pomodoro timing  

How we built it

Front-end development using:
-Reactjs
-HTML/CSS/JS
- javascript based in browser gaze tracking (state of the art 2020 @ brown)

QnA generation:
BERT, transformers and nltk in python, we used a transformers based approach to tokenize and generate questions from text transcripts of Youtube videos. This approach works best when the Video transcripts are coherent and therefore can be tokenized correctly. Straight fact listing type videos work best, rhetorical and philosophical analysis sometimes produces incoherent questions.

Question Answer generation state of the art paper here: https://www.aclweb.org/anthology/D19-5821.pdf

Associated Python Implementation here:
https://github.com/patil-suraj/question_generation

Gaze tracking: https://webgazer.cs.brown.edu/



Challenges
Development gaze tracking was complicated 

Whats next
-better insights
-determine fatigue 
-feedback to teachers (similar to livestream reactions)
-blink rate
-flashcard generation
-better questions for math courses/rhetorical and philosophical analysis questions

