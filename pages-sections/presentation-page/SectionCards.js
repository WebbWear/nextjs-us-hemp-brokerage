import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import cardsStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationSections/cardsStyle.js";

// import cardsTest from "assets/img/assets-for-demo/cards-test.png";

const useStyles = makeStyles(cardsStyle);

export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionGreen)}>
      <div className={classes.container}>
        {/* <GridContainer justify="center">

          <GridItem
            md={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <div className={classes.sectionDescription}>
              <h2 className={classes.title}>HEMP PRODUCT SHOWCASE</h2>
              <h5 className={classes.description}>
              There are so many hemp choices that you can make – we recommend working hemp into your food, medicinal and clothing purchases so you are able to gradually incorporate hemp into your life. 
              The brands showcased by our firm are representative of just a few of the many types of products we sponsor and support.  We have longstanding relationships with brands, distributors and wholesale or retail clients.  We have the expertise, the success record and the wisdom to help you deliver high-quality hemp products at extremely competitive prices, with plenty of margin for your business to thrive.
              </h5>
              <Link href={"https://shop.ushempbrokerage.com/en"}>
                <Button
                  color="rose"
                  target="_blank"
                  className={classes.navButton}
                  round
                >
                  shop products
                </Button>
              </Link>
            </div>
          </GridItem>
        </GridContainer> */}
      </div>
    </div>
  );
}
