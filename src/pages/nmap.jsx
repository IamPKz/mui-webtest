/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import {
    nmapScanTechniques,
    targetSpecificationData,
    hostDiscoveryData,
    portSpecificationData,
    serviceVersionDetectionData,
    osDetectionData,
    timingPerformanceData,
    nseScriptsData,
    evasionSpoofingData,
    outputData,
} from '../_mock/nmapCommands'

const NmapScanTable = ({ data, title }) => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>OPTION</TableCell>
                            <TableCell>EXAMPLE</TableCell>
                            <TableCell>DESCRIPTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((technique, index) => (
                            <TableRow key={index}>
                                <TableCell>{technique.switch}</TableCell>
                                <TableCell>{technique.example}</TableCell>
                                <TableCell>{technique.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};
NmapScanTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            switch: PropTypes.string.isRequired,
            example: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired
};
export default function Nmap() {

    return (
        <Container>
            <Paper sx={{ padding: 5 }}>
                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>
                    <Typography variant="h4">
                        การลาดตระเวณ (Reconnaissance)
                        <Typography sx={{ paddingTop: 2, paddingBottom: 5 }} variant="h5">
                            Nmap
                            <Typography>
                                Nmap (“Network Mapper”) tool นี้เป็น free license และ เป็น open source ทำหน้าที่ ค้นหาเครือข่ายเป้าหมายและใช้ตรวจสอบความปลอดภัยของเครือข่าย
                            </Typography>
                            <Box sx={{ paddingBottom: 5, paddingTop: 5 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src="/assets/L2_pic/nmap1.jpg"
                                        alt="System"
                                    />
                                </Box>
                            </Box>
                            <Typography>
                                Nmap Network Scanning (NNS) ค้นหาเป้าหมายภายในเครือข่าย
                            </Typography>
                            <Typography sx={{ paddingTop: 2 }}>
                                <Typography>
                                    - หา IP เครื่องที่ที่ยังทำงานอยู่หรือเปิดเครื่องเสียบปลั๊ก Network อยู่เท่านั้น กรณีเครื่องที่ปิดหรือ down อยู่ไม่สามารถค้นหาได้
                                </Typography>
                                <Typography>
                                    - หา Port ของเครื่องเป้าหมายว่ามี port ใหนเปิดอยู่บ้าง และเราจะโจมตีได้ทั้งหมดกี่ Port
                                </Typography>
                                <Typography>
                                    -หา OS/Version ของเครื่องเป้าหมายว่าเป็นระบบปฏิบัติการอะไร เช่น Linux 7.x, Windows Server 2xxx เป็นต้น
                                </Typography>
                            </Typography>
                        </Typography>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={targetSpecificationData} title='Target Specification' />
                        </Box>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={nmapScanTechniques} title='Nmap Scan Techniques' />
                        </Box>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={hostDiscoveryData} title='Host Discovery' />
                        </Box>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={portSpecificationData} title='Port Specification' />
                        </Box>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={serviceVersionDetectionData} title='Service and Version Detection' />
                        </Box>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={osDetectionData} title='OS Detection' />
                        </Box>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={timingPerformanceData} title='Timing and Performance' />
                        </Box>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={nseScriptsData} title='NSE Scripts' />
                        </Box>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={evasionSpoofingData} title='Firewall / IDS Evasion and Spoofing' />
                        </Box>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={outputData} title='Output' />
                        </Box>

                        <Divider variant="middle" />
                    </Typography>
                </Typography>

            </Paper>
        </Container>
    );
};

