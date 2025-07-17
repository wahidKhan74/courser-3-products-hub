import { useState } from "react";
import "./BasicForm.css"; // Assuming you have some styles for the form

function BasicForm() {
    // State to manage form data
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Handle input change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        console.log('Form submitted:', formData);
    }

    // Reset form
    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            password: ''
        });
        setIsSubmitted(false);
    }

    return (
        <div className="form-container">
            <h2>Basic Form</h2>
            {isSubmitted ? (
                <div  className="success-message">
                    <h3>Form Submitted Successfully!</h3>
                    <button onClick={handleReset}>Reset Form</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="subbmit-button" type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default BasicForm;