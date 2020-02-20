import React from "react";
import styled from 'styled-components';
import { SOLID } from "./styling/variables"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        width: 'calc(50% - 100px)',
        minWidth: 275,
        maxWidth: 350,
        margin: '10px 30px',
        textAlign: 'left'
    },
    rootEd: {
        minWidth: 275,
        maxWidth: 500,
        margin: '20px 30px',
        textAlign: 'left',
        display: 'flex',
    },
    img: {
        width: 100
    },
    title: {
        fontSize: '1.6rem',
    },
    pos: {
        fontSize: '0.8 rem',
        marginBottom: 12,
    },
});

export default function Bio() {

    const classes = useStyles();

    const BioContainer = styled.div`
    width: 100%;
    padding: 150px 0px 70px;
    background: url("https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/cells.jpeg?raw=true");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  `;

    const Summary = styled.div`
        background-color: ${SOLID.OFF_WHITE};
        width: 55%;
        padding: 30px;
        margin: 50px auto 0px;
    `;

    const BaseContainer = styled.div`
        width: 100%;
        margin: 250px 0px;
        padding: 10px 0px 40px;
        background-color: ${SOLID.OFF_WHITE};
        text-align: center;
  `;

    const Content = styled.div`
        width: 80%;
        max-width: 800px;
        margin: 0px auto;
    `;

    const Cards = styled.div`
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        margin: 0px auto;
`;

    const CardsEd = styled.div`
        width: 80%;
        margin: 20px auto;
    `;

    const Media = styled.div`
        padding: 20px;
        margin: auto 0px;
    `;

    const H1 = styled.h1`
    `;

    const Divider = styled.div`
        width: 50%;
        max-width: 300px;
        border-bottom: 5px solid ${SOLID.AQUA_BLUE};
        margin: 0px auto 20px;
    `;

    return (
        <BioContainer>
            <Content>
                <Summary>Experienced financial services professional with roles in venture capital and consulting. Skilled in the evaluation of life sciences investments with a keen interest in synthetic biology and senescence. Academic background in genetics and biotech.</Summary>
            </Content>
            <BaseContainer>
                <Content>
                    <H1>Key positions</H1>
                    <Divider />
                    <Cards>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    M Ventures
            Associate
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
                                    Accenture UKI
            Consultant
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
                <Content>
                    <H1>Education</H1>
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
                                    University of Cambridge
    MPhil Bioscience Enterprise
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
                                    University of York
    BSc Genetics
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
            {/* <BaseContainer>
                <Content>
                    <H1>awards</H1>
                    <Divider />
                </Content>
            </BaseContainer> */}
        </BioContainer>
    );
}
