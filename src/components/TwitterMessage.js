import React from "react";

class TwitterMessage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         text: ''
      };
   }

   handleText = (e) => {
      let input = e.target.value
      this.setState({ 
         text: input
      });
   }

   render() {
      return (
         <div>
            <strong>Your message:</strong>
            <input onChange={this.handleText} type="text" name="message" id="message" value={this.state.text} />
            {this.props.maxChars - this.state.text.length}
         </div>
      );
   }
}

export default TwitterMessage;
