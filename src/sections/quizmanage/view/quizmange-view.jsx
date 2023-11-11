import {React,useState,Fragment} from 'react';

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControl'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function QuizmanageView() {
  
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState([
    {
      question: '',
      description: '',
      answers: ['', '', '', ''],
      correctAnswerIndex: 0,
      correctAnswerDescription: '',
    },
  ]);

  const isAddButtonEnabled = () => 
  {
    // Check if all required fields are filled
    if(quizName.trim() !== '' &&
    questions.every((q) =>
      [q.question, q.description, ...q.answers, q.correctAnswerDescription].every((field) => field.trim() !== '')
    ))
    {
      return true
    }
      return false
    
  };

  const handleAnswerChange = (questionIndex, answerIndex, text, field) => {
    const newQuestions = [...questions];
    if (field === 'answers') {
      newQuestions[questionIndex][field][answerIndex] = text;
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
        correctAnswerIndex: 0,
        correctAnswerDescription: '',
      },
    ]);
  };

  const handleCreateQuiz = () => {
    // Combine quizName and questions data for further processing
    const quizData = {
      quizName,
      questions: questions.map((q) => ({ ...q })),
    };

    console.log('Quiz Data:', quizData);
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
                      <RadioGroup
                        row
                        aria-label={`correct-answer-${questionIndex}`}
                        name={`correct-answer-${questionIndex}`}
                        value={question.correctAnswerIndex.toString()}
                        onChange={(e) =>
                          handleAnswerChange(
                            questionIndex,
                            null,
                            parseInt(e.target.value, 10),
                            'correctAnswerIndex'
                          )
                        }
                      >
                        <FormControlLabel
                          value={answerIndex.toString()}
                          control={<Radio />}
                          label={`Correct ${answerIndex + 1}`}
                        />
                      </RadioGroup>
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddQuestion}
              >
                Add Question
              </Button>
            </Box>
          </Box>
        </Box>
    </Container>
  );
}
