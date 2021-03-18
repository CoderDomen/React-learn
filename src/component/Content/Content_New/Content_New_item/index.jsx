import React, { Component } from "react";

class NewItem extends Component {
  state = {
    info: [
      {
        first: "zhang",
        last: "gui",
        content: "给不了你未来"
      },
      {
        first: "li",
        last: "hong",
        content: "让我做你的眼睛"
      }
    ]
  };

  render() {
    const { info } = this.state;
    const { first } = this.props.match.params;
    const obj = info.find(item => {
      return item.first === first;
    });

    return (
      <div style={{margin:"20px"}}>
        <p>{obj.first}</p>
        <p>{obj.last}</p>
        <p>{obj.content}</p>
      </div>
    );
  }
}

export default NewItem;
