// QuizEditListPage.js
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export default function QuizEditListPage() {
  const [quizs, setQuizs] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedQuizId, setSelectedQuizId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/quizlist');
        setQuizs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openDeleteDialog = (quizId) => {
    setSelectedQuizId(quizId);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setSelectedQuizId(null);
    setDeleteDialogOpen(false);
  };

  const deleteQuiz = async () => {
    try {
      // Make DELETE request to your server endpoint for deleting quizzes
      await axios.delete(`http://localhost:3000/api/quizzes/${selectedQuizId}`);
      // Update the state after successful deletion
      setQuizs((prevQuizs) => prevQuizs.filter((quiz) => quiz.quiz_id !== selectedQuizId));
      // Close the delete confirmation dialog
      closeDeleteDialog();
    } catch (error) {
      console.error('Error deleting quiz:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Quiz List
      </Typography>
      <Grid container spacing={2}>
        {quizs.map((quiz) => (
          <Grid item xs={12} sm={6} md={4} key={quiz.quiz_id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{quiz.quiz_name}</Typography>
                <Button
                  component={Link}
                  to={`/editquiz/${quiz.quiz_id}`}
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '10px' }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginTop: '10px', marginLeft: '10px' }}
                  onClick={() => openDeleteDialog(quiz.quiz_id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Are you sure you want to delete this quiz?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteQuiz} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
