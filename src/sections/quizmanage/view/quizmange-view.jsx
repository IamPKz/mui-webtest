import {React,useState,useEffect} from 'react';

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControl'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function QuizmanageView() {
  
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [correctAnswerDescription, setCorrectAnswerDescription] = useState('');
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    if (editingIndex !== -1) {
      const editingQuestion = quizQuestions[editingIndex];
      setQuestion(editingQuestion.question);
      setDescription(editingQuestion.description);
      setAnswers([...editingQuestion.answers]);
      setCorrectAnswerIndex(editingQuestion.correctAnswerIndex);
      setCorrectAnswerDescription(editingQuestion.correctAnswerDescription);
    }
  }, [editingIndex, quizQuestions]);

  function isAddButtonEnabled(){
    // Check if all required fields are filled
    return (
      question.trim() !== '' &&
      description.trim() !== '' &&
      answers.every((answer) => answer.trim() !== '') &&
      correctAnswerDescription.trim() !== ''
    );
  };

  const handleAnswerChange = (index, text) => {
    const newAnswers = [...answers];
    newAnswers[index] = text;
    setAnswers(newAnswers);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      question,
      description,
      answers,
      correctAnswerIndex,
      correctAnswerDescription,
    };

    if (editingIndex === -1) {
      setQuizQuestions([...quizQuestions, newQuestion]);
    } else {
      const updatedQuestions = [...quizQuestions];
      updatedQuestions[editingIndex] = newQuestion;
      setQuizQuestions(updatedQuestions);
    }

    setQuestion('');
    setDescription('');
    setAnswers(['', '', '', '']);
    setCorrectAnswerIndex(0);
    setCorrectAnswerDescription('');
    setEditingIndex(-1);
  };

  const handleEditQuestion = (index) => {
    setEditingIndex(index);
  };

  const handleCreateQuiz = () => {
    console.log('Quiz Questions:', quizQuestions);
  };

  return (
    <Container>
      <Box position="relative">
          <Typography variant="h4" gutterBottom>
            Quiz Creator
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Question"
                variant="outlined"
                fullWidth
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              {answers.map((answer, index) => (
                <Box key={index}>
                  <TextField
                    label={`Answer ${index + 1}`}
                    variant="outlined"
                    fullWidth
                    value={answer}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    margin="normal"
                  />
                  <RadioGroup
                    row
                    aria-label="correct-answer"
                    name="correct-answer"
                    value={correctAnswerIndex.toString()}
                    onChange={(e) =>
                      setCorrectAnswerIndex(parseInt(e.target.value, 10))
                    }
                  >
                    <FormControlLabel
                      value={index.toString()}
                      control={<Radio />}
                      label="Correct"
                    />
                  </RadioGroup>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Correct Answer Description"
                variant="outlined"
                fullWidth
                value={correctAnswerDescription}
                onChange={(e) =>
                  setCorrectAnswerDescription(e.target.value)
                }
                margin="normal"
              />
            </Grid>
          </Grid>

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
            >
              Create Quiz
            </Button>

            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddQuestion}
                disabled={!isAddButtonEnabled()}
              >
                {editingIndex === -1 ? 'Add Question' : 'Update Question'}
              </Button>
              {editingIndex !== -1 && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setEditingIndex(-1)}
                >
                  Cancel Editing
                </Button>
              )}
            </Box>
          </Box>

          <Typography variant="h6" style={{ marginTop: '16px' }}>
            Added Questions:
          </Typography>
          <ul>
            {quizQuestions.map((q, index) => (
              <li key={index}>
                {q.question}{' '}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEditQuestion(index)}
                >
                  Edit
                </Button>
              </li>
            ))}
          </ul>
        </Box>
    </Container>
  );
}
