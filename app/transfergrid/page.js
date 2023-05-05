'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import {
    Box,
    Grid,
} from '@mui/material';
import ColumnTitle from '../components/columnTitle'
import Header from '../components/header'
import { PatientList } from '../components/PatientList'
import { ProviderList } from '../components/ProviderList'
import { patients, providers } from '../data'


const Column = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',

}));

function TransferGrid() {
    const [currentPatient, setCurrentPatient] = React.useState({});
    const router = useRouter();

    return (
        <Box sx={{ flexGrow: 1, padding: '25px' }}>
            <Header title="Transfer Portal" />
            <Grid container spacing={2} sx={{ marginTop: '100px', marginBottom: '100px' }}>
                <Column item xs={6}>
                    <ColumnTitle title="Patients" count={patients.length} />
                    <PatientList patients={patients} setCurrentPatient={setCurrentPatient} currentPatient={currentPatient} />
                </Column>
                <Column item xs={6}>
                    <ColumnTitle title="Providers" count={providers.length} />
                    <ProviderList providers={providers} currentPatient={currentPatient} />
                </Column>
            </Grid>

        </Box>
    );
}

export default TransferGrid;
