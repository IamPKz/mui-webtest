import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Lecture1() {

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





                <Box sx={{ paddingTop: 5, paddingBottom: 5 }}>

                    <img
                        src="/assets/learning/nmap1.jpg" // Replace with your actual image URL
                        alt="Illustration of IP configuration in Kali Linux"
                    />
                </Box>

                <Typography variant="body1" paragraph>
                    คำเตือน  –  โดยทั่วไปแล้ว nmap จะถูกใช้โดยผู้ที่มีเจตนาดีและไม่ดี ควรใช้ความระมัดระวังอย่างยิ่งยวดเพื่อให้แน่ใจว่าคุณไม่ได้ใช้ nmap กับระบบที่ไม่ได้ระบุไว้อย่างชัดเจนในข้อตกลงที่เป็นลายลักษณ์อักษร/กฎหมาย โปรดใช้ความระมัดระวังเมื่อใช้เครื่องมือ nmap
                </Typography>

                <Typography variant="body1" paragraph>
                    <Typography variant="h5">
                        วิธีค้นหาโฮสต์สดบนเครือข่ายของฉัน
                    </Typography>
                    ในตัวอย่างนี้ ทั้งสองเครื่องอยู่ในเครือข่ายส่วนตัว 192.168.1.0 /24 เครื่อง Kali มีที่อยู่ IP 192.168.56.106 และเครื่อง Firewall ที่จะสแกนมีที่อยู่ IP 192.168.1.107
                </Typography>


                <Box sx={{ paddingTop: 5, paddingBottom: 5 }}>

                    <img
                        src="/assets/learning/puttu_kali.png" // Replace with your actual image URL
                        alt="Illustration of IP configuration in Kali Linux"
                    />
                </Box>


                <Box sx={{ paddingTop: 5, paddingBottom: 5 }}>

                    <img
                        src="/assets/learning/ip_kali.png" // Replace with your actual image URL
                        alt="Illustration of IP configuration in Kali Linux"
                    />
                </Box>

                {/* Add more content as needed */}
            </Paper>
        </Container>
    );
};

