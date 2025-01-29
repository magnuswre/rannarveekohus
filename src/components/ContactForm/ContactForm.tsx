import { useState } from "react";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataEncoded = new URLSearchParams();
        formDataEncoded.append("form-name", "contact");
        Object.entries(formData).forEach(([key, value]) => {
            formDataEncoded.append(key, value);
        });

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formDataEncoded.toString(),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div>
            <h2>Kontakta oss</h2>
            {success && <p>Tack! Vi återkommer snart. 😊</p>}
            {error && <p>Något gick fel, försök igen. 😞</p>}

            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />

                <p>
                    <label>Your Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message" value={formData.message} onChange={handleChange} required></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    );
};

export default ContactForm;