import axios from "axios"

export function UseLogin (username, password){
    axios
      .post('http://localhost:3000/login', { username, password})
      .then((response) => {
        console.log("success");
        if (response.status === 200 && response.data.token) {
          // Check the user type in the response, e.g., response.data.userType
          const {user_id , userType , token} = response.data;
          // Store the authentication token in localStorage
          localStorage.setItem('user_id', user_id);
          localStorage.setItem('token', token);
          localStorage.setItem("isLoggedin", true);
          localStorage.setItem("userType", userType);

          // Redirect to the appropriate dashboard based on user type
          if (userType === 'user') {
            // Redirect to the user dashboard
            window.location.href = '/rawlogs'; // Replace with your user dashboard URL
          } else if (userType === 'admin') {
            // Redirect to the admin dashboard
            window.location.href = '/usermanagement'; // Replace with your admin dashboard URL
          }
        } else {
          // Handle login failure (e.g., show an error message)
          console.error('Login failed');
        }
      })
      .catch((error) => {
        // Handle network error or other errors
        console.error(error);
      });
};
