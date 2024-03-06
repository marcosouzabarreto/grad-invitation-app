"use client";
import { ChangeEvent, useState } from "react";
import { Alert, Box, FormControl, RadioGroup, FormControlLabel, FormLabel, Radio, TextField, Button, Typography } from "@mui/material";
import { validateFormData, submit } from "./helpers";
import type { FormData } from "./helpers";



export default function AttendanceForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", willAttend: "yes" })
  const [errors, setErrors] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  function handleAttendanceChange(_: ChangeEvent, value: string) {
    setFormData(prev => ({ ...prev, willAttend: value }));
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData(prev => ({ ...prev, name: e.target.value }));
  }

  function handleSubmit() {

    const formErrors = validateFormData(formData);
    if (formErrors.length == 0) {
      setSubmitted(true)
      submit(formData)
      setErrors("")
    }
    else {
      setErrors(formErrors.join(", "))
    }
  }

  return (
    <Box className="rounded-xl bg-grey p-10 mt-20">
      {submitted ? (
        <Typography>
          Obrigado pela resposta!
        </Typography>
      ) : (
        <FormControl error={!!errors} className="w-full">
          {errors && (

            <Alert severity="error" className="my-10">{errors}</Alert>
          )}
          <TextField value={formData.name} label="Nome" fullWidth error={!!errors} className="my-4" onChange={handleNameChange} />
          <FormLabel id="radio-buttons-group-label">Você irá ao evento?</FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
            className="flex flex-row"
            value={formData.willAttend}
            onChange={handleAttendanceChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Sim" />
            <FormControlLabel value="no" control={<Radio />} label="Não" />
          </RadioGroup>
          <Button onClick={handleSubmit} className="normal-case mt-4 bg-primary hover:bg-primary hover:bg-opacity-80 text-text lg:px-6 lg:py-2 text-sm">
            <Typography>
              Confirmar
            </Typography>
          </ Button>
        </FormControl>
      )}
    </Box>
  )

} 
