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
import { TEAM_MEMBERS } from "./constants";

import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import teamStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js";

import FaceJWebb from "assets/img/faces/jwebb.jpg";

import FaceChelsie from "assets/img/faces/chelsie.jpg";
import { lightGreen } from "@material-ui/core/colors";
import TeamMemberCard from "./TeamMemberCard";

const useStyles = makeStyles(teamStyle);

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
          <h2 className={classes.title}>Hemp Team</h2>
          <h5 className={classes.description}>
          Incorporate Hemp Into Your Life
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer>
        {TEAM_MEMBERS.map((member, i) => (
          <GridItem key={i} md={3} sm={3}>
            <TeamMemberCard  member={member} classes={classes}/>
          </GridItem>
        ))}

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
