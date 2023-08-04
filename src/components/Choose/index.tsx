import { Container, Stack, Grid, Paper, Typography } from "@mui/material"
import PageContainer from "../PageContainer"
import About from "../About"

const Choose = ({ }) => {
    return (
        <PageContainer>
            
            <Container>
                <Stack>
                    <About/>
                </Stack>
                <Grid container my={5}>
                    <Grid item xs={12} md={6}>
                        <Typography component="h1" fontWeight="bold" variant="h3">Niyə bizi seçməlisiniz</Typography>
                        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p:1 }} elevation={10}>
                        <img src="/buldozer.png" alt="" />
                        </Paper>
                        
                    </Grid>

                </Grid>
            </Container>
        </PageContainer>
    )
}
export default Choose

