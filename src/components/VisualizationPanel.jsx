import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Table from './Table';
import Network from './Network';

export default function VisulizationPanel(props){
    const { 
        dataOne, 
        dataTwo, 
        kcoreOne, 
        communityOne, 
        visStyleOne,
        kcoreTwo, 
        communityTwo, 
        visStyleTwo,
        filterListOne,
        setFilterListOne,
        filterListTwo,
        setFilterListTwo,
     } = props;

    return(
        <>
            <Grid container>
                <Grid item xs={12} sx={{m:1}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Network data={dataOne} kcore={kcoreOne} community={communityOne} visStyle={visStyleOne} filterList={filterListOne}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Table  data={dataOne} filterList={filterListOne} setFilterList={setFilterListOne}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container>
                <Grid item xs={12} sx={{m:1}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Network data={dataTwo} kcore={kcoreTwo} community={communityTwo} visStyle={visStyleTwo} filterList={filterListTwo}/>
                        </Grid>
                        <Grid item xs={6}>
                        <Table  data={dataTwo} filterList={filterListTwo} setFilterList={setFilterListTwo}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}