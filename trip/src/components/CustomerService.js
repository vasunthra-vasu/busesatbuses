import React, { useState } from 'react';
import './CustomerService.css';

const CustomerService = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <div className="customer-service">
            <header>
                <h1>Customer Service</h1>
            </header>

            <main>
                <section className="faq">
                    <h2>Frequently Asked Questions (FAQs)</h2>
                    {faqData.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-header" onClick={() => toggleFAQ(index)}>
                                <h3>{faq.question}</h3>
                                <span className={`icon ${activeFAQ === index ? 'open' : ''}`}>
                                    {activeFAQ === index ? '▼' : '►'}
                                </span>
                            </div>
                            {activeFAQ === index && <p>{faq.answer}</p>}
                        </div>
                    ))}
                </section>

                <section className="contact">
                    <h2>Contact Us</h2>
                    <p>If you need further assistance, please reach out to our customer service team:</p>
                    <ul>
                        <li><strong>Email:</strong> support@exploremoretravel.com</li>
                        <li><strong>Phone:</strong> +1 234 567 890</li>
                        <li><strong>Address:</strong> 123 Travel St, City, State, Zip</li>
                    </ul>
                </section>

                <section className="support">
                    <h2>Customer Support</h2>
                    <p>Our customer support team is available 24/7 to help you with any inquiries or issues.</p>
                    <p>You can reach us via our social media channels:</p>
                    <ul>
                        <li><span className="icon">📘</span> <strong>Facebook:</strong> exploremoretravel</li>
                        <li><span className="icon">🐦</span> <strong>Twitter:</strong> exploremoretravel</li>
                        <li><span className="icon">📸</span> <strong>Instagram:</strong> exploremoretravel</li>
                    </ul>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 ExploreMore Travel. All rights reserved.</p>
            </footer>
        </div>
    );
};

// Sample FAQ data
const faqData = [
    {
        question: "What is the cancellation policy?",
        answer: "You can cancel your booking up to 24 hours before departure for a full refund. After that, a cancellation fee may apply."
    },
    {
        question: "How can I change my booking?",
        answer: "You can change your booking details by contacting our customer service or using the 'Manage Booking' section on our website."
    },
    {
        question: "What are the payment options available?",
        answer: "We accept credit/debit cards, mobile wallets, and bank transfers for your convenience."
    }
];

export default CustomerService;
