import App, { Container } from "next/app";
import React from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { TweenMax, TimelineMax } from "gsap";
// import { CSSPlugin } from "gsap/src/uncompressed/plugins/CSSPlugin";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  state = {
    currentRoute: null,
    currentPage: null,
    clickedProduct: null,
    currentlyHoveredElement: null,
    prevNodeClassName: null,
    imageReel: null
  };

  componentDidMount = () => {
    console.log("THIS COMPONENTS PROPS: ", this.props);
    const { setCurrentlyHoveredElement } = this;
    // Will give this a shot for attempting to maintain the reference of the div
    // that needs to be repositioned to the product display image's position
    document.addEventListener("mouseover", setCurrentlyHoveredElement);
    // All right this will work, and then
    // you can just reset it inside of the transitionElementToNewLocation func
    // for any routes that need it.
    const removeIt = e => {
      console.log("THE E TARGET: ", e.target);
      document.removeEventListener("mouseover", setCurrentlyHoveredElement);
      // this.setState({
      //   clickedProduct:
      // })
    };
    document.addEventListener("click", removeIt);

    this.setState({
      currentRoute: this.props.router.route,
      currentPage: this.comp.childNodes[0].childNodes[0]
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("THE NEW PROPS: ", this.props);
  };

  setCurrentlyHoveredElement = e => {
    if (e.target.classList[0] === "product-listing-image") {
      const node = e.target.parentNode.parentNode;
      console.log("THE NODE'S CLASSNAME: ", node.className);
      console.log("THE TARGET ID: ", e.target.id);
      console.log("end");
      this.setState({
        currentlyHoveredElement: node,
        prevNodeClassName: node.className,
        imageReel: node.parentNode
      });
    }
  };

  // Still need to get the product-display image to transition to the appropriate
  // position on navigating backwards.
  // Should be able to jsut use currentlyHoveredElement now that
  // I'm removing the mouseover event listener.
  // Nevermind, set the selectedImage used to navigate to /product-display
  // on the click event.
  transitionElementToNewLocation = (enteringNode, exitingNode, imageReel) => {
    console.log("transitionElementToNewLocation running");
    // index div's x and y where index page is being navigated to
    // (239.109375, 267.59375)
    // about div's x and y where about page is being exited
    // (640.875, 35.1875)
    // So in the calculating of enteringTop and enteringLeft
    // Always subtract the entering page's elements from the exiting pages elements
    // to obtain the position which the exiting page's elements should move to.
    // const imageReel = exitingNode.querySelector(".image-reel");
    if (imageReel) {
      const keys = Object.keys(imageReel.childNodes);
      keys.map(key => {
        imageReel.childNodes[key].className !== exitingNode.className &&
          TweenMax.set(imageReel.childNodes[key], { autoAlpha: 0 });
      });
    }
    console.log("THE ENTERING NODE: ", enteringNode);
    if (enteringNode === null) {
      TweenMax.set(exitingNode, { autoAlpha: 0 });
    } else {
      const tl = new TimelineMax();
      const enteringNodeBoundingRect = enteringNode.getBoundingClientRect();
      const exitingNodeBoundingRect = exitingNode.getBoundingClientRect();
      console.log("ENTERING NODE'S X: ", enteringNodeBoundingRect.x);
      console.log("ENTERING NODE'S Y: ", enteringNodeBoundingRect.y);
      const enteringTop =
        enteringNodeBoundingRect.x - exitingNodeBoundingRect.x;
      const enteringLeft =
        enteringNodeBoundingRect.y - exitingNodeBoundingRect.y;
      console.log("THE ENTERING TOP: ", enteringTop);
      console.log("THE ENTERING LEFT: ", enteringLeft);
      console.dir(exitingNode);
      console.log(exitingNode.style);
      TweenMax.set(exitingNode, {
        clearProps: "transform"
      });
      // TweenMax.set(exitingNode, { clearProps: "all" });
      TweenMax.set(enteringNode, { autoAlpha: 0 });
      tl.to(exitingNode, 1, {
        x: enteringTop,
        y: enteringLeft
      });
      tl.to(enteringNode, 0, { autoAlpha: 1 });
      tl.play();
    }
  };

  enterTransition = async node => {
    const { currentRoute, currentPage, currentlyHoveredElement } = this.state;
    let enteringNodeImage;
    let exitingNodeImage;

    if (currentRoute === "/") {
      // console.log("THE CURRENT PAGE / : ", currentPage);
      // console.log("THE NODE / : ", node);
      // console.dir(currentPage.childNodes);
      // console.log("getting ById", node.querySelector(".product-display-image"));
      exitingNodeImage = currentlyHoveredElement;
      console.log("EXITING NODE: ", exitingNodeImage);
      // console.log("CURRENTLY HOVERED PRODUCT ON /", exitingNodeImage);
      enteringNodeImage = node.querySelector(".product-display-image");
      // Now just need to do the hover thing to get the image that was clicked
      this.transitionElementToNewLocation(
        enteringNodeImage,
        exitingNodeImage,
        this.state.imageReel
      );
    } else if (currentRoute === "/product-display") {
      document.addEventListener("mouseover", this.setCurrentlyHoveredElement);
      enteringNodeImage = node.querySelector(
        "." + this.state.prevNodeClassName
      );
      exitingNodeImage = currentPage.querySelector(".product-display-image");
      this.transitionElementToNewLocation(enteringNodeImage, exitingNodeImage);
    }
    this.setState({
      currentRoute: this.props.router.route,
      currentPage: node
    });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div ref={x => (this.comp = x)}>
          <TransitionGroup>
            <Transition
              in={this.props.in}
              key={this.props.router.route}
              timeout={{
                enter: 1000,
                exit: 1000
              }}
              mountOnEnter={false}
              unmountOnExit={true}
              onEnter={this.enterTransition}
            >
              <Component {...pageProps} />
            </Transition>
          </TransitionGroup>
        </div>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background: #99e1d9;
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            border: 0;
          }

          img {
            box-sizing: border-box;
          }
        `}</style>
      </Container>
    );
  }
}
