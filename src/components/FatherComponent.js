import React from "react";
import ChildComponent from "./ChildComponent";

export default class FatherComponent extends React.Component {
  state = {
    fatherText: "来自父组件的文本",
    fatherOwnerText: "父组件自己的文本",
    showChild: true,
  };

  // 修改父组件传递给子组件的文本
  changeFatherText = () => {
    this.setState({
      fatherText: "来自父组件的文本：已修改",
    });
  };

  // 修改父组件自己的文本
  changeFatherOwnerText = () => {
    this.setState({
      fatherOwnerText: "父组件自己的文本：已修改",
    });
  };

  // 更改子组件状态
  changeChildStatus = () => {
    this.setState({
      showChild: !this.state.showChild,
    });
  };

  render() {
    const { fatherText, fatherOwnerText, showChild } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.changeChildStatus}>
            {showChild ? "卸载" : "挂载"}子组件
          </button>
          <button onClick={this.changeFatherOwnerText}>
            更改fatherOwnerText
          </button>
          <button onClick={this.changeFatherText}>更改fatherText</button>
          {showChild ? <ChildComponent text={fatherText} /> : null}
          <p>fatherOwnerText: {fatherOwnerText}</p>
        </div>
      </div>
    );
  }
}
