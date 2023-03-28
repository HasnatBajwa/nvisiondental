import React from 'react';
import './ServicesModuleStyles.css'
import { Grid } from '@mui/material'
import Icon from '../../Assets/Icon.png'
import AllInOne from '../../Assets/services/All-on-x.webp'
import AllCeramic from '../../Assets/services/ALL-CERAMIC-1.webp'
import Implant from '../../Assets/services/IMPLANTS-1x.webp'
import Veneers from '../../Assets/services/VENEERS2.webp'
import Waxup from '../../Assets/services/WAXUP.webp'
import PTOMetal from '../../Assets/services/PtoMetal2.webp'
import FullCast from '../../Assets/services/FULCAST.webp'
import Model from '../../Assets/services/3DMODELSX.webp'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const ServicesModule = () => {
    return (
        <>
            <div className="services-module-container">
                <img src={Icon} alt="icon" className='mod-icon' />
                <span className="mod-title">Featured Services</span>
                <h1 className="mod-heading">How Can We Help!</h1>
                <p className="mod-txt">
                    We tailor our services to the individual demands of each doctor, office and patient. We customize our service to meet your requirements without compromising our high standards.
                </p>
                <div className="services-card-container">
                    <Grid container  >
                        <Grid xs={12} sm={12} md={4} lg={4}>
                            <div className="service-card">
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={AllInOne}
                                            alt="All In One"
                                        />

                                        <div className="service-action">
                                            <span className="service-action-txt">
                                                Complete Dental Implant
                                            </span>
                                        </div>

                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={12} md={4} lg={4}>
                            <div className="service-card">
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={AllCeramic}
                                            alt="All Ceramic"
                                        />

                                        <div className="service-action">
                                            <span className="service-action-txt">
                                                All Ceramic
                                            </span>
                                        </div>

                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={12} md={4} lg={4}>
                            <div className="service-card">
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={Implant}
                                            alt="All Ceramic"
                                        />

                                        <div className="service-action">
                                            <span className="service-action-txt">
                                                Implant Solutions
                                            </span>
                                        </div>

                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                    {/* 3nd Services Row */}
                    <Grid container  >
                        <Grid xs={12} sm={12} md={4} lg={4}>
                            <div className="service-card">
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={Veneers}
                                            alt="All In One"
                                        />

                                        <div className="service-action">
                                            <span className="service-action-txt">
                                                Veneers
                                            </span>
                                        </div>

                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={12} md={4} lg={4}>
                            <div className="service-card">
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={Model}
                                            alt="All Ceramic"
                                        />

                                        <div className="service-action">
                                            <span className="service-action-txt">
                                                3D Models
                                            </span>
                                        </div>

                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={12} md={4} lg={4}>
                            <div className="service-card">
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={PTOMetal}
                                            alt="All Ceramic"
                                        />

                                        <div className="service-action">
                                            <span className="service-action-txt">
                                                Porcelain Fused To Metal
                                            </span>
                                        </div>

                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                    {/* 3rd Row */}
                    <Grid container  justifyContent={'center'}>
                        <Grid xs={12} sm={12} md={4} lg={4}>
                            <div className="service-card">
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={FullCast}
                                            alt="All In One"
                                        />

                                        <div className="service-action">
                                            <span className="service-action-txt">
                                             Full Cast
                                            </span>
                                        </div>

                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={12} md={4} lg={4}>
                            <div className="service-card">
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={Waxup}
                                            alt="All Ceramic"
                                        />

                                        <div className="service-action">
                                            <span className="service-action-txt">
                                                Waxup
                                            </span>
                                        </div>

                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default ServicesModule
