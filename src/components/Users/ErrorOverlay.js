import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ErrorOverlay.module.css";

const ErrorOverlay = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="click" onClick={props.onConfirm}>
            Close
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorOverlay;
