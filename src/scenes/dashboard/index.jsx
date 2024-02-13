import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            <Typography>Mais um teste da Boni</Typography>
        </Box>
    </Box>
    );
};

export default Dashboard;