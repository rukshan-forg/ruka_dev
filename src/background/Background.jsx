// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Background.css";

const Background = () => {
    const [mousePos, setMousePos] = useState({ x: -150, y: -150 });
    const [isVisible, setIsVisible] = useState(false); // New state to manage visibility

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            setIsVisible(true); // Show circle when mouse moves
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Create a large number of grid cells to cover the entire screen
    const gridCells = [];
    const rows = Math.ceil(window.innerHeight / 21); // 20px cell + 1px gap
    const cols = Math.ceil(window.innerWidth / 21);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            gridCells.push(<div key={`${row}-${col}`} className="grid-cell"></div>);
        }
    }

    return (
        <div className="background ">
            {isVisible && ( // Render circle only if visible
                <div
                    className="reveal-circle"
                    style={{
                        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, // Center the circle
                    }}
                ></div>
            )}
            <div className="grid-overlay">
                {gridCells.map((gridCell, index) => (
                    <div key={index}>
                        {gridCell}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Background;
