const additionalCommands1 = [
    {
      switch: "-h, --help",
      description: "show this help",
      example: "hping3 -h"
    },
    {
      switch: "-v, --version",
      description: "show version",
      example: "hping3 -v"
    },
    {
      switch: "-c, --count",
      description: "packet count",
      example: "hping3 -c 10 172.16.12.44"
    },
    {
      switch: "-i, --interval",
      description: "wait (uX for X microseconds, for example -i u1000)",
      example: "hping3 -i u1000 172.16.12.44"
    },
    {
      switch: "--fast",
      description: "alias for -i u1000 (10 packets for second)",
      example: "hping3 --fast 172.16.12.44"
    },
    {
      switch: "--faster",
      description: "alias for -i u1000 (100 packets for second)",
      example: "hping3 --faster 172.16.12.44"
    },
    {
      switch: "--flood",
      description: "sent packets as fast as possible. Don't show replies.",
      example: "hping3 --flood 172.16.12.44"
    },
    {
      switch: "-n, --numeric",
      description: "numeric output",
      example: "hping3 -n 172.16.12.44"
    },
    {
      switch: "-q, --quiet",
      description: "quiet",
      example: "hping3 -q 172.16.12.44"
    },
    {
      switch: "-I, --interface",
      description: "interface name (otherwise default routing interface)",
      example: "hping3 -I eth0 172.16.12.44"
    },
    {
      switch: "-V, --verbose",
      description: "verbose mode",
      example: "hping3 -V 172.16.12.44"
    },
    {
      switch: "-D, --debug",
      description: "debugging info",
      example: "hping3 -D 172.16.12.44"
    },
    {
      switch: "-z, --bind",
      description: "bind ctrl+z to ttl (default to dst port)",
      example: "hping3 -z 172.16.12.44"
    },
    {
      switch: "-Z, --unbind",
      description: "unbind ctrl+z",
      example: "hping3 -Z 172.16.12.44"
    },
    {
      switch: "--beep",
      description: "beep for every matching packet received",
      example: "hping3 --beep 172.16.12.44"
    }
  ]

  export {
    additionalCommands1
  };
