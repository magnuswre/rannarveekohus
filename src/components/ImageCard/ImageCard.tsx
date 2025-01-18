import React, { useState } from "react";
import "./ImageCard.css";

// import imageOne from "../../assets/Vallebild1.jpg";
import imageTwo from "../../assets/IMG_3302.jpg";
import imageThree from "../../assets/utsiktvalle1.jpg";
import imageFour from "../../assets/vallenyamotladan.jpg";
import imageFive from "../../assets/IMG_3297.jpg";
import imageSix from "../../assets/IMG_3299.jpg";
import imageSeven from "../../assets/vallevastkvall.jpg";
import imageEight from "../../assets/IMG_3295.jpg";
import imageNine from "../../assets/vallekok.jpg";

const images = [
    // {
    //     src: imageOne,
    //     alt: "fasad väster",
    //     title: "huset från väster",
    //     description: "This is the first image",
    // },
    {
        src: imageTwo,
        alt: "fasad söder",
        title: "huset från söder",
        description: "huset från söder",
    },
    {
        src: imageThree,
        alt: "vy söderut",
        title: "vy söderut",
        description: "This is the third image",
    },
    {
        src: imageFour,
        alt: "huset från söder",
        title: "huset från söder",
        description: "This is the fourth image",
    },
    {
        src: imageFive,
        alt: "uteplats",
        title: "uteplats",
        description: "This is the fifth image",
    },
    {
        src: imageSeven,
        alt: "uteplats",
        title: "uteplats",
        description: "This is the sixth image",
    },
    {
        src: imageSix,
        alt: "Allrum",
        title: "allrum/kök",
        description: "This is the seventh image",
    },
    {
        src: imageEight,
        alt: "allrum/kök",
        title: "allrum/kök",
        description: "This is the eighth image",
    },
    {
        src: imageNine,
        alt: "allrum/kök",
        title: "allrum/kök",
        description: "This is the ninth image",
    },

];

const ImageCard: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleCardClick = (src: string) => {
        setSelectedImage(src);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <div className="ImageCard-Container"
                style={{
                    display: "grid",
                    gap: "20px",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                }}
            >
                {images.map((image, index) => (
                    <div
                        className="image-card"
                        key={index}
                        onClick={() => handleCardClick(image.src)}
                    >
                        <img src={image.src} alt={image.alt} className="image-card__image" />
                        <div className="image-card__content">
                            <h3 className="image-card__title">{image.title}</h3>
                            {/* <p className="image-card__description">{image.description}</p> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Expanded Image */}
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImage!} alt="Expanded view" className="modal-image" />
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageCard;
