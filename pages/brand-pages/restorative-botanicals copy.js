import React from 'react'
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// import Footer from "components/Footer/Footer.js";

import brandPageStyle from "assets/jss/nextjs-material-kit-pro/pages/brandPageStyle.js";

const useStyles = makeStyles(brandPageStyle);


export default function brandPage() {
    React.useEffect(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div>
            <Header
                brand=""
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                height: 300,
                color: "info"
                }}
            />
            <Parallax image={require("assets/img/restorative.jpg")} filter="dark" small>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem
                    md={8}
                    sm={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Restorative Botanicals</h1>
                    
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <h1>Restorative Botanicals</h1>
            {/* <Footer /> */}
        </div>
    )
}