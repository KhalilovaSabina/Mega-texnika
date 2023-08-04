import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material"
import PageContainer from "../../components/PageContainer"
import { texnikalar } from "../Texnikalar"
import TexnikaCard from "../../components/TexnikaCard"
import Carousel from "../../components/Carousel"

const categories = [
    {
        img: "avtokran.png",
        title: 'Avtokranlar'
    },
    {
        img: "traktor.png",
        title: 'Traktorlar'
    },
    {
        img: "qaldirici_sebet.png",
        title: 'Qaldırıcı səbətlər'
    },
    {
        img: "forklift.png",
        title: 'Forkliftlər'
    },
    {
        img: "katok.png",
        title: 'Katok'
    },
    {
        img: "shachman.png",
        title: 'Shacman'
    },
    {
        img: "bobcat.png",
        title: 'Bobcat'
    },
    {
        img: "pompa.png",
        title: 'Pompa'
    },
]

const brands = [
    "brand1.png",
    "brand2.png",
    "brand3.png",
    "brand4.png",
    "brand5.png",
    "brand6.png",
]

const HomePage = ({ }) => {
    return (
        <PageContainer>
            <Container>
                <Grid container my={7} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography component="h1" fontWeight="bold" variant="h3">Ağır texnikanızı bizdən satın alın</Typography>
                        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Typography>
                        <Button sx={{ mt: 4 }}>ətraflı</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 1, height: '100%' }} elevation={5}>
                            <img src="/buldozer.png" alt="" />
                        </Paper>
                    </Grid>
                </Grid>
                <Typography my={4} fontWeight="bold" variant="h5">Kateqoriyalar</Typography>
                <Grid container spacing={3}
                    sx={{
                        "& img": {
                            display: { xs: "none", sm: 'inline' }
                        }
                    }}
                >
                    {
                        categories.map(({ img, title }) => {
                            return (
                                <Grid key={title} item xs={6} md={4} lg={3}>
                                    <Paper elevation={10}>
                                        <Typography py={2} fontWeight="bold" textAlign="center">{title}</Typography>
                                        <img src={`/texnikalar/${img}`} alt="" />
                                    </Paper>
                                </Grid>
                            )
                        })

                    }
                </Grid>

                <Grid container my={10}>
                    <Grid sx={{ display: { xs: 'none', md: 'unset' } }} justifyContent="center" container alignSelf="flex-end" item xs={0} md={4} lg={5}>
                        <Paper
                            sx={{
                                p: 1,
                                width: "75%",
                                height: "90%"
                            }}
                            elevation={5}>
                            <img src="/fork_kitay.png" alt="" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8} lg={7}>
                        <Paper sx={{ p: 1, mb: 2 }} elevation={5}>
                            <img src="/ejdahais.png" alt="" />
                        </Paper>
                        <Box pl={4}>
                            <Typography py={4} component="h1" fontWeight="bold" variant="h3">Mega Texnika-da sınaqdan keçirilmiş texnikalar</Typography>
                            <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Typography>
                            <Button sx={{ mt: 4 }}>Haqqımızda</Button>
                        </Box>
                    </Grid>
                </Grid>

                <Typography fontWeight="bold" variant="h5">Texnikalar</Typography>
                <Box
                    sx={{
                        "& img": {
                            display: { xs: "none", sm: "inline" },
                        },
                        "& .carousel_container_home": {
                            py: "20px",
                            my: "40px",
                            "& > ul": {
                                gap: 4
                            }
                        }
                    }}
                >
                    <Carousel className="carousel_container_home">
                        {
                            texnikalar.slice(0, 4).map((texnika) => <TexnikaCard key={texnika.id} imgFolder="/texnikalar/" texnika={texnika} />)
                        }
                    </Carousel>
                </Box>
                <Box textAlign="center">
                    <Button sx={{ my: 5, px: 7, py: 1 }}>Hamısına bax</Button>
                </Box>

                <Typography fontWeight="bold" variant="h5" textAlign="center" my={5}>Markalar</Typography>
                <Carousel
                    desktopItemsCount={6}
                    autoPlay
                    showArrows={false}
                >
                    {
                        brands.map((brand) => {
                            return <Box sx={{
                                maxWidth: 150,
                                "& img": {
                                    objectFit: 'contain',
                                    width: 'fit-content'
                                }
                            }}>
                                <img key={brand} src={`/brands/${brand}`} />
                            </Box>
                        })
                    }
                </Carousel>
            </Container>
        </PageContainer >
    )
}
export default HomePage
