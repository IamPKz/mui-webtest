import axios from 'axios';
import PropTypes from 'prop-types';
import { useState ,useEffect} from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';

import Iconify from 'src/components/iconify';

export default function UserTableRow({
  user_id,
  username,
  password,
  email,
  full_name,
  display_name,
  age,
  Position,
  onDeleteUser
}) {

  const [open, setOpen] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    username,
    password,
    email,
    full_name,
    display_name,
    age,
    Position,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await axios.get('http://localhost:3000/user-table');
        console.log(response);
        // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [setIsEditing]);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    console.log(editedData);
    setIsEditing(true);
  };

  const handleSaveClick = async () => {

    try {
      await axios.put(`http://localhost:3000/update-user/${user_id}`, { editedData }).then(() => {
        console.log("Success");
      });
    } catch (error) {
      console.error('Error updating user:', error);
    }

    console.log('Saving edited data:', editedData);
  
    // Close the edit mode
    setIsEditing(false);
    setOpen(null);
  };

  const handleDeleteClick = async () => {
    try {
      // Make an API call to delete the user
      await axios.delete(`http://localhost:3000/delete-user/${user_id}`);

      // Update the state to reflect the deletion
      onDeleteUser(user_id);

      // Close the menu
      handleCloseMenu();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox">
        {Object.keys(editedData).map((key) => (
          <TableCell key={key}>
            {editedData[key]}
          </TableCell>
        ))}
        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 300 },
        }}
      >
        <MenuItem onClick={handleEditClick}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleDeleteClick} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>

      {isEditing && (
  <Popover
    open={isEditing}
    anchorEl={open}
    onClose={handleCloseMenu}
    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <Card>
      <CardContent>
        {Object.keys(editedData).map((key) => (
          <TextField
            key={key}
            label={key}
            name={key}
            value={editedData[key]}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        ))}
        <Button onClick={handleSaveClick} variant="contained" color="primary">
          Save
        </Button>
      </CardContent>
    </Card>
  </Popover>
)}
    </>
  );
}

UserTableRow.propTypes = {
  user_id: PropTypes.any,
  username: PropTypes.any,
  password: PropTypes.any,
  email: PropTypes.any,
  full_name: PropTypes.any,
  display_name: PropTypes.any,
  age: PropTypes.any,
  Position: PropTypes.any,
  onDeleteUser: PropTypes.func.isRequired,
};
