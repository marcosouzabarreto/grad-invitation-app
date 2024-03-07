"use client";
import { Box, Typography } from "@mui/material";
import Map from "./Map";
import DefaultButton from "../DefaultButton";
import { useRouter } from "next/navigation";

export default function PlaceInfo() {
  const router = useRouter();

  function handleNavigateToAttendance() {
    router.push("confirm-attendance")

  }
  return (
    <>
      <Box className="bg-grey flex justify-center">
        <Box className="sm:w-2/3 w-5/6 flex flex-col justify-between">
          <Map
            className="mt-10 lg:h-96 md:h-80 h-64"
          />
          <Box className="gap-2 flex flex-col mt-16 text-center text-primary items-center justify-center">
            <Typography className="font-medium text-2xl">
              Local: Happy Day
            </Typography>
            <Typography className="font-medium text-2xl">
              Data: 23/03/2024
            </Typography>
            <Typography className="font-medium text-2xl">
              Horario: 19:30
            </Typography>

            <Typography className="text-lg mt-5 mb-20 w-1/2">
              Quero compartilhar contigo a alegria da minha vitória. Te espero em
              minha formatura, pois bons momentos são vivenciados com pessoas
              especiais.
            </Typography>
          </Box>
        </Box>
      </Box>
      <DefaultButton onClick={handleNavigateToAttendance} label="Confirme sua presença" />
    </>
  );
}
