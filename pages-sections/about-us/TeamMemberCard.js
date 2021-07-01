import React from 'react';
import Card from "../../components/Card/Card";
import CardAvatar from "../../components/Card/CardAvatar";
import CardBody from "../../components/Card/CardBody";
import Button from "../../components/CustomButtons/Button";
import Info from '../../components/Typography/Info';
import Popover from '@material-ui/core/Popover';

const TeamMemberCard = ({ classes, member}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const popoverID = `${member.fullName} popover`

  return (
    <Card profile plain>
      <CardAvatar profile plain  variant="square" className={classes.square}>
        <a href={member.link}>
          <img src={member.img} alt="profile-pic" className={classes.img} />
        </a>
      </CardAvatar>
      <CardBody plain>
        <h4 className={classes.cardTitle}>{member.fullName}</h4>
        <h6 className={classes.textMuted}>{member.title}</h6>
        <p className={classes.cardDescription}>
          {`${member.bio.slice(0, 49)}...`}
        </p>
        <div>
          <Button aria-describedby={popoverID} variant="contained" color="white" onClick={handleClick}>
            Read More
          </Button>
          <Popover
            id={popoverID}
            open={Boolean(anchorEl)}
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
            PaperProps={{
              style: { width: '50%' },
            }}
          >
            {member.bio.split('\n').map((paragraph, i) => <Info key={i} className={classes.popupDescription}>{paragraph}</Info>)}

          </Popover>
        </div>
      </CardBody>
    </Card>
  );
};

export default TeamMemberCard;
