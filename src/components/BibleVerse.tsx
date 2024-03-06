import { Typography } from "@mui/material"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export default function BibleVerse({ children }: Props) {
    return (
        <Typography fontStyle={"italic"} className="mt-20 text-lg sm:w-2/3 lg:w-1/2 w-5/6" textAlign={"center"}>
            {children}
        </Typography>
    )

}
