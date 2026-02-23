import React, { useRef, useEffect, useState } from 'react';
import './Testimonials.css';
import { storage } from '/src/components/firebase.js'; // Adjust the import based on your file structure
import { getDownloadURL, ref } from 'firebase/storage';

const testimonialsData = [
    {
        name: "Emily Williams",
        location: "Tazalin College, Githunguri",
        message: "Choosing to pursue my degree at Tazalin College was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
        imageRef: 'images/user1.jpg' // Update with the path to your Firebase Storage image
    },
    {
        name: "William Jackson",
        location: "Tazalin College, Githunguri",
        message: "The faculty is incredibly supportive and knowledgeable. I've gained invaluable skills that will help me in my future career.",
        imageRef: 'images/user2.jpg'
    },
    {
        name: "Emily Johnson",
        location: "Tazalin College, Githunguri",
        message: "Tazalin College has provided me with the resources and opportunities to grow personally and professionally. I highly recommend it!",
        imageRef: 'images/user3.jpg'
    },
    {
        name: "Robert Smith",
        location: "Tazalin College, Githunguri",
        message: "The diverse programs offered at Tazalin College cater to everyone's interests and career goals. It's a great place to learn and develop.",
        imageRef: 'images/user4.jpg'
    }
];

const Testimonials = () => {
    const sliderRef = useRef();
    let translateX = 0;
    const [images, setImages] = useState([]);
    const [nextIcon, setNextIcon] = useState(null);
    const [backIcon, setBackIcon] = useState(null);

    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = testimonialsData.map(async (testimonial) => {
                const imgRef = ref(storage, testimonial.imageRef);
                return await getDownloadURL(imgRef);
            });
            const imageUrls = await Promise.all(imagePromises);
            setImages(imageUrls);
        };

        const loadIcons = async () => {
            const nextIconRef = ref(storage, 'images/next-icon.png'); // Update with your Firebase Storage path
            const backIconRef = ref(storage, 'images/back-icon.png'); // Update with your Firebase Storage path
            const nextUrl = await getDownloadURL(nextIconRef);
            const backUrl = await getDownloadURL(backIconRef);
            setNextIcon(nextUrl);
            setBackIcon(backUrl);
        };

        loadImages();
        loadIcons();
    }, []);

    const slideForward = () => {
        if (translateX > -((testimonialsData.length - 1) * 100)) {
            translateX -= 100;
            sliderRef.current.style.transform = `translateX(${translateX}%)`;
        }
    };

    const slideBackward = () => {
        if (translateX < 0) {
            translateX += 100;
            sliderRef.current.style.transform = `translateX(${translateX}%)`;
        }
    };

    return (
        <div className='testimonials'>
            {nextIcon && <img src={nextIcon} alt="Next" className='next-btn' onClick={slideForward} />}
            {backIcon && <img src={backIcon} alt="Back" className='back-btn' onClick={slideBackward} />}
            <div className="slider">
                <ul ref={sliderRef}>
                    {testimonialsData.map((testimonial, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="user-info">
                                    {images[index] && <img src={images[index]} alt={`${testimonial.name}`} />}
                                    <div>
                                        <h3>{testimonial.name}</h3>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                                <p>{testimonial.message}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
