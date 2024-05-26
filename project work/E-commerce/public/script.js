var sidenav=document.querySelector(".side-navbar");
function showNavbar(){
sidenav.style.left="0";
}
function closeNavbar(){
    sidenav.style.left="-60%";
}
function validatePassword(password) {
    // Password must contain at least one uppercase letter and one special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;

    return passwordRegex.test(password);
} 
function validatePasswordSignup(signupPassword ) {
    // Password must contain at least one uppercase letter and one special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;

    return passwordRegex.test(signupPassword);
}
function handleSignupSuccess(event) {
    event.preventDefault();
    const signupPasswordInput = document.getElementsByClassName('signup-password')[0]; // Assuming it's the first element with the 'signup-password' class
    const signupPassword = signupPasswordInput.value;

    if (!validatePasswordSignup(signupPassword)) {
        alert('Password must contain at least one uppercase letter and one special character.');
        return;
    } else{
   
    alert('Signed up successfully! Now Sign in'); // Display success message
    event.target.reset();
}
}
function handleSubmitlogin(event) {
    event.preventDefault();
    
    // Get the password input element
    const passwordInput = document.querySelector('.password'); // Assuming it's the first element with the 'password' class

    // Get the value of the password input
    const password = passwordInput.value;

    // Validate password strength
    if (!validatePassword(password)) {
        alert('Password must contain at least one uppercase letter and one special character.');
        return;
    } else {
        // If validation passes, show success message and redirect to collection page
        alert('Logged in successfully!');
        window.location.href = './collection.html'; // Change the URL as needed
    }
}
document.addEventListener('DOMContentLoaded', function() {
// Add event listener to form submission
document.getElementById('login-form').addEventListener('submit', handleSubmitlogin);
document.getElementById('signup-form').addEventListener('submit',handleSignupSuccess );

})


