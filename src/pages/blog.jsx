import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function BlogContentPage() {

  return (
    <Container>
      <Paper sx={{ padding: 5 }}>
        <Typography variant="h4" gutterBottom>
          บทเรียนเรื่อง การลาดตระเวน
        </Typography>

        <Typography variant="subtitle1" color="textSecondary" paragraph>
          Published on October 11, 2023 by Admin
        </Typography>

        <Typography variant="body1" paragraph>
          <Typography variant="h5">
            Reconnaissance
          </Typography>
          การลาดตระเวน คือ แฮ็คเกอร์จะเริ่มต้นเก็บรวบรวมข้อมูลของเป้าหมายก่อนเริ่มการโจมตี โดยอาจค้นหาข้อมูลจากโลกอินเทอร์เน็ต โซเชียลเน็ตเวิร์ค เป็นต้น
        </Typography>

        <Typography variant="body1" paragraph>

          <Typography variant="h5">
            Nmap (“Network Mapper”)
          </Typography>
          tool นี้เป็น free license และ เป็น open source ทำหน้าที่ ค้นหาเครือข่ายเป้าหมายและใช้ตรวจสอบความปลอดภัยของเครือข่าย
          ค้นหาเป้าหมาย คือ
        </Typography>

        <Typography variant="body1" paragraph>
          Nmap Network Scanning (NNS) ค้นหาเป้าหมายภายในเครือข่าย คือ
          <Typography variant="body1" paragraph sx={{ paddingTop: 2 }}>
            หา IP เครื่องที่ที่ยังทำงานอยู่หรือเปิดเครื่องเสีบปลั๊ก Network อยู่เท่านั้น กรณีเครื่องที่ปิดหรือ down อยู่ไม่สามารถค้นหาได้
          </Typography>
          <Typography variant="body1" paragraph>
            หา Port ของเครื่องเป้าหมายว่ามี port ใหนเปิดอยู่บ้าง และเราจะโจมตีได้ทั้งหมดกี่ Port
          </Typography>
          <Typography variant="body1" paragraph>
            หา OS/Version ของเครื่องเป้าหมายว่าเป็นระบบปฏิบัติการอะไร เช่น Linux 7.x, Windows Server 2xxx เป็นต้น
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

