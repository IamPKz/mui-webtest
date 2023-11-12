import { useState , useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { users } from 'src/_mock/user';

import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------


export default function UserPage() {

  const [logs , serlogs] = useState(users)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await axios.get('http://localhost:3000/rawalogs');
        // Update the state with the fetched data
        
        serlogs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[])

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [Visible, setVisible] = useState(false);

  const [LogDisplay, setLogDisplay] = useState('');

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const dataFiltered = applyFilter({
    inputData: logs,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const handleDataFromChild = (visible , data) => {
    setVisible(visible);
    setLogDisplay(JSON.stringify(data, null, 2));

    console.log(Visible);
    console.log(LogDisplay);
  };


  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Raw log</Typography>
      </Stack>

      {Visible && (
        <Paper style={{ padding: 20, marginTop: 8 }}>
          <Typography variant="body1">{LogDisplay}</Typography>
          {/* Add more Typography components for other data */}
        </Paper>
      )}

      <Card>
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={logs.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                headLabel={[
                  { id: 'eventtype', label: 'Eventtype' },
                  { id: '' },
                ]}
              />

              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      Rows={row}
                      sendDataToParent={handleDataFromChild}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, logs.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={logs.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 20]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
