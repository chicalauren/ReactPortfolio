//imports
import React from "react";


//component
function Contact() {
    // Setting up state
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
        
    // Handling form changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      
      // Validating form
      const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Enter a valid email address.";
        }
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
        return newErrors;
      };

        // Handling form submission
        const handleSubmit = (e) => {
            e.preventDefault();
            const newErrors = validateForm();
            if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            } else {
            alert("Form submitted.");
            }
        };

    //return items
    return (
        <selection className="contact">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <p className="error">{errors.message}</p>}
                <button type="submit">Submit</button>
            </form>
        </selection>
    );
}

//export
export default Contact;
