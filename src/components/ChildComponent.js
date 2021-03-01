import React from "react";

export default class ChildComponent extends React.Component {
  state = {
    childText: "来自子组件的文本",
  };

  // 更改子组件文本
  changeChildText = () => {
    this.setState({
      childText: "来自子组件的文本：已修改",
    });
  };

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps：用来从props派生state");
    return null;
  }

  render() {
    return (
      <>
        <button onClick={this.changeChildText}>更改childText</button>
        <p>fatherText: {this.props.text}</p>
        <p>childText :{this.state.childText}</p>
      </>
    );
  }

  // 组件已挂载
  componentDidMount() {
    console.log("componentDidMount：组件已挂载");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate：组件是否要更新");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate：最近一次渲染输出之前");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate：组件已更新");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount：组件将要卸载");
  }
}
