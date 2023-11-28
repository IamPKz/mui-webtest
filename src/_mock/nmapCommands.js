// nmapCommands.js
/* eslint-disable */

const nmapScanTechniques = [
    { switch: '-sS', example: 'nmap 172.16.12.44 -sS', description: 'สแกนพอร์ต TCP SYN (ค่าเริ่มต้น)' },
    { switch: '-sT', example: 'nmap 172.16.12.44 -sT', description: 'สแกนพอร์ต TCP connect (ค่าเริ่มต้นโดยไม่ต้องใช้สิทธิ์ root)' },
    { switch: '-sU', example: 'nmap 172.16.12.44 -sU', description: 'สแกนพอร์ต UDP' },
    { switch: '-sA', example: 'nmap 172.16.12.44 -sA', description: 'สแกนพอร์ต TCP ACK' },
    { switch: '-sW', example: 'nmap 172.16.12.44 -sW', description: 'สแกนพอร์ต TCP Window' },
    { switch: '-sM', example: 'nmap 172.16.12.44 -sM', description: 'สแกนพอร์ต TCP Maimon' },
  ];
  
  
  const targetSpecificationData = [
    { switch: '', example: 'nmap 172.16.12.44', description: 'สแกนหนึ่ง IP เท่านั้น' },
    { switch: '', example: 'nmap 172.16.12.44 172.16.12.45', description: 'สแกน IPs ที่ระบุ' },
    { switch: '', example: 'nmap 172.16.12.44-254', description: 'สแกนช่วง IP' },
    { switch: '', example: 'nmap scanme.nmap.org', description: 'สแกนโดเมน' },
    { switch: '', example: 'nmap 192.168.1.0/24', description: 'สแกนโดยใช้การระบุ CIDR' },
    { switch: '-iL', example: 'nmap -iL targets.txt', description: 'สแกนเป้าหมายจากไฟล์' },
    { switch: '-iR', example: 'nmap -iR 100', description: 'สแกน 100 โฮสต์แบบสุ่ม' },
    { switch: '-exclude', example: 'nmap -exclude 172.16.12.44', description: 'ไม่รวมโฮสต์ที่ระบุ' },
  ];
  
  
  const hostDiscoveryData = [
    { switch: '-sL', example: 'nmap 172.16.12.44-3 -sL', description: 'ไม่มีการสแกน แสดงรายการเป้าหมายเท่านั้น' },
    { switch: '-sn', example: 'nmap 172.16.12.44/24 -sn', description: 'ปิดการสแกนพอร์ต ทำเฉพาะการค้นหาโฮสต์' },
    { switch: '-Pn', example: 'nmap 172.16.12.44-5 -Pn', description: 'ปิดการค้นหาโฮสต์ ทำเฉพาะการสแกนพอร์ต' },
    { switch: '-PS', example: 'nmap 172.16.12.44-5 -PS22-25,80', description: 'ค้นหาโดยใช้ TCP SYN ที่พอร์ต x. (พอร์ต 80 เป็นค่าเริ่มต้น)' },
    { switch: '-PA', example: 'nmap 172.16.12.44-5 -PA22-25,80', description: 'ค้นหาโดยใช้ TCP ACK ที่พอร์ต x. (พอร์ต 80 เป็นค่าเริ่มต้น)' },
    { switch: '-PU', example: 'nmap 172.16.12.44-5 -PU53', description: 'ค้นหาโดยใช้ UDP ที่พอร์ต x. (พอร์ต 40125 เป็นค่าเริ่มต้น)' },
    { switch: '-PR', example: 'nmap 172.16.12.44-1/24 -PR', description: 'ค้นหาโดยใช้ ARP ในเครือข่ายท้องถิ่น' },
    { switch: '-n', example: 'nmap 172.16.12.44 -n', description: 'ไม่ทำการแปลงชื่อ DNS เสมอ' },
  ];
  
  
  const portSpecificationData = [
    { switch: '-p', example: 'nmap 172.16.12.44 -p 21', description: 'สแกนพอร์ตที่ x' },
    { switch: '-p', example: 'nmap 172.16.12.44 -p 21-100', description: 'สแกนช่วงพอร์ต' },
    { switch: '-p', example: 'nmap 172.16.12.44 -p U:53,T:21-25,80', description: 'สแกนหลายพอร์ตที่เป็นทั้ง TCP และ UDP' },
    { switch: '-p', example: 'nmap 172.16.12.44 -p-', description: 'สแกนทุกพอร์ต' },
    { switch: '-p', example: 'nmap 172.16.12.44 -p http,https', description: 'สแกนตามชื่อบริการ' },
    { switch: '-F', example: 'nmap 172.16.12.44 -F', description: 'สแกนพอร์ตอย่างรวดเร็ว (100 พอร์ต)' },
    { switch: '-top-ports', example: 'nmap 172.16.12.44 -top-ports 2000', description: 'สแกนพอร์ต x ที่มีการใช้งานสูงสุด' },
    { switch: '-p-65535', example: 'nmap 172.16.12.44 -p-65535', description: 'การปล่อยพอร์ตแรกในช่วงทำให้การสแกนเริ่มต้นที่พอร์ต 1' },
    { switch: '-p0-', example: 'nmap 172.16.12.44 -p0-', description: 'การปล่อยพอร์ตสุดท้ายในช่วงทำให้การสแกนเดินทางไปจนถึงพอร์ต 65535' },
  ];
  
  
  const serviceVersionDetectionData = [
    { switch: '-sV', example: 'nmap 172.16.12.44 -sV', description: 'พยายามหาเวอร์ชันของบริการที่ทำงานอยู่ที่พอร์ต' },
    { switch: '-sV -version-intensity', example: 'nmap 172.16.12.44 -sV -version-intensity 8', description: 'ระดับความเข้มของการหาเวอร์ชัน 0 ถึง 9 โดยที่ตัวเลขสูงกว่าเพิ่มโอกาสถูกต้อง' },
    { switch: '-sV -version-light', example: 'nmap 172.16.12.44 -sV -version-light', description: 'เปิดใช้งานโหมด Light เพื่อลดโอกาสถูกต้อง แต่เร็วขึ้น' },
    { switch: '-sV -version-all', example: 'nmap 172.16.12.44 -sV -version-all', description: 'เปิดใช้งานระดับความเข้มของ 9 เพื่อเพิ่มโอกาสถูกต้อง แต่เร็วขึ้น' },
    { switch: '-A', example: 'nmap 172.16.12.44 -A', description: 'เปิดใช้งานการตรวจหาระบบปฏิบัติการ, การหาเวอร์ชัน, การสแกนสคริปต์, และการติดตามเส้นทาง' },
  ];
  
  
  const osDetectionData = [
    { switch: '-O', example: 'nmap 172.16.12.44 -O', description: 'การตรวจหาระบบปฏิบัติการระยะไกลโดยใช้การตรวจสอบรอบข้อมูล TCP/IP stack' },
    { switch: '-O -osscan-limit', example: 'nmap 172.16.12.44 -O -osscan-limit', description: 'หากไม่พบพอร์ต TCP ที่เปิดอย่างน้อยหนึ่งพอร์ตและหนึ่งพอร์ตที่ปิด, จะไม่ลองตรวจหาระบบปฏิบัติการ' },
    { switch: '-O -osscan-guess', example: 'nmap 172.16.12.44 -O -osscan-guess', description: 'ทำให้ Nmap เดาโดยมีความมั่นใจมากขึ้น' },
    { switch: '-O -max-os-tries', example: 'nmap 172.16.12.44 -O -max-os-tries 1', description: 'ตั้งค่าจำนวนสูงสุด x ของการลองตรวจหาระบบปฏิบัติการต่อหนึ่งเป้าหมาย' },
    { switch: '-A', example: 'nmap 172.16.12.44 -A', description: 'เปิดใช้งานการตรวจหาระบบปฏิบัติการ, การหาเวอร์ชัน, การสแกนสคริปต์, และการติดตามเส้นทาง' },
  ];
  
  
  const timingPerformanceData = [
    { switch: '-T0', example: 'nmap 172.16.12.44 -T0', description: 'การหลีกเลี่ยงระบบตรวจจับการบุกรุกแบบ Paranoid (ระดับ 0)' },
    { switch: '-T1', example: 'nmap 172.16.12.44 -T1', description: 'การหลีกเลี่ยงระบบตรวจจับการบุกรุกแบบ Sneaky (ระดับ 1)' },
    { switch: '-T2', example: 'nmap 172.16.12.44 -T2', description: 'โยนตัวลงมาเล็กน้อย (ระดับ 2) เพื่อลดการใช้แบนด์วิดธ์และทรัพยากรของเครื่องเป้าหมาย' },
    { switch: '-T3', example: 'nmap 172.16.12.44 -T3', description: 'ปกติ (ระดับ 3) ซึ่งเป็นค่าเริ่มต้น' },
    { switch: '-T4', example: 'nmap 172.16.12.44 -T4', description: 'เร่งความเร็ว (ระดับ 4) สำหรับสแกนที่ถือว่าคุณอยู่ในเครือข่ายที่เร็วและเสถียร' },
    { switch: '-T5', example: 'nmap 172.16.12.44 -T5', description: 'เร่งความเร็วมาก (ระดับ 5) สำหรับสแกนที่ถือว่าคุณอยู่ในเครือข่ายที่มีความเร็วที่สูงมาก' },
  ];
  
  
  const nseScriptsData = [
    { switch: '-sC', example: 'nmap 172.16.12.44 -sC', description: 'สแกนด้วย NSE scripts เริ่มต้น ถือว่ามีประโยชน์สำหรับการค้นพบและปลอดภัย' },
    { switch: '-script default', example: 'nmap 172.16.12.44 -script default', description: 'สแกนด้วย NSE scripts เริ่มต้น ถือว่ามีประโยชน์สำหรับการค้นพบและปลอดภัย' },
    { switch: '-script', example: 'nmap 172.16.12.44 -script=banner', description: 'สแกนด้วย NSE script เดียว เช่น banner' },
    { switch: '-script', example: 'nmap 172.16.12.44 -script=http*', description: 'สแกนด้วย wildcard เช่น http' },
    { switch: '-script', example: 'nmap 172.16.12.44 -script=http,banner', description: 'สแกนด้วยสอง NSE scripts เช่น http และ banner' },
    { switch: '-script', example: 'nmap 172.16.12.44 -script "not intrusive"', description: 'สแกนด้วยเนื้อหาเริ่มต้น แต่ลบ NSE scripts ที่เข้ากันไป' },
    { switch: '-script-args', example: 'nmap -script snmp-sysdescr -script-args snmpcommunity=admin 172.16.12.44', description: 'NSE script พร้อมกับอาร์กิวเมนต์' },
  ];
  
  const evasionSpoofingData = [
    { switch: '-f', example: 'nmap 172.16.12.44 -f', description: 'การสแกนที่ขอ โดยรวมถึง ping scans, ใช้ IP packets ที่แยกเป็น fragements ขนาดเล็ก ทำให้ยากต่อการกรอง packet' },
    { switch: '-mtu', example: 'nmap 172.16.12.44 -mtu 32', description: 'ตั้งค่าขนาดของ offset เอง' },
    { switch: '-D', example: 'nmap -D 172.16.12.4401,172.16.12.4402,172.16.12.4403,192.168.1.23 172.16.12.44', description: 'ส่งการสแกนจาก IP ที่ถูกปลอม' },
    { switch: '-D', example: 'nmap -D decoy-ip1,decoy-ip2,your-own-ip,decoy-ip3,decoy-ip4 remote-host-ip', description: 'ตัวอย่างด้านบนอธิบาย' },
    { switch: '-S', example: 'nmap -S www.microsoft.com www.facebook.com', description: 'สแกน Facebook จาก Microsoft (-e eth0 -Pn อาจจำเป็นต้องใช้)' },
    { switch: '-g', example: 'nmap -g 53 172.16.12.44', description: 'ใช้หมายเลข source port ที่กำหนด' },
    { switch: '-proxies', example: 'nmap -proxies http://172.16.12.44:8080, http://192.168.1.2:8080 172.16.12.44', description: 'เชื่อมต่อผ่าน HTTP/SOCKS4 proxies' },
    { switch: '-data-length', example: 'nmap -data-length 200 172.16.12.44', description: 'เพิ่มข้อมูลสุ่มใน packet ที่ส่ง' },
  ];
  
  const outputData = [
    { switch: '-oN', example: 'nmap 172.16.12.44 -oN normal.file', description: 'ผลลัพธ์ปกติไปยังไฟล์ normal.file' },
    { switch: '-oX', example: 'nmap 172.16.12.44 -oX xml.file', description: 'ผลลัพธ์ XML ไปยังไฟล์ xml.file' },
    { switch: '-oG', example: 'nmap 172.16.12.44 -oG grep.file', description: 'ผลลัพธ์ที่ใช้ในการค้นหาไปยังไฟล์ grep.file' },
    { switch: '-oA', example: 'nmap 172.16.12.44 -oA results', description: 'ผลลัพธ์ในรูปแบบทั้งสามรูปแบบหลักพร้อมกัน' },
    { switch: '-oG -', example: 'nmap 172.16.12.44 -oG -', description: 'ผลลัพธ์ที่ใช้ในการค้นหาที่แสดงบนหน้าจอ. -oN -, -oX - ก็ใช้ได้' },
    { switch: '-append-output', example: 'nmap 172.16.12.44 -oN file.file -append-output', description: 'ผลลัพธ์เพิ่มเติมไปยังไฟล์สแกนก่อนหน้า' },
    { switch: '-v', example: 'nmap 172.16.12.44 -v', description: 'เพิ่มระดับความสะอาด (ใช้ -vv หรือมากกว่าสำหรับผลลัพธ์ที่มากขึ้น)' },
    { switch: '-d', example: 'nmap 172.16.12.44 -d', description: 'เพิ่มระดับการดีบัก (ใช้ -dd หรือมากกว่าสำหรับผลลัพธ์ที่มากขึ้น)' },
    { switch: '-reason', example: 'nmap 172.16.12.44 -reason', description: 'แสดงเหตุผลที่พอร์ตอยู่ในสถานะที่แน่นอน, ผลลัพธ์เหมือนกับ -vv' },
    { switch: '-open', example: 'nmap 172.16.12.44 -open', description: 'แสดงเฉพาะพอร์ตที่เปิด (หรืออาจเปิด)' },
    { switch: '-packet-trace', example: 'nmap 172.16.12.44 -T4 -packet-trace', description: 'แสดง packet ทั้งหมดที่ส่งและได้รับ' },
    { switch: '-iflist', example: 'nmap -iflist', description: 'แสดงอินเตอร์เฟซและเส้นทางของโฮสต์' },
    { switch: '-resume', example: 'nmap -resume results.file', description: 'สแกนต่อ' },
  ];
  
  export {
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
  };