import { useState } from 'react';
import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UserTableRow({
  index,
  selected,
  eventtype,
  avatarUrl,
  company,
  role,
  isVerified,
  status,
  handleClick,

  count,
  attackid,
  type,
  srcip,
  tz,
  attack,
  policytype,

  srcintfrole,
  dstip,
  devname,
  logid,
  level,
  devid,
  policyid,
  srcport,

  tags,
  msg,
  log,
  vd,
  craction,
  action,
  host,
  srccountry,
  eventtime,
  ftg_type,
  proto,
  crscore,
  sessionid,
  dstport,
  crlevel,
  ftg_subtype,
  srcintf,
  severity,
  events,
  Rows,
  sendDataToParent

}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const sendData = () => {
    sendDataToParent(true , Rows);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}  onClick={sendData}>

        <TableCell>{eventtype}</TableCell>

        <TableCell>{count}</TableCell>

        <TableCell>{attackid}</TableCell>

        <TableCell>{type}</TableCell>

        <TableCell>{srcip}</TableCell>

        <TableCell>{tz}</TableCell>

        <TableCell>{attack}</TableCell>

        <TableCell>{policytype}</TableCell>

        <TableCell>{srcintfrole}</TableCell>
        <TableCell>{dstip}</TableCell>
        <TableCell>{devname}</TableCell>
        <TableCell>{logid}</TableCell>
        <TableCell>{level}</TableCell>
        <TableCell>{devid}</TableCell>
        <TableCell>{policyid}</TableCell>
        <TableCell>{srcport}</TableCell>

        <TableCell>{tags[0]}</TableCell>
        <TableCell>{log.syslog.priority}</TableCell>
        <TableCell>{vd}</TableCell>
        <TableCell>{craction}</TableCell>
        <TableCell>{action}</TableCell>
        <TableCell>{host.ip}</TableCell>
        <TableCell>{srccountry}</TableCell>
        <TableCell>{eventtime}</TableCell>
        <TableCell>{ftg_type}</TableCell>
        <TableCell>{proto}</TableCell>
        <TableCell>{crscore}</TableCell>
        <TableCell>{sessionid}</TableCell>

        <TableCell>{dstport}</TableCell>
        <TableCell>{crlevel}</TableCell>
        <TableCell>{ftg_subtype}</TableCell>
        <TableCell>{srcintf}</TableCell>
        <TableCell>{severity}</TableCell>

      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

UserTableRow.propTypes = {
  index: PropTypes.any,
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  eventtype: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,

  count: PropTypes.any,
  attackid: PropTypes.any,
  type: PropTypes.any,
  srcip: PropTypes.any,
  tz: PropTypes.any,
  attack: PropTypes.any,
  policytype: PropTypes.any,

  srcintfrole: PropTypes.any,
  dstip: PropTypes.any,
  devname: PropTypes.any,
  logid: PropTypes.any,
  level: PropTypes.any,
  devid: PropTypes.any,
  policyid: PropTypes.any,
  srcport: PropTypes.any,

  tags: PropTypes.any,
  msg: PropTypes.any,
  log: PropTypes.any,
  vd: PropTypes.any,
  craction: PropTypes.any,
  action: PropTypes.any,
  host: PropTypes.any,
  srccountry: PropTypes.any,
  eventtime: PropTypes.any,
  ftg_type: PropTypes.any,
  proto: PropTypes.any,
  crscore: PropTypes.any,
  sessionid: PropTypes.any,
  dstport: PropTypes.any,
  crlevel: PropTypes.any,
  ftg_subtype: PropTypes.any,
  srcintf: PropTypes.any,
  severity: PropTypes.any,
  events: PropTypes.any,
  Rows: PropTypes.any,
  sendDataToParent: PropTypes.func,

};
