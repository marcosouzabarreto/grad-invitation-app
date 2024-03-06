import Image from "next/image";
import { Box } from "@mui/material";

type Props = {
    variant: number
}

export default function Hero({ variant }: Props) {
    return (
        <Box width={"100vw"} position={"relative"}>
            <Image alt="hero-image" src={`/my-image-${variant}.jpg`} width={1920} height={1080} className="h-auto w-full" />
        </Box>
    )
}
