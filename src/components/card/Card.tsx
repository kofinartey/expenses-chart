import { createUseStyles } from "react-jss";
import colors from "../../utils/colors";

type CardProps = {
  children: React.ReactNode;
  bkg_color?: string;
} & React.ComponentProps<"div">;

function Card({ children, bkg_color, ...rest }: CardProps) {
  const styles = {
    padding: "1rem",
    margin: "1rem 0",
    borderRadius: "1rem",
    backgroundColor: bkg_color ? bkg_color : colors.orange,
    color: bkg_color ? "white" : colors.brown.dark,
  };

  return (
    <div {...rest} style={styles}>
      {children}
    </div>
  );
}

export default Card;
