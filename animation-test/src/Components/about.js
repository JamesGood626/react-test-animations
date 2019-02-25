import React, { Component } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring";

const Container = styled.div`
  height: 20rem;
  width: 100vw;
`;

const PageOneContainer = Container.extend`
  background: blue;
`;

const PageTwoContainer = Container.extend`
  background: lime;
`;

const Block = styled.div`
  height: 20rem;
  width: 10rem;
  background: #333;
`;

// const Page = ({ offset, onClick, title, num, gradient }) => {
//   return (
//     <React.Fragment>
//       <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
//         <div className="slopeBegin" />
//       </Parallax.Layer>

//       <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
//         <div className={`slopeEnd ${gradient}`} />
//       </Parallax.Layer>

//       <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
//         <h1>{title}</h1>
//       </Parallax.Layer>
//     </React.Fragment>
//   );
// };

const Page = ({ id, offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer id={id} offset={offset} speed={0.4} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.4} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.5}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.6}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </Parallax.Layer>
  </React.Fragment>
);

// export default class about extends Component {
//   scroll = to => this.refs.parallax.scrollTo(to);
//   componentDidMount() {
//     console.log(this.parallax);
//     console.log(this.refs.parallax.scrollTo);
//   }

//   render() {
//     return (
//       <Parallax ref="parallax" pages={2} horizontal scrolling={false}>
//         <Page
//           gradient="teal"
//           offset={0}
//           title="first"
//           num="01"
//           onClick={() => this.scroll(0)}
//         />
//         <Page
//           gradient="tomato"
//           title="second"
//           offset={1}
//           num="02"
//           onClick={() => this.scroll(1)}
//         />
//       </Parallax>
//     );
//   }
// }

export default class App extends Component {
  state = { routeKeyArray: [], direction: "PUSH", routePoppin: false };

  // this approach sucks. You need history.push/pop to determine direction.
  // The problem is that I need to have an indicator in componentDidUpdate that it shouldn't
  // programmatically navigate to a previous route. (Which I need to do when the user presses
  // the back arrow.) So it works fine for the first navigate bacl, due to POP being there, BUT
  // navigate will trigger this.props.location.key to update with a new key.
  // And so getDerivedStateFromProps will execute, and push it onto the routeKeyArray, AS WELL as
  // update the direction to "PUSH".
  // Now... What I'm thinking might be able to mitigate this.. is to set another state indicator
  // on state for after the navigate back happens in componentDidUpdate.
  // And add a condition for that in getDerivedStateFromProps, in order to have the last
  // element in the array sliced out in order to add the new key generated by the navigate in
  // CDU. THEN POP can remain untouched. And the user may continue navigating forward or backward
  // normally.
  static getDerivedStateFromProps(props, state) {
    const {
      location: { key }
    } = props;
    console.log("THe key in props: ", key);
    // console.log(state.routeKeyArray);
    console.log(props.location);
    const length = state.routeKeyArray.length;
    if (!state.routePoppin) {
      if (length === 0) {
        return {
          routeKeyArray: [...state.routeKeyArray, key],
          direction: "PUSH"
        };
      } else if (state.routeKeyArray) {
        if (state.routeKeyArray[length - 2] === props.location.key) {
          console.log("DOING THE POP");
          return {
            routeKeyArray: [...state.routeKeyArray.slice(0, length - 1)],
            direction: "POP"
          };
        } else {
          return {
            routeKeyArray: [...state.routeKeyArray, key],
            direction: "PUSH"
          };
        }
        console.log("THe key in state: ", state.routeKey);
      }
    } else {
      // Then routePoppin is true. and so we can slice off the last element in the array and keep it going.
      return {
        routeKeyArray: [...state.routeKeyArray.slice(0, length - 1), key],
        direction: "PUSH"
      };
    }
  }

  // componentDidUpdate() {
  //   console.log("CDU : ", this.state.routeKeyArray);
  //   console.log(this.props.location.key);
  //   console.log("the direction: ", this.state.direction);
  // }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   // console.log("in SCU: ", this.props.location.key);
  //   if (this.props.location.pathname != nextProps.location.pathname) {
  //     return true;
  //   }
  //   return false;
  // };

  // This is the code I need in order to handle navigating backwards
  // however, reach router doesn't give access to history.pop/push
  // soooo I'll just need to use react router
  componentDidUpdate() {
    console.log("UPDATED DIRECTION", this.state.routeKeyArray);
    const {
      location: { pathname }
    } = this.props;
    if (this.state.direction === "POP") {
      if (pathname === "/first") {
        this.scroll(0);
      } else if (pathname === "/second") {
        this.scroll(1);
      } else if (pathname === "/third") {
        this.scroll(2);
      }
    }
  }

  scroll = (to, navigatedByClick = false) => {
    this.refs.parallax.scrollTo(to);
    this.navigateTo(to);
    if (!navigatedByClick) {
      this.setState({
        routePoppin: true
      });
    } else if (this.state.routePoppin) {
      this.setState({
        routePoppin: false
      });
    }
    // this.setState((state, props) => ({
    //   stack: [...state.stack, this.props.location.key]
    // }));
    //console.log("IN SCROLL: ", this.props.location.key);
  };

  navigateTo = to => {
    console.log("CALLING NAVIGAE TO: ", to);
    if (to === 0) {
      navigate("/first");
      // this.setCurrentRouteState("/first");
    } else if (to === 1) {
      navigate("/second");
      // this.setCurrentRouteState("/second");
    } else if (to === 2) {
      navigate("/third");
      // this.setCurrentRouteState("/third");
    }
  };

  render() {
    return (
      <Parallax
        className="container"
        ref="parallax"
        pages={3}
        horizontal
        scrolling={false}
      >
        <Page
          offset={0}
          gradient="pink"
          caption="who we are"
          first="Lorem ipsum"
          second="dolor sit"
          onClick={() => this.scroll(1, true)}
        />
        <Page
          offset={1}
          gradient="teal"
          caption="what we do"
          first="consectetur"
          second="adipiscing elit"
          onClick={() => this.scroll(2, true)}
        />
        <Page
          offset={2}
          gradient="tomato"
          caption="what we want"
          first="Morbi quis"
          second="est dignissim"
          onClick={() => this.scroll(0, true)}
        />
      </Parallax>
    );
  }
}
