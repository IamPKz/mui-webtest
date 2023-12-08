import axios from 'axios';
import { useState , useEffect} from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import AddUserForm from '../Add-form-user';
import { ip } from "../../../_mock/ipa.json";
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------


export default function UserPage() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await axios.get(`http://${ip}:3000/user-table`);
        // Update the state with the fetched data
        setApi_users(response.data);
        console.log("แทนที่");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [api_users, setApi_users] = useState([]);

  const [openAddUserForm, setOpenAddUserForm] = useState(false);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = api_users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleAddUser = async (newUserData) => {
    try {
      const response = await axios.post('http://172.16.12.35:3000/new-user', { newUserData });
      // Update the state with the new user data
      setApi_users((prevUsers) => [...prevUsers, response.data]);
    } catch (error) {
      console.error('Error adding new user:', error);
    }
  };

  const onDeleteUser = (userId) => {
    // Update the state to reflect the deletion
    setApi_users((prevUsers) => prevUsers.filter((user) => user.user_id !== userId));
  };

  const dataFiltered = applyFilter({
    inputData: api_users,
    comparator: getComparator(order, orderBy),
  });

  
  console.log(dataFiltered);
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>

        <Button
        variant="contained"
        color="inherit"
        startIcon={<Iconify icon="eva:plus-fill" />}
        onClick={() => setOpenAddUserForm(true)}
      >
        New User
      </Button>
      </Stack>

      <AddUserForm open={openAddUserForm} onClose={() => setOpenAddUserForm(false)} onAddUser={handleAddUser} />

      <Card>

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={api_users.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'username', label: 'username' },
                  { id: 'password', label: 'password' },
                  { id: 'email', label: 'email' },
                  { id: 'full_name', label: 'full_name' },
                  { id: 'display_name', label: 'display_name' },
                  { id: 'age', label: 'age' },
                  { id: 'Position', label: 'Position' },
                  { id: '' },
                ]}
              />

              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={row.user_id}
                      user_id={row.user_id}
                      username={row.username}
                      password={row.password}
                      email={row.email}
                      full_name={row.full_name}
                      usertype={row.usertype}
                      created_at={row.created_at}
                      updated_at={row.updated_at}
                      display_name={row.display_name}
                      age={row.age}
                      Position={row.Position}
                      Rows={row}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                      onDeleteUser={onDeleteUser}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, api_users.length)}
                />

              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={api_users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 20]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
