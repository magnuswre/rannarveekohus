import './ImageCard.css'

import imageOne from '../../assets/Vallebild1.jpg'
import imageTwo from '../../assets/IMG_3302.jpg'
import imageThree from '../../assets/utsiktvalle1.jpg'
import imageFour from '../../assets/vallenyamotladan.jpg'


const images = [
    {
        src: imageOne,
        alt: 'Image One',
        title: 'Image One',
        description: 'This is the first image',
    },
    {
        src: imageTwo,
        alt: 'Image Two',
        title: 'Image One',
        description: 'This is the second image',
    },
    {
        src: imageThree,
        alt: 'Image Three',
        title: 'Image One',
        description: 'This is the third image',
    },
    {
        src: imageFour,
        alt: 'Image Four',
        title: 'Image One',
        description: 'This is the fourth image',
    },
]

const ImageCard: React.FC = () => {
    return (
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {images.map((image, index) => (
                <div className="image-card" key={index}>
                    <img src={image.src} alt={image.title} className="image-card__image" />
                    <div className="image-card__content">
                        <h3 className="image-card__title">{image.title}</h3>
                        <p className="image-card__description">{image.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageCard