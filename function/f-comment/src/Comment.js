import React from "react";

const styles = {
  root: {
    width: "20%",
    margin: "auto",
    marginTop: 16,
    padding: 16,
    textAlign: "left",
    backgroundColor: "white",
    borderRadius: 16,
  },
  imageContainer: {
    display: "inline-block",
    width: "50",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  commentContainer: {
    display: "inline-block",
    marginLeft: 16,
    textAlign: "left",
    verticalAlign: "top",
  },
  nameText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  contentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  const {
    root,
    imageContainer,
    image,
    commentContainer,
    nameText,
    contentText,
  } = styles;
  return (
    <div style={root}>
      <div style={imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          style={image}
        />
      </div>
      <div style={commentContainer}>
        <div style={nameText}>{props.name}</div>
        <span style={contentText}>{props.content}</span>
      </div>
    </div>
  );
}

export default Comment;
