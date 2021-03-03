import React from "react";
import "./App.css";
import FollowButton from "./components/FollowButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: "1",
      userList: [
        {
          id: "1",
          name: "张三",
        },
        {
          id: "2",
          name: "李四",
        },
        {
          id: "3",
          name: "王五",
        },
        {
          id: "4",
          name: "赵六",
        },
      ],
    };
  }

  onUserChangeHandle = (event) => {
    this.setState({
      currentId: event.target.value,
    });
  };

  render() {
    const { currentId, userList } = this.state;
    const user = userList.find((item) => item.id === currentId) || {};

    console.log(user);

    return (
      <div style={{ padding: "10px" }}>
        <select
          style={{ marginRight: "10px" }}
          value={currentId}
          onChange={this.onUserChangeHandle}
        >
          {userList.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <FollowButton user={user} />
      </div>
    );
  }
}

export default App;
