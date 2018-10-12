import React, { PureComponent } from "react";
import IconBase from "react-icons-kit";
import { Spring, animated, interpolate } from "react-spring";
import { settings } from "react-icons-kit/feather/settings";
import styled from "styled-components";
import COLORS from "../../colors.js";

type Props = {
  size: number,
  color: string,
  hoverColor: string,
  action: () => void
};

type State = {
  hovered: boolean
};

class SettingsButton extends PureComponent<Props, State> {
  static defaultProps = {
    size: 36,
    color: COLORS.black,
    hoverColor: COLORS.red,
    action: () => {}
  };

  state = {
    hovered: false
  };

  handleMouseEnter = () => {
    this.setState(state => ({
      hovered: true
    }));
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { size } = this.props;
    const { hovered } = this.state;
    return (
      <Spring
        native
        config={{ tension: 70, friction: 8 }}
        to={{ rotations: hovered ? 0.2 : 0, scale: hovered ? 1.15 : 1 }}
      >
        {({ rotations, scale }) => (
          <Wrapper onClick={this.props.action}>
            <animated.div
              style={{
                width: this.props.size,
                height: this.props.size,
                color: `${hovered ? this.props.hoverColor : this.props.color}`,
                transform: interpolate(
                  [rotations, scale],
                  (interpolatedRotations, interpolatedScale) => `
                        rotate(${interpolatedRotations * 360}deg)
                        scale(${interpolatedScale}, ${interpolatedScale})
                    `
                )
              }}
            >
              {/* {JSON.stringify(rotations, null, 2)} */}
              <IconBase
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                size={size}
                icon={settings}
              />
            </animated.div>
          </Wrapper>
        )}
      </Spring>
    );
  }
}

const Wrapper = styled.div`
  cursor: pointer;
`;

export default SettingsButton;
