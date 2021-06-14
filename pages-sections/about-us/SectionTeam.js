import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import teamStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js";

import FaceJWebb from "assets/img/faces/jwebb.jpg";
import FaceJCole from "assets/img/faces/jeff-cole.jpg";
import FaceJill from "assets/img/faces/jill-hodges.jpg";
import FaceChelsie from "assets/img/faces/chelsie.jpg";

const useStyles = makeStyles(teamStyle);

// const useStyles = makeStyles((teamStyle) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));


export default function SectionTeam() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We are nerd rockstars</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>        
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain  variant="square" className={classes.square}>
              <a href="#pablo">
                <img src={FaceJCole} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <h6 className={classes.textMuted}>CEO / Co-Founder</h6>
              <p className={classes.cardDescription}>
                And I love you like Kanye loves Kanye. We need to restart the
                human foundation.
              </p>
              <div>
                <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                  Open Popover
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Typography className={classes.typography}>Jeffrey Cole is the owner and founder of US Hemp Brokerage LLC, which he established in order to become the leading professional brokerage firm in the domestic hemp markets. While Jeff formed the company in August of 2018, he has recently nurtured the firm to its official launch on November 1, 2019. He has 7 team members at US Hemp Brokerage and he is based in Boulder County, CO.
Most recently (October 2018 – November 2019), Jeffrey held the position of Director of Program Development with Restorative Botanicals, a leading hemp firm, based in Boulder, CO. While at Restorative, where he accomplished many of his goals, he helped manage the Restorative Botanicals brand products, participated as a leader in the development of the Urban Alchemy brand extension, led the wholesale, broker and direct sales teams and was responsible for the event marketing efforts which include both Natural Product Expos, NOCO, MJ Biz, Southern Hemp Expo, CBD Expos and many others. Additionally, and of paramount priority, Mr. Cole was director of the Restorative Botanicals Private Label programs.Among several major initiatives, his team secured international acclaim for the Restorative Botanicals brand with an advertising campaign in Times Square on New Year’s Eve 2018. This advertising program was brought to Restorative Botanicals by leveraging Jeff’s longstanding relationships and experience in the New York media and advertising industries.
Prior to joining Restorative Botanicals, he held an Executive Manager position at Ft. Lupton based PureHemp Technology LLC, where since 2016, he served as VP of Sales & Marketing for the parent company, Brand Director for Pure Kind Botanicals brand products, and he established the private label offerings for that firm.
All-tolled, Jeffrey Cole has conceived of, managed and/or operated 63 hemp brands through his private label program management.  Mr. Cole’s expertise developing and marketing products in the hemp industry has resulted in dozens of hemp-based personal care, health & beauty and hemp food products reaching national markets and beyond. 
For over 20 years, Mr. Cole has focused on marketing and brand building in major media channels, sustainability and natural products, with a focus on natural consumers in the top 25 US markets. 
Jeffrey is a Colorado native who has worked in natural products in the Denver/Boulder area since 2013, where he served as Advertising Director and senior manager for Boulder Weekly, Best of Boulder and Boulderganic, the leading sustainability magazine serving the Boulder natural product community.  
His thought-leadership with the influential Cultural Creative and LOHAS (Lifestyles of Health and Sustainability) consumer groups consistently delivers successful products to the hemp marketplace. 
</Typography>
                </Popover>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceJill}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Tania Andrew</h4>
              <h6 className={classes.textMuted}>DESIGNER</h6>
              <p className={classes.cardDescription}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation. And I love you like Kanye loves Kanye.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceJWebb}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Christian Mike</h4>
              <h6 className={classes.textMuted}>Web Developer</h6>
              <p className={classes.cardDescription}>
                I love you like Kanye loves Kanye. Don{"'"}t be scared of the
                truth because we need to restart the human foundation.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceChelsie}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Rebecca Stormvile</h4>
              <h6 className={classes.textMuted}>WEB DEVELOPER</h6>
              <p className={classes.cardDescription}>
                And I love you like Kanye loves Kanye. We really need to restart
                the human foundation.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceJWebb}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Christian Mike</h4>
              <h6 className={classes.textMuted}>Web Developer</h6>
              <p className={classes.cardDescription}>
                I love you like Kanye loves Kanye. Don{"'"}t be scared of the
                truth because we need to restart the human foundation.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceJWebb}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Christian Mike</h4>
              <h6 className={classes.textMuted}>Web Developer</h6>
              <p className={classes.cardDescription}>
                I love you like Kanye loves Kanye. Don{"'"}t be scared of the
                truth because we need to restart the human foundation.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceJWebb}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Christian Mike</h4>
              <h6 className={classes.textMuted}>Web Developer</h6>
              <p className={classes.cardDescription}>
                I love you like Kanye loves Kanye. Don{"'"}t be scared of the
                truth because we need to restart the human foundation.
              </p>
            </CardBody>
            
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
