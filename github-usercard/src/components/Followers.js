import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Followers(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.follower.login}
        </Typography>
        <Typography variant="h5" component="h2">
          <img src={props.follower.avatar_url} alt="avatar" />
        </Typography>
      </CardContent>
    </Card>
  );
}

// import React, { Component } from "react";

// export default class Followers extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log("isaiah", this.props.follower);
//     return (
//       <div>
//         <h1> {this.props.follower.login} </h1>
//       </div>
//     );
//   }
// }
