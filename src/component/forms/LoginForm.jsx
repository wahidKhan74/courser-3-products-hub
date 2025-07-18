import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    // State to manage form data
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    // Handle input change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
      
        if (error) {
            setError(null); // Clear error if input changes
        }
    }


    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        console.log('Login form submitted:', formData);
        
        const { email, password } = formData;
        // Basic validation 
        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        // Simulate an API call
        if (email === "user@example.com" && password === "password123") {
            // Redirect to dashboard or home page on successful login
            // navigate("/dashboard");

            // For demonstration, we will just log the email and redirect
            // you can pass a state object like this
            navigate("/dashboard", { state: { email } });
        } else {
            setError("Invalid email or password. Please try again.");
        }
    }

    // Reset form
    const handleReset = () => {
        setFormData({
            email: '',
            password: ''
        });
        setIsSubmitted(false);
    }


    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-5 rounded-2xl shadow-xl w-full max-w-sm">

        {isSubmitted &&  !error && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
            <p>Login successful!</p>
            <button onClick={handleReset} className="text-blue-600 hover:underline">Reset Form</button>
          </div>
        )}
        {error && isSubmitted &&(  
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
            <p>{error}</p>
            <button onClick={() => {setError(null);  setIsSubmitted(false);}} className="text-blue-600 hover:underline">Dismiss</button>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don’t have an account? <a href="#" className="text-blue-600 font-medium hover:underline">Register</a>
        </p>
      </div>
    </div>
    );
}

export default LoginForm;