"use client";
import { Box, Typography } from "@mui/material";
import Hero from "@/components/Hero";
import AttendanceForm from "@/components/AttendaceForm";
import GradHat from "@/components/GradHat";
import DefaultButton from "@/components/DefaultButton";
import { useRouter } from "next/navigation";

export default function ConfirmAttendance() {
  const router = useRouter()
  function handleNavigateHome() {

    router.push("/")
  }

  return (
    <Box bgcolor={"white"}>

      <Hero variant={3} />
      <Box className="flex items-center justify-center">
        <Box className="sm:w-2/3 lg:w-1/2 w-5/6 flex flex-col items-center justify-center mt-36">
          <Typography className="text-xl">
            Confirme sua presença, fazendo parte desse momento tão especial comigo.
          </Typography>
          <AttendanceForm />
          <GradHat />
        </Box>
      </Box>
      <DefaultButton onClick={handleNavigateHome} label="Pagina Inicial" />
    </Box>
  )
}
