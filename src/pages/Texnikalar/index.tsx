import {
  Container,
  Grid,
  Pagination,
  Stack,
  Typography
} from "@mui/material";
import PageContainer from "../../components/PageContainer";
import TexnikaCard from "../../components/TexnikaCard";
import ITexnika from "../../types/Texnika";

export const texnikalar: ITexnika[] = [
  {
    id: 0,
    img: "ekskavator.png",
    title: "Ekskavator",
    year: 2022,
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 1,
    img: "yukleyici.png",
    title: "Ekskavator yukleyici",
    year: 2022,
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 2,
    img: "avtokran.png",
    title: "Avtokran",
    year: 2022,
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 3,
    img: "forklift.png",
    title: "Forkliftlər",
    year: 2022,
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 4,
    img: "ekskavator.png",
    title: "Ekskavator",
    year: 2022,
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 5,
    img: "yukleyici.png",
    title: "Ekskavator yukleyici",
    year: 2022,
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 6,
    img: "avtokran.png",
    title: "Avtokran",
    year: 2022,
    priceForMonth: 1000,
    priceForDay: 100,
  },
  {
    id: 7,
    img: "forklift.png",
    title: "Forkliftlər",
    year: 2022,
    priceForMonth: 1000,
    priceForDay: 100,
  },
];

const Texnikalar = () => {
  return (
    <PageContainer>
      <Container sx={{ p: "20px 0" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            py: 2,
            color: "#596C72",
          }}
          component="h1"
          variant="h4"
        >
          Texnikalar
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
            flexWrap: "wrap",
            px: 2,
            "& img": {
              display: { xs: "none", sm: "inline" },
            },
          }}
        >
          {
            texnikalar.map(
              (texnika) => <TexnikaCard key={texnika.id} imgFolder="/texnikalar/" texnika={texnika} />
            )}
        </Grid>
        <Stack alignItems="center" py={3}>
          <Pagination count={4} shape="circular" size="small" />
        </Stack>
      </Container>
    </PageContainer>
  );
};

export default Texnikalar;
