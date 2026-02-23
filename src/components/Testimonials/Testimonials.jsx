import React, { useRef } from 'react';
import './Testimonials.css';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';
import nextIcon from '../../assets/next-icon.png';
import backIcon from '../../assets/back-icon.png';

const testimonialsData = [
    {
        name: "Emily Williams",
        location: "Tazalin College, Githunguri",
        message: "Choosing to pursue my degree at Tazalin College was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
        image: user1
    },
    {
        name: "William Jackson",
        location: "Tazalin College, Githunguri",
        message: "The faculty is incredibly supportive and knowledgeable. I've gained invaluable skills that will help me in my future career.",
        image: user2
    },
    {
        name: "Emily Johnson",
        location: "Tazalin College, Githunguri",
        message: "Tazalin College has provided me with the resources and opportunities to grow personally and professionally. I highly recommend it!",
        image: user3
    },
    {
        name: "Robert Smith",
        location: "Tazalin College, Githunguri",
        message: "The diverse programs offered at Tazalin College cater to everyone's interests and career goals. It's a great place to learn and develop.",
        image: user4
    }
];

const Testimonials = () => {
    const sliderRef = useRef();
    let translateX = 0;

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
            <img src={nextIcon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={backIcon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={sliderRef}>
                    {testimonialsData.map((testimonial, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={testimonial.image} alt={`${testimonial.name}`} />
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
