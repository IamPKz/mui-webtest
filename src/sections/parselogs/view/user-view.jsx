import axios from 'axios';
import { useState , useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import Scrollbar from 'src/components/scrollbar';

import UserTableRow from '../user-table-row';
import { ip } from "../../../_mock/ipa.json";
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import { emptyRows, applyFilter, getComparator } from '../utils';


// ----------------------------------------------------------------------


export default function UserPage() {

  const [logs , serlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await axios.get(`http://${ip}:3000/parselogs`);
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

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = logs.map((n) => n.name);
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

  const dataFiltered = applyFilter({
    inputData: logs,
    comparator: getComparator(order, orderBy),
  });

  const handleDataFromChild = (visible , data) => {
    setVisible(visible);
    setLogDisplay(JSON.stringify(data, null, 2));

    console.log(Visible);
    console.log(LogDisplay);
  };
    /* eslint-disable */
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Parsed Log</Typography>
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
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'temp_time', label: 'timestamp' },

                  { id: 'eventtype', label: 'Eventtype' },

                  { id: 'attack', label: 'Attack' },

                  { id: 'count', label: 'Count' },
                  { id: 'action', label: 'action' },

                  { id: 'attackid', label: 'Attackid' },

                  { id: 'type', label: 'Type' },

                  { id: 'srcip', label: 'Srcip' },

                  { id: 'tz', label: 'Time zone' },

                  { id: 'policytype', label: 'Policy_type' },

                  { id: 'srcintfrole', label: 'Srcintfrole' },
                  { id: 'dstip', label: 'Dstip' },
                  { id: 'devname', label: 'Devname' },
                  { id: 'logid', label: 'Log_id' },
                  { id: 'level', label: 'Level' },
                  { id: 'devid', label: 'dev_id' },
                  { id: 'policyid', label: 'Policyid' },
                  { id: 'srcport', label: 'srcport' },
                  { id: 'tags', label: 'tags' },
                  { id: 'priority', label: 'priority' },
                  { id: 'vd', label: 'vd' },
                  { id: 'craction', label: 'craction' },
                  { id: 'srccountry', label: 'srccountry' },
                  { id: 'eventtime', label: 'eventtime' },
                  { id: 'ftg_type', label: 'ftg_type' },
                  { id: 'proto', label: 'proto' },
                  { id: 'crscore', label: 'crscore' },
                  { id: 'sessionid', label: 'sessionid' },

                  { id: 'dstport', label: 'dstport' },
                  { id: 'crlevel', label: 'crlevel' },
                  { id: 'ftg_subtype', label: 'ftg_subtype' },
                  { id: 'srcintf', label: 'srcintf' },
                  { id: 'severity', label: 'severity' },
                  { id: '' },
                ]}
              />

              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      eventtype={row.eventtype}
                      role={row.role}
                      status={row.status}
                      company={row.company}
                      avatarUrl={row.avatarUrl}
                      isVerified={row.isVerified}
                      time={row.temp_time}
                      count={row.count}
                      attackid={row.attackid}
                      type={row.type}
                      srcip={row.srcip}
                      tz={row.tz}
                      attack={row.attack}
                      policytype={row.policytype}

                      srcintfrole={row.srcintfrole}
                      dstip={row.dstip}
                      devname={row.devname}
                      logid={row.logid}
                      level={row.level}
                      devid={row.devid}
                      policyid={row.policyid}
                      srcport={row.srcport}

                      tags={row.tags}
                      msg={row.msg}
                      log={row.log}
                      vd={row.vd}
                      craction={row.craction}
                      action={row.action}
                      srccountry={row.srccountry}
                      eventtime={row.eventtime}
                      ftg_type={row.ftg_type}
                      proto={row.proto}
                      crscore={row.crscore}
                      sessionid={row.sessionid}
                      dstport={row.dstport}
                      crlevel={row.crlevel}
                      ftg_subtype={row.ftg_subtype}
                      srcintf={row.srcintf}
                      severity={row.severity}
                      events={row.event}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                      Rows={row}

                      sendDataToParent={handleDataFromChild}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, logs.length)}
                />

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
