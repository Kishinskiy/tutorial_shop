import React from "react";

export default function Modal({ closeModal, title, content, children }) {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    aria-label="Close modal"
                >
                    ✕
                </button>

                {title && (
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
                )}
                {content && <p className="mb-4 text-gray-600">{content}</p>}
                {children}
            </div>
        </div>
    );
}