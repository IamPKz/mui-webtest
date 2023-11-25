import { Helmet } from 'react-helmet-async';

import QuizmangeView from 'src/sections/quizmanage/view/quizmange-view';
// ----------------------------------------------------------------------

export default function CreatequizPage() {
  return (
    <>
      <Helmet>
        <title> Create Quiz | Minimal UI </title>
      </Helmet>

    <QuizmangeView/>
    </>
  );
}
