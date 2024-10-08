import { Helmet } from 'react-helmet-async';

import { RawLogView } from 'src/sections/rawlogs/view';

// ----------------------------------------------------------------------

export default function RawLogPage() {
  return (
    <>
      <Helmet>
        <title> Rawlog | Minimal UI </title>
      </Helmet>

      <RawLogView />
    </>
  );
}
