import { useState } from "react";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataEncoded = new URLSearchParams();
        formDataEncoded.append("form-name", "contact");
        Object.entries(formData).forEach(([key, value]) => formDataEncoded.append(key, value));

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formDataEncoded.toString(),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div>
            <h2>Contact Us</h2>
            {success && <p>Thank you! We'll get back to you soon. 😊</p>}
            {error && <p>Something went wrong, please try again. 😞</p>}

            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />

                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>

                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>

                <label>
                    Subject:
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </label>

                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
