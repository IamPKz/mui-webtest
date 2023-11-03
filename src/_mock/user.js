// ----------------------------------------------------------------------

export const users = [
  {
    "@timestamp": "2023-10-31T02:58:12.000Z",
    "eventtype": "anomaly",
    "count": "291386",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "8145",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 291386 times since last log",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721093376766961",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=09:58:12 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721093376766961 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=291386 attack=\"tcp_syn_flood\" srcport=8145 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 291386 times since last log\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T02:58:42.000Z",
    "eventtype": "anomaly",
    "count": "1663850",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "35239",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 50211 > threshold 2000, repeats 1663850 times since last log, pps 50713 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721123370763189",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=09:58:42 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721123370763189 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1663850 attack=\"tcp_syn_flood\" srcport=35239 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 50211 > threshold 2000, repeats 1663850 times since last log, pps 50713 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T02:59:12.000Z",
    "eventtype": "anomaly",
    "count": "1511443",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "39598",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 47708 > threshold 2000, repeats 1511443 times since last log, pps 48185 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721153370757097",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=09:59:12 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721153370757097 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1511443 attack=\"tcp_syn_flood\" srcport=39598 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 47708 > threshold 2000, repeats 1511443 times since last log, pps 48185 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T02:59:43.000Z",
    "eventtype": "anomaly",
    "count": "1435225",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "33289",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 50001 > threshold 2000, repeats 1435225 times since last log, pps 50501 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721183370747195",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=09:59:43 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721183370747195 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1435225 attack=\"tcp_syn_flood\" srcport=33289 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 50001 > threshold 2000, repeats 1435225 times since last log, pps 50501 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:00:13.000Z",
    "eventtype": "anomaly",
    "count": "1554823",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "15248",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 54310 > threshold 2000, repeats 1554823 times since last log, pps 54853 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721213370760525",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:00:13 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721213370760525 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1554823 attack=\"tcp_syn_flood\" srcport=15248 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 54310 > threshold 2000, repeats 1554823 times since last log, pps 54853 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:00:43.000Z",
    "eventtype": "anomaly",
    "count": "1665288",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "42141",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 55902 > threshold 2000, repeats 1665288 times since last log, pps 56461 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721243370765392",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:00:43 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721243370765392 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1665288 attack=\"tcp_syn_flood\" srcport=42141 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 55902 > threshold 2000, repeats 1665288 times since last log, pps 56461 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:01:13.000Z",
    "eventtype": "anomaly",
    "count": "1617624",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "21735",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 55532 > threshold 2000, repeats 1617624 times since last log, pps 56087 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721273370765717",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:01:13 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721273370765717 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1617624 attack=\"tcp_syn_flood\" srcport=21735 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 55532 > threshold 2000, repeats 1617624 times since last log, pps 56087 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:01:43.000Z",
    "eventtype": "anomaly",
    "count": "1602055",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "50926",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 47112 > threshold 2000, repeats 1602055 times since last log, pps 47583 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721303370766866",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:01:43 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721303370766866 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1602055 attack=\"tcp_syn_flood\" srcport=50926 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 47112 > threshold 2000, repeats 1602055 times since last log, pps 47583 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:02:13.000Z",
    "eventtype": "anomaly",
    "count": "1414015",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "23149",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 44679 > threshold 2000, repeats 1414015 times since last log, pps 45125 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721333370779184",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:02:13 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721333370779184 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1414015 attack=\"tcp_syn_flood\" srcport=23149 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 44679 > threshold 2000, repeats 1414015 times since last log, pps 45125 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:02:43.000Z",
    "eventtype": "anomaly",
    "count": "1505880",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "21701",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 53746 > threshold 2000, repeats 1505880 times since last log, pps 54283 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721363370753273",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:02:43 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721363370753273 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1505880 attack=\"tcp_syn_flood\" srcport=21701 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 53746 > threshold 2000, repeats 1505880 times since last log, pps 54283 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:03:13.000Z",
    "eventtype": "anomaly",
    "count": "1606346",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "55183",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 48391 > threshold 2000, repeats 1606346 times since last log, pps 48874 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721393370767604",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:03:13 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721393370767604 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1606346 attack=\"tcp_syn_flood\" srcport=55183 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 48391 > threshold 2000, repeats 1606346 times since last log, pps 48874 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:03:43.000Z",
    "eventtype": "anomaly",
    "count": "1495587",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "44511",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 47350 > threshold 2000, repeats 1495587 times since last log, pps 47823 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721423370894170",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:03:43 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721423370894170 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1495587 attack=\"tcp_syn_flood\" srcport=44511 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 47350 > threshold 2000, repeats 1495587 times since last log, pps 47823 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:11:26.000Z",
    "eventtype": "anomaly",
    "count": "1",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "4",
    "srcport": "36991",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, pps 14 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721887336487359",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "1322",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:11:26 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721887336487359 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/1322\" count=1 attack=\"tcp_port_scan\" srcport=36991 dstport=1322 attackid=100663398 policyid=4 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, pps 14 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:13:09.000Z",
    "eventtype": "anomaly",
    "count": "1779",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "4",
    "srcport": "54612",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 203 > threshold 202, repeats 1779 times since last log, pps 14 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698721989600289864",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "5030",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:13:09 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698721989600289864 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/5030\" count=1779 attack=\"tcp_port_scan\" srcport=54612 dstport=5030 attackid=100663398 policyid=4 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 203 > threshold 202, repeats 1779 times since last log, pps 14 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:21:35.000Z",
    "eventtype": "anomaly",
    "count": "1776",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "4",
    "srcport": "56760",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 203 > threshold 202, repeats 1776 times since last log, pps 16 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698722495601127297",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "1023",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:21:35 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698722495601127297 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/1023\" count=1776 attack=\"tcp_port_scan\" srcport=56760 dstport=1023 attackid=100663398 policyid=4 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 203 > threshold 202, repeats 1776 times since last log, pps 16 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:57:03.000Z",
    "eventtype": "anomaly",
    "count": "399096",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "11363",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 399096 times since last log, pps 5 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724624198074646",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:57:03 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724624198074646 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=399096 attack=\"tcp_syn_flood\" srcport=11363 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 399096 times since last log, pps 5 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:57:33.000Z",
    "eventtype": "anomaly",
    "count": "1935609",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "49340",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 62819 > threshold 2000, repeats 1935609 times since last log, pps 63447 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724654190753176",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:57:33 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724654190753176 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1935609 attack=\"tcp_syn_flood\" srcport=49340 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 62819 > threshold 2000, repeats 1935609 times since last log, pps 63447 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:58:04.000Z",
    "eventtype": "anomaly",
    "count": "1981855",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "65089",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 67714 > threshold 2000, repeats 1981855 times since last log, pps 68391 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724684190749357",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:58:04 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724684190749357 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1981855 attack=\"tcp_syn_flood\" srcport=65089 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67714 > threshold 2000, repeats 1981855 times since last log, pps 68391 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:58:34.000Z",
    "eventtype": "anomaly",
    "count": "1909733",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "9137",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 62732 > threshold 2000, repeats 1909733 times since last log, pps 63359 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724714190754004",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:58:34 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724714190754004 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1909733 attack=\"tcp_syn_flood\" srcport=9137 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 62732 > threshold 2000, repeats 1909733 times since last log, pps 63359 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:59:04.000Z",
    "eventtype": "anomaly",
    "count": "1691079",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "62067",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 55039 > threshold 2000, repeats 1691079 times since last log, pps 55589 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724744190757215",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:59:04 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724744190757215 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1691079 attack=\"tcp_syn_flood\" srcport=62067 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 55039 > threshold 2000, repeats 1691079 times since last log, pps 55589 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T03:59:34.000Z",
    "eventtype": "anomaly",
    "count": "1715737",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "8630",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 59782 > threshold 2000, repeats 1715737 times since last log, pps 60379 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724774190768603",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=10:59:34 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724774190768603 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1715737 attack=\"tcp_syn_flood\" srcport=8630 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 59782 > threshold 2000, repeats 1715737 times since last log, pps 60379 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:00:04.000Z",
    "eventtype": "anomaly",
    "count": "1815776",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "55719",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 61153 > threshold 2000, repeats 1815776 times since last log, pps 61764 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724804190756386",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:00:04 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724804190756386 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1815776 attack=\"tcp_syn_flood\" srcport=55719 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 61153 > threshold 2000, repeats 1815776 times since last log, pps 61764 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:00:34.000Z",
    "eventtype": "anomaly",
    "count": "1841876",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "62926",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 63380 > threshold 2000, repeats 1841876 times since last log, pps 64013 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724834190737780",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:00:34 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724834190737780 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1841876 attack=\"tcp_syn_flood\" srcport=62926 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 63380 > threshold 2000, repeats 1841876 times since last log, pps 64013 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:01:04.000Z",
    "eventtype": "anomaly",
    "count": "1743225",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "36651",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 57645 > threshold 2000, repeats 1743225 times since last log, pps 58221 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724864190745395",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:01:04 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724864190745395 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1743225 attack=\"tcp_syn_flood\" srcport=36651 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 57645 > threshold 2000, repeats 1743225 times since last log, pps 58221 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:01:34.000Z",
    "eventtype": "anomaly",
    "count": "1536391",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "448",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 51910 > threshold 2000, repeats 1536391 times since last log, pps 52429 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724894190772028",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:01:34 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724894190772028 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1536391 attack=\"tcp_syn_flood\" srcport=448 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 51910 > threshold 2000, repeats 1536391 times since last log, pps 52429 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:02:04.000Z",
    "eventtype": "anomaly",
    "count": "1576042",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "3603",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 53721 > threshold 2000, repeats 1576042 times since last log, pps 54258 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724924190748454",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:02:04 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724924190748454 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1576042 attack=\"tcp_syn_flood\" srcport=3603 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 53721 > threshold 2000, repeats 1576042 times since last log, pps 54258 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:02:33.000Z",
    "eventtype": "anomaly",
    "count": "1815964",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "50096",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 59734 > threshold 2000, repeats 1815964 times since last log, pps 60331 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724954190739720",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:02:33 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724954190739720 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1815964 attack=\"tcp_syn_flood\" srcport=50096 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 59734 > threshold 2000, repeats 1815964 times since last log, pps 60331 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:03:03.000Z",
    "eventtype": "anomaly",
    "count": "1833611",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "49007",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 62061 > threshold 2000, repeats 1833611 times since last log, pps 62681 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698724984190788205",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:03:03 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698724984190788205 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1833611 attack=\"tcp_syn_flood\" srcport=49007 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 62061 > threshold 2000, repeats 1833611 times since last log, pps 62681 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:03:33.000Z",
    "eventtype": "anomaly",
    "count": "1772087",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "51622",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 56904 > threshold 2000, repeats 1772087 times since last log, pps 57473 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725014190746214",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:03:33 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725014190746214 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1772087 attack=\"tcp_syn_flood\" srcport=51622 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 56904 > threshold 2000, repeats 1772087 times since last log, pps 57473 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:04:03.000Z",
    "eventtype": "anomaly",
    "count": "1637299",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "50521",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 53978 > threshold 2000, repeats 1637299 times since last log, pps 54517 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725044190751318",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:04:03 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725044190751318 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1637299 attack=\"tcp_syn_flood\" srcport=50521 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 53978 > threshold 2000, repeats 1637299 times since last log, pps 54517 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:04:33.000Z",
    "eventtype": "anomaly",
    "count": "1608595",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "20716",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 56604 > threshold 2000, repeats 1608595 times since last log, pps 57170 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725074190741556",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:04:33 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725074190741556 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1608595 attack=\"tcp_syn_flood\" srcport=20716 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 56604 > threshold 2000, repeats 1608595 times since last log, pps 57170 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:05:03.000Z",
    "eventtype": "anomaly",
    "count": "1770596",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "21840",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 61605 > threshold 2000, repeats 1770596 times since last log, pps 62221 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725104190744833",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:05:03 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725104190744833 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1770596 attack=\"tcp_syn_flood\" srcport=21840 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 61605 > threshold 2000, repeats 1770596 times since last log, pps 62221 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:05:33.000Z",
    "eventtype": "anomaly",
    "count": "1849148",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "36373",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 56356 > threshold 2000, repeats 1849148 times since last log, pps 56919 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725134191272634",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:05:33 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725134191272634 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1849148 attack=\"tcp_syn_flood\" srcport=36373 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 56356 > threshold 2000, repeats 1849148 times since last log, pps 56919 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:06:03.000Z",
    "eventtype": "anomaly",
    "count": "1625460",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "24238",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 53297 > threshold 2000, repeats 1625460 times since last log, pps 53829 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725164190749027",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:06:03 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725164190749027 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1625460 attack=\"tcp_syn_flood\" srcport=24238 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 53297 > threshold 2000, repeats 1625460 times since last log, pps 53829 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:06:33.000Z",
    "eventtype": "anomaly",
    "count": "1606814",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "58198",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 53259 > threshold 2000, repeats 1606814 times since last log, pps 53791 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725194190772793",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:06:33 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725194190772793 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1606814 attack=\"tcp_syn_flood\" srcport=58198 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 53259 > threshold 2000, repeats 1606814 times since last log, pps 53791 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:07:04.000Z",
    "eventtype": "anomaly",
    "count": "1500230",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "51244",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 52980 > threshold 2000, repeats 1500230 times since last log, pps 53509 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725224190748539",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:07:04 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725224190748539 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1500230 attack=\"tcp_syn_flood\" srcport=51244 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 52980 > threshold 2000, repeats 1500230 times since last log, pps 53509 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:07:33.000Z",
    "eventtype": "anomaly",
    "count": "1634199",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "48150",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 55879 > threshold 2000, repeats 1634199 times since last log, pps 56437 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725254190769079",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:07:33 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725254190769079 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1634199 attack=\"tcp_syn_flood\" srcport=48150 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 55879 > threshold 2000, repeats 1634199 times since last log, pps 56437 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:11:28.000Z",
    "eventtype": "anomaly",
    "count": "1775",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "4",
    "srcport": "56720",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 203 > threshold 202, repeats 1775 times since last log, pps 12 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725489006753910",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "44524",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:11:28 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725489006753910 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/44524\" count=1775 attack=\"tcp_port_scan\" srcport=56720 dstport=44524 attackid=100663398 policyid=4 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 203 > threshold 202, repeats 1775 times since last log, pps 12 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:11:58.000Z",
    "eventtype": "anomaly",
    "count": "27556",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "4",
    "srcport": "56722",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 1096 > threshold 202, repeats 27556 times since last log, pps 1117 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725519001758146",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "27601",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:11:58 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725519001758146 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/27601\" count=27556 attack=\"tcp_port_scan\" srcport=56722 dstport=27601 attackid=100663398 policyid=4 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1096 > threshold 202, repeats 27556 times since last log, pps 1117 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:12:28.000Z",
    "eventtype": "anomaly",
    "count": "37629",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "4",
    "srcport": "56722",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 1371 > threshold 202, repeats 37629 times since last log, pps 1384 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725549002114006",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "3554",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:12:28 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725549002114006 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/3554\" count=37629 attack=\"tcp_port_scan\" srcport=56722 dstport=3554 attackid=100663398 policyid=4 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1371 > threshold 202, repeats 37629 times since last log, pps 1384 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:12:58.000Z",
    "eventtype": "anomaly",
    "count": "45281",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "4",
    "srcport": "56722",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 1611 > threshold 202, repeats 45281 times since last log, pps 1627 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725579001381037",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "47558",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:12:58 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725579001381037 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/47558\" count=45281 attack=\"tcp_port_scan\" srcport=56722 dstport=47558 attackid=100663398 policyid=4 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1611 > threshold 202, repeats 45281 times since last log, pps 1627 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:15:08.000Z",
    "eventtype": "anomaly",
    "count": "1483206",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "9568",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 1483206 times since last log",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725708660125724",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:15:08 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725708660125724 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1483206 attack=\"tcp_syn_flood\" srcport=9568 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 1483206 times since last log\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:15:37.000Z",
    "eventtype": "anomaly",
    "count": "1891102",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "1498",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 55794 > threshold 2000, repeats 1891102 times since last log, pps 56351 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725738650765322",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:15:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725738650765322 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1891102 attack=\"tcp_syn_flood\" srcport=1498 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 55794 > threshold 2000, repeats 1891102 times since last log, pps 56351 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:16:13.000Z",
    "eventtype": "anomaly",
    "count": "1700506",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.31",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "62617",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 3668 > threshold 2000, repeats 1700506 times since last log, pps 19807 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725773568653864",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:16:13 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725773568653864 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.31 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1700506 attack=\"tcp_syn_flood\" srcport=62617 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 3668 > threshold 2000, repeats 1700506 times since last log, pps 19807 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:17:41.000Z",
    "eventtype": "anomaly",
    "count": "6",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "7604",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 6 times since last log, pps 3 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725861853695296",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:17:41 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725861853695296 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=6 attack=\"tcp_syn_flood\" srcport=7604 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 6 times since last log, pps 3 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:18:11.000Z",
    "eventtype": "anomaly",
    "count": "1888452",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "61720",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 59028 > threshold 2000, repeats 1888452 times since last log, pps 58325 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725891850759538",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:18:11 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725891850759538 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1888452 attack=\"tcp_syn_flood\" srcport=61720 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 59028 > threshold 2000, repeats 1888452 times since last log, pps 58325 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:18:41.000Z",
    "eventtype": "anomaly",
    "count": "1636876",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "61412",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 51613 > threshold 2000, repeats 1636876 times since last log, pps 52129 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698725921850770081",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:18:41 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698725921850770081 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1636876 attack=\"tcp_syn_flood\" srcport=61412 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 51613 > threshold 2000, repeats 1636876 times since last log, pps 52129 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:23:05.000Z",
    "eventtype": "anomaly",
    "count": "20461",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "59077",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, repeats 20461 times since last log, pps 14 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698726185483292581",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "35511",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:23:05 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698726185483292581 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/35511\" count=20461 attack=\"tcp_port_scan\" srcport=59077 dstport=35511 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, repeats 20461 times since last log, pps 14 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:23:35.000Z",
    "eventtype": "anomaly",
    "count": "27573",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "59075",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 1106 > threshold 200, repeats 27573 times since last log, pps 1117 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698726215481560107",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "12643",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:23:35 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698726215481560107 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/12643\" count=27573 attack=\"tcp_port_scan\" srcport=59075 dstport=12643 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1106 > threshold 200, repeats 27573 times since last log, pps 1117 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:24:05.000Z",
    "eventtype": "anomaly",
    "count": "37672",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "59077",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 1373 > threshold 200, repeats 37672 times since last log, pps 1386 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698726245482621191",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "27062",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:24:05 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698726245482621191 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/27062\" count=37672 attack=\"tcp_port_scan\" srcport=59077 dstport=27062 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1373 > threshold 200, repeats 37672 times since last log, pps 1386 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:24:35.000Z",
    "eventtype": "anomaly",
    "count": "45322",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "59075",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 1614 > threshold 200, repeats 45322 times since last log, pps 1630 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698726275482795425",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "48846",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:24:35 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698726275482795425 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/48846\" count=45322 attack=\"tcp_port_scan\" srcport=59075 dstport=48846 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1614 > threshold 200, repeats 45322 times since last log, pps 1630 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:38:48.000Z",
    "eventtype": "anomaly",
    "count": "20360",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "35230",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, repeats 20360 times since last log, pps 16 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698727129700453185",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "5754",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:38:48 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698727129700453185 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/5754\" count=20360 attack=\"tcp_port_scan\" srcport=35230 dstport=5754 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, repeats 20360 times since last log, pps 16 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:39:18.000Z",
    "eventtype": "anomaly",
    "count": "27569",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "35232",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 1100 > threshold 200, repeats 27569 times since last log, pps 1111 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698727159692029615",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "52450",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:39:18 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698727159692029615 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/52450\" count=27569 attack=\"tcp_port_scan\" srcport=35232 dstport=52450 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1100 > threshold 200, repeats 27569 times since last log, pps 1111 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:39:48.000Z",
    "eventtype": "anomaly",
    "count": "37491",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "35232",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 1379 > threshold 200, repeats 37491 times since last log, pps 1392 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698727189690868878",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "36337",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:39:48 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698727189690868878 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/36337\" count=37491 attack=\"tcp_port_scan\" srcport=35232 dstport=36337 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1379 > threshold 200, repeats 37491 times since last log, pps 1392 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:40:19.000Z",
    "eventtype": "anomaly",
    "count": "45190",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "35230",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 1607 > threshold 200, repeats 45190 times since last log, pps 1623 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698727219691438806",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "60636",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:40:19 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698727219691438806 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/60636\" count=45190 attack=\"tcp_port_scan\" srcport=35230 dstport=60636 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1607 > threshold 200, repeats 45190 times since last log, pps 1623 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:44:26.000Z",
    "eventtype": "anomaly",
    "count": "20675",
    "attackid": "100663398",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "1795",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, repeats 20675 times since last log",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698727466546597165",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:44:26 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698727466546597165 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"HTTP\" count=20675 attack=\"tcp_port_scan\" srcport=1795 dstport=80 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, repeats 20675 times since last log\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:44:26.000Z",
    "eventtype": "anomaly",
    "count": "230781",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "8575",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 230781 times since last log",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698727466614726568",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:44:26 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698727466614726568 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=230781 attack=\"tcp_syn_flood\" srcport=8575 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 230781 times since last log\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:44:56.000Z",
    "eventtype": "anomaly",
    "count": "1859197",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "33978",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 57802 > threshold 2000, repeats 1859197 times since last log, pps 58380 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698727496610760447",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:44:56 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698727496610760447 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1859197 attack=\"tcp_syn_flood\" srcport=33978 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 57802 > threshold 2000, repeats 1859197 times since last log, pps 58380 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:45:26.000Z",
    "eventtype": "anomaly",
    "count": "1738266",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "2859",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 57582 > threshold 2000, repeats 1738266 times since last log, pps 58157 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698727526610775437",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:45:26 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698727526610775437 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1738266 attack=\"tcp_syn_flood\" srcport=2859 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 57582 > threshold 2000, repeats 1738266 times since last log, pps 58157 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "@timestamp": "2023-10-31T04:45:56.000Z",
    "eventtype": "anomaly",
    "count": "1660302",
    "attackid": "100663396",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "devname": "FortiGate-VM64",
    "logid": "0720018432",
    "level": "alert",
    "devid": "FGVMEVEM6MVTJLBA",
    "policyid": "3",
    "srcport": "24782",
    "tags": [
      "location_a"
    ],
    "msg": "anomaly: tcp_syn_flood, 53033 > threshold 2000, repeats 1660302 times since last log, pps 53563 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "vd": "root",
    "craction": "4096",
    "action": "clear_session",
    "host": {
      "ip": "192.168.10.1"
    },
    "srccountry": "Reserved",
    "eventtime": "1698727556610757499",
    "ftg_type": "utm",
    "proto": "6",
    "crscore": "50",
    "sessionid": "0",
    "dstport": "80",
    "crlevel": "critical",
    "@version": "1",
    "ftg_subtype": "anomaly",
    "srcintf": "port1",
    "severity": "critical",
    "event": {
      "original": "<185>date=2023-10-31 time=11:45:56 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698727556610757499 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1660302 attack=\"tcp_syn_flood\" srcport=24782 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 53033 > threshold 2000, repeats 1660302 times since last log, pps 53563 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    }
  },
  {
    "policytype": "DoS-policy",
    "count": "20773",
    "@version": "1",
    "tz": "+0700",
    "srcport": "39039",
    "dstport": "17326",
    "severity": "critical",
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, repeats 20773 times since last log, pps 18 of prior second",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "attack": "tcp_port_scan",
    "eventtype": "anomaly",
    "vd": "root",
    "@timestamp": "2023-11-01T03:25:50.000Z",
    "proto": "6",
    "eventtime": "1698809150340210790",
    "event": {
      "original": "<185>date=2023-11-01 time=10:25:50 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698809150340210790 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/17326\" count=20773 attack=\"tcp_port_scan\" srcport=39039 dstport=17326 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, repeats 20773 times since last log, pps 18 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "policyid": "3",
    "craction": "4096",
    "logid": "0720018432",
    "attackid": "100663398",
    "level": "alert",
    "type": "forti_log",
    "srccountry": "Reserved",
    "devid": "FGVMEVEM6MVTJLBA",
    "devname": "FortiGate-VM64",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "sessionid": "0",
    "tags": [
      "location_a"
    ],
    "ftg_type": "utm",
    "srcintfrole": "wan",
    "srcip": "172.16.12.27",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "srcintf": "port1",
    "dstip": "172.16.12.44",
    "crscore": "50"
  },
  {
    "policytype": "DoS-policy",
    "count": "27843",
    "@version": "1",
    "tz": "+0700",
    "srcport": "39041",
    "dstport": "49197",
    "severity": "critical",
    "msg": "anomaly: tcp_port_scan, 1099 > threshold 200, repeats 27843 times since last log, pps 1109 of prior second",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "attack": "tcp_port_scan",
    "eventtype": "anomaly",
    "vd": "root",
    "@timestamp": "2023-11-01T03:26:20.000Z",
    "proto": "6",
    "eventtime": "1698809180339103217",
    "event": {
      "original": "<185>date=2023-11-01 time=10:26:20 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698809180339103217 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/49197\" count=27843 attack=\"tcp_port_scan\" srcport=39041 dstport=49197 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1099 > threshold 200, repeats 27843 times since last log, pps 1109 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "policyid": "3",
    "craction": "4096",
    "logid": "0720018432",
    "attackid": "100663398",
    "level": "alert",
    "type": "forti_log",
    "srccountry": "Reserved",
    "devid": "FGVMEVEM6MVTJLBA",
    "devname": "FortiGate-VM64",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "sessionid": "0",
    "tags": [
      "location_a"
    ],
    "ftg_type": "utm",
    "srcintfrole": "wan",
    "srcip": "172.16.12.27",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "srcintf": "port1",
    "dstip": "172.16.12.44",
    "crscore": "50"
  },
  {
    "policytype": "DoS-policy",
    "count": "37830",
    "@version": "1",
    "tz": "+0700",
    "srcport": "39041",
    "dstport": "52942",
    "severity": "critical",
    "msg": "anomaly: tcp_port_scan, 1385 > threshold 200, repeats 37830 times since last log, pps 1398 of prior second",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "attack": "tcp_port_scan",
    "eventtype": "anomaly",
    "vd": "root",
    "@timestamp": "2023-11-01T03:26:49.000Z",
    "proto": "6",
    "eventtime": "1698809210339465846",
    "event": {
      "original": "<185>date=2023-11-01 time=10:26:49 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698809210339465846 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/52942\" count=37830 attack=\"tcp_port_scan\" srcport=39041 dstport=52942 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1385 > threshold 200, repeats 37830 times since last log, pps 1398 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "policyid": "3",
    "craction": "4096",
    "logid": "0720018432",
    "attackid": "100663398",
    "level": "alert",
    "type": "forti_log",
    "srccountry": "Reserved",
    "devid": "FGVMEVEM6MVTJLBA",
    "devname": "FortiGate-VM64",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "sessionid": "0",
    "tags": [
      "location_a"
    ],
    "ftg_type": "utm",
    "srcintfrole": "wan",
    "srcip": "172.16.12.27",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "srcintf": "port1",
    "dstip": "172.16.12.44",
    "crscore": "50"
  },
  {
    "policytype": "DoS-policy",
    "count": "45359",
    "@version": "1",
    "tz": "+0700",
    "srcport": "39039",
    "dstport": "23702",
    "severity": "critical",
    "msg": "anomaly: tcp_port_scan, 1620 > threshold 200, repeats 45359 times since last log, pps 1636 of prior second",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "attack": "tcp_port_scan",
    "eventtype": "anomaly",
    "vd": "root",
    "@timestamp": "2023-11-01T03:27:19.000Z",
    "proto": "6",
    "eventtime": "1698809240339354015",
    "event": {
      "original": "<185>date=2023-11-01 time=10:27:19 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698809240339354015 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/23702\" count=45359 attack=\"tcp_port_scan\" srcport=39039 dstport=23702 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1620 > threshold 200, repeats 45359 times since last log, pps 1636 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "policyid": "3",
    "craction": "4096",
    "logid": "0720018432",
    "attackid": "100663398",
    "level": "alert",
    "type": "forti_log",
    "srccountry": "Reserved",
    "devid": "FGVMEVEM6MVTJLBA",
    "devname": "FortiGate-VM64",
    "action": "detected",
    "host": {
      "ip": "192.168.10.1"
    },
    "sessionid": "0",
    "tags": [
      "location_a"
    ],
    "ftg_type": "utm",
    "srcintfrole": "wan",
    "srcip": "172.16.12.27",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "srcintf": "port1",
    "dstip": "172.16.12.44",
    "crscore": "50"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:47:12 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810433051447076 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1 attack=\"tcp_syn_flood\" srcport=9993 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 2001 > threshold 2000\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "1",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:47:12.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810433051447076",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "clear_session",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "9993",
    "attackid": "100663396",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_syn_flood, 2001 > threshold 2000",
    "srccountry": "Reserved"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:47:12 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810432977658074 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"HTTP\" count=19892 attack=\"tcp_port_scan\" srcport=1930 dstport=80 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, repeats 19892 times since last log\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "19892",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:47:12.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810432977658074",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "detected",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_port_scan",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "1930",
    "attackid": "100663398",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, repeats 19892 times since last log",
    "srccountry": "Reserved"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:47:42 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810463048698732 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1982771 attack=\"tcp_syn_flood\" srcport=27862 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68390 > threshold 2000, repeats 1982771 times since last log, pps 69073 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "1982771",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:47:42.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810463048698732",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "clear_session",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "27862",
    "attackid": "100663396",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_syn_flood, 68390 > threshold 2000, repeats 1982771 times since last log, pps 69073 of prior second",
    "srccountry": "Reserved"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:48:12 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810493048701266 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2032909 attack=\"tcp_syn_flood\" srcport=29155 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68362 > threshold 2000, repeats 2032909 times since last log, pps 69045 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "2032909",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:48:12.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810493048701266",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "clear_session",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "29155",
    "attackid": "100663396",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_syn_flood, 68362 > threshold 2000, repeats 2032909 times since last log, pps 69045 of prior second",
    "srccountry": "Reserved"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:48:42 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810523048697207 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2047941 attack=\"tcp_syn_flood\" srcport=45480 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68956 > threshold 2000, repeats 2047941 times since last log, pps 69645 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "2047941",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:48:42.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810523048697207",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "clear_session",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "45480",
    "attackid": "100663396",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_syn_flood, 68956 > threshold 2000, repeats 2047941 times since last log, pps 69645 of prior second",
    "srccountry": "Reserved"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:49:12 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810553048783378 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1943760 attack=\"tcp_syn_flood\" srcport=23437 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 54813 > threshold 2000, repeats 1943760 times since last log, pps 55361 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "1943760",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:49:12.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810553048783378",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "clear_session",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "23437",
    "attackid": "100663396",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_syn_flood, 54813 > threshold 2000, repeats 1943760 times since last log, pps 55361 of prior second",
    "srccountry": "Reserved"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:49:42 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810583048783690 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1834954 attack=\"tcp_syn_flood\" srcport=24569 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68053 > threshold 2000, repeats 1834954 times since last log, pps 68733 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "1834954",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:49:42.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810583048783690",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "clear_session",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "24569",
    "attackid": "100663396",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_syn_flood, 68053 > threshold 2000, repeats 1834954 times since last log, pps 68733 of prior second",
    "srccountry": "Reserved"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:50:12 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810613048688732 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1762370 attack=\"tcp_syn_flood\" srcport=17441 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 59508 > threshold 2000, repeats 1762370 times since last log, pps 60103 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "1762370",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:50:12.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810613048688732",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "clear_session",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "17441",
    "attackid": "100663396",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_syn_flood, 59508 > threshold 2000, repeats 1762370 times since last log, pps 60103 of prior second",
    "srccountry": "Reserved"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:50:42 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810643048683384 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1890223 attack=\"tcp_syn_flood\" srcport=7167 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67708 > threshold 2000, repeats 1890223 times since last log, pps 68385 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "1890223",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:50:42.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810643048683384",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "clear_session",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "7167",
    "attackid": "100663396",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_syn_flood, 67708 > threshold 2000, repeats 1890223 times since last log, pps 68385 of prior second",
    "srccountry": "Reserved"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:51:12 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810673048690578 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1990949 attack=\"tcp_syn_flood\" srcport=32012 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68165 > threshold 2000, repeats 1990949 times since last log, pps 68846 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "1990949",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:51:12.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810673048690578",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "clear_session",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "32012",
    "attackid": "100663396",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_syn_flood, 68165 > threshold 2000, repeats 1990949 times since last log, pps 68846 of prior second",
    "srccountry": "Reserved"
  },
  {
    "dstport": "80",
    "eventtype": "anomaly",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "event": {
      "original": "<185>date=2023-11-01 time=10:51:42 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810703048704371 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2019056 attack=\"tcp_syn_flood\" srcport=20425 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67534 > threshold 2000, repeats 2019056 times since last log, pps 68209 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "count": "2019056",
    "dstip": "172.16.12.44",
    "srcintfrole": "wan",
    "devid": "FGVMEVEM6MVTJLBA",
    "tz": "+0700",
    "crscore": "50",
    "ftg_type": "utm",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "@version": "1",
    "type": "forti_log",
    "@timestamp": "2023-11-01T03:51:42.000Z",
    "logid": "0720018432",
    "tags": [
      "location_a"
    ],
    "sessionid": "0",
    "proto": "6",
    "srcip": "172.16.12.27",
    "eventtime": "1698810703048704371",
    "ftg_subtype": "anomaly",
    "crlevel": "critical",
    "level": "alert",
    "action": "clear_session",
    "srcintf": "port1",
    "host": {
      "ip": "192.168.10.1"
    },
    "severity": "critical",
    "policyid": "3",
    "attack": "tcp_syn_flood",
    "policytype": "DoS-policy",
    "craction": "4096",
    "srcport": "20425",
    "attackid": "100663396",
    "devname": "FortiGate-VM64",
    "vd": "root",
    "msg": "anomaly: tcp_syn_flood, 67534 > threshold 2000, repeats 2019056 times since last log, pps 68209 of prior second",
    "srccountry": "Reserved"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:55:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810907596215226 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"HTTP\" count=1800 attack=\"tcp_port_scan\" srcport=1270 dstport=80 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, repeats 1800 times since last log\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "1800",
    "srcport": "1270",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:55:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, repeats 1800 times since last log",
    "srccountry": "Reserved",
    "attackid": "100663398",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_port_scan",
    "dstip": "172.16.12.44",
    "action": "detected",
    "eventtime": "1698810907596215226",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:55:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810907683184441 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=555085 attack=\"tcp_syn_flood\" srcport=10588 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 555085 times since last log\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "555085",
    "srcport": "10588",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:55:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 2001 > threshold 2000, repeats 555085 times since last log",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698810907683184441",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 190
      }
    },
    "ui": "http(172.16.12.31)",
    "type": "forti_log",
    "event": {
      "original": "<190>date=2023-11-01 time=10:55:28 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810928828742125 tz=\"+0700\" logid=\"0100032003\" type=\"event\" subtype=\"system\" level=\"information\" vd=\"root\" logdesc=\"Admin logout successful\" sn=\"1698810547\" user=\"admin\" ui=\"http(172.16.12.31)\" method=\"http\" srcip=172.16.12.31 dstip=172.16.12.44 action=\"logout\" status=\"success\" duration=381 reason=\"timeout\" msg=\"Administrator admin timed out on http(172.16.12.31)\""
    },
    "user": "admin",
    "logid": "0100032003",
    "srcip": "172.16.12.31",
    "dstip": "172.16.12.44",
    "tz": "+0700",
    "action": "logout",
    "eventtime": "1698810928828742125",
    "@timestamp": "2023-11-01T03:55:28.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "reason": "timeout",
    "method": "http",
    "ftg_type": "event",
    "@version": "1",
    "status": "success",
    "vd": "root",
    "msg": "Administrator admin timed out on http(172.16.12.31)",
    "ftg_subtype": "system",
    "logdesc": "Admin logout successful",
    "level": "information",
    "sn": "1698810547",
    "duration": "381",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:55:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810937678695326 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2014193 attack=\"tcp_syn_flood\" srcport=60211 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69413 > threshold 2000, repeats 2014193 times since last log, pps 70107 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2014193",
    "srcport": "60211",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:55:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69413 > threshold 2000, repeats 2014193 times since last log, pps 70107 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698810937678695326",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:56:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810967678745090 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2052824 attack=\"tcp_syn_flood\" srcport=15883 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69249 > threshold 2000, repeats 2052824 times since last log, pps 69941 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2052824",
    "srcport": "15883",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:56:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69249 > threshold 2000, repeats 2052824 times since last log, pps 69941 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698810967678745090",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=10:56:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810991153159442 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=0 mem=36 totalsession=6 disk=17 bandwidth=\"0/25103\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=2725 waninfo=\"name=port1,bytes=801178/1546527605,packets=7324/24155800;\" msg=\"Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "2725",
    "cpu": "0",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "6",
    "tz": "+0700",
    "bandwidth": "0/25103",
    "action": "perf-stats",
    "eventtime": "1698810991153159442",
    "@timestamp": "2023-11-01T03:56:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=801178/1546527605,packets=7324/24155800;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:56:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698810997678698310 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2056064 attack=\"tcp_syn_flood\" srcport=40331 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69667 > threshold 2000, repeats 2056064 times since last log, pps 70363 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2056064",
    "srcport": "40331",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:56:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69667 > threshold 2000, repeats 2056064 times since last log, pps 70363 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698810997678698310",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:57:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811027678701576 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2058027 attack=\"tcp_syn_flood\" srcport=1206 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68649 > threshold 2000, repeats 2058027 times since last log, pps 69335 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2058027",
    "srcport": "1206",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:57:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68649 > threshold 2000, repeats 2058027 times since last log, pps 69335 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811027678701576",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:57:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811057678707578 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2057614 attack=\"tcp_syn_flood\" srcport=27204 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69166 > threshold 2000, repeats 2057614 times since last log, pps 69857 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2057614",
    "srcport": "27204",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:57:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69166 > threshold 2000, repeats 2057614 times since last log, pps 69857 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811057678707578",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:58:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811087678713097 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2056007 attack=\"tcp_syn_flood\" srcport=51595 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68817 > threshold 2000, repeats 2056007 times since last log, pps 69505 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2056007",
    "srcport": "51595",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:58:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68817 > threshold 2000, repeats 2056007 times since last log, pps 69505 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811087678713097",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:58:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811117678696361 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2052142 attack=\"tcp_syn_flood\" srcport=6588 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68940 > threshold 2000, repeats 2052142 times since last log, pps 69629 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2052142",
    "srcport": "6588",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:58:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68940 > threshold 2000, repeats 2052142 times since last log, pps 69629 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811117678696361",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:59:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811147678690416 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2062525 attack=\"tcp_syn_flood\" srcport=37497 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69195 > threshold 2000, repeats 2062525 times since last log, pps 69886 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2062525",
    "srcport": "37497",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:59:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69195 > threshold 2000, repeats 2062525 times since last log, pps 69886 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811147678690416",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 190
      }
    },
    "total": "253",
    "event": {
      "original": "<190>date=2023-11-01 time=10:59:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811170867114613 tz=\"+0700\" logid=\"0100026003\" type=\"event\" subtype=\"system\" level=\"information\" vd=\"root\" logdesc=\"DHCP statistics\" interface=\"fortilink\" total=253 used=0 msg=\"DHCP statistics\""
    },
    "type": "forti_log",
    "logid": "0100026003",
    "tz": "+0700",
    "eventtime": "1698811170867114613",
    "@timestamp": "2023-11-01T03:59:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "used": "0",
    "interface": "fortilink",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "DHCP statistics",
    "ftg_subtype": "system",
    "logdesc": "DHCP statistics",
    "level": "information",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=10:59:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811177678693555 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2053826 attack=\"tcp_syn_flood\" srcport=59716 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69059 > threshold 2000, repeats 2053826 times since last log, pps 69749 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2053826",
    "srcport": "59716",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T03:59:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69059 > threshold 2000, repeats 2053826 times since last log, pps 69749 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811177678693555",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:00:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811207678700051 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2056369 attack=\"tcp_syn_flood\" srcport=18933 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68300 > threshold 2000, repeats 2056369 times since last log, pps 68983 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2056369",
    "srcport": "18933",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:00:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68300 > threshold 2000, repeats 2056369 times since last log, pps 68983 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811207678700051",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:00:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811237678708015 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2057283 attack=\"tcp_syn_flood\" srcport=44600 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69322 > threshold 2000, repeats 2057283 times since last log, pps 70015 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2057283",
    "srcport": "44600",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:00:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69322 > threshold 2000, repeats 2057283 times since last log, pps 70015 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811237678708015",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:01:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811267678689148 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2053173 attack=\"tcp_syn_flood\" srcport=621 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67392 > threshold 2000, repeats 2053173 times since last log, pps 68065 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2053173",
    "srcport": "621",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:01:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67392 > threshold 2000, repeats 2053173 times since last log, pps 68065 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811267678689148",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=11:01:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811291158026977 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=1 mem=36 totalsession=10 disk=17 bandwidth=\"0/25050\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=3025 waninfo=\"name=port1,bytes=805997/2862982795,packets=7381/44725087;\" msg=\"Performance statistics: average CPU: 1, memory:  36, concurrent sessions:  10, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "3025",
    "cpu": "1",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "10",
    "tz": "+0700",
    "bandwidth": "0/25050",
    "action": "perf-stats",
    "eventtime": "1698811291158026977",
    "@timestamp": "2023-11-01T04:01:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 1, memory:  36, concurrent sessions:  10, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=805997/2862982795,packets=7381/44725087;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:01:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811297678698414 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2060605 attack=\"tcp_syn_flood\" srcport=29610 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69021 > threshold 2000, repeats 2060605 times since last log, pps 69711 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2060605",
    "srcport": "29610",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:01:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69021 > threshold 2000, repeats 2060605 times since last log, pps 69711 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811297678698414",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:02:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811327678707151 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2058897 attack=\"tcp_syn_flood\" srcport=56891 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68403 > threshold 2000, repeats 2058897 times since last log, pps 69087 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2058897",
    "srcport": "56891",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:02:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68403 > threshold 2000, repeats 2058897 times since last log, pps 69087 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811327678707151",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:02:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811357678697517 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2062158 attack=\"tcp_syn_flood\" srcport=21897 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68196 > threshold 2000, repeats 2062158 times since last log, pps 68877 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2062158",
    "srcport": "21897",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:02:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68196 > threshold 2000, repeats 2062158 times since last log, pps 68877 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811357678697517",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:03:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811387678696513 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2063334 attack=\"tcp_syn_flood\" srcport=53627 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68059 > threshold 2000, repeats 2063334 times since last log, pps 68739 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2063334",
    "srcport": "53627",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:03:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68059 > threshold 2000, repeats 2063334 times since last log, pps 68739 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811387678696513",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:03:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811417678686762 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2054517 attack=\"tcp_syn_flood\" srcport=10992 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69190 > threshold 2000, repeats 2054517 times since last log, pps 69881 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2054517",
    "srcport": "10992",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:03:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69190 > threshold 2000, repeats 2054517 times since last log, pps 69881 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811417678686762",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:04:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811447678701242 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2055605 attack=\"tcp_syn_flood\" srcport=35149 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68845 > threshold 2000, repeats 2055605 times since last log, pps 69533 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2055605",
    "srcport": "35149",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:04:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68845 > threshold 2000, repeats 2055605 times since last log, pps 69533 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811447678701242",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:04:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811477678701530 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2044872 attack=\"tcp_syn_flood\" srcport=48405 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68695 > threshold 2000, repeats 2044872 times since last log, pps 69381 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2044872",
    "srcport": "48405",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:04:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68695 > threshold 2000, repeats 2044872 times since last log, pps 69381 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811477678701530",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:05:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811507678695731 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2043018 attack=\"tcp_syn_flood\" srcport=59807 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 65780 > threshold 2000, repeats 2043018 times since last log, pps 66437 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2043018",
    "srcport": "59807",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:05:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 65780 > threshold 2000, repeats 2043018 times since last log, pps 66437 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811507678695731",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:05:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811537678687676 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2032909 attack=\"tcp_syn_flood\" srcport=61111 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69013 > threshold 2000, repeats 2032909 times since last log, pps 69703 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2032909",
    "srcport": "61111",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:05:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69013 > threshold 2000, repeats 2032909 times since last log, pps 69703 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811537678687676",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:06:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811567678706911 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1983498 attack=\"tcp_syn_flood\" srcport=12993 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67031 > threshold 2000, repeats 1983498 times since last log, pps 67701 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "1983498",
    "srcport": "12993",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:06:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67031 > threshold 2000, repeats 1983498 times since last log, pps 67701 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811567678706911",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=11:06:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811591151999906 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=0 mem=36 totalsession=6 disk=17 bandwidth=\"0/25085\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=3325 waninfo=\"name=port1,bytes=810135/4172062977,packets=7435/65179127;\" msg=\"Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "3325",
    "cpu": "0",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "6",
    "tz": "+0700",
    "bandwidth": "0/25085",
    "action": "perf-stats",
    "eventtime": "1698811591151999906",
    "@timestamp": "2023-11-01T04:06:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=810135/4172062977,packets=7435/65179127;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:06:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811597678722582 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2052265 attack=\"tcp_syn_flood\" srcport=33642 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69465 > threshold 2000, repeats 2052265 times since last log, pps 70159 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2052265",
    "srcport": "33642",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:06:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69465 > threshold 2000, repeats 2052265 times since last log, pps 70159 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811597678722582",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:07:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811627678703945 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2058861 attack=\"tcp_syn_flood\" srcport=60887 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68332 > threshold 2000, repeats 2058861 times since last log, pps 69015 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2058861",
    "srcport": "60887",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:07:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68332 > threshold 2000, repeats 2058861 times since last log, pps 69015 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811627678703945",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:07:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811657678701600 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2053648 attack=\"tcp_syn_flood\" srcport=17383 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69196 > threshold 2000, repeats 2053648 times since last log, pps 69887 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2053648",
    "srcport": "17383",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:07:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69196 > threshold 2000, repeats 2053648 times since last log, pps 69887 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811657678701600",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:08:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811687678735159 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2016688 attack=\"tcp_syn_flood\" srcport=2701 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 65376 > threshold 2000, repeats 2016688 times since last log, pps 66029 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2016688",
    "srcport": "2701",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:08:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 65376 > threshold 2000, repeats 2016688 times since last log, pps 66029 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811687678735159",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:08:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811717678684813 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1961392 attack=\"tcp_syn_flood\" srcport=63549 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67603 > threshold 2000, repeats 1961392 times since last log, pps 68279 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "1961392",
    "srcport": "63549",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:08:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67603 > threshold 2000, repeats 1961392 times since last log, pps 68279 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811717678684813",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:09:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811747678692120 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2048702 attack=\"tcp_syn_flood\" srcport=15099 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67013 > threshold 2000, repeats 2048702 times since last log, pps 67683 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2048702",
    "srcport": "15099",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:09:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67013 > threshold 2000, repeats 2048702 times since last log, pps 67683 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811747678692120",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:09:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811777678698327 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2063475 attack=\"tcp_syn_flood\" srcport=46958 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68708 > threshold 2000, repeats 2063475 times since last log, pps 69395 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2063475",
    "srcport": "46958",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:09:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68708 > threshold 2000, repeats 2063475 times since last log, pps 69395 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811777678698327",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:10:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811807678688858 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2065390 attack=\"tcp_syn_flood\" srcport=15196 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68637 > threshold 2000, repeats 2065390 times since last log, pps 69323 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2065390",
    "srcport": "15196",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:10:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68637 > threshold 2000, repeats 2065390 times since last log, pps 69323 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811807678688858",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:10:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811837678699581 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2064833 attack=\"tcp_syn_flood\" srcport=48413 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69849 > threshold 2000, repeats 2064833 times since last log, pps 70547 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2064833",
    "srcport": "48413",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:10:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69849 > threshold 2000, repeats 2064833 times since last log, pps 70547 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811837678699581",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:11:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811867678685602 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2068312 attack=\"tcp_syn_flood\" srcport=19581 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67934 > threshold 2000, repeats 2068312 times since last log, pps 68613 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2068312",
    "srcport": "19581",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:11:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67934 > threshold 2000, repeats 2068312 times since last log, pps 68613 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811867678685602",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=11:11:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811891154697669 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=0 mem=36 totalsession=6 disk=17 bandwidth=\"0/24547\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=3625 waninfo=\"name=port1,bytes=814693/5480786639,packets=7491/85627540;\" msg=\"Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "3625",
    "cpu": "0",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "6",
    "tz": "+0700",
    "bandwidth": "0/24547",
    "action": "perf-stats",
    "eventtime": "1698811891154697669",
    "@timestamp": "2023-11-01T04:11:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=814693/5480786639,packets=7491/85627540;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:11:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811897678692727 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2035433 attack=\"tcp_syn_flood\" srcport=23398 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68655 > threshold 2000, repeats 2035433 times since last log, pps 69341 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2035433",
    "srcport": "23398",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:11:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68655 > threshold 2000, repeats 2035433 times since last log, pps 69341 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811897678692727",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:12:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811927678689885 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2052344 attack=\"tcp_syn_flood\" srcport=44136 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69860 > threshold 2000, repeats 2052344 times since last log, pps 69605 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2052344",
    "srcport": "44136",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:12:06.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69860 > threshold 2000, repeats 2052344 times since last log, pps 69605 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811927678689885",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:12:36 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811957678697400 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2065574 attack=\"tcp_syn_flood\" srcport=12558 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68344 > threshold 2000, repeats 2065574 times since last log, pps 69027 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2065574",
    "srcport": "12558",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:12:36.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68344 > threshold 2000, repeats 2065574 times since last log, pps 69027 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811957678697400",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:13:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698811987678699165 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2070877 attack=\"tcp_syn_flood\" srcport=51819 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69663 > threshold 2000, repeats 2070877 times since last log, pps 70359 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2070877",
    "srcport": "51819",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:13:06.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69663 > threshold 2000, repeats 2070877 times since last log, pps 70359 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698811987678699165",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:13:36 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812017678697850 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2059942 attack=\"tcp_syn_flood\" srcport=14609 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68530 > threshold 2000, repeats 2059942 times since last log, pps 69215 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2059942",
    "srcport": "14609",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:13:36.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68530 > threshold 2000, repeats 2059942 times since last log, pps 69215 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812017678697850",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:14:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812047678707548 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1987547 attack=\"tcp_syn_flood\" srcport=36093 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 62800 > threshold 2000, repeats 1987547 times since last log, pps 63427 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "1987547",
    "srcport": "36093",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:14:06.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 62800 > threshold 2000, repeats 1987547 times since last log, pps 63427 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812047678707548",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:14:36 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812077678711322 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2005304 attack=\"tcp_syn_flood\" srcport=9781 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69000 > threshold 2000, repeats 2005304 times since last log, pps 69689 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2005304",
    "srcport": "9781",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:14:36.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69000 > threshold 2000, repeats 2005304 times since last log, pps 69689 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812077678711322",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:15:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812107678690681 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2034312 attack=\"tcp_syn_flood\" srcport=12477 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69124 > threshold 2000, repeats 2034312 times since last log, pps 69815 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2034312",
    "srcport": "12477",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:15:06.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69124 > threshold 2000, repeats 2034312 times since last log, pps 69815 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812107678690681",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:15:36 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812137678680414 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2069798 attack=\"tcp_syn_flood\" srcport=50659 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69075 > threshold 2000, repeats 2069798 times since last log, pps 69765 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2069798",
    "srcport": "50659",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:15:36.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69075 > threshold 2000, repeats 2069798 times since last log, pps 69765 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812137678680414",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:16:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812167678684909 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2068076 attack=\"tcp_syn_flood\" srcport=21583 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67847 > threshold 2000, repeats 2068076 times since last log, pps 68525 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2068076",
    "srcport": "21583",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:16:06.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67847 > threshold 2000, repeats 2068076 times since last log, pps 68525 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812167678684909",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=11:16:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812191152653132 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=0 mem=36 totalsession=6 disk=17 bandwidth=\"0/24770\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=3925 waninfo=\"name=port1,bytes=821107/6789506576,packets=7567/106075866;\" msg=\"Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "3925",
    "cpu": "0",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "6",
    "tz": "+0700",
    "bandwidth": "0/24770",
    "action": "perf-stats",
    "eventtime": "1698812191152653132",
    "@timestamp": "2023-11-01T04:16:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=821107/6789506576,packets=7567/106075866;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:16:36 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812197678681943 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2018708 attack=\"tcp_syn_flood\" srcport=8675 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67805 > threshold 2000, repeats 2018708 times since last log, pps 68483 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2018708",
    "srcport": "8675",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:16:36.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67805 > threshold 2000, repeats 2018708 times since last log, pps 68483 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812197678681943",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:17:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812227678693153 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1967936 attack=\"tcp_syn_flood\" srcport=10531 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67342 > threshold 2000, repeats 1967936 times since last log, pps 68015 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "1967936",
    "srcport": "10531",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:17:06.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67342 > threshold 2000, repeats 1967936 times since last log, pps 68015 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812227678693153",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:17:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812257678692551 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2062053 attack=\"tcp_syn_flood\" srcport=40968 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69417 > threshold 2000, repeats 2062053 times since last log, pps 70111 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2062053",
    "srcport": "40968",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:17:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69417 > threshold 2000, repeats 2062053 times since last log, pps 70111 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812257678692551",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:18:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812287678702967 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2072742 attack=\"tcp_syn_flood\" srcport=16558 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67906 > threshold 2000, repeats 2072742 times since last log, pps 68585 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2072742",
    "srcport": "16558",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:18:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67906 > threshold 2000, repeats 2072742 times since last log, pps 68585 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812287678702967",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:18:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812317678687836 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2065139 attack=\"tcp_syn_flood\" srcport=50081 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69502 > threshold 2000, repeats 2065139 times since last log, pps 70197 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2065139",
    "srcport": "50081",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:18:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69502 > threshold 2000, repeats 2065139 times since last log, pps 70197 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812317678687836",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:19:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812347678680302 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2047523 attack=\"tcp_syn_flood\" srcport=452 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 65320 > threshold 2000, repeats 2047523 times since last log, pps 65973 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2047523",
    "srcport": "452",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:19:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 65320 > threshold 2000, repeats 2047523 times since last log, pps 65973 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812347678680302",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "dstintfrole": "wan",
    "event": {
      "original": "<189>date=2023-11-01 time=11:19:31 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812371137927919 tz=\"+0700\" logid=\"0000000015\" type=\"traffic\" subtype=\"forward\" level=\"notice\" vd=\"root\" srcip=192.168.10.10 srcport=40651 srcintf=\"port2\" srcintfrole=\"lan\" dstip=185.125.190.58 dstport=123 dstintf=\"port1\" dstintfrole=\"wan\" srcuuid=\"1920cbe0-702d-51ee-06ac-b690acb0c41a\" dstuuid=\"1920cbe0-702d-51ee-06ac-b690acb0c41a\" srccountry=\"Reserved\" dstcountry=\"United Kingdom\" sessionid=414095 proto=17 action=\"start\" policyid=3 policytype=\"policy\" poluuid=\"c89a2a20-71aa-51ee-8bee-d14a74a68586\" policyname=\"Server_internet\" service=\"NTP\" trandisp=\"snat\" transip=172.16.12.44 transport=40651 duration=0 sentbyte=0 rcvdbyte=0 sentpkt=0 rcvdpkt=0 appcat=\"unscanned\""
    },
    "proto": "17",
    "transip": "172.16.12.44",
    "logid": "0000000015",
    "srcport": "40651",
    "appcat": "unscanned",
    "tz": "+0700",
    "sessionid": "414095",
    "srcuuid": "1920cbe0-702d-51ee-06ac-b690acb0c41a",
    "@timestamp": "2023-11-01T04:19:31.000Z",
    "transport": "40651",
    "srcintf": "port2",
    "policytype": "policy",
    "ftg_type": "traffic",
    "srccountry": "Reserved",
    "duration": "0",
    "sentbyte": 0,
    "trandisp": "snat",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "srcip": "192.168.10.10",
    "dstip": "185.125.190.58",
    "policyname": "Server_internet",
    "action": "start",
    "eventtime": "1698812371137927919",
    "host": {
      "ip": "192.168.10.1"
    },
    "dstintf": "port1",
    "rcvdbyte": 0,
    "@version": "1",
    "vd": "root",
    "dstcountry": "United Kingdom",
    "ftg_subtype": "forward",
    "dstport": "123",
    "level": "notice",
    "dstuuid": "1920cbe0-702d-51ee-06ac-b690acb0c41a",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "lan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:19:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812377678690546 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1939086 attack=\"tcp_syn_flood\" srcport=38994 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 66847 > threshold 2000, repeats 1939086 times since last log, pps 67515 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "1939086",
    "srcport": "38994",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:19:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 66847 > threshold 2000, repeats 1939086 times since last log, pps 67515 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812377678690546",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:20:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812407678791604 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2020179 attack=\"tcp_syn_flood\" srcport=27557 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68914 > threshold 2000, repeats 2020179 times since last log, pps 69603 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2020179",
    "srcport": "27557",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:20:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68914 > threshold 2000, repeats 2020179 times since last log, pps 69603 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812407678791604",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:20:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812437678747730 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2067049 attack=\"tcp_syn_flood\" srcport=62990 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 66148 > threshold 2000, repeats 2067049 times since last log, pps 66809 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2067049",
    "srcport": "62990",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:20:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 66148 > threshold 2000, repeats 2067049 times since last log, pps 66809 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812437678747730",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:21:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812467678688171 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2085598 attack=\"tcp_syn_flood\" srcport=51436 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 73784 > threshold 2000, repeats 2085598 times since last log, pps 74521 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2085598",
    "srcport": "51436",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:21:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 73784 > threshold 2000, repeats 2085598 times since last log, pps 74521 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812467678688171",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=11:21:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812491156099354 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=0 mem=36 totalsession=7 disk=17 bandwidth=\"0/25688\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=4225 waninfo=\"name=port1,bytes=824366/8098836443,packets=7611/126533821;\" msg=\"Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  7, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "4225",
    "cpu": "0",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "7",
    "tz": "+0700",
    "bandwidth": "0/25688",
    "action": "perf-stats",
    "eventtime": "1698812491156099354",
    "@timestamp": "2023-11-01T04:21:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  7, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=824366/8098836443,packets=7611/126533821;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:21:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812497678719758 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2161327 attack=\"tcp_syn_flood\" srcport=50283 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69695 > threshold 2000, repeats 2161327 times since last log, pps 70391 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2161327",
    "srcport": "50283",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:21:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69695 > threshold 2000, repeats 2161327 times since last log, pps 70391 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812497678719758",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:22:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812527678993604 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2075010 attack=\"tcp_syn_flood\" srcport=28141 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68815 > threshold 2000, repeats 2075010 times since last log, pps 69503 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2075010",
    "srcport": "28141",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:22:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68815 > threshold 2000, repeats 2075010 times since last log, pps 69503 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812527678993604",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "dstintfrole": "wan",
    "event": {
      "original": "<189>date=2023-11-01 time=11:22:31 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812551348695000 tz=\"+0700\" logid=\"0000000013\" type=\"traffic\" subtype=\"forward\" level=\"notice\" vd=\"root\" srcip=192.168.10.10 srcport=40651 srcintf=\"port2\" srcintfrole=\"lan\" dstip=185.125.190.58 dstport=123 dstintf=\"port1\" dstintfrole=\"wan\" srcuuid=\"1920cbe0-702d-51ee-06ac-b690acb0c41a\" dstuuid=\"1920cbe0-702d-51ee-06ac-b690acb0c41a\" srccountry=\"Reserved\" dstcountry=\"United Kingdom\" sessionid=414095 proto=17 action=\"accept\" policyid=3 policytype=\"policy\" poluuid=\"c89a2a20-71aa-51ee-8bee-d14a74a68586\" policyname=\"Server_internet\" service=\"NTP\" trandisp=\"snat\" transip=172.16.12.44 transport=40651 duration=180 sentbyte=76 rcvdbyte=76 sentpkt=1 rcvdpkt=1 appcat=\"unscanned\" srchwvendor=\"VMware\" mastersrcmac=\"00:0c:29:b2:57:7e\" srcmac=\"00:0c:29:b2:57:7e\" srcserver=0"
    },
    "proto": "17",
    "transip": "172.16.12.44",
    "logid": "0000000013",
    "srcport": "40651",
    "appcat": "unscanned",
    "tz": "+0700",
    "sessionid": "414095",
    "srcuuid": "1920cbe0-702d-51ee-06ac-b690acb0c41a",
    "@timestamp": "2023-11-01T04:22:31.000Z",
    "transport": "40651",
    "srcintf": "port2",
    "policytype": "policy",
    "ftg_type": "traffic",
    "srccountry": "Reserved",
    "srcmac": "00:0c:29:b2:57:7e",
    "duration": "180",
    "sentbyte": 76,
    "trandisp": "snat",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "srchwvendor": "VMware",
    "srcip": "192.168.10.10",
    "mastersrcmac": "00:0c:29:b2:57:7e",
    "dstip": "185.125.190.58",
    "policyname": "Server_internet",
    "action": "accept",
    "eventtime": "1698812551348695000",
    "host": {
      "ip": "192.168.10.1"
    },
    "dstintf": "port1",
    "rcvdbyte": 76,
    "@version": "1",
    "vd": "root",
    "dstcountry": "United Kingdom",
    "ftg_subtype": "forward",
    "dstport": "123",
    "srcserver": "0",
    "level": "notice",
    "dstuuid": "1920cbe0-702d-51ee-06ac-b690acb0c41a",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "lan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:22:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812557678693396 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2076237 attack=\"tcp_syn_flood\" srcport=7226 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68914 > threshold 2000, repeats 2076237 times since last log, pps 69603 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2076237",
    "srcport": "7226",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:22:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68914 > threshold 2000, repeats 2076237 times since last log, pps 69603 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812557678693396",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:23:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812587678683709 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2069127 attack=\"tcp_syn_flood\" srcport=45259 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68900 > threshold 2000, repeats 2069127 times since last log, pps 69589 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2069127",
    "srcport": "45259",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:23:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68900 > threshold 2000, repeats 2069127 times since last log, pps 69589 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812587678683709",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:23:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812617678693829 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2078022 attack=\"tcp_syn_flood\" srcport=26129 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69506 > threshold 2000, repeats 2078022 times since last log, pps 70201 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2078022",
    "srcport": "26129",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:23:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69506 > threshold 2000, repeats 2078022 times since last log, pps 70201 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812617678693829",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:24:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812647678683270 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2077623 attack=\"tcp_syn_flood\" srcport=6600 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68623 > threshold 2000, repeats 2077623 times since last log, pps 69309 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2077623",
    "srcport": "6600",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:24:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68623 > threshold 2000, repeats 2077623 times since last log, pps 69309 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812647678683270",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:24:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812677678707036 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2070976 attack=\"tcp_syn_flood\" srcport=45960 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 66590 > threshold 2000, repeats 2070976 times since last log, pps 67255 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2070976",
    "srcport": "45960",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:24:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 66590 > threshold 2000, repeats 2070976 times since last log, pps 67255 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812677678707036",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:25:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812707678690903 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2045529 attack=\"tcp_syn_flood\" srcport=59873 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69495 > threshold 2000, repeats 2045529 times since last log, pps 70189 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2045529",
    "srcport": "59873",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:25:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69495 > threshold 2000, repeats 2045529 times since last log, pps 70189 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812707678690903",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:25:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812737678688260 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2081497 attack=\"tcp_syn_flood\" srcport=44218 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68992 > threshold 2000, repeats 2081497 times since last log, pps 69681 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2081497",
    "srcport": "44218",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:25:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68992 > threshold 2000, repeats 2081497 times since last log, pps 69681 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812737678688260",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:26:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812767678694064 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2069530 attack=\"tcp_syn_flood\" srcport=16724 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67801 > threshold 2000, repeats 2069530 times since last log, pps 68479 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2069530",
    "srcport": "16724",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:26:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67801 > threshold 2000, repeats 2069530 times since last log, pps 68479 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812767678694064",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=11:26:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812791151593142 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=0 mem=36 totalsession=13 disk=17 bandwidth=\"0/25250\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=4525 waninfo=\"name=port1,bytes=832077/9424370201,packets=7697/147244991;\" msg=\"Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  13, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "4525",
    "cpu": "0",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "13",
    "tz": "+0700",
    "bandwidth": "0/25250",
    "action": "perf-stats",
    "eventtime": "1698812791151593142",
    "@timestamp": "2023-11-01T04:26:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  13, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=832077/9424370201,packets=7697/147244991;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:26:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812797678678607 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2067288 attack=\"tcp_syn_flood\" srcport=52396 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69487 > threshold 2000, repeats 2067288 times since last log, pps 70181 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2067288",
    "srcport": "52396",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:26:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69487 > threshold 2000, repeats 2067288 times since last log, pps 70181 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812797678678607",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:27:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812827678696891 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2063053 attack=\"tcp_syn_flood\" srcport=18297 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69732 > threshold 2000, repeats 2063053 times since last log, pps 70429 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2063053",
    "srcport": "18297",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:27:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69732 > threshold 2000, repeats 2063053 times since last log, pps 70429 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812827678696891",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:27:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812857678685223 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2075456 attack=\"tcp_syn_flood\" srcport=62137 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69154 > threshold 2000, repeats 2075456 times since last log, pps 69845 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2075456",
    "srcport": "62137",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:27:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69154 > threshold 2000, repeats 2075456 times since last log, pps 69845 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812857678685223",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:28:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812887678703189 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1974610 attack=\"tcp_syn_flood\" srcport=5131 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 64118 > threshold 2000, repeats 1974610 times since last log, pps 64759 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "1974610",
    "srcport": "5131",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:28:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 64118 > threshold 2000, repeats 1974610 times since last log, pps 64759 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812887678703189",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:28:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812917678688568 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2055941 attack=\"tcp_syn_flood\" srcport=29456 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68140 > threshold 2000, repeats 2055941 times since last log, pps 68821 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2055941",
    "srcport": "29456",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:28:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68140 > threshold 2000, repeats 2055941 times since last log, pps 68821 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812917678688568",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:29:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812947678683078 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2071745 attack=\"tcp_syn_flood\" srcport=4049 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 70152 > threshold 2000, repeats 2071745 times since last log, pps 70853 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2071745",
    "srcport": "4049",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:29:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 70152 > threshold 2000, repeats 2071745 times since last log, pps 70853 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812947678683078",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:29:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698812977678677595 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2071434 attack=\"tcp_syn_flood\" srcport=43867 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68887 > threshold 2000, repeats 2071434 times since last log, pps 69575 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2071434",
    "srcport": "43867",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:29:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68887 > threshold 2000, repeats 2071434 times since last log, pps 69575 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698812977678677595",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:30:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813007678683038 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2070264 attack=\"tcp_syn_flood\" srcport=16979 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68711 > threshold 2000, repeats 2070264 times since last log, pps 69398 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2070264",
    "srcport": "16979",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:30:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68711 > threshold 2000, repeats 2070264 times since last log, pps 69398 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813007678683038",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:30:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813037678686657 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2064683 attack=\"tcp_syn_flood\" srcport=50046 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68081 > threshold 2000, repeats 2064683 times since last log, pps 68761 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2064683",
    "srcport": "50046",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:30:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68081 > threshold 2000, repeats 2064683 times since last log, pps 68761 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813037678686657",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:31:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813067678692380 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2074478 attack=\"tcp_syn_flood\" srcport=27372 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68889 > threshold 2000, repeats 2074478 times since last log, pps 69577 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2074478",
    "srcport": "27372",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:31:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68889 > threshold 2000, repeats 2074478 times since last log, pps 69577 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813067678692380",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=11:31:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813091153322097 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=0 mem=36 totalsession=6 disk=17 bandwidth=\"0/25528\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=4825 waninfo=\"name=port1,bytes=834856/10742501708,packets=7735/167840414;\" msg=\"Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "4825",
    "cpu": "0",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "6",
    "tz": "+0700",
    "bandwidth": "0/25528",
    "action": "perf-stats",
    "eventtime": "1698813091153322097",
    "@timestamp": "2023-11-01T04:31:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=834856/10742501708,packets=7735/167840414;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:31:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813097678698959 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2070340 attack=\"tcp_syn_flood\" srcport=560 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67847 > threshold 2000, repeats 2070340 times since last log, pps 68525 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2070340",
    "srcport": "560",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:31:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67847 > threshold 2000, repeats 2070340 times since last log, pps 68525 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813097678698959",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:32:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813127678719093 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2126250 attack=\"tcp_syn_flood\" srcport=29663 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 73203 > threshold 2000, repeats 2126250 times since last log, pps 73935 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2126250",
    "srcport": "29663",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:32:06.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 73203 > threshold 2000, repeats 2126250 times since last log, pps 73935 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813127678719093",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:32:36 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813157678692257 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2144876 attack=\"tcp_syn_flood\" srcport=11851 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68295 > threshold 2000, repeats 2144876 times since last log, pps 68977 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2144876",
    "srcport": "11851",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:32:36.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68295 > threshold 2000, repeats 2144876 times since last log, pps 68977 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813157678692257",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:33:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813187678689812 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2075118 attack=\"tcp_syn_flood\" srcport=55353 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69332 > threshold 2000, repeats 2075118 times since last log, pps 70025 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2075118",
    "srcport": "55353",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:33:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69332 > threshold 2000, repeats 2075118 times since last log, pps 70025 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813187678689812",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:33:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813217678689697 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2077936 attack=\"tcp_syn_flood\" srcport=36137 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69277 > threshold 2000, repeats 2077936 times since last log, pps 69969 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2077936",
    "srcport": "36137",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:33:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69277 > threshold 2000, repeats 2077936 times since last log, pps 69969 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813217678689697",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:34:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813247678680317 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2062887 attack=\"tcp_syn_flood\" srcport=1872 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69770 > threshold 2000, repeats 2062887 times since last log, pps 70467 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2062887",
    "srcport": "1872",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:34:06.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69770 > threshold 2000, repeats 2062887 times since last log, pps 70467 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813247678680317",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:34:36 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813277678695755 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2075222 attack=\"tcp_syn_flood\" srcport=45478 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68990 > threshold 2000, repeats 2075222 times since last log, pps 69679 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2075222",
    "srcport": "45478",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:34:36.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68990 > threshold 2000, repeats 2075222 times since last log, pps 69679 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813277678695755",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:35:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813307678689461 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2069484 attack=\"tcp_syn_flood\" srcport=17810 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69629 > threshold 2000, repeats 2069484 times since last log, pps 70325 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2069484",
    "srcport": "17810",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:35:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69629 > threshold 2000, repeats 2069484 times since last log, pps 70325 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813307678689461",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:35:36 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813337678680604 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2073853 attack=\"tcp_syn_flood\" srcport=60047 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69366 > threshold 2000, repeats 2073853 times since last log, pps 70059 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2073853",
    "srcport": "60047",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:35:36.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69366 > threshold 2000, repeats 2073853 times since last log, pps 70059 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813337678680604",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:36:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813367678686200 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2073519 attack=\"tcp_syn_flood\" srcport=36414 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68449 > threshold 2000, repeats 2073519 times since last log, pps 69133 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2073519",
    "srcport": "36414",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:36:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68449 > threshold 2000, repeats 2073519 times since last log, pps 69133 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813367678686200",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=11:36:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813391154189968 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=0 mem=36 totalsession=10 disk=17 bandwidth=\"0/25305\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=5125 waninfo=\"name=port1,bytes=841111/12076694534,packets=7807/188686838;\" msg=\"Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  10, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "5125",
    "cpu": "0",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "10",
    "tz": "+0700",
    "bandwidth": "0/25305",
    "action": "perf-stats",
    "eventtime": "1698813391154189968",
    "@timestamp": "2023-11-01T04:36:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  10, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=841111/12076694534,packets=7807/188686838;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:36:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813397678716033 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2048024 attack=\"tcp_syn_flood\" srcport=52822 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 65910 > threshold 2000, repeats 2048024 times since last log, pps 66569 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2048024",
    "srcport": "52822",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:36:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 65910 > threshold 2000, repeats 2048024 times since last log, pps 66569 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813397678716033",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:37:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813427678684411 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1980689 attack=\"tcp_syn_flood\" srcport=1895 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 70015 > threshold 2000, repeats 1980689 times since last log, pps 70715 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "1980689",
    "srcport": "1895",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:37:06.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 70015 > threshold 2000, repeats 1980689 times since last log, pps 70715 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813427678684411",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:37:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813457678691752 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2077454 attack=\"tcp_syn_flood\" srcport=47733 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69262 > threshold 2000, repeats 2077454 times since last log, pps 69954 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2077454",
    "srcport": "47733",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:37:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69262 > threshold 2000, repeats 2077454 times since last log, pps 69954 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813457678691752",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:38:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813487678700298 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2073890 attack=\"tcp_syn_flood\" srcport=24471 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68417 > threshold 2000, repeats 2073890 times since last log, pps 69101 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2073890",
    "srcport": "24471",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:38:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68417 > threshold 2000, repeats 2073890 times since last log, pps 69101 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813487678700298",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:38:36 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813517678697319 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2067285 attack=\"tcp_syn_flood\" srcport=60140 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68215 > threshold 2000, repeats 2067285 times since last log, pps 68897 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2067285",
    "srcport": "60140",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:38:36.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68215 > threshold 2000, repeats 2067285 times since last log, pps 68897 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813517678697319",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:39:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813547678685558 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2097041 attack=\"tcp_syn_flood\" srcport=61439 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 74396 > threshold 2000, repeats 2097041 times since last log, pps 75139 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2097041",
    "srcport": "61439",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:39:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 74396 > threshold 2000, repeats 2097041 times since last log, pps 75139 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813547678685558",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:39:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813577678784322 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2225094 attack=\"tcp_syn_flood\" srcport=58309 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 74588 > threshold 2000, repeats 2225094 times since last log, pps 75333 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2225094",
    "srcport": "58309",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:39:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 74588 > threshold 2000, repeats 2225094 times since last log, pps 75333 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813577678784322",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:40:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813607678694837 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2188033 attack=\"tcp_syn_flood\" srcport=18398 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69194 > threshold 2000, repeats 2188033 times since last log, pps 69885 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2188033",
    "srcport": "18398",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:40:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69194 > threshold 2000, repeats 2188033 times since last log, pps 69885 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813607678694837",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:40:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813637678691646 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2068827 attack=\"tcp_syn_flood\" srcport=55609 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68833 > threshold 2000, repeats 2068827 times since last log, pps 69521 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2068827",
    "srcport": "55609",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:40:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68833 > threshold 2000, repeats 2068827 times since last log, pps 69521 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813637678691646",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:41:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813667678682493 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2073521 attack=\"tcp_syn_flood\" srcport=31978 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68520 > threshold 2000, repeats 2073521 times since last log, pps 69205 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2073521",
    "srcport": "31978",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:41:06.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68520 > threshold 2000, repeats 2073521 times since last log, pps 69205 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813667678682493",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=11:41:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813691152108613 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=0 mem=36 totalsession=6 disk=17 bandwidth=\"0/25218\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=5425 waninfo=\"name=port1,bytes=843783/13414553019,packets=7844/209590562;\" msg=\"Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "5425",
    "cpu": "0",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "6",
    "tz": "+0700",
    "bandwidth": "0/25218",
    "action": "perf-stats",
    "eventtime": "1698813691152108613",
    "@timestamp": "2023-11-01T04:41:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=843783/13414553019,packets=7844/209590562;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:41:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813697678681859 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2069088 attack=\"tcp_syn_flood\" srcport=3914 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69803 > threshold 2000, repeats 2069088 times since last log, pps 70501 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2069088",
    "srcport": "3914",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:41:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69803 > threshold 2000, repeats 2069088 times since last log, pps 70501 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813697678681859",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:42:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813727678688147 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2054193 attack=\"tcp_syn_flood\" srcport=26491 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 67295 > threshold 2000, repeats 2054193 times since last log, pps 67967 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2054193",
    "srcport": "26491",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:42:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 67295 > threshold 2000, repeats 2054193 times since last log, pps 67967 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813727678688147",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:42:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813757678690158 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2072855 attack=\"tcp_syn_flood\" srcport=2194 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69037 > threshold 2000, repeats 2072855 times since last log, pps 69727 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2072855",
    "srcport": "2194",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:42:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69037 > threshold 2000, repeats 2072855 times since last log, pps 69727 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813757678690158",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:43:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813787678680402 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1972636 attack=\"tcp_syn_flood\" srcport=8750 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 66049 > threshold 2000, repeats 1972636 times since last log, pps 66709 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "1972636",
    "srcport": "8750",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:43:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 66049 > threshold 2000, repeats 1972636 times since last log, pps 66709 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813787678680402",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:43:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813817678700072 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2011411 attack=\"tcp_syn_flood\" srcport=54081 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 65964 > threshold 2000, repeats 2011411 times since last log, pps 66623 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2011411",
    "srcport": "54081",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:43:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 65964 > threshold 2000, repeats 2011411 times since last log, pps 66623 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813817678700072",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:44:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813847678820858 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2075145 attack=\"tcp_syn_flood\" srcport=32074 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 69742 > threshold 2000, repeats 2075145 times since last log, pps 70439 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2075145",
    "srcport": "32074",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:44:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 69742 > threshold 2000, repeats 2075145 times since last log, pps 70439 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813847678820858",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:44:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813877678689286 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2069089 attack=\"tcp_syn_flood\" srcport=4011 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68207 > threshold 2000, repeats 2069089 times since last log, pps 68889 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2069089",
    "srcport": "4011",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:44:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68207 > threshold 2000, repeats 2069089 times since last log, pps 68889 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813877678689286",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:45:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813907678686940 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2072310 attack=\"tcp_syn_flood\" srcport=44705 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68076 > threshold 2000, repeats 2072310 times since last log, pps 68756 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2072310",
    "srcport": "44705",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:45:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68076 > threshold 2000, repeats 2072310 times since last log, pps 68756 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813907678686940",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:45:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813937678686220 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2070182 attack=\"tcp_syn_flood\" srcport=17735 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 68663 > threshold 2000, repeats 2070182 times since last log, pps 69349 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2070182",
    "srcport": "17735",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:45:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 68663 > threshold 2000, repeats 2070182 times since last log, pps 69349 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813937678686220",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:46:07 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813967678699510 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1983955 attack=\"tcp_syn_flood\" srcport=35610 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 64847 > threshold 2000, repeats 1983955 times since last log, pps 65495 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "1983955",
    "srcport": "35610",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:46:07.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 64847 > threshold 2000, repeats 1983955 times since last log, pps 65495 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813967678699510",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-01 time=11:46:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813991157268808 tz=\"+0700\" logid=\"0100040704\" type=\"event\" subtype=\"system\" level=\"notice\" vd=\"root\" logdesc=\"System performance statistics\" action=\"perf-stats\" cpu=0 mem=36 totalsession=6 disk=17 bandwidth=\"0/25330\" setuprate=0 disklograte=0 fazlograte=0 freediskstorage=23568 sysuptime=5725 waninfo=\"name=port1,bytes=849762/14721479195,packets=7915/230010901;\" msg=\"Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0\""
    },
    "mem": "36",
    "sysuptime": "5725",
    "cpu": "0",
    "logid": "0100040704",
    "freediskstorage": "23568",
    "totalsession": "6",
    "tz": "+0700",
    "bandwidth": "0/25330",
    "action": "perf-stats",
    "eventtime": "1698813991157268808",
    "@timestamp": "2023-11-01T04:46:30.000Z",
    "host": {
      "ip": "192.168.10.1"
    },
    "disk": "17",
    "setuprate": "0",
    "ftg_type": "event",
    "@version": "1",
    "vd": "root",
    "msg": "Performance statistics: average CPU: 0, memory:  36, concurrent sessions:  6, setup-rate: 0",
    "fazlograte": "0",
    "ftg_subtype": "system",
    "logdesc": "System performance statistics",
    "disklograte": "0",
    "level": "notice",
    "waninfo": "name=port1,bytes=849762/14721479195,packets=7915/230010901;",
    "devid": "FGVMEVEM6MVTJLBA"
  },
  {
    "tags": [
      "location_a"
    ],
    "devname": "FortiGate-VM64",
    "event": {
      "original": "<185>date=2023-11-01 time=11:46:37 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698813997678691777 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=2031628 attack=\"tcp_syn_flood\" srcport=35622 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 65200 > threshold 2000, repeats 2031628 times since last log, pps 65851 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "proto": "6",
    "logid": "0720018432",
    "crlevel": "critical",
    "count": "2031628",
    "srcport": "35622",
    "craction": "4096",
    "tz": "+0700",
    "sessionid": "0",
    "@timestamp": "2023-11-01T04:46:37.000Z",
    "srcintf": "port1",
    "policytype": "DoS-policy",
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "ftg_type": "utm",
    "msg": "anomaly: tcp_syn_flood, 65200 > threshold 2000, repeats 2031628 times since last log, pps 65851 of prior second",
    "srccountry": "Reserved",
    "attackid": "100663396",
    "severity": "critical",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "eventtype": "anomaly",
    "attack": "tcp_syn_flood",
    "dstip": "172.16.12.44",
    "action": "clear_session",
    "eventtime": "1698813997678691777",
    "host": {
      "ip": "192.168.10.1"
    },
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "ftg_subtype": "anomaly",
    "dstport": "80",
    "level": "alert",
    "policyid": "3",
    "devid": "FGVMEVEM6MVTJLBA",
    "srcintfrole": "wan"
  },
  {
    "devname": "FortiGate-VM64",
    "vd": "root",
    "policytype": "policy",
    "trandisp": "snat",
    "dstuuid": "1920cbe0-702d-51ee-06ac-b690acb0c41a",
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-02 time=12:27:18 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698902839125872939 tz=\"+0700\" logid=\"0000000013\" type=\"traffic\" subtype=\"forward\" level=\"notice\" vd=\"root\" srcip=192.168.10.10 srcport=59610 srcintf=\"port2\" srcintfrole=\"lan\" dstip=8.8.8.8 dstport=53 dstintf=\"port1\" dstintfrole=\"wan\" srcuuid=\"1920cbe0-702d-51ee-06ac-b690acb0c41a\" dstuuid=\"1920cbe0-702d-51ee-06ac-b690acb0c41a\" srccountry=\"Reserved\" dstcountry=\"United States\" sessionid=96 proto=17 action=\"accept\" policyid=3 policytype=\"policy\" poluuid=\"c89a2a20-71aa-51ee-8bee-d14a74a68586\" policyname=\"Server_internet\" service=\"DNS\" trandisp=\"snat\" transip=172.16.12.44 transport=59610 duration=180 sentbyte=60 rcvdbyte=124 sentpkt=1 rcvdpkt=1 appcat=\"unscanned\" srchwvendor=\"VMware\" osname=\"Ubuntu\" mastersrcmac=\"00:0c:29:b2:57:7e\" srcmac=\"00:0c:29:b2:57:7e\" srcserver=0"
    },
    "sessionid": "96",
    "tz": "+0700",
    "tags": [
      "location_a"
    ],
    "level": "notice",
    "transport": "59610",
    "rcvdbyte": 124,
    "srccountry": "Reserved",
    "policyname": "Server_internet",
    "duration": "180",
    "ftg_type": "traffic",
    "srcintf": "port2",
    "srcmac": "00:0c:29:b2:57:7e",
    "@version": "1",
    "transip": "172.16.12.44",
    "osname": "Ubuntu",
    "eventtime": "1698902839125872939",
    "srcuuid": "1920cbe0-702d-51ee-06ac-b690acb0c41a",
    "srcport": "59610",
    "srcserver": "0",
    "dstintfrole": "wan",
    "srcintfrole": "lan",
    "dstcountry": "United States",
    "logid": "0000000013",
    "dstip": "8.8.8.8",
    "proto": "17",
    "sentbyte": 60,
    "srchwvendor": "VMware",
    "@timestamp": "2023-11-02T05:27:18.000Z",
    "devid": "FGVMEVEM6MVTJLBA",
    "action": "accept",
    "host": {
      "ip": "192.168.10.1"
    },
    "srcip": "192.168.10.10",
    "policyid": "3",
    "dstport": "53",
    "mastersrcmac": "00:0c:29:b2:57:7e",
    "ftg_subtype": "forward",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "dstintf": "port1",
    "appcat": "unscanned"
  },
  {
    "devname": "FortiGate-VM64",
    "vd": "root",
    "policytype": "policy",
    "trandisp": "snat",
    "dstuuid": "1920cbe0-702d-51ee-06ac-b690acb0c41a",
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-02 time=12:27:18 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698902839125877505 tz=\"+0700\" logid=\"0000000013\" type=\"traffic\" subtype=\"forward\" level=\"notice\" vd=\"root\" srcip=192.168.10.10 srcport=60236 srcintf=\"port2\" srcintfrole=\"lan\" dstip=185.125.190.58 dstport=123 dstintf=\"port1\" dstintfrole=\"wan\" srcuuid=\"1920cbe0-702d-51ee-06ac-b690acb0c41a\" dstuuid=\"1920cbe0-702d-51ee-06ac-b690acb0c41a\" srccountry=\"Reserved\" dstcountry=\"United Kingdom\" sessionid=97 proto=17 action=\"accept\" policyid=3 policytype=\"policy\" poluuid=\"c89a2a20-71aa-51ee-8bee-d14a74a68586\" policyname=\"Server_internet\" service=\"NTP\" trandisp=\"snat\" transip=172.16.12.44 transport=60236 duration=180 sentbyte=76 rcvdbyte=76 sentpkt=1 rcvdpkt=1 appcat=\"unscanned\" srchwvendor=\"VMware\" osname=\"Ubuntu\" mastersrcmac=\"00:0c:29:b2:57:7e\" srcmac=\"00:0c:29:b2:57:7e\" srcserver=0"
    },
    "sessionid": "97",
    "tz": "+0700",
    "tags": [
      "location_a"
    ],
    "level": "notice",
    "transport": "60236",
    "rcvdbyte": 76,
    "srccountry": "Reserved",
    "policyname": "Server_internet",
    "duration": "180",
    "ftg_type": "traffic",
    "srcintf": "port2",
    "srcmac": "00:0c:29:b2:57:7e",
    "@version": "1",
    "transip": "172.16.12.44",
    "osname": "Ubuntu",
    "eventtime": "1698902839125877505",
    "srcuuid": "1920cbe0-702d-51ee-06ac-b690acb0c41a",
    "srcport": "60236",
    "srcserver": "0",
    "dstintfrole": "wan",
    "srcintfrole": "lan",
    "dstcountry": "United Kingdom",
    "logid": "0000000013",
    "dstip": "185.125.190.58",
    "proto": "17",
    "sentbyte": 76,
    "srchwvendor": "VMware",
    "@timestamp": "2023-11-02T05:27:18.000Z",
    "devid": "FGVMEVEM6MVTJLBA",
    "action": "accept",
    "host": {
      "ip": "192.168.10.1"
    },
    "srcip": "192.168.10.10",
    "policyid": "3",
    "dstport": "123",
    "mastersrcmac": "00:0c:29:b2:57:7e",
    "ftg_subtype": "forward",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "dstintf": "port1",
    "appcat": "unscanned"
  },
  {
    "devname": "FortiGate-VM64",
    "vd": "root",
    "policytype": "policy",
    "trandisp": "snat",
    "dstuuid": "1920cbe0-702d-51ee-06ac-b690acb0c41a",
    "type": "forti_log",
    "event": {
      "original": "<189>date=2023-11-02 time=12:27:30 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698902851372899909 tz=\"+0700\" logid=\"0000000015\" type=\"traffic\" subtype=\"forward\" level=\"notice\" vd=\"root\" srcip=192.168.10.10 srcport=40396 srcintf=\"port2\" srcintfrole=\"lan\" dstip=185.125.190.58 dstport=123 dstintf=\"port1\" dstintfrole=\"wan\" srcuuid=\"1920cbe0-702d-51ee-06ac-b690acb0c41a\" dstuuid=\"1920cbe0-702d-51ee-06ac-b690acb0c41a\" srccountry=\"Reserved\" dstcountry=\"United Kingdom\" sessionid=685 proto=17 action=\"start\" policyid=3 policytype=\"policy\" poluuid=\"c89a2a20-71aa-51ee-8bee-d14a74a68586\" policyname=\"Server_internet\" service=\"NTP\" trandisp=\"snat\" transip=172.16.12.44 transport=40396 duration=0 sentbyte=0 rcvdbyte=0 sentpkt=0 rcvdpkt=0 appcat=\"unscanned\""
    },
    "sessionid": "685",
    "tz": "+0700",
    "tags": [
      "location_a"
    ],
    "level": "notice",
    "transport": "40396",
    "rcvdbyte": 0,
    "srccountry": "Reserved",
    "policyname": "Server_internet",
    "duration": "0",
    "ftg_type": "traffic",
    "srcintf": "port2",
    "@version": "1",
    "transip": "172.16.12.44",
    "eventtime": "1698902851372899909",
    "srcuuid": "1920cbe0-702d-51ee-06ac-b690acb0c41a",
    "srcport": "40396",
    "dstintfrole": "wan",
    "srcintfrole": "lan",
    "dstcountry": "United Kingdom",
    "logid": "0000000015",
    "dstip": "185.125.190.58",
    "proto": "17",
    "sentbyte": 0,
    "@timestamp": "2023-11-02T05:27:30.000Z",
    "devid": "FGVMEVEM6MVTJLBA",
    "action": "start",
    "host": {
      "ip": "192.168.10.1"
    },
    "srcip": "192.168.10.10",
    "policyid": "3",
    "dstport": "123",
    "ftg_subtype": "forward",
    "log": {
      "syslog": {
        "priority": 189
      }
    },
    "dstintf": "port1",
    "appcat": "unscanned"
  },
  {
    "srcport": "40344",
    "devid": "FGVMEVEM6MVTJLBA",
    "count": "1",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "tags": [
      "location_a"
    ],
    "event": {
      "original": "<185>date=2023-11-02 time=12:30:05 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698903006492895598 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/56645\" count=1 attack=\"tcp_port_scan\" srcport=40344 dstport=56645 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, pps 14 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "eventtype": "anomaly",
    "@timestamp": "2023-11-02T05:30:05.000Z",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "srccountry": "Reserved",
    "srcintf": "port1",
    "eventtime": "1698903006492895598",
    "attackid": "100663398",
    "srcintfrole": "wan",
    "policyid": "3",
    "attack": "tcp_port_scan",
    "sessionid": "0",
    "policytype": "DoS-policy",
    "ftg_subtype": "anomaly",
    "type": "forti_log",
    "level": "alert",
    "logid": "0720018432",
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, pps 14 of prior second",
    "action": "detected",
    "proto": "6",
    "host": {
      "ip": "192.168.10.1"
    },
    "craction": "4096",
    "devname": "FortiGate-VM64",
    "severity": "critical",
    "ftg_type": "utm",
    "dstport": "56645",
    "dstip": "172.16.12.44",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "crlevel": "critical"
  },
  {
    "srcport": "40344",
    "devid": "FGVMEVEM6MVTJLBA",
    "count": "27614",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "tags": [
      "location_a"
    ],
    "event": {
      "original": "<185>date=2023-11-02 time=12:30:35 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698903036485892839 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/59832\" count=27614 attack=\"tcp_port_scan\" srcport=40344 dstport=59832 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1099 > threshold 200, repeats 27614 times since last log, pps 1109 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "eventtype": "anomaly",
    "@timestamp": "2023-11-02T05:30:35.000Z",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "srccountry": "Reserved",
    "srcintf": "port1",
    "eventtime": "1698903036485892839",
    "attackid": "100663398",
    "srcintfrole": "wan",
    "policyid": "3",
    "attack": "tcp_port_scan",
    "sessionid": "0",
    "policytype": "DoS-policy",
    "ftg_subtype": "anomaly",
    "type": "forti_log",
    "level": "alert",
    "logid": "0720018432",
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "msg": "anomaly: tcp_port_scan, 1099 > threshold 200, repeats 27614 times since last log, pps 1109 of prior second",
    "action": "detected",
    "proto": "6",
    "host": {
      "ip": "192.168.10.1"
    },
    "craction": "4096",
    "devname": "FortiGate-VM64",
    "severity": "critical",
    "ftg_type": "utm",
    "dstport": "59832",
    "dstip": "172.16.12.44",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "crlevel": "critical"
  },
  {
    "srcport": "40344",
    "devid": "FGVMEVEM6MVTJLBA",
    "count": "37641",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "tags": [
      "location_a"
    ],
    "event": {
      "original": "<185>date=2023-11-02 time=12:31:06 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698903066487110638 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/10402\" count=37641 attack=\"tcp_port_scan\" srcport=40344 dstport=10402 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1385 > threshold 200, repeats 37641 times since last log, pps 1398 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "eventtype": "anomaly",
    "@timestamp": "2023-11-02T05:31:06.000Z",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "srccountry": "Reserved",
    "srcintf": "port1",
    "eventtime": "1698903066487110638",
    "attackid": "100663398",
    "srcintfrole": "wan",
    "policyid": "3",
    "attack": "tcp_port_scan",
    "sessionid": "0",
    "policytype": "DoS-policy",
    "ftg_subtype": "anomaly",
    "type": "forti_log",
    "level": "alert",
    "logid": "0720018432",
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "msg": "anomaly: tcp_port_scan, 1385 > threshold 200, repeats 37641 times since last log, pps 1398 of prior second",
    "action": "detected",
    "proto": "6",
    "host": {
      "ip": "192.168.10.1"
    },
    "craction": "4096",
    "devname": "FortiGate-VM64",
    "severity": "critical",
    "ftg_type": "utm",
    "dstport": "10402",
    "dstip": "172.16.12.44",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "crlevel": "critical"
  },
  {
    "srcport": "40344",
    "devid": "FGVMEVEM6MVTJLBA",
    "count": "45272",
    "srcip": "172.16.12.27",
    "tz": "+0700",
    "tags": [
      "location_a"
    ],
    "event": {
      "original": "<185>date=2023-11-02 time=12:31:36 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698903096487503145 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/9103\" count=45272 attack=\"tcp_port_scan\" srcport=40344 dstport=9103 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1616 > threshold 200, repeats 45272 times since last log, pps 1632 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "eventtype": "anomaly",
    "@timestamp": "2023-11-02T05:31:36.000Z",
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "srccountry": "Reserved",
    "srcintf": "port1",
    "eventtime": "1698903096487503145",
    "attackid": "100663398",
    "srcintfrole": "wan",
    "policyid": "3",
    "attack": "tcp_port_scan",
    "sessionid": "0",
    "policytype": "DoS-policy",
    "ftg_subtype": "anomaly",
    "type": "forti_log",
    "level": "alert",
    "logid": "0720018432",
    "@version": "1",
    "vd": "root",
    "crscore": "50",
    "msg": "anomaly: tcp_port_scan, 1616 > threshold 200, repeats 45272 times since last log, pps 1632 of prior second",
    "action": "detected",
    "proto": "6",
    "host": {
      "ip": "192.168.10.1"
    },
    "craction": "4096",
    "devname": "FortiGate-VM64",
    "severity": "critical",
    "ftg_type": "utm",
    "dstport": "9103",
    "dstip": "172.16.12.44",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "crlevel": "critical"
  },
  {
    "@version": "1",
    "tags": [
      "location_a"
    ],
    "srcintf": "port1",
    "policyid": "3",
    "ftg_subtype": "anomaly",
    "logid": "0720018432",
    "dstport": "22494",
    "count": "20743",
    "type": "forti_log",
    "sessionid": "0",
    "tz": "+0700",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "vd": "root",
    "ftg_type": "utm",
    "attackid": "100663398",
    "eventtype": "anomaly",
    "craction": "4096",
    "event": {
      "original": "<185>date=2023-11-02 time=12:54:45 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698904485565503500 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/22494\" count=20743 attack=\"tcp_port_scan\" srcport=46431 dstport=22494 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, repeats 20743 times since last log, pps 12 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "devname": "FortiGate-VM64",
    "crlevel": "critical",
    "srccountry": "Reserved",
    "@timestamp": "2023-11-02T05:54:45.000Z",
    "severity": "critical",
    "action": "detected",
    "eventtime": "1698904485565503500",
    "host": {
      "ip": "192.168.10.1"
    },
    "proto": "6",
    "srcip": "172.16.12.27",
    "policytype": "DoS-policy",
    "crscore": "50",
    "srcport": "46431",
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, repeats 20743 times since last log, pps 12 of prior second",
    "devid": "FGVMEVEM6MVTJLBA",
    "attack": "tcp_port_scan",
    "level": "alert"
  },
  {
    "@version": "1",
    "tags": [
      "location_a"
    ],
    "srcintf": "port1",
    "policyid": "3",
    "ftg_subtype": "anomaly",
    "logid": "0720018432",
    "dstport": "18887",
    "count": "27564",
    "type": "forti_log",
    "sessionid": "0",
    "tz": "+0700",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "vd": "root",
    "ftg_type": "utm",
    "attackid": "100663398",
    "eventtype": "anomaly",
    "craction": "4096",
    "event": {
      "original": "<185>date=2023-11-02 time=12:55:15 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698904515557028840 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/18887\" count=27564 attack=\"tcp_port_scan\" srcport=46433 dstport=18887 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1102 > threshold 200, repeats 27564 times since last log, pps 1113 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "devname": "FortiGate-VM64",
    "crlevel": "critical",
    "srccountry": "Reserved",
    "@timestamp": "2023-11-02T05:55:15.000Z",
    "severity": "critical",
    "action": "detected",
    "eventtime": "1698904515557028840",
    "host": {
      "ip": "192.168.10.1"
    },
    "proto": "6",
    "srcip": "172.16.12.27",
    "policytype": "DoS-policy",
    "crscore": "50",
    "srcport": "46433",
    "msg": "anomaly: tcp_port_scan, 1102 > threshold 200, repeats 27564 times since last log, pps 1113 of prior second",
    "devid": "FGVMEVEM6MVTJLBA",
    "attack": "tcp_port_scan",
    "level": "alert"
  },
  {
    "@version": "1",
    "tags": [
      "location_a"
    ],
    "srcintf": "port1",
    "policyid": "3",
    "ftg_subtype": "anomaly",
    "logid": "0720018432",
    "dstport": "47245",
    "count": "37670",
    "type": "forti_log",
    "sessionid": "0",
    "tz": "+0700",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "vd": "root",
    "ftg_type": "utm",
    "attackid": "100663398",
    "eventtype": "anomaly",
    "craction": "4096",
    "event": {
      "original": "<185>date=2023-11-02 time=12:55:45 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698904545556615241 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/47245\" count=37670 attack=\"tcp_port_scan\" srcport=46433 dstport=47245 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1380 > threshold 200, repeats 37670 times since last log, pps 1393 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "devname": "FortiGate-VM64",
    "crlevel": "critical",
    "srccountry": "Reserved",
    "@timestamp": "2023-11-02T05:55:45.000Z",
    "severity": "critical",
    "action": "detected",
    "eventtime": "1698904545556615241",
    "host": {
      "ip": "192.168.10.1"
    },
    "proto": "6",
    "srcip": "172.16.12.27",
    "policytype": "DoS-policy",
    "crscore": "50",
    "srcport": "46433",
    "msg": "anomaly: tcp_port_scan, 1380 > threshold 200, repeats 37670 times since last log, pps 1393 of prior second",
    "devid": "FGVMEVEM6MVTJLBA",
    "attack": "tcp_port_scan",
    "level": "alert"
  },
  {
    "@version": "1",
    "tags": [
      "location_a"
    ],
    "srcintf": "port1",
    "policyid": "3",
    "ftg_subtype": "anomaly",
    "logid": "0720018432",
    "dstport": "56542",
    "count": "45389",
    "type": "forti_log",
    "sessionid": "0",
    "tz": "+0700",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "vd": "root",
    "ftg_type": "utm",
    "attackid": "100663398",
    "eventtype": "anomaly",
    "craction": "4096",
    "event": {
      "original": "<185>date=2023-11-02 time=12:56:15 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698904575557065825 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/56542\" count=45389 attack=\"tcp_port_scan\" srcport=46433 dstport=56542 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1628 > threshold 200, repeats 45389 times since last log, pps 1644 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "devname": "FortiGate-VM64",
    "crlevel": "critical",
    "srccountry": "Reserved",
    "@timestamp": "2023-11-02T05:56:15.000Z",
    "severity": "critical",
    "action": "detected",
    "eventtime": "1698904575557065825",
    "host": {
      "ip": "192.168.10.1"
    },
    "proto": "6",
    "srcip": "172.16.12.27",
    "policytype": "DoS-policy",
    "crscore": "50",
    "srcport": "46433",
    "msg": "anomaly: tcp_port_scan, 1628 > threshold 200, repeats 45389 times since last log, pps 1644 of prior second",
    "devid": "FGVMEVEM6MVTJLBA",
    "attack": "tcp_port_scan",
    "level": "alert"
  },
  {
    "@version": "1",
    "tags": [
      "location_a"
    ],
    "srcintf": "port1",
    "policyid": "3",
    "ftg_subtype": "anomaly",
    "logid": "0720018432",
    "dstport": "80",
    "count": "1",
    "type": "forti_log",
    "sessionid": "0",
    "tz": "+0700",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "ref": "http://www.fortinet.com/ids/VID100663396",
    "vd": "root",
    "ftg_type": "utm",
    "attackid": "100663396",
    "eventtype": "anomaly",
    "craction": "4096",
    "event": {
      "original": "<185>date=2023-11-02 time=12:59:46 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698904787000798844 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"clear_session\" proto=6 service=\"HTTP\" count=1 attack=\"tcp_syn_flood\" srcport=9913 dstport=80 attackid=100663396 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663396\" msg=\"anomaly: tcp_syn_flood, 2001 > threshold 2000\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "devname": "FortiGate-VM64",
    "crlevel": "critical",
    "srccountry": "Reserved",
    "@timestamp": "2023-11-02T05:59:46.000Z",
    "severity": "critical",
    "action": "clear_session",
    "eventtime": "1698904787000798844",
    "host": {
      "ip": "192.168.10.1"
    },
    "proto": "6",
    "srcip": "172.16.12.27",
    "policytype": "DoS-policy",
    "crscore": "50",
    "srcport": "9913",
    "msg": "anomaly: tcp_syn_flood, 2001 > threshold 2000",
    "devid": "FGVMEVEM6MVTJLBA",
    "attack": "tcp_syn_flood",
    "level": "alert"
  },
  {
    "@version": "1",
    "tags": [
      "location_a"
    ],
    "srcintf": "port1",
    "policyid": "3",
    "ftg_subtype": "anomaly",
    "logid": "0720018432",
    "dstport": "80",
    "count": "20307",
    "type": "forti_log",
    "sessionid": "0",
    "tz": "+0700",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "vd": "root",
    "ftg_type": "utm",
    "attackid": "100663398",
    "eventtype": "anomaly",
    "craction": "4096",
    "event": {
      "original": "<185>date=2023-11-02 time=12:59:46 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698904786938318223 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"HTTP\" count=20307 attack=\"tcp_port_scan\" srcport=2534 dstport=80 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, repeats 20307 times since last log\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "srcintfrole": "wan",
    "dstip": "172.16.12.44",
    "devname": "FortiGate-VM64",
    "crlevel": "critical",
    "srccountry": "Reserved",
    "@timestamp": "2023-11-02T05:59:46.000Z",
    "severity": "critical",
    "action": "detected",
    "eventtime": "1698904786938318223",
    "host": {
      "ip": "192.168.10.1"
    },
    "proto": "6",
    "srcip": "172.16.12.27",
    "policytype": "DoS-policy",
    "crscore": "50",
    "srcport": "2534",
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, repeats 20307 times since last log",
    "devid": "FGVMEVEM6MVTJLBA",
    "attack": "tcp_port_scan",
    "level": "alert"
  },
  {
    "proto": "6",
    "syslog_index": "<185>",
    "message": "date=2023-11-02 time=13:24:52 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698906292715090925 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/32489\" count=1800 attack=\"tcp_port_scan\" srcport=63400 dstport=32489 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, repeats 1800 times since last log, pps 14 of prior second\" crscore=50 craction=4096 crlevel=\"critical\"",
    "service": "tcp/32489",
    "eventtype": "anomaly",
    "sessionid": "0",
    "count": "1800",
    "srcintfrole": "wan",
    "srcport": "63400",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "severity": "critical",
    "srccountry": "Reserved",
    "tags": [
      "location_a"
    ],
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "@timestamp": "2023-11-02T06:24:52.000Z",
    "event": {
      "original": "<185>date=2023-11-02 time=13:24:52 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698906292715090925 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/32489\" count=1800 attack=\"tcp_port_scan\" srcport=63400 dstport=32489 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 201 > threshold 200, repeats 1800 times since last log, pps 14 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "msg": "anomaly: tcp_port_scan, 201 > threshold 200, repeats 1800 times since last log, pps 14 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "eventtime": "1698906292715090925",
    "srcintf": "port1",
    "dstip": "172.16.12.44",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "ftg_type": "utm",
    "temp_time": "2023-11-02 13:24:52",
    "date": "2023-11-02",
    "attackid": "100663398",
    "action": "detected",
    "vd": "root",
    "devid": "FGVMEVEM6MVTJLBA",
    "crlevel": "critical",
    "logid": "0720018432",
    "ftg_subtype": "anomaly",
    "level": "alert",
    "craction": "4096",
    "time": "13:24:52",
    "dstport": "32489",
    "crscore": "50",
    "policyid": "3",
    "policytype": "DoS-policy"
  },
  {
    "proto": "6",
    "syslog_index": "<185>",
    "message": "date=2023-11-02 time=13:25:22 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698906322706253048 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/20148\" count=27560 attack=\"tcp_port_scan\" srcport=63400 dstport=20148 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1100 > threshold 200, repeats 27560 times since last log, pps 1110 of prior second\" crscore=50 craction=4096 crlevel=\"critical\"",
    "service": "tcp/20148",
    "eventtype": "anomaly",
    "sessionid": "0",
    "count": "27560",
    "srcintfrole": "wan",
    "srcport": "63400",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "severity": "critical",
    "srccountry": "Reserved",
    "tags": [
      "location_a"
    ],
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "@timestamp": "2023-11-02T06:25:22.000Z",
    "event": {
      "original": "<185>date=2023-11-02 time=13:25:22 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698906322706253048 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/20148\" count=27560 attack=\"tcp_port_scan\" srcport=63400 dstport=20148 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1100 > threshold 200, repeats 27560 times since last log, pps 1110 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "msg": "anomaly: tcp_port_scan, 1100 > threshold 200, repeats 27560 times since last log, pps 1110 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "eventtime": "1698906322706253048",
    "srcintf": "port1",
    "dstip": "172.16.12.44",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "ftg_type": "utm",
    "temp_time": "2023-11-02 13:25:22",
    "date": "2023-11-02",
    "attackid": "100663398",
    "action": "detected",
    "vd": "root",
    "devid": "FGVMEVEM6MVTJLBA",
    "crlevel": "critical",
    "logid": "0720018432",
    "ftg_subtype": "anomaly",
    "level": "alert",
    "craction": "4096",
    "time": "13:25:22",
    "dstport": "20148",
    "crscore": "50",
    "policyid": "3",
    "policytype": "DoS-policy"
  },
  {
    "proto": "6",
    "syslog_index": "<185>",
    "message": "date=2023-11-02 time=13:25:52 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698906352705873771 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/35608\" count=37709 attack=\"tcp_port_scan\" srcport=63400 dstport=35608 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1388 > threshold 200, repeats 37709 times since last log, pps 1401 of prior second\" crscore=50 craction=4096 crlevel=\"critical\"",
    "service": "tcp/35608",
    "eventtype": "anomaly",
    "sessionid": "0",
    "count": "37709",
    "srcintfrole": "wan",
    "srcport": "63400",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "severity": "critical",
    "srccountry": "Reserved",
    "tags": [
      "location_a"
    ],
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "@timestamp": "2023-11-02T06:25:52.000Z",
    "event": {
      "original": "<185>date=2023-11-02 time=13:25:52 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698906352705873771 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/35608\" count=37709 attack=\"tcp_port_scan\" srcport=63400 dstport=35608 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1388 > threshold 200, repeats 37709 times since last log, pps 1401 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "msg": "anomaly: tcp_port_scan, 1388 > threshold 200, repeats 37709 times since last log, pps 1401 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "eventtime": "1698906352705873771",
    "srcintf": "port1",
    "dstip": "172.16.12.44",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "ftg_type": "utm",
    "temp_time": "2023-11-02 13:25:52",
    "date": "2023-11-02",
    "attackid": "100663398",
    "action": "detected",
    "vd": "root",
    "devid": "FGVMEVEM6MVTJLBA",
    "crlevel": "critical",
    "logid": "0720018432",
    "ftg_subtype": "anomaly",
    "level": "alert",
    "craction": "4096",
    "time": "13:25:52",
    "dstport": "35608",
    "crscore": "50",
    "policyid": "3",
    "policytype": "DoS-policy"
  },
  {
    "proto": "6",
    "syslog_index": "<185>",
    "message": "date=2023-11-02 time=13:26:22 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698906382705651099 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/64312\" count=45233 attack=\"tcp_port_scan\" srcport=63398 dstport=64312 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1614 > threshold 200, repeats 45233 times since last log, pps 1630 of prior second\" crscore=50 craction=4096 crlevel=\"critical\"",
    "service": "tcp/64312",
    "eventtype": "anomaly",
    "sessionid": "0",
    "count": "45233",
    "srcintfrole": "wan",
    "srcport": "63398",
    "tz": "+0700",
    "attack": "tcp_port_scan",
    "severity": "critical",
    "srccountry": "Reserved",
    "tags": [
      "location_a"
    ],
    "ref": "http://www.fortinet.com/ids/VID100663398",
    "devname": "FortiGate-VM64",
    "@timestamp": "2023-11-02T06:26:22.000Z",
    "event": {
      "original": "<185>date=2023-11-02 time=13:26:22 devname=\"FortiGate-VM64\" devid=\"FGVMEVEM6MVTJLBA\" eventtime=1698906382705651099 tz=\"+0700\" logid=\"0720018432\" type=\"utm\" subtype=\"anomaly\" eventtype=\"anomaly\" level=\"alert\" vd=\"root\" severity=\"critical\" srcip=172.16.12.27 srccountry=\"Reserved\" dstip=172.16.12.44 srcintf=\"port1\" srcintfrole=\"wan\" sessionid=0 action=\"detected\" proto=6 service=\"tcp/64312\" count=45233 attack=\"tcp_port_scan\" srcport=63398 dstport=64312 attackid=100663398 policyid=3 policytype=\"DoS-policy\" ref=\"http://www.fortinet.com/ids/VID100663398\" msg=\"anomaly: tcp_port_scan, 1614 > threshold 200, repeats 45233 times since last log, pps 1630 of prior second\" crscore=50 craction=4096 crlevel=\"critical\""
    },
    "msg": "anomaly: tcp_port_scan, 1614 > threshold 200, repeats 45233 times since last log, pps 1630 of prior second",
    "log": {
      "syslog": {
        "priority": 185
      }
    },
    "eventtime": "1698906382705651099",
    "srcintf": "port1",
    "dstip": "172.16.12.44",
    "type": "forti_log",
    "srcip": "172.16.12.27",
    "ftg_type": "utm",
    "temp_time": "2023-11-02 13:26:22",
    "date": "2023-11-02",
    "attackid": "100663398",
    "action": "detected",
    "vd": "root",
    "devid": "FGVMEVEM6MVTJLBA",
    "crlevel": "critical",
    "logid": "0720018432",
    "ftg_subtype": "anomaly",
    "level": "alert",
    "craction": "4096",
    "time": "13:26:22",
    "dstport": "64312",
    "crscore": "50",
    "policyid": "3",
    "policytype": "DoS-policy"
  }
]
