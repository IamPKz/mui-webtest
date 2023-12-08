// QuizPage.js
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ip } from "../_mock/ipa.json"

const quizData =
{
  quiz_id: 1,
  quiz_name: 'Quiz 1',
  questions: [
    {
      question_id: 1,
      question_text: 'What is the capital of France?',
      correct_answer_index: 1,
      correct_answer_description: 'Paris is the capital of France.',
      answers: [
        {
          answer_id: 1,
          answer_text: 'Berlin',
        },
        {
          answer_id: 2,
          answer_text: 'Paris',
        },
        {
          answer_id: 3,
          answer_text: 'Madrid',
        },
        {
          answer_id: 4,
          answer_text: 'Rome',
        },
      ],
    },
    {
      question_id: 2,
      question_text: 'Who wrote "Romeo and Juliet"?',
      correct_answer_index: 0,
      correct_answer_description: 'William Shakespeare wrote "Romeo and Juliet."',
      answers: [
        {
          answer_id: 5,
          answer_text: 'William Shakespeare',
        },
        {
          answer_id: 6,
          answer_text: 'Charles Dickens',
        },
        {
          answer_id: 7,
          answer_text: 'Jane Austen',
        },
        {
          answer_id: 8,
          answer_text: 'Mark Twain',
        },
      ],
    },
  ],
}

export default function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [quizDatas, setQuizdatas] = useState(quizData);

  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await axios.get(`http://${ip}:3000/api/quizzes/${id}`);
        // Update the state with the fetched data
        setQuizdatas(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [id]);

  const handleRadioChange = (questionId, selectedIndex) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedIndex,
    }));
  };

  const getBorderColor = (question, answerId) => {
    if (!submitted) {
      return 'transparent';
    }

    const correctAnswer = question.answers[question.correct_answer_index].answer_id;

    if (answerId === correctAnswer) {
      return correctAnswers[question.question_id] ? 'green' : 'red'; // Highlight correct answer
    }
    if (answerId === answers[question.question_id]) {
      return 'red'; // Chosen answer is incorrect
    }

    return 'transparent';
  };


  const handleSubmit = () => {
    const newCorrectAnswers = {};

    quizDatas.questions.forEach((question) => {
      const correctAnswer = question.answers[question.correct_answer_index].answer_id;
      const chosenAnswer = answers[question.question_id];

      newCorrectAnswers[question.question_id] = chosenAnswer === correctAnswer;
    });

    setCorrectAnswers(newCorrectAnswers);
    setSubmitted(true);
  };

  const handleTryAgain = () => {
    setAnswers({});
    setCorrectAnswers({});
    setSubmitted(false);
  };

  const calculateScore = () => {
    const correctCount = Object.values(correctAnswers).filter(Boolean).length;
    return correctCount;
  };

  const getFullScore = () => quizDatas.questions.length;

  const userScore = calculateScore();
  const fullScore = getFullScore();

  console.log(quizData.quiz_name);
  return (
    <div style={{ padding: '20px' }}>
      <Helmet>
        <title> Quiz | Minimal UI </title>
      </Helmet>

      <Typography variant="h4" gutterBottom>
        {quizDatas.quiz_name}
      </Typography>
      <Grid container spacing={2}>
        {quizDatas.questions.map((question) => (
          <Grid item xs={12} key={question.question_id}>
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                border: `2px solid ${getBorderColor(question, answers[question.question_id])}`,
              }}
            >
              <Typography variant="h6" gutterBottom>
                {question.question_text}
              </Typography>
              <RadioGroup
                value={answers[question.question_id] !== undefined ? answers[question.question_id].toString() : ''}
                onChange={(e) =>
                  handleRadioChange(question.question_id, parseInt(e.target.value, 10))
                }
              >
                {question.answers.map((answer) => (
                  <FormControlLabel
                    key={answer.answer_id}
                    value={answer.answer_id.toString()}
                    control={<Radio style={{ borderColor: getBorderColor(question, answer.answer_id) }} color="primary" />}
                    label={answer.answer_text}
                    disabled={submitted}
                  />
                ))}

              </RadioGroup>
              {submitted && (
                <div style={{ marginTop: '10px' }}>
                  {correctAnswers[question.question_id] ? (
                    <Typography variant="subtitle1" style={{ color: 'green' }}>
                      Your Answer is Correct!
                    </Typography>
                  ) : (
                    <Typography variant="subtitle1" style={{ color: 'red' }}>
                      Your Answer is Incorrect!
                    </Typography>
                  )}
                  <Typography variant="subtitle1">
                    Correct Answer: {question.answers[question.correct_answer_index].answer_text}
                  </Typography>
                  <Typography variant="body2">{question.correct_answer_description}</Typography>
                </div>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">
            Your Score: {userScore}/{fullScore}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleTryAgain}
            style={{ marginTop: '10px' }}
          >
            Try Again
          </Button>
        </div>
      )}
      {!submitted && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: '20px' }}
          disabled={submitted}
        >
          Submit Quiz
        </Button>
      )}
    </div>
  );
}

