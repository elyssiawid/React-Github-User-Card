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

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.user.login}
        </Typography>
        <Typography variant="h5" component="h2">
          <img src={props.user.avatar_url} alt="avatar" />
        </Typography>
      </CardContent>
      s
    </Card>
  );
}

// export default class Cards extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log("isaiah", this.props.user);
//     return (
//       <div>

//       </div>
//     );
//   }
// }
