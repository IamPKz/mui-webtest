import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Lecture3() {

    return (
        <Container>
            <Paper sx={{ padding: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Attack and Read Log
                </Typography>

                <Typography variant="subtitle1" color="textSecondary" paragraph>
                    Published on October 11, 2023 by Admin
                </Typography>

                <Typography variant="body1" paragraph>
                    ในบทเรียนนี้เป็นการศึกษากลไกการเกิด Log ที่เกิดขึ้นจากการโจมตี และ Log ทั่วไปในระบบ และภายในแบบจำลองนี้ เป็นการแสดง Log ที่เกิดขึ้นจาก Firewall ซึ่งเป็น Traffic Log ทั่วไปและ Log ที่เป็น Anomaly Detection ที่เป็น Re-con และ DoS
                </Typography>

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>

                    <Typography variant="h5">
                        การ Recon
                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/putty.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }} variant="subtitle1">
                            SSH ด้วย Putty เพื่อใช้งาน Kali
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/login.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }} variant="subtitle1">
                            Login ด้วย Username, Password : kali
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/nmap1.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }} variant="subtitle1">
                            ใช้เครื่องมือ Nmap เพื่อทำ Re-con port ที่เปิดใช้งานอยู่ด้วยคำสั่ง nmap 172.16.12.44
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/log1.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }} variant="subtitle1">
                            ดู Log ที่เกิดขึ้นจากหน้าเว็บ โดยกดที่ timestamp เพื่อเรียงลำดับตามเวลา จะเห็นว่าจากตัวอย่างเกิด Log ที่เวลา 11:43 เป็นการโจมตีแบบ tcp_port_scan
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/log3.jpg"
                                alt="System"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/log4.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }} variant="subtitle1">
                            และที่ Raw log จะเห็นได้ว่ามี Traffic เข้ามาจำนวนมากในเวลาติดๆกัน
                        </Typography>
                    </Typography>
                </Typography>

                <Divider variant="middle" />

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>

                    <Typography variant="h5">
                        การทำ DoS
                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/sudo.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }} variant="subtitle1">
                         พิมคำสั่ง sudo -i และใส่รหัส kali เพื่อใช้สิทธิ์ root ในการใช้คำสั่ง
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/hping1.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }} variant="subtitle1">
                            ใช้คำสั่ง hping3 -S --flood -V -p 80 (IP ของ Firewall) เพื่อ Flood
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/hlog1.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }} variant="subtitle1">
                            จะเห็นว่ามี Log ที่เป็นการโจมตีประเภท tcp_syn_flood
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/hlog2.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }} variant="subtitle1">
                            และที่ Raw log จะเห็นได้ว่ามี Traffic เข้ามาจำนวนมากในเวลาติดๆกัน
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                            <img
                                src="/assets/L3_pic/hping2.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }} variant="subtitle1">
                            กด Ctrl + C เพื่อหยุดการทำงาน
                        </Typography>
                    </Typography>
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link} to="/lecture2"
                    >
                        Back
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

