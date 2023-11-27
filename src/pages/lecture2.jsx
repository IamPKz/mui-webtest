import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Lecture2() {

    return (
        <Container>
            <Paper sx={{ padding: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Firewall
                </Typography>

                <Typography variant="subtitle1" color="textSecondary" paragraph>
                    Published on October 11, 2023 by Admin
                </Typography>

                <Typography variant="body1" paragraph>
                    <Typography variant="h5">
                        Firewall
                    </Typography>
                    Firewall คือ ซอฟต์แวร์หรือฮาร์ดแวร์ บนระบบเครือข่าย ที่ทำหน้าที่ตรวจสอบข้อมูลที่ผ่านเข้า-ออกระบบเครือข่าย จะมีการกำหนดกฎ เพื่อควบคุมการเข้า-ออกของข้อมูล เป็นการป้องกันว่าข้อมูลที่จะส่งผ่านนั้นมีความปลอดภัยหรือไม่ โดยเปรียบเทียบกับกฎต่างๆที่ทางผู้ใช้งานได้กำหนดไว้ แต่ก็ขึ้นกับการตัดสินใจของผู้ใช้งานเองด้วย ถ้าหากข้อมูลไม่ปลอดภัยได้แต่รับการอนุญาตจากผู้ใช้งาน Firewall ก็จะปล่อยให้ผ่านเข้าไปได้
                </Typography>

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>

                    <Typography variant="h5">
                        Firewall มีประโยชน์อย่างไร ?
                    </Typography>

                    <Typography sx={{ paddingLeft: 5, padding: 1 }}>
                        <Typography variant="h6" sx={{ paddingBottom: 2 }}>
                            1.ช่วยลดช่องโหว่การรักษาความปลอดภัยเครือข่ายของบริษัท
                            <Typography>
                                วัตถุประสงค์หลักของไฟร์วอลล์ คือเพื่อป้องกันการโจมตีการรักษาความปลอดภัยเครือข่าย หรือการโจมตีของแฮกเกอร์ ไฟร์วอลล์ฮาร์ดแวร์สามารถกำหนดค่าหรือกฎเฉพาะที่สามารถจดจำและบล็อคไวรัสและมัลแวร์ได้ และยังสามารถบล็อคการเข้าถึงจากภายนอกที่ไม่ได้รับอนุญาตอีกด้วย
                            </Typography>
                        </Typography>

                        <Typography variant="h6" sx={{ paddingBottom: 2 }}>
                            2.ช่วยตรวจสอบและควบคุมการใช้อินเตอร์เน็ต
                            <Typography>
                                นอกเหนือจากการตรวจสอบการรับส่งข้อมูลขาเข้าแล้ว ไฟร์วอลล์ฮาร์ดแวร์ยังสามารถใช้เพื่อตรวจสอบและบล็อคการรับส่งข้อมูลขาออกจากภายในองค์กรของคุณได้อีกด้วย โดยการนำกฎที่กำหนดมาใช้ ทางไอทีสามารถบล็อคการเข้าถึงโซเชียลมีเดีย, ระบุตัวตน และหยุดการเข้าถึงเว็บไซต์ที่ไม่เหมาะสมได้ รวมถึงยังสามารถจำกัดการใช้งานอินเตอร์เน็ตทั้งในและนอกเวลาทำการอีกด้วย โดยกระบวนการนี้จะช่วยเพิ่มผลลัพธ์ที่ดีในการทำงานและในที่สุดแล้วก็จะช่วยเพิ่มผลกำไรทางธุรกิจได้อีกด้วย                            </Typography>
                        </Typography>

                        <Typography variant="h6" sx={{ paddingBottom: 2 }}>
                            3.ช่วยลดช่องโหว่การรักษาความปลอดภัยเครือข่ายของบริษัท
                            <Typography>
                                ปัจจุบัน ยังไม่มีไฟร์วอลล์ใดในโลกที่สามารถป้องกันการคุกคามทางไซเบอร์ได้ 100% ท้ายที่สุดทุกเครือข่ายก็อาจถูกโจมตีหรือละเมิดได้ แม้แต่ Google เองก็ตาม
                                ไฟร์วอลล์ฮาร์ดแวร์มีความสามารถในการตรวจสอบการรับส่งข้อมูลเครือข่ายขาเข้าและขาออกทั้งหมด รวมถึงแจ้งเตือนบริษัท/ผู้จัดการด้าน IT ของคุณเมื่อมีกิจกรรมที่ไม่ได้รับอนุญาตเกิดขึ้น สิ่งนี้จะช่วยให้คุณดำเนินการได้อย่างรวดเร็วเมื่อมีการละเมิดหรือโจมตีเกิดขึ้น
                                ซึ่งคุณจะสามารถกำหนดค่าและจัดการการแจ้งเตือนของคุณภายในแผงควบคุมไฟร์วอลล์ซอฟต์แวร์ โดยส่วนใหญ่แล้วไฟร์วอลล์ฮาร์ดแวร์มักกำหนดค่าให้มีการแจ้งเตือนผ่านทางอีเมลหรือข้อความ
                            </Typography>
                        </Typography>

                        <Typography variant="h6" sx={{ paddingBottom: 2 }}>
                            4.ช่วยปกป้องอีเมลและชื่อเสียงของบริษัท
                            <Typography>
                                เราสามารถกำหนดค่าไฟร์วอลล์ฮาร์ดแวร์เพื่อปกป้องเซิร์ฟเวอร์ของอีเมล ถ้าหากแฮ็กเกอร์เข้าถึงเครือข่ายของคุณ พวกเขาอาจจะขโมยเซิร์ฟเวอร์ SMTP ของคุณ และใข้มันส่งสแปมไปยังผู้ติดต่อจากบัญชีอีเมลของคุณ การกระทำนี้อาจส่งผลให้สูญเสียลูกค้าหรือสร้างความเสียหายต่อชื่อเสียงของบริษัทได้
                            </Typography>
                        </Typography>

                        <Typography variant="h6" sx={{ paddingBottom: 2 }}>
                            5.การสร้างเครือข่ายส่วนตัวเสมือน
                            <Typography>
                                ไฟร์วอลล์ฮาร์ดแวร์สามารถนำมาสร้างความปลอดภัยการเข้ารหัสเครือข่ายการเชื่อมต่อ งเรียกว่าเครือข่ายส่วนตัวเสมือน หรือที่เรียกว่า VPN โดยพนักงานที่ทำงานในบ้านและผู้ใช้อุปกรณ์เคลื่อนที่สามารถเชื่อมต่อกับเครือข่ายของบริษัท และเข้าถึงทรพยากรผ่านการเชื่อมต่อที่เข้ารหัสเฉพาะ ซึ่งจะทำให้เครือข่ายของคุณมีความปลอดภัยเพิ่มขึ้นอีกขั้น โดยสามารถไฟร์วอลล์ให้เหมาะสม และช่วยไม่ให้เกิดการดักจับข้อมูลขององค์กรและข้อมูลส่วนตัวจากบุคคลภายนอกได้                            </Typography>
                        </Typography>

                    </Typography>
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>

                    <Typography variant="h5">
                        FortiGate
                        <Typography>
                            FortiGate คือ โซลูชันระบบรักษาความปลอดภัยที่มาในรูปแบบ Box Appliance หรือที่เรารู้จักกันว่า Firewall แต่ FortiGate ได้ถูกพัฒนาความสามารถ ให้เหนือกว่า Firewall ทั่วไป เราจะเรียกมันว่า “Next Generation Firewall” (NGFW)
                        </Typography>

                        <Typography sx={{ paddingTop: 2 }}>
                            โดยตัว FortiGate นั้น จะสามารถป้องกันการโจมตีจากผู้ที่ไม่หวังดีได้มากยิ่งขึ้น เช่น
                            <Typography>
                                - ระบบ Network Firewall
                            </Typography>
                            <Typography>
                                - ระบบ Intrusion Prevention System ที่จะคอยตรวจสอบ Package ขาเข้า-ขาออกที่ผิดปกติ และหยุดการโจมตีก่อนที่จะเกิดขึ้นได้
                            </Typography>
                            <Typography>
                                - ระบบ Antivirus & Spam
                            </Typography>
                            <Typography>
                                - ระบบ VPN
                            </Typography>
                            <Typography>
                                - ระบบกรองข้อมูล
                            </Typography>
                            <Typography>
                                - ระบบ Load Balance
                            </Typography>
                            <Typography>
                                - ระบบสร้าง Report ของผู้ใช้งานต่าง ๆ ให้แก่ผู้ดูแลระบบ
                            </Typography>
                        </Typography>
                    </Typography>
                </Typography>

                <Divider variant="middle" />

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>
                    <Typography variant="h5">
                        ภาพรวมของระบบ
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/assets/L1_pic/system.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography>
                            ในโปรแกรมนี้ เราจะเรียนรู้การตั้งค่า Firewall ที่ได้ติดตั้งลงภายใน VMware ในเครื่องที่ทำหน้าที่เป็น Host โดยทุกๆครั้งที่ติดตั้งใหม่ VM แต่ละตัวจะได้รับ IP จาก Router ใหม่ทุกครั้ง โดยสามารถตรวจสอบ IP ของVMได้จากเครื่องที่ทำหน้าที่เป็น Host
                        </Typography>
                    </Typography>
                </Typography>

                <Divider variant="middle" />

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>
                    <Typography variant="h5">
                        การตรวจสอบ IP ของแต่ละเครื่อง
                        <Typography sx={{ paddingTop: 2, paddingBottom: 5 }} variant="h5">
                            IP : Firewall FortiGate
                            <Box sx={{ paddingTop: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src="/assets/L1_pic/FG_login.jpg"
                                        alt="System"
                                    />
                                </Box>
                                <Typography sx={{ paddingTop: 2, display: 'flex', justifyContent: 'center' }} variant="subtitle1">
                                    Login ด้วย Username และ Password admin
                                </Typography>
                            </Box>
                            <Box sx={{ paddingTop: 5, paddingBottom: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src="/assets/L1_pic/FG_IP.jpg"
                                        alt="System"
                                    />
                                </Box>
                                <Typography sx={{ paddingTop: 2, display: 'flex', justifyContent: 'center' }} variant="subtitle1">
                                    พิมคำสั่ง : get system interface physical
                                </Typography>
                            </Box>
                        </Typography>


                        <Divider variant="middle" />


                        <Typography sx={{ paddingTop: 2, paddingBottom: 5 }} variant="h5">
                            IP : Kali Host
                            <Box sx={{ paddingTop: 2 }} alignCenter>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                                    <img
                                        src="/assets/L1_pic/Kali_login_VMware.jpg"
                                        alt="System"
                                    />
                                </Box>
                                <Typography sx={{ paddingTop: 2, display: 'flex', justifyContent: 'center' }} variant="subtitle1">
                                    Login ด้วย Username และ Password admin
                                </Typography>
                            </Box>

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


                        <Divider variant="middle" />


                        <Typography sx={{ paddingTop: 2 }} variant="h5">
                            IP : Web & Syslog Server
                            <Box sx={{ paddingTop: 2 }} >
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src="/assets/L1_pic/Webserver_login.jpg"
                                        alt="System"
                                    />

                                </Box>
                                <Typography sx={{ paddingTop: 2, display: 'flex', justifyContent: 'center' }} variant="subtitle1">
                                    Login ด้วย Username และ Password admin
                                </Typography>
                            </Box>
                            <Box sx={{ paddingTop: 5, paddingBottom: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src="/assets/L1_pic/Webserver_IP.jpg"
                                        alt="System"
                                    />

                                </Box>
                                <Typography sx={{ paddingTop: 2, display: 'flex', justifyContent: 'center' }} variant="subtitle1">
                                    พิมคำสั่ง : get system interface physical
                                </Typography>
                            </Box>
                        </Typography>
                    </Typography>
                </Typography>

                <Divider variant="middle" />

                <Typography variant="body1" sx={{ paddingBottom: 2 }} paragraph>
                    <Typography variant="h4">
                        การเข้า Fortigate
                        <Typography>
                            สามารถเข้าผ่านหน้าเว็บได้โดยพิมพ์ IP ของ Port WAN จาก Fortigate ใน URL
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 2, paddingTop: 2 }}>
                            <img
                                src="/assets/L1_pic/FG/login.jpg"
                                alt="System"
                            />
                        </Box>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 2 }}>
                            ***IP จะเปลี่ยนไปทุกครั้งที่ติดตั้งเซิฟเวอร์เครื่องใหม่***
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

