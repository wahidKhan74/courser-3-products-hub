// Simulate login : with Auth Utility
// This utility manages authentication state and checks user roles
export const Auth = {
    isAuthenticated: false,  // change to true when user logs in
    isAdmin: false,  // change to true when user is an admin
    
    login() {
        this.isAuthenticated = true;
    },
    
    logout() {
        this.isAuthenticated = false;
        this.isAdmin = false;
    },
    
    setAdmin() {
        this.isAdmin = true;
    },
    
    checkAuth() {
        return this.isAuthenticated;
    },
    
    checkAdmin() {
        return this.isAdmin;
    }
}