import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { TEAM_MEMBERS } from "./constants";
import { makeStyles } from "@material-ui/core/styles";
import teamStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js";
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
      </GridContainer>
    </div>
  );
}
