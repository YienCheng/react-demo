import React from "react";

export default class ChildComponent extends React.Component {
  // 初始化state
  state = {
    childText: "来自子组件的文本",
  };

  // 更改子组件文本
  changeChildText = () => {
    this.setState({
      childText: "来自子组件的文本：已修改",
    });
  };

  /**
   * getDerivedStateFromProps
   * 会在调用 render 方法之前调用，
   * 并且在初始挂载及后续更新时都会被调用。
   * 它应返回一个对象来更新 state，
   * 如果返回 null 则不更新任何内容。
   * 当有需要从props中派生出state的时候可以用到此函数，
   * 一般不常用
   */
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps：用来从props派生state");
    return null;
  }

  /**
   * render
   * 用来生成虚拟DOM结构，
   * 当不需要生成DOM结构时可以返回null
   *
   * 此函数应该为纯函数，
   * 这意味着在不修改组件state的情况下，
   * 每次调用时都返回相同的结果，
   * 并且它不会直接与浏览器交互。
   */
  render() {
    return (
      <>
        <button onClick={this.changeChildText}>更改childText</button>
        <p>fatherText: {this.props.text}</p>
        <p>childText :{this.state.childText}</p>
      </>
    );
  }

  /**
   * componentDidMount
   * 组件已挂载到真实DOM
   * 一般会在此处发起后台请求
   * 获取接口数据数据
   */
  componentDidMount() {
    console.log("componentDidMount：组件已挂载");
  }

  /**
   * shouldComponentUpdate
   * 是否更新组件，用来优化性能
   * 当组件发生更新（props 或 state 发生变化时）时会调用此函数
   * 可以通过返回 true/false 来控制组件是否重新渲染（运行render函数）
   */
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate：组件是否要更新");
    return true;
  }

  /**
   * getSnapshotBeforeUpdate
   * 在最近一次渲染输出（提交到 DOM 节点）之前调用。
   * 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
   * 此生命周期的任何返回值将作为参数传递给 componentDidUpdate。
   */
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate：最近一次渲染输出之前");
    return null;
  }

  /**
   * componentDidUpdate
   * 会在更新后会被立即调用，
   * 可以在此函数中获取到当前页面最新的DOM节点
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate：组件已更新", snapshot);
  }

  /**
   * componentWillUnmount
   * 会在组件卸载及销毁之前直接调用。
   * 在此方法中执行必要的清理操作，
   * 例如，清除定时器，取消网络请求或清除在 componentDidMount 中创建的订阅等
   */
  componentWillUnmount() {
    console.log("componentWillUnmount：组件将要卸载");
  }
}
