import { React, useState, Fragment } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import axios from 'axios';

export default function QuizmanageView() {
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState([
    {
      question: '',
      answers: ['', '', '', ''],
      correctAnswerIndex: null,
      correctAnswerDescription: '',
    },
  ]);

  const isAddButtonEnabled = () => {
    console.log();
    // Check if all required fields are filled
    if (
      quizName.trim() !== '' &&
      questions.every((q) => {
        const isQuestionEmpty = q.question.trim() === '';
        const areAnswersEmpty = q.answers.every((answer) => answer.trim() !== '');
        const isCorrectAnswerDescriptionEmpty = q.correctAnswerDescription.trim() === '';
  
        return !isQuestionEmpty && areAnswersEmpty && !isCorrectAnswerDescriptionEmpty;
      }) &&
      questions.every((q) => q.correctAnswerIndex !== null)
    ) {
      return true;
    }
    return false;
  };
  

  const handleAnswerChange = (questionIndex, answerIndex, text, field) => {
    const newQuestions = [...questions];
    if (field === 'answers') {
      newQuestions[questionIndex][field][answerIndex] = text;
    } else if (field === 'correctAnswerIndex') {
      newQuestions[questionIndex][field] = answerIndex;
    } else {
      newQuestions[questionIndex][field] = text;
    }
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        question: '',
        description: '',
        answers: ['', '', '', ''],
        correctAnswerIndex: null,
        correctAnswerDescription: '',
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions.splice(index, 1);
      return newQuestions;
    });
  };

  const handleCreateQuiz = () => {
    // Combine quizName and questions data for further processing
    const quizData = {
      quizName,
      questions: questions.map((q) => ({ ...q })),
    };

    console.log(quizData);

    try {
      axios.post(`http://localhost:3000/addQuiz`, { quizName : quizData.quizName , questions : quizData.questions}).then(() => {
        console.log("Success");
      });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <Container>
      <Box position="relative">
        <Typography variant="h4" gutterBottom>
          Quiz Creator
        </Typography>

        <TextField
          label="Quiz Name"
          variant="outlined"
          fullWidth
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          margin="normal"
        />

        {questions.map((question, questionIndex) => (
          <Paper key={questionIndex} style={{ padding: '16px', marginTop: '16px' }}>
            <Typography variant="h6" gutterBottom>
              Question {questionIndex + 1}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label={`Question ${questionIndex + 1}`}
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={question.question}
                  onChange={(e) =>
                    handleAnswerChange(questionIndex, null, e.target.value, 'question')
                  }
                  margin="normal"
                />
              </Grid>

              {question.answers.map((answer, answerIndex) => (
                <Fragment key={answerIndex}>
                  <Grid item xs={6}>
                    <TextField
                      label={`Answer ${answerIndex + 1}`}
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={answer}
                      onChange={(e) =>
                        handleAnswerChange(questionIndex, answerIndex, e.target.value, 'answers')
                      }
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={question.correctAnswerIndex === answerIndex}
                          onChange={() =>
                            handleAnswerChange(questionIndex, answerIndex, null, 'correctAnswerIndex')
                          }
                        />
                      }
                      label={`Correct Answer ${answerIndex + 1}`}
                    />
                  </Grid>
                </Fragment>
              ))}

              <Grid item xs={12}>
                <TextField
                  label={`Correct Answer Description ${questionIndex + 1}`}
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={question.correctAnswerDescription}
                  onChange={(e) =>
                    handleAnswerChange(
                      questionIndex,
                      null,
                      e.target.value,
                      'correctAnswerDescription'
                    )
                  }
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '16px',
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveQuestion(questionIndex)}
              >
                Remove Question
              </Button>
            </Box>
          </Paper>
        ))}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '16px',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateQuiz}
            disabled={!isAddButtonEnabled()}
          >
            Create Quiz
          </Button>

          <Box>
            <Button variant="contained" color="primary" onClick={handleAddQuestion}>
              Add Question
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
