import { Box, Typography } from "@mui/material";

type Props = {
    time: string,
    unit: string
}

export default function TimeDisplay({ time, unit }: Props) {

    return (
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} width={100} alignItems={"center"} >
            <Box className="flex flex-row gap-1">
                <Box className="bg-primary flex justify-center rounded-md">
                    <Typography className="text-3xl p-3 text-text">
                        {time[0]}
                    </Typography>
                </Box>
                <Box className="bg-primary flex justify-center text-text rounded-md">
                    <Typography className="text-3xl p-3">
                        {time[1]}
                    </Typography>
                </Box>

            </Box>
            <Typography className="text-xl mt-2 text-secondaryText font-light">
                {unit}
            </Typography>
        </Box>
    )

}
