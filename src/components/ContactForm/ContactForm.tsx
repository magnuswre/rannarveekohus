import { useState } from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        namn: "",
        email: "",
        meddelande: ""
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataEncoded = new URLSearchParams();
        formDataEncoded.append("form-name", "kontakt");
        Object.entries(formData).forEach(([key, value]) => formDataEncoded.append(key, value));

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formDataEncoded.toString(),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ namn: "", email: "", meddelande: "" });
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

            <form name="kontakt" method="POST" data-netlify="true" data-netlify-recaptcha="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="kontakt" />

                <label>
                    Namn:
                    <input type="text" name="namn" value={formData.namn} onChange={handleChange} required />
                </label>

                <label>
                    E-post:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>

                <label>
                    Meddelande:
                    <textarea name="meddelande" value={formData.meddelande} onChange={handleChange} required />
                </label>

                {/* reCAPTCHA */}
                <div data-netlify-recaptcha="true"></div>

                <button type="submit">Skicka</button>
            </form>
        </div>
    );
};

export default ContactForm;
