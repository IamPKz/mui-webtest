// AddUserForm.jsx
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export default function AddUserForm({ open, onClose, onAddUser }) {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    full_name: '',
    display_name: '',
    age: '',
    Position: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    // Add validation logic if needed
    onAddUser(userData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <TextField
          label="Username"
          name="username"
          value={userData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Full_name"
          name="full_name"
          value={userData.full_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Display_name"
          name="display_name"
          value={userData.display_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age"
          name="age"
          value={userData.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Position"
          name="Position"
          value={userData.Position}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {/* Add other input fields for password, email, etc. */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddUser} color="primary">
          Add User
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AddUserForm.propTypes = ({
    open: PropTypes.any,
    onClose: PropTypes.any,
    onAddUser: PropTypes.any,

})

