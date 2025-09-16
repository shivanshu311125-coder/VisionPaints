import {Sun, Moon} from "lucide-react";
import {useTheme} from "next-themes";
import { useState } from "react";

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return (
        <button 
        onClick={ThemeToggle}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition"
        aria-label="Toggle Theme"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-800"/>
            ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
            
            )}
        </button>
    )
}