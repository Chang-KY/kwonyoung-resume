"use client";

import React from "react";
import NoScroll from "@/hooks/NoScroll";
import {FaTimes} from "react-icons/fa";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    NoScroll(isOpen);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60">
            <button
                onClick={onClose}
                className="absolute sm:hidden top-3 right-6 z-100 cursor-pointer hover:text-gray-800 text-2xl">
                <FaTimes/>
            </button>
            <button
                onClick={onClose}
                className="absolute sm:block top-3 right-6 cursor-pointer hover:text-gray-800 text-2xl">
                <FaTimes/>
            </button>
            <div className="relative bg-white shadow-2xl w-full sm:w-[90%] h-full sm:max-h-[80%] sm:max-w-[90%]">
                {children}
            </div>
        </div>
    );
};

export default Modal;
