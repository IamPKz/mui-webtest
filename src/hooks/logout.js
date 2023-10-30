export function UseLogout (){
    // Clear user data and authentication status from localStorage
    localStorage.removeItem('user_id');
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    // Perform any additional logout actions here, such as redirecting to the login page
    window.location.href = '/login';
};
