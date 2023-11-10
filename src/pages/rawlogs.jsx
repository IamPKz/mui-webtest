import { Helmet } from 'react-helmet-async';

import { LogView } from 'src/sections/rawlogs/view';

// ----------------------------------------------------------------------

export default function LogPage() {
  return (
    <>
      <Helmet>
        <title> Rawlog | Minimal UI </title>
      </Helmet>

      <LogView />
    </>
  );
}
