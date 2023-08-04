import {
    Box,
    Button,
    Grid,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import ITexnika from "../../types/Texnika";

interface Props {
    texnika: ITexnika;
    imgFolder: string;
}

const TexnikaCard = ({ imgFolder, texnika: { id, img, title, year, priceForDay, priceForMonth } }: Props) => {
    return (
        <Grid sx={{ minWidth: 250, width: '100%', maxWidth: '600px' }} key={id} item xs={6} md={4} lg={3}>
            <Paper elevation={5}>
                <img src={imgFolder + img} alt={title} />
                <Stack px={2} py={1}>
                    <Typography
                        sx={{ color: "#596C72" }}
                        component="h3"
                        fontWeight="bold"
                    >
                        Məhsulun adı
                    </Typography>
                    <Typography sx={{ color: "#686868" }} component="h4">
                        {title}
                    </Typography>
                    <Typography sx={{ color: "#B0ADAD" }} component="h4">
                        {year}
                    </Typography>
                </Stack>
                <Stack px={2} alignItems="flex-end">
                    <Typography
                        sx={{ color: "#FFC01F", fontWeight: "bold" }}
                        component="h2"
                    >
                        {priceForMonth} azn/ay <br />
                        {priceForDay} azn/gun
                    </Typography>
                </Stack>
                <Box px={3} py={2} textAlign="center">
                    <Button fullWidth>İcarə et</Button>
                </Box>
            </Paper>
        </Grid>
    )
}
export default TexnikaCard
