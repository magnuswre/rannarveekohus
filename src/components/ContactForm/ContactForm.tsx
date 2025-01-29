import { useState } from "react";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        // subject: "",
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
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="Contact-Form-Container">
            <h4>eller via formuläret:</h4>
            {success && <p>Tack för ditt meddelande, vi hör av oss så snart vi kan! 😊</p>}
            {error && <p>Något gick fel, försök igen. 😞</p>}

            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="Contact-Form-Content">
                <input type="hidden" name="form-name" value="contact" />

                <label>
                    <p>Namn:</p>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>

                <label>
                    <p>Email:</p>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>

                {/* <label>
                    Subject:
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </label> */}

                <label>
                    <p>Meddelande:</p>
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Skicka</button>
            </form>
        </div>
    );
};

export default ContactForm;
