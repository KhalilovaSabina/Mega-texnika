import Box from "@mui/material/Box"
import Footer from "../Footer"
import Header from "../Header"

interface Props {
    children: React.ReactElement | React.ReactElement[];
}

const PageContainer = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Box component="main">
                {children}
            </Box>
            <Footer />
        </>
    )
}
export default PageContainer
