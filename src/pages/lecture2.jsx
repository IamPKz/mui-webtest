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
export default function Lecture2() {

    return (
        <Container>
            <Paper sx={{ padding: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Kali
                </Typography>

                <Typography variant="subtitle1" color="textSecondary" paragraph>
                    Published on October 11, 2023 by Admin
                </Typography>

                <Typography variant="body1" paragraph>
                    Kali Linux เป็นระบบปฏิบัติการ Linux ที่ออกแบบมาเพื่อให้บริการสำหรับการทดสอบความปลอดภัยและการทดสอบทางไซเบอร์. มันถูกพัฒนาขึ้นโดย Offensive Security Ltd. Kali Linux มีเครื่องมือทดสอบความปลอดภัยที่หลากหลายและทันสมัย, ทำให้เป็นเครื่องมือที่น่าสนใจสำหรับผู้ที่ทำงานในด้านความปลอดภัยข้อมูล, การทดสอบทางไซเบอร์, และทดสอบทางเครือข่าย
                </Typography>
                <Typography variant="body1" paragraph>
                    โดยการใช้งาน สามารถ SSH เข้าไปใช้ Kali Host ที่ระบบเตรียมไว้ให้ได้เลย
                </Typography>

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>

                    <Typography variant="h5">
                        SSH (Secure Shell)
                    </Typography>

                    <Typography sx={{ padding: 1, paddingBottom: 2 }}>
                        <Typography>
                            SSH (Secure Shell) คือ Network Protocal ที่สามารถแลกเปลี่ยนข้อมูลโดยช่องทางที่ปลอยภัย (Secure Channel) ระหว่างอุปกรณ์เครือข่ายสองตัว ใช้ Linux หรือ Unix เป็นระบบปฏิบัตการพื้นฐานในการเข้าถึงบัญชีผู้ใช้ (Shell Accounts) ซึ่ง SSH ได้รับการออกแบบให้มาแทนการ Telnet, Rlogin, RSH (The remote shell) ด้วยเหตุผลทางด้านความปลอดภัย การส่งข้อมูลจะอยู่ในรูปแบบตัวอักษร (Plaintext) ที่มีการเข้ารหัสข้อมูล (Encryption) เพื่อให้ข้อมูลเป็นความลับและให้สามารถส่งข้อมูลผ่านเครือข่าย Internet ได้อย่างสมบูรณ์ สามารถใช้งาน SSH ผ่านโปรแกรมประยุกต์ (Applications) ได้มากมายบนระบบปฏิบัติการ Unix, Microsoft Windows, Apple Mac และ Linux โปรแกรมประยุกต์ (Applications)
                        </Typography>
                    </Typography>
                </Typography>

                <Divider variant="middle" />

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>

                    <Typography variant="h5">
                        Putty
                        <Typography>
                            Putty เป็นโปรแกรม Remote Server หรือ SSH ( Secure Shell ) พูดให้เข้าใจง่ายๆก็คือ เราสามารถใช้โปรแกรมนี้ในการ สั่งงาน Server ด้วย command line โดยส่วนใหญ่แล้วจะใช้เชื่อมต่อไปยัง server ที่เป็น linux รองรับการเชื่อมต่อหลากหลายรูปแบบดังนี้                        </Typography>

                        <Typography sx={{ paddingTop: 2 }}>
                            <Typography>
                                - Raw
                            </Typography>
                            <Typography>
                                - Telnet
                            </Typography>
                            <Typography>
                                - Rlogin
                            </Typography>
                            <Typography>
                                - SSH
                            </Typography>
                            <Typography>
                                - Serial
                            </Typography>

                        </Typography>
                    </Typography>
                </Typography>

                <Divider variant="middle" />

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>
                    <Typography variant="h5">
                        วิธีใช้งาน putty เบื้องต้น
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/assets/L2_pic/putty.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography>
                            เริ่มแรกโหลดโปรแกรมที่ <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" rel="noreferrer" target="_blank"> HERE </a>เมื่อ download มาแล้วสามารถรันโปรแกรมได้ทันทีไม่ต้องติดตั้ง
                        </Typography>
                        <Typography>
                            โดย Windows 64bit ให้โหลด 64-bit x86 หรือ 32-bit x86 สำหรับ Windows 32bit
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 5, paddingBottom: 5 }}>
                            <img
                                src="/assets/L2_pic/putty_3.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography>
                            การใช้งาน-putty-เบื้องต้น วิธีการใช้งานไม่ยากครับ หลักๆก็จะมีอยู่สามส่วน
                        </Typography>
                        <Typography sx={{ paddingTop: 2 }}>
                            <Typography>
                                1.คือการ config ว่าเราจะเชื่อต่อไปยัง server ip อะไร และ port อะไร
                            </Typography>
                            <Typography>
                                2.คือการ เลือกประเภทของการเชื่อมต่อ
                            </Typography>
                            <Typography>
                                3.คือส่วนของการบันทึกค่าที่เรา config ไว้ เพื่อเพิ่มความสะดวก เมื่อเรามาใช้งานครั้งต่อไปไม่ต้องมา config ใหม่
                            </Typography>
                        </Typography>
                    </Typography>
                </Typography>

                <Divider variant="middle" />

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

                <Divider variant="middle" />

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>
                    <Typography variant="h4">
                        Denial of service
                        <Typography>
                            Denial of Service หรือ DoS แปลแบบตรงตัวได้คือการปฏิเสธการให้บริการ เป็นการโจมตีโดยมีจุดมุ่งหมายทำให้ระบบไม่สามารถให้บริการได้ แบ่งเป็น 2 กลุ่มคือ
                        </Typography>
                        <Typography sx={{ padding: 2 }}>
                            1.การโจมตีด้วยโครงข่าย (Network base Attack) หรือ การโจมตีด้วยขนาด (Volumetric base Attack) ผู้โจมตีจะส่งข้อมูลที่มีปริมาณมหาศาลเข้าไปที่เป้าหมายเพื่อทำให้การรับ-ส่งข้อมูลเกิดคอขวด (Congestion) จนไม่สามารถติดต่อสื่อสารกับผู้ใช้งานทั่วไปได้ การแก้ไขจะต้องเพิ่มความสามารถในการรับ-ส่งข้อมูลของระบบให้มีขนาดมากกว่าการโจมตีที่เข้ามายังระบบ โดยเทคนิคที่อยู่ในประเภทนี้คือ SYN Flood, UDP Flood, Ping of Death, Reflection, Amplification เป็นต้น ซึ่งการโจมตีประเภทนี้จะพบบ่อยมาก และป้องกันได้ยาก
                        </Typography>
                        <Typography sx={{ padding: 2 }}>
                            2.การโจมตีด้วยแอพพลิเคชั่น (Application base Attack) จะส่งข้อมูลที่อยู่ในเลเยอร์ที่เจ็ดของโอเอสไอ (OSI — Application Layer) เพื่อมุ่งเน้นไปให้แอพพลิเคชั่นหยุดทำงาน ซึ่งการโจมตีชนิดนี้จะอยู่ในระดับที่สูงกว่าการโจมตีด้วยโครงข่าย การแก้ไขจะต้องอาศัยความเชี่ยวชาญของผู้ดูแลระบบเพื่อคัดกรอง แยกแยะข้อมูลที่ส่งเข้ามายังระบบ เทคนิคที่อยู่ในประเภทนี้เช่น HTTP Get/Post flood, SSL Flood, Slowloris, R-U-Dead-Yet (R.U.D.Y), และยังสามารถโจมตีผ่านทางช่องโหว่ของระบบได้ด้วย                        </Typography>
                        <Typography sx={{ paddingTop: 2, paddingBottom: 5 }} variant="h5">
                            Hping3
                            <Typography>
                                Hping3 เป็นแอปพลิเคชั่นเทอร์มินัลสำหรับ ลินุกซ์ ที่จะช่วยให้เราวิเคราะห์และประกอบแพ็กเก็ต
                                TCP / IP ได้อย่างง่ายดาย ต่างจาก ping ทั่วไปที่ใช้ในการส่งแพ็กเก็ต ICMP แอปพลิเคชันนี้อนุญาตให้ส่งแพ็กเก็ต TCP, UDP และ RAW-IP นอกจากการวิเคราะห์แพ็กเก็ตแล้วแอปพลิเคชั่นนี้ยังสามารถใช้เพื่อวัตถุประสงค์ด้านความปลอดภัยอื่น ๆ เช่นเพื่อทดสอบประสิทธิภาพของ a ไฟร์วอลล์ ผ่านโปรโตคอลที่แตกต่างกันการตรวจจับแพ็กเก็ตที่น่าสงสัยหรือดัดแปลงและแม้แต่การป้องกันการโจมตี DoS ของระบบหรือไฟร์วอล

                            </Typography>

                            <Box sx={{ paddingTop: 5, paddingBottom: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src="/assets/L1_pic/Kali_IP.jpg"
                                        alt="System"
                                    />
                                </Box>
                                <Typography sx={{ paddingTop: 2, display: 'flex', justifyContent: 'center' }} variant="subtitle1">
                                    พิมคำสั่ง : get system interface physical
                                </Typography>
                            </Box>
                        </Typography>
                    </Typography>

                    <Typography sx={{ paddingTop: 2 }} variant="h5">
                        Login
                        <Box sx={{ paddingTop: 2 }} >
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src="/assets/L1_pic/FG/login2.jpg"
                                    alt="System"
                                />
                            </Box>
                            <Typography sx={{ paddingBottom: 2, paddingTop: 2, display: 'flex', justifyContent: 'center' }} variant="subtitle1">
                                Login ด้วย Username และ Password admin
                            </Typography>
                        </Box>
                    </Typography>
                    <Divider variant="middle" />
                    <Typography sx={{ paddingTop: 5 }} variant="h5">
                        การตั้งค่าเพื่อตรวจจับความผิดปกติ (Anomaly Detection)
                        <Box sx={{ paddingTop: 2 }} >
                            <Typography>
                                ในบทเรียนนี้จะสอนการตั้งค่าความผิดปกติจากการโจมตี 2 ประเภทได้แก่
                            </Typography>
                            <Typography sx={{ paddingLeft: 5, padding: 1 }}>
                                <Typography>
                                    1.Reconnaissance
                                </Typography>
                                <Typography>
                                    2.Denial of service
                                </Typography>
                            </Typography>

                            <Typography>
                                ไปที่ Policy & Objects → IPv4 DoS Policy
                            </Typography>
                            <Typography>
                                Click ที่ Create New
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                                <img
                                    src="/assets/L1_pic/FG/DoS policy.jpg"
                                    alt="System"
                                />
                            </Box>

                            <Typography>
                                - ตั้งชื่อให้กับ Policy นี้
                            </Typography>
                            <Typography>
                                - เลือก Port ของFirewall ที่ต้องการตรวจจับ Traffic (เลือก WAN)
                            </Typography>
                            <Typography>
                                - เลือกอนุญาตทุก Sorce Address (IP อุปกรณ์ที่เข้ามาเชื่อมต่อ)
                            </Typography>
                            <Typography>
                                - เลือกอนุญาตทุก Destination Address (IP อุปกรณ์ที่ต้องการเชื่อมต่อ)
                            </Typography>
                            <Typography>
                                - เลือกอนุญาตทุก Service
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                                <img
                                    src="/assets/L1_pic/FG/DoS_Name.jpg"
                                    alt="System"
                                />
                            </Box>
                            <Typography>
                                เลื่อนลงมาที่ L4 Anomailes
                            </Typography>
                            <Typography>
                                เปิดใช้งาน Logging ประเภท Flood เพื่อตรวจจับการโจมตีประเภท DoS
                            </Typography>
                            <Typography>
                                เปิดใช้งาน Logging ประเภท Scan เพื่อตรวจจับการโจมตีประเภท Recon
                            </Typography>
                            <Typography>
                                เลือก Block Event ประเภท Flood และ Monitor Event ประเภท scan
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                                <img
                                    src="/assets/L1_pic/FG/DoS_Treshold.jpg"
                                    alt="System"
                                />
                            </Box>
                            <Typography>
                                Threshold หมายถึง ค่าที่กำหนดไว้เพื่อบอกว่าเหตุการณ์หรือกิจกรรมใดๆ ในระบบคอมพิวเตอร์หรือเครือข่ายมีความเสี่ยงหรือไม่เสี่ยงต่อความปลอดภัยของระบบนั้น ๆ หรือไม่ ซึ่ง Threshold ในส่วนนี้เป็นเกณฑ์กำหนดเพื่อดำเนินการหากจำนวนเหตุการณ์ถึงเกณฑ์ที่กำหนดไว้
                            </Typography>

                            <Typography sx={{ paddingTop: 2, paddingBottom: 5 }}>
                                หลังจากนั้นกด Apply เพื่อบันทึก Policy ที่ได้สร้างขึ้นใหม่
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                                <img
                                    src="/assets/L1_pic/FG/DoS_succ.jpg"
                                    alt="System"
                                />
                            </Box>
                        </Box>
                    </Typography>
                    <Divider variant="middle" />
                    <Typography sx={{ paddingTop: 5 }} variant="h5">
                        การตั้งค่าให้ Firewall ส่ง Syslog ไปยัง Syslog server เพื่อนำLog ไปแสดงบนเว็บ
                        <Box sx={{ paddingTop: 2 }} >
                            <Typography>
                                หลังจากที่เราตั้งค่าให้ Firewall สามารถตรวจจับความผิดปกติได้แล้ว เราจะต้องตั้งค่าเพื่อนำ Log ที่เกิดขึ้นส่งไปยัง Syslog Server โดยเปิด CLI ที่มุมขวาบนของเว็บ
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                                <img
                                    src="/assets/L1_pic/FG/CLI.jpg"
                                    alt="System"
                                />
                            </Box>

                            <Typography>
                                โดยในเนื้อหานี้ จะส่ง Log ไปทั้งหมด 2 Port เพื่อแสดง Log ที่เป็น Rawlog และ Parse Log (Log ที่ผ่านการตัดเฉพาะส่วนสำคัญแล้ว)
                            </Typography>
                            <Typography>
                                โดย Port ที่จะส่งไปได้แก่
                            </Typography>
                            <Box sx={{ paddingLeft: 2, paddingBottom: 5 }}>

                                <Typography>
                                    - Port 5144
                                </Typography>
                                <Typography>
                                    - Port 5145
                                </Typography>
                            </Box>
                            <Typography variant="h5" sx={{ paddingBottom: 1 }}>
                                ตั้งค่า Port 5144 :
                            </Typography>
                            <Typography>
                                config log syslogd setting
                            </Typography>
                            <Typography>
                                set status enable
                            </Typography>
                            <Typography>
                                set server (ตามด้วย IP ของ Web server)
                            </Typography>
                            <Typography>
                                set port 5144
                            </Typography>
                            <Typography>
                                end
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                                <img
                                    src="/assets/L1_pic/FG/CLI_5144.jpg"
                                    alt="System"
                                />
                            </Box>

                            <Typography variant="h5" sx={{ paddingBottom: 1 }}>
                                ตั้งค่า Port 5145 :
                            </Typography>
                            <Typography>
                                config log syslogd2 setting (Tab ที่ syslogd 1 ครั้งจะกลายเป็น syslogd2)
                            </Typography>
                            <Typography>
                                set status enable
                            </Typography>
                            <Typography>
                                set server (ตามด้วย IP ของ Web server)
                            </Typography>
                            <Typography>
                                set port 5145
                            </Typography>
                            <Typography>
                                end
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                                <img
                                    src="/assets/L1_pic/FG/CLI_5145.jpg"
                                    alt="System"
                                />
                            </Box>


                            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }}>
                                <img
                                    src="/assets/Firewall to Webserver.jpeg"
                                    alt="System"
                                />
                            </Box>
                            <Typography>
                                จากนั้น ระบบจะเริ่มเชื่อมต่อและส่ง Log ไปยัง Syslog Server (Ubuntu) โดยจะมี Logstash Service ทำหน้าที่เป็น Pipeline Processor รออยู่ 2 Port หลังจากดำเนินการเสร็จ Logstash จะ Save Log ลงใน File และนำไปแสดงบนหน้าเว็บ
                            </Typography>
                        </Box>
                    </Typography>
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link} to="/lecture1"
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link} to="/lecture3"
                    >
                        Next
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

