import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui icons
import Copyright from "@material-ui/icons/Copyright";
import Eco from "@material-ui/icons/Eco";
import Style from "@material-ui/icons/Style";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}> 
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h2 className={classes.description}>
            Incorporate Hemp Into Your Life
            </h2>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Our Brands Division"
                description="The brands showcased by our firm are representative of just a few of the many types of products we sponsor and support."
                icon={Copyright}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Wholesale Hemp Division"
                description=""
                icon={Eco}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Hemp Materials Division"
                description=""
                icon={Style}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
