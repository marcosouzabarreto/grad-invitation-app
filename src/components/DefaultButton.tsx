import { Box, Button } from "@mui/material"

type Props = {
  onClick: () => any,
  label: string
}
export default function DefaultButton({ onClick, label }: Props) {
  return (
    <Box className="flex justify-center items-center">
      <Button onClick={onClick} className="mt-16 bg-primary hover:bg-primary hover:bg-opacity-80 text-text lg:px-14 lg:py-4 md:px-8 py-2 px-6 mb-36 md:text-lg text-sm">
        {label}
      </Button>
    </Box>
  )
}
