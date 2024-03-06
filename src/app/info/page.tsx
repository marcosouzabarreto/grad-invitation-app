import { Box, Typography } from "@mui/material";
import Hero from "@/components/Hero";
import Image from "next/image";
import PlaceInfo from "@/components/PlaceInfo";
import BibleVerse from "@/components/BibleVerse";
export default function Information() {

    return (
        <Box bgcolor={"white"}>

            <Hero variant={2} />
            <Box className="flex items-center justify-center">
                <Box className="sm:w-2/3 lg:w-1/2 w-5/6 flex flex-col items-center justify-center mt-36">
                    <Typography className="text-xl">
                        SOBRE A FESTA
                    </Typography>
                    <BibleVerse>
                        Romanos 8:37
                        <br />
                        “Mas em todas estas coisas somos mais que vencedores, por meio daquele que nos amou.”
                    </BibleVerse>
                    <Typography textAlign={"center"} mt={3}>
                        Pequenas conquistas nos impulsionam a buscar grandes vitorias.
                        Alcancar um objetivo, vencer caminhos repletos de desafios, resultam de perseveranca e fe,
                        para que desta forma possamos celebrar o sucesso com pessoas importantes.
                    </Typography>
                    <Image alt="chapeu-graduacao" src="/grad-hat.svg" width={188} height={144} className="mt-20" />
                </Box>
            </Box>
            <PlaceInfo />
        </Box>
    )
}
