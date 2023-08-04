import { Box, Paper, Stack, Typography } from "@mui/material"

const About = () => {
    return (
        <Stack>
            <Box>
                <Typography variant="h4">megaTexnika</Typography>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                <Paper sx={{ p:1 }} elevation={10}>
                    <img src="/buldozer.png" alt="" />
                </Paper>
            </Box>
        </Stack>
    )
}

export default About