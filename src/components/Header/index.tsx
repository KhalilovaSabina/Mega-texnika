import { Box, Container, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ReactComponent as MegaLogo } from "../../assets/logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./index.module.css"

export const navlinks = [
    {
        to: "/about",
        title: "Haqqımızda"
    },
    {
        to: "/texnikalar",
        title: "Texnikalar"
    },
    {
        to: "/icare",
        title: "İcarə şərtləri"
    },
    {
        to: "/blog",
        title: "Blog"
    },
    {
        to: "/contact",
        title: "Əlaqə"
    },
]

const languages = [
    'AZ', 'EN', 'RU'
]

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ backgroundColor: 'orange' }}>
                <Container>
                    <Stack py={1} flexDirection={{ xs: "column", sm: "row" }} className={styles.ali_12345}>
                        <Stack gap={2} flexDirection={{ xs: "column", sm: "row" }} textAlign="center">
                            <Typography>+994(12) 123 45 67</Typography>
                            <Typography
                                sx={{
                                    borderLeftWidth: { xs: 0, sm: 2 }
                                }}
                                className={styles.borderLeft} component="span" display={{ xs: "block", sm: 'inline' }}>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
                        </Stack>
                        <Stack flexDirection="row" gap={1}>
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
                </Container>
            </Box>
            <Box sx={{ boxShadow: "0 2px 10px gray" }}>
                <Container sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
                    <MegaLogo />
                    <Stack justifyContent={{ xs: 'flex-end', md: 'center' }} flexDirection="row" flexGrow={1}>
                        <Box sx={{
                            display: { xs: 'block', md: 'none' },
                        }}>
                            <IconButton
                                size="large"
                                onClick={handleClick}
                            // onClick={(e)=>handleClick(e)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    horizontal: 'right',
                                    vertical: 'bottom'
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                {[{
                                    to: "/",
                                    title: "Əsas səhifə"
                                }, ...navlinks].map(({ title, to }) => (
                                    <MenuItem key={to} onClick={() => navigate(to)}>
                                        <Typography textAlign="center">{title}</Typography>
                                    </MenuItem>
                                ))}
                                {
                                    languages.map((lang) => {
                                        return (
                                            <MenuItem key={lang} onClick={() => { }}>
                                                <Typography textAlign="center">{lang}</Typography>
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Menu>
                        </Box>
                        <Stack flexDirection="row" gap={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {
                                [{
                                    to: "/",
                                    title: "Əsas səhifə"
                                }, ...navlinks].map(({ title, to }) => {
                                    return (
                                        <a key={to} href={to}>
                                            {title}
                                        </a>
                                    )
                                })
                            }
                        </Stack >
                    </Stack>
                    <Stack sx={{ display: { xs: 'none', md: 'flex' } }} flexDirection="row" gap={1}>
                        {
                            languages.map((lang) => {
                                return (
                                    <Typography key={lang} fontWeight="bold">{lang}</Typography>
                                )
                            })
                        }
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
export default Header
