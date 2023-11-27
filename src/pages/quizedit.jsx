import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { React, useState, Fragment, useEffect } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControlLabel from '@mui/material/FormControlLabel';
import DialogContentText from '@mui/material/DialogContentText';

export default function QuizEditView() {

  const id = window.location.pathname.split("/")[2];
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await axios.get(`http://localhost:3000/api/quizzes/${id}`);
        // Update the state with the fetched data
        console.log(response.data);
        setQuizName(response.data.quiz_name);
        setQuestions(response.data.questions);
        setQuizID(response.data.quiz_id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [id]);

  const [quizID, setQuizID] = useState('');
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState([]);

  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);
  const [questionIndexToDelete, setQuestionIndexToDelete] = useState(null);


  const isAddButtonEnabled = () => {
    console.log();
    // Check if all required fields are filled
    if (
      quizName.trim() !== '' &&
      questions.every((q) => {
        const isQuestionEmpty = q.question_text.trim() === '';
        const areAnswersEmpty = q.answers.every((answer) => answer.answer_text.trim() !== '');
        const isCorrectAnswerDescriptionEmpty = q.correct_answer_description.trim() === '';

        return !isQuestionEmpty && areAnswersEmpty && !isCorrectAnswerDescriptionEmpty;
      }) &&
      questions.every((q) => q.correct_answer_index !== null)
    ) {
      return true;
    }
    return false;
  };


  const handleAnswerChange = (questionIndex, answerIndex, text, field) => {
    const newQuestions = [...questions];
    if (field === 'answers') {
      console.log(newQuestions[questionIndex][field]);
      newQuestions[questionIndex][field][answerIndex].answer_text = text;
    } else if (field === 'correct_answer_index') {
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
        question_id: '',
        question_text: '',
        description: '',
        answers: [{ answer_id: '', answer_text: '' }, { answer_id: '', answer_text: '' }, { answer_id: '', answer_text: '' }, { answer_id: '', answer_text: '' }],
        correct_answer_index: null,
        correct_answer_description: '',
      },
    ]);
  };

  const handleConfirmation = () => {
    const questionIdToDelete = questions[questionIndexToDelete].question_id;
  
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions.splice(questionIndexToDelete, 1);
  
      if (questionIdToDelete) {
        try {
          axios.delete(`http://localhost:3000/api/deleteQuestion/${questionIdToDelete}`).then(() => {
            console.log('Question deleted successfully');
          });
        } catch (error) {
          console.error('Error deleting question:', error);
        }
      }
  
      return newQuestions;
    });
  
    setIsConfirmationDialogOpen(false);
    setQuestionIndexToDelete(null);
  };

  const handleRemoveQuestion = (index) => {
    setQuestionIndexToDelete(index);
    setIsConfirmationDialogOpen(true);
  };

  const handleSave = () => {
    // Combine quizName and questions data for further processing
    const quizData = {
      quiz_id: quizID,
      quiz_name: quizName,
      questions: questions.map((q) => ({ ...q })),
    };

    console.log(quizData);

    try {
      axios.post('http://localhost:3000/api/updateQuiz', { quiz_id: quizData.quiz_id, quiz_name: quizData.quiz_name, questions: quizData.questions }).then(() => {
        console.log("Success");
        window.location.pathname = "/quizmanagement"
      });
    } catch (error) {
      console.error('Error updating user:', error);
    }

  };

  return (
    <Container>
      <Helmet>
        <title> Edit Quiz | Minimal UI </title>
      </Helmet>

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
                  value={question.question_text}
                  onChange={(e) =>
                    handleAnswerChange(questionIndex, null, e.target.value, 'question_text')
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
                      value={answer.answer_text}
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
                          checked={question.correct_answer_index === answerIndex}
                          onChange={() =>
                            handleAnswerChange(questionIndex, answerIndex, null, 'correct_answer_index')
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
                  value={question.correct_answer_description}
                  onChange={(e) =>
                    handleAnswerChange(
                      questionIndex,
                      null,
                      e.target.value,
                      'correct_answer_description'
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
            onClick={handleSave}
            disabled={!isAddButtonEnabled()}
          >
            Save
          </Button>
          <Box>
            <Button variant="contained" color="primary" onClick={handleAddQuestion}>
              Add Question
            </Button>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={isConfirmationDialogOpen}
        onClose={() => setIsConfirmationDialogOpen(false)}
      >
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this question?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsConfirmationDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmation} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
