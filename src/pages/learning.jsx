// App.js
import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Learning() {
    return (
        <Container>
            <Grid container spacing={3}>
                {/* Row 1 */}
                <Grid item xs={12} sm={12} md={4}>
                    <Card>
                        <Box sx={{ pt: '100%', position: 'relative' }}>
                            <Box
                                component="img"
                                alt="text test"
                                src="/assets/Llist/fortinet-social-icon.jpg"
                                sx={{
                                    top: 0,
                                    width: 1,
                                    height: 1,
                                    objectFit: 'cover',
                                    position: 'absolute',
                                }}
                            />
                        </Box>

                        <Stack spacing={2} sx={{ p: 3 }}>
                            <Typography color="inherit" underline="hover" variant="h5" noWrap>
                                FortiGate Firewall
                            </Typography>
                            <Button component={Link} to="/lecture1" variant="contained" color="primary">
                                Learn
                            </Button>
                        </Stack>
                    </Card>
                </Grid>

                {/* Row 2 */}
                <Grid item xs={12} sm={12} md={4}>
                    <Card>
                        <Box sx={{ pt: '100%', position: 'relative' }}>
                            <Box
                                component="img"
                                alt="text test"
                                src="/assets/Llist/Kali_Linux.jpg"
                                sx={{
                                    top: 0,
                                    width: 1,
                                    height: 1,
                                    objectFit: 'cover',
                                    position: 'absolute',
                                }}
                            />
                        </Box>

                        <Stack spacing={2} sx={{ p: 3 }}>
                            <Typography color="inherit" underline="hover" variant="h5" noWrap>
                                Kali tools
                            </Typography>
                            <Button component={Link} to="/lecture2" variant="contained" color="primary">
                                Learn
                            </Button>
                        </Stack>
                    </Card>
                </Grid>

                {/* Row 3 */}
                <Grid item xs={12} sm={12} md={4}>
                    <Card>
                        <Box sx={{ pt: '100%', position: 'relative' }}>
                            <Box
                                component="img"
                                alt="text test"
                                src="/assets/Llist/hacker.jpeg"
                                sx={{
                                    top: 0,
                                    width: 1,
                                    height: 1,
                                    objectFit: 'cover',
                                    position: 'absolute',
                                }}
                            />
                        </Box>

                        <Stack spacing={2} sx={{ p: 3 }}>
                            <Typography color="inherit" underline="hover" variant="h5" noWrap>
                                Attack and Read logs
                            </Typography>
                            <Button component={Link} to="/lecture3" variant="contained" color="primary">
                                Learn
                            </Button>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
