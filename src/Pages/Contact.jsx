//imports
import React, {useState} from "react";
import "../App.css";


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
        <div class="mx-auto p-2 text-align-center" >
        <selection className="contact">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3a text-center" >
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div class="mb-3 text-center">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div class="mb-3 text-center">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    class="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <div class="d-grid gap-2">
                <button class="btn btn-secondary btn-lg " type="submit">Submit</button>
                </div>
            </form>
        </selection>
        </div>
    );
}

//export
export default Contact;
