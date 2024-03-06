"use client";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material"
export default function Header() {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY;
            setIsTop(scrollPosition < 50);
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Box className={`${isTop ? "" : "bg-primary"} fixed top-0 transition-colors duration-300 w-screen p-4 pb-4 flex align-middle md:justify-around justify-center z-10`}>
            <Box className="w-3/5 flex items-center justify-between">
                <Typography className="flex text-text items-center justify-between">
                </Typography>

                <Menu />
            </Box>
        </Box>
    )
}
