import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------
// Render assets icon
const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'User',
    path: '/usermanagement',
    icon: icon('ic_user'),
  }, 
  {
    title: 'Quiz',
    path: '/quizmanagement',
    icon: icon('test-svgrepo-com'),
  },
];

export default navConfig;
