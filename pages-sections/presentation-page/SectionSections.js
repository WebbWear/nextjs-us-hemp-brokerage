import React from "react";
// react components for routing our app without refresh
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import sectionsStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationSections/sectionsStyle.js";

// images array used in rendering a function for this section
import imgs from "assets/img/assets-for-brands/imgs.js";

const useStyles = makeStyles(sectionsStyle);

export default function SectionSections() {
  const renderContainerFluid = cssClass => {
    return imgs.map(row => {
      return (
        <GridContainer key={row[0]}>
          {row.map((el, index) => {
            return (
              <GridItem
                md={3}
                sm={3}
                xs={12}
                key={el + "_" + index}
                className={cssClass}
              >
                <img
                  src={require(`assets/img/assets-for-brands/${el}.jpg`)}
                  alt={el}
                  key={el[index]}
                />
              </GridItem>
            );
          })}
        </GridContainer>
      );
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.sectionSections}>
      <div className={classes.container}>
        <GridContainer justify="center">
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
              <Link href={"/sections"}>
                <Button
                  color="rose"
                  target="_blank"
                  className={classes.navButton}
                  round
                >
                  view all sections
                </Button>
              </Link>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.containerFluid}>
        {renderContainerFluid(classes.photoGallery)}
      </div>
    </div>
  );
}
