import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------
// Render assets icon
const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'rawlogs',
    path: '/rawlogs',
    icon: icon('log-file-format-svgrepo-com'),
  },
  {
    title: 'ParseLog',
    path: '/parselog',
    icon: icon('parse-log-svgrepo-com'),
  },
  {
    title: 'Learning',
    path: '/learning',
    icon: icon('anonymous-cyber-crime-criminal-hack-hacker-svgrepo-com'),
  },
  {
    title: 'Quiz',
    path: '/quiz',
    icon: icon('test-svgrepo-com'),
  },
];

export default navConfig;
