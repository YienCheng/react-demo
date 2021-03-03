import React from "react";

/**
 * 类组件
 */
class FollowButton extends React.Component {
  showMessage = () => {
    alert(`关注${this.props.user.name}成功！`);
  };

  onClickHandle = () => {
    setTimeout(() => {
      this.showMessage();
    }, 3000);
  };

  render() {
    return <button onClick={this.onClickHandle}>关注</button>;
  }
}

/**
 * 函数式组件
 * @param props
 * @returns {*}
 * @constructor
 */
// function FollowButton(props) {
//   const showMessage = () => {
//     alert(`关注${props.user.name}成功！`);
//   };
//
//   const onClickHandle = () => {
//     setTimeout(() => {
//       showMessage();
//     }, 3000);
//   };
//   return <button onClick={onClickHandle}>关注</button>;
// }

export default FollowButton;
