import React from "react";

interface ItalicHeaderProps {
    fromColor?: string;
    toColor?: string;
    size?: string;
    className?: string;
    children: React.ReactNode;
}

const ItalicHeader: React.FC<ItalicHeaderProps> = ({
                                                       fromColor = "purple-500",
                                                       toColor = "blue-500",
                                                       size = "5rem",
                                                       className = "",
                                                       children,
                                                   }) => {
    return (
        <h1
            className={`text-transparent bg-clip-text bg-gradient-to-b from-${fromColor} to-${toColor} text-[${size}] font-bold italic uppercase ${className}`}
        >
            {children}
        </h1>
    );
};

export {ItalicHeader};