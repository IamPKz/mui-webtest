import axios from 'axios';

export const logs = () => {axios
  .get("http://localhost:3000/logs")
  .then((response) => response.data)}

