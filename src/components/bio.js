import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles, BioContainer, Summary, Cards, CardsEd, Media, H1, H2, Divider } from "./styling/bioStyling";
import { BaseContainer, Content, Icon } from "./styling/globalStyleComponents";

export default function Bio() {
    const classes = useStyles();

    return (
        <BioContainer>
            <Content>
                <Summary>
                    <H1>BIO</H1>
                    <Divider />
                </Summary>
            </Content>
            <BaseContainer>
                <Icon src="https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/public/img/globe.png?raw=true" alt="globe" />
                <Content>
                    <H2>Professional Experience</H2>
                    <Divider />
                    <Cards>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    M Ventures <br />Associate
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    2018 - Present
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.p}>
                                    Investing across life science with a particular interest in enabling technologies of synthetic biology, single-cell analysis, gene editing, gene &amp; cell therapies and multi-omics.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Accenture UKI<br />Consultant
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    2014 - 2017
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.p}>
                                    Broad experience serving financial service clients as part of both the business strategy and strategy operation groups.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Cards>
                </Content>
            </BaseContainer>
            <BaseContainer>
                <Icon src="https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/public/img/globe.png?raw=true" alt="globe" />
                <Content>
                    <H2>Research Experience</H2>
                    <Divider />
                    <Cards>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    M Ventures <br />Associate
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    2018 - Present
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.p}>
                                    Investing across life science with a particular interest in enabling technologies of synthetic biology, single-cell analysis, gene editing, gene &amp; cell therapies and multi-omics.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Accenture UKI<br />Consultant
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    2014 - 2017
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.p}>
                                    Broad experience serving financial service clients as part of both the business strategy and strategy operation groups.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Cards>
                </Content>
            </BaseContainer>
            <BaseContainer>
                <Icon src="https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/public/img/book.png?raw=true" alt="book" />
                <Content>
                    <H2>Education</H2>
                    <Divider />
                    <CardsEd>
                        <Card className={classes.rootEd}>
                            <Media>
                                <CardMedia
                                    className={classes.img}
                                    component="img"
                                    alt="Cambridge University"
                                    image="https://static.wixstatic.com/media/571e14_2f7ec6a9946441cea3100030875bd38f~mv2_d_1200_1391_s_2.png/v1/fill/w_280,h_318,al_c,q_85,usm_0.66_1.00_0.01/571e14_2f7ec6a9946441cea3100030875bd38f~mv2_d_1200_1391_s_2.webp"
                                    title="Cambridge University"
                                />
                            </Media>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    University of Cambridge <br /> MPhil Bioscience Enterprise
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    2017 - 2018
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.p}>
                                    Multi-disciplinary biotech and business degree. Strategy, healthcare economics, partnerships &amp; alliances, valuations, IB and venture financing.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.rootEd}>
                            <Media>
                                <CardMedia
                                    className={classes.img}
                                    component="img"
                                    alt="Cambridge University"
                                    image="https://static.wixstatic.com/media/571e14_8d0638938c6444d8990402aa5ecad454~mv2.png/v1/fill/w_302,h_362,al_c,q_85,usm_0.66_1.00_0.01/571e14_8d0638938c6444d8990402aa5ecad454~mv2.webp"
                                    title="Cambridge University"
                                />
                            </Media>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    University of York <br />BSc Genetics
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    2010 - 2014
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.p}>
                                    Encompassed the molecular studies of genes and genetic engineering. Included topics from human genetics and disease, population dynamics and ancient DNA.
                            </Typography>
                            </CardContent>
                        </Card>
                    </CardsEd>
                </Content>
            </BaseContainer>
            <BaseContainer>
                <Icon src="https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/public/img/globe.png?raw=true" alt="globe" />
                <Content>
                    <H2>{'Prizes \& Awards'}</H2>
                    <Divider />
                    <Cards>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    M Ventures <br />Associate
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    2018 - Present
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.p}>
                                    Investing across life science with a particular interest in enabling technologies of synthetic biology, single-cell analysis, gene editing, gene &amp; cell therapies and multi-omics.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Accenture UKI<br />Consultant
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    2014 - 2017
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.p}>
                                    Broad experience serving financial service clients as part of both the business strategy and strategy operation groups.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Cards>
                </Content>
            </BaseContainer>
        </BioContainer>
    );
}
