import React, { useState } from 'react';
import './ProposalPage.css';

const ProposalPage = ({ onAccept }) => {
    const [noButtonStyle, setNoButtonStyle] = useState({});
    const [showHearts, setShowHearts] = useState(false);
    const [sparkle, setSparkle] = useState(false);

    const moveNoButton = () => {
        const maxX = window.innerWidth - 150;
        const maxY = window.innerHeight - 100;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        setNoButtonStyle({
            position: 'fixed',
            left: `${randomX}px`,
            top: `${randomY}px`,
            transition: 'all 0.3s ease'
        });
    };

    const handleYesClick = () => {
        setSparkle(true);
        setShowHearts(true);

        setTimeout(() => {
            onAccept();
        }, 2000);
    };

    return (
        <div className="proposal-container" data-testid="proposal-page">
            {/* Floating Hearts Animation */}
            {showHearts && (
                <div className="hearts-container" data-testid="hearts-animation">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="floating-heart"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        >
                            ❤️
                        </div>
                    ))}
                </div>
            )}

            <div className="proposal-content">
                <h1 className="proposal-title" data-testid="proposal-question">
                    Will you be my Valentine? ❤️
                </h1>

                <div className="buttons-container">
                    <button
                        className={`yes-button ${sparkle ? 'sparkle-burst' : ''}`}
                        onClick={handleYesClick}
                        data-testid="yes-button"
                    >
                        YES
                    </button>

                    <button
                        className="no-button"
                        style={noButtonStyle}
                        onMouseEnter={moveNoButton}
                        onClick={moveNoButton}
                        data-testid="no-button"
                    >
                        NO
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProposalPage;
