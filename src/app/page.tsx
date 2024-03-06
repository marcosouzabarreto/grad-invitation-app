"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Timer from "@/components/Timer";
import Content from "@/components/Content";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-inter), Arial, sans-serif',
    },
});

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor="white">
                <Hero variant={1} />
                <Timer />
                <Content />
            </Box>
        </ThemeProvider>
    );
}
