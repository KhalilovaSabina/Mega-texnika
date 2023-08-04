import { Box, Container, Stack, Typography } from "@mui/material"
import { ReactComponent as MegaLogo } from "../../assets/logo.svg"
import { navlinks } from "../Header"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    return (
        <>

            <Box py={{ xs: 2, sm: 3, md: 5 }} sx={{ background: "linear-gradient(133deg, rgba(255,192,31,0.5) 2%, rgba(255,192,31,0.4) 22%, rgba(255,255,255,1) 96%);" }}>
                <Container>
                    <Stack flexDirection="row" justifyContent="space-between" flexWrap="wrap">
                        <Box my={1}
                            sx={{
                                textAlign: { xs: 'center', sm: 'left' }
                            }}
                            width={{ xs: '100%', md: 'fit-content' }}>
                            <MegaLogo />
                        </Box>
                        <Stack my={1}>
                            {
                                navlinks.map(({ title, to }) => {
                                    return <Typography
                                        key={to}
                                        href={to}
                                        component='a'>
                                        {title}
                                    </Typography>
                                })
                            }
                        </Stack>
                        <Stack my={1}>
                            <Typography>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
                            <Typography component="a" href="tel:+994(51) 123 45 67">+994(51) 123 45 67</Typography>
                            <Typography component="a" href="tel:+994(12) 123 45 67">+994(12) 123 45 67</Typography>
                            <Typography component="a" href="mailto:info@lmegatexnika.az">info@lmegatexnika.az</Typography>
                        </Stack>
                        <Stack flexGrow={{ xs: 1, sm: 0 }} my={1} alignItems={{ xs: 'center' }}>
                            <Typography> Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</Typography>
                            <Stack my={2} flexDirection="row" justifyContent={{ xs: 'space-around', sm: 'flex-start' }} gap={1}>
                                <a href="https://twitter.com">
                                    <TwitterIcon />
                                </a>
                                <a href="https://facebook.com">
                                    <FacebookIcon />
                                </a>
                                <a href="https://instagram.com">
                                    <InstagramIcon />
                                </a>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack my={2} flexDirection={{ xs: 'column', sm: "row" }} alignItems="center" flexWrap="wrap" justifyContent={{ xs: 'center', sm: "space-between" }}>
                        <Typography>
                            © 2022   Megatexnika / Müəllif hüquqları
                        </Typography>
                        <Typography>
                            Design by <b> Ali & FE10</b>
                        </Typography>
                    </Stack>
                </Container>
            </Box >
        </>
    )
}
export default Footer
