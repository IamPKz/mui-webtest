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
    portSpecificationData
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

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>
                    <Typography variant="h5">
                        เชื่อมต่อด้วย SSH
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/assets/L2_pic/putty_ip.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                            ใส่ IP ของเครื่อง Kali เพื่อเชื่อมต่อด้วย SSH
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/assets/L2_pic/kali_login.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                            Login ด้วย Username , Password : kali
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
                            <img
                                src="/assets/L2_pic/kali_logedin.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                            Login สำเร็จ
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
                            <img
                                src="/assets/L2_pic/kali_nmap.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                            ทดลองใช้คำสั่ง : nmap (ตามด้วย IP ของ Firewall)
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
                            <img
                                src="/assets/L2_pic/kali_needroot_nmap.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
                            หากบางคำสั่งต้องการ root privileges ให้พิมคำสั่ง sudo -i และใส่รหัส : kali
                        </Typography>

                    </Typography>
                </Typography>


                <Divider variant="middle" />

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>
                    <Typography variant="h4">
                        การลาดตระเวณ (Reconnaissance)
                        <Typography sx={{ paddingTop: 2, paddingBottom: 5 }} variant="h5">
                            <Typography>
                                Reconnaissance (หรือ Recon) ในทางความหมายทางความปลอดภัยข้อมูลและความปลอดภัยด้านไซเบอร์หมายถึงกระบวนการในการเก็บข้อมูลและสารสนเทศเกี่ยวกับเป้าหมายหรือเครือข่ายที่จะถูกทดสอบความปลอดภัย. การทำ Reconnaissance มักเป็นขั้นตอนแรกในกระบวนการทดสอบความปลอดภัย (penetration testing) หรือการโจมตีทางไซเบอร์
                            </Typography>
                            <Typography sx={{ paddingTop: 2, paddingBottom: 2 }}>
                                Reconnaissance ในทางความปลอดภัยข้อมูลและความปลอดภัยด้านไซเบอร์มีการแบ่งออกเป็นสองประเภทหลัก: Active Reconnaissance และ Passive Reconnaissance
                            </Typography>
                            <Typography sx={{ paddingTop: 2, paddingBottom: 2 }} variant="h6">
                                Active Reconnaissance:
                                <Typography sx={{ paddingTop: 2, paddingBottom: 1 }}>
                                    ลักษณะ: Active Reconnaissance เป็นกระบวนการที่ผู้ทดสอบหรือผู้โจมตีกระทำเพื่อเก็บข้อมูลโดยตรงจากเป้าหมายโดยใช้การสื่อสารหรือการเข้าถึงที่เป้าหมาย
                                </Typography>
                                <Typography sx={{ paddingBottom: 2 }}>
                                    ตัวอย่าง: การสแกนพอร์ต, การทดสอบระบบที่มีการส่งข้อมูลผลลัพธ์กลับ, การทดสอบโปรโตคอลเครือข่าย, หรือการใช้เทคนิคต่าง ๆ เพื่อเก็บข้อมูลที่ต้องการ.
                                    Passive Reconnaissance (การสำรวจแบบไม่ใช้งาน):
                                </Typography>
                            </Typography>

                            <Typography sx={{ paddingBottom: 2 }} variant="h6">
                                Passive Reconnaissance:
                                <Typography sx={{ paddingTop: 2, paddingBottom: 1 }}>
                                    ลักษณะ: Passive Reconnaissance เป็นกระบวนการที่ผู้ทดสอบหรือผู้โจมตีไม่ต้องทำการสื่อสารหรือเข้าถึงทางเป้าหมายโดยตรง แต่เพียงแค่รับข้อมูลที่เป้าหมายส่งมา.                                </Typography>
                                <Typography sx={{ paddingBottom: 2 }}>
                                    ตัวอย่าง: การตรวจสอบข้อมูลที่เป้าหมายโพสต์ในสื่อสังคมออนไลน์, การจับรายการเครือข่าย, หรือการวิเคราะห์ข้อมูล DNS.
                                </Typography>
                            </Typography>
                            <Typography sx={{ paddingLeft: 5, padding: 1 }}>
                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    1.Nmap (Network Mapper):
                                    <Typography>
                                        ใช้สแกนพอร์ตและตรวจสอบเครือข่ายเพื่อหาข้อมูลเกี่ยวกับเครื่องเซิร์ฟและระบบ.
                                    </Typography>
                                </Typography>

                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    2.Recon-ng
                                    <Typography>
                                        เป็นเครื่องมือทำ Reconnaissance ที่ออกแบบมาสำหรับการทำงานกับข้อมูลที่ได้จากเครื่องมือ Reconnaissance ต่าง ๆ
                                    </Typography>
                                </Typography>

                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    3.TheHarvester
                                    <Typography>
                                        ใช้ในการเก็บอีเมล, โดเมน, และข้อมูลที่เป็นไปได้จากแหล่งข้อมูลสาธารณะ
                                    </Typography>
                                </Typography>

                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    4.Maltego
                                    <Typography>
                                        เครื่องมือสร้างกราฟที่ใช้ในการวิเคราะห์ข้อมูลที่ได้จาก Reconnaissance และสร้างภาพรวมของเป้าหมาย
                                    </Typography>
                                </Typography>

                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    5.Wireshark
                                    <Typography>
                                        เครื่องมือการวิเคราะห์แพ็กเก็ตเครือข่ายที่สามารถใช้ใน Passive Reconnaissance
                                    </Typography>
                                </Typography>
                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    6.Metasploit Framework:
                                    <Typography>
                                        จะมีเครื่องมือที่ช่วยในการ Reconnaissance รวมทั้งการสแกน, การเจาะระบบ, และการบริหารจัดการการเข้าถึง
                                    </Typography>
                                </Typography>

                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    7.Shodan
                                    <Typography>
                                        ใช้ในการค้นหาอุปกรณ์ที่เชื่อมต่อกับอินเทอร์เน็ต, รวมถึงข้อมูลที่เป็นประโยชน์เกี่ยวกับพอร์ตและบริการ
                                    </Typography>
                                </Typography>

                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    8.EyeWitness
                                    <Typography>
                                        ใช้สร้างภาพหน้าจอ (screenshots) จากเว็บไซต์ที่เป้าหมาย
                                    </Typography>
                                </Typography>

                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    9.SpiderFoot
                                    <Typography>
                                        เครื่องมือ Open Source Intelligence (OSINT) ที่สามารถเก็บข้อมูลจากหลายแหล่งและวิเคราะห์ข้อมูลนั้น
                                    </Typography>
                                </Typography>

                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    10.Snort
                                    <Typography>
                                        ระบบตรวจจับการบุกรุก (Intrusion Detection System - IDS) ที่สามารถใช้ในการตรวจสอบและบันทึกข้อมูลจากที่ผ่านมาในเครือข่าย
                                    </Typography>
                                </Typography>
                            </Typography>


                            <Divider variant="middle" />
                            <Typography variant="h6" sx={{ paddingTop: 5, paddingBottom: 2 }}>
                                Nmap (“Network Mapper”)
                            </Typography>
                            <Typography>
                                Nmap (Network Mapper) เป็นเครื่องมือสแกนเน็ตเวิร์คและตรวจสอบพอร์ต (port scanner) ที่ใช้ในการตรวจสอบเครือข่ายและระบบความปลอดภัย. มันถูกออกแบบมาเพื่อสแกนและตรวจสอบเครือข่ายเพื่อค้นหารายละเอียดเกี่ยวกับเครื่องเซิร์ฟ, แอพลิเคชัน, และบริการที่กำลังทำงานบนระบบ
                            </Typography>
                            <Box sx={{ paddingBottom: 5, paddingTop: 5 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src="/assets/L2_pic/nmap1.jpg"
                                        alt="System"
                                    />
                                </Box>
                            </Box>
                            <Typography sx={{ paddingLeft: 5, padding: 1 }}>
                                <Typography variant="h6" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                    Nmap สามารถทำหลายอย่างได้, รวมถึง:
                                    <Typography sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                        1.สแกนพอร์ต (Port Scanning): Nmap สามารถสแกนพอร์ตบนเครือข่ายเพื่อตรวจสอบว่าพอร์ตไหนถูกเปิดหรือปิด
                                    </Typography>
                                    <Typography sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                        2.ตรวจสอบระบบปฏิบัติการ (OS Fingerprinting): Nmap สามารถพยายามระบุระบบปฏิบัติการที่กำลังทำงานบนเครื่องเซิร์ฟโดยการวิเคราะห์การตอบสนองจากระบบ
                                    </Typography>
                                    <Typography sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                        3.ตรวจสอบเวอร์ชันของบริการ (Service Version Detection): Nmap สามารถระบุเวอร์ชันของบริการที่ทำงานบนพอร์ตที่กำลังทดสอบ
                                    </Typography>
                                    <Typography sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                        4.สแกนเครือข่าย (Host Discovery): สามารถใช้ Nmap เพื่อค้นหาและสแกนเครือข่ายในขณะที่ตรวจสอบเครื่องที่ออนไลน์
                                    </Typography>
                                    <Typography sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                                        5.สแกนไฟร์วอลล์ (Firewall Evasion): Nmap มีฟีเจอร์ที่ช่วยในการหลีกเลี่ยงไฟร์วอลล์และการตรวจจับการสแกน
                                    </Typography>
                                </Typography>
                            </Typography>
                        </Typography>
                        <Typography variant="h6" sx={{ paddingTop: 5, paddingBottom: 2 }}>
                        ตัวอย่างการใช้ Nmap เพื่อ Scan port ที่เปิดอยู่โดยใช้คำสั่งแต่ละรูปแบบ
                        </Typography>

                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={nmapScanTechniques} title='Nmap Scan Techniques' />
                        </Box>
                        <Box sx={{ paddingTop: 2, paddingBottom: 5 }}>
                            <NmapScanTable data={portSpecificationData} title='Port Specification' />
                        </Box>
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

                    
                    
                    
                    <Divider variant="middle" />
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

