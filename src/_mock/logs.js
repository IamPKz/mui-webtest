import axios from 'axios';

export function pulling(){axios
  .get("http://localhost:3000/logs")
  .then((response) => response.data)}

