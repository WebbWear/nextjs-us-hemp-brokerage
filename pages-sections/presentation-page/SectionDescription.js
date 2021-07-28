import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui icons
import Copyright from "@material-ui/icons/Copyright";
import Eco from "@material-ui/icons/Eco";
import Style from "@material-ui/icons/Style";
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
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
            <GridItem md={3} sm={4}>
              <InfoArea
                title="Cannabinoid Material and Finished Products "
                // description="We provide sales and buying services for hemp products which include compliant raw ingredients and finished branded products.  Our materials include CBD Isolate, Hemp CBD extracts, Major and Minor Cannabinoids, Broad-Spectrum, True-Spectrum, CO2, Ethanol and Solventless hemp extracts and ingredients. Our brokerage services markets through all available sales channels and we provide wholesale and distributor pricing in support of resellers around the United States and abroad."
                icon={Copyright}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
            <GridItem md={3} sm={4}>
              <InfoArea
                title="Non-Cannabinoid Materials and Finished Products"
                description=""
                icon={Eco}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
            <GridItem md={3} sm={4}>
              <InfoArea
                title="Hemp Machinery"
                description=""
                icon={Style}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={3} sm={4}>
              <InfoArea
                title="Hemp Technology"
                // description="The brands showcased by our firm are representative of just a few of the many types of products we sponsor and support."
                icon={ImportantDevicesIcon}
                iconColor="secondary"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
