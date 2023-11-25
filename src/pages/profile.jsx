// ProfilePage.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


export default function ProfilePage() {
  const [api_users, setApi_users] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const token = window.localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/user-data', { token });
        setApi_users(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);

  const handleInputChange = (key, value) => {
    setApi_users((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(`http://localhost:3000/update-user/${api_users.user_id}`, { editedData: api_users });
      console.log("Success");
    } catch (error) {
      console.error('Error updating user:', error);
    }

    console.log('Saving edited data:', api_users);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <Helmet>
        <title> Profile | Minimal UI </title>
      </Helmet>
      <Paper elevation={3} style={{ padding: '20px', width: '80%', height: '80%', margin: 'auto' }}>
        <Typography variant="h4" gutterBottom>
          Profile Page
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Username:
            </Typography>
            {isEditing ? (
              <TextField
                value={api_users.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                fullWidth
              />
            ) : (
              <Typography>{api_users.username}</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Password:
            </Typography>
            {isEditing ? (
              <TextField
                value={api_users.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                fullWidth
              />
            ) : (
              <Typography>{api_users.password}</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Full Name:
            </Typography>
            {isEditing ? (
              <TextField
                value={api_users.full_name}
                onChange={(e) => handleInputChange('full_name', e.target.value)}
                fullWidth
              />
            ) : (
              <Typography>{api_users.full_name}</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Display Name:
            </Typography>
            {isEditing ? (
              <TextField
                value={api_users.display_name}
                onChange={(e) => handleInputChange('displayname', e.target.value)}
                fullWidth
              />
            ) : (
              <Typography>{api_users.display_name}</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Email:
            </Typography>
            {isEditing ? (
              <TextField
                value={api_users.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                fullWidth
              />
            ) : (
              <Typography>{api_users.email}</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Age:
            </Typography>
            {isEditing ? (
              <TextField
                value={api_users.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                type="number"
                fullWidth
              />
            ) : (
              <Typography>{api_users.age}</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Position:
            </Typography>
            {isEditing ? (
              <TextField
                value={api_users.Position}
                onChange={(e) => handleInputChange('Position', e.target.value)}
                fullWidth
              />
            ) : (
              <Typography>{api_users.Position}</Typography>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} sx={{paddingTop:5,paddingRight:5}}>
          {isEditing ? (
            <Button variant="contained" color="primary" onClick={handleSaveClick} >
              Save Changes
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleEditClick} >
              Edit Profile
            </Button>
          )}
        </Grid>

      </Paper>
    </>
  );
}
