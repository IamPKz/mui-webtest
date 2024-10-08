// QuizListPage.js
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import  { useState , useEffect}  from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { ip } from "../_mock/ipa.json"

export default function QuizListPage () {
  const [quizs , setQuizs] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await axios.get(`http://${ip}:3000/quizlist`);
        // Update the state with the fetched data
        
        setQuizs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Helmet>
        <title> Quiz | Minimal UI </title>
      </Helmet>

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
                  to={`/quiz/${quiz.quiz_id}`}
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '10px' }}
                >
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

