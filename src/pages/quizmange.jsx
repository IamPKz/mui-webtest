import { Helmet } from 'react-helmet-async';

import QuizmangeView from 'src/sections/quizmanage/view/quizmange-view';
// ----------------------------------------------------------------------

export default function QuizmanagePage() {
  return (
    <>
      <Helmet>
        <title> Quiz manage | Minimal UI </title>
      </Helmet>

    <QuizmangeView/>
    </>
  );
}
