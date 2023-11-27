// App.js
import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function Learning() {
    return (
        <Container>
            <Grid container spacing={3}>
                {/* Row 1 */}
                <Grid item xs={12} sm={12} md={4}>
                    <Card fullWidth>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Card 1
                            </Typography>
                            <Button component={Link} to="/lecture1" variant="contained" color="primary">
                                Start
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Row 2 */}
                <Grid item xs={12} sm={12} md={4}>
                    <Card fullWidth>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Card 2
                            </Typography>
                            <Button component={Link} to="/path2" variant="contained" color="primary">
                                Start
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Row 3 */}
                <Grid item xs={12} sm={12} md={4}>
                    <Card fullWidth>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Card 3
                            </Typography>
                            <Button component={Link} to="/path3" variant="contained" color="primary">
                                Start
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
