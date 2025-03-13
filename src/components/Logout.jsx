import { ExitIcon } from "@radix-ui/react-icons";
import { Button, Tooltip } from "@radix-ui/themes";

function Logout(props) {
  return (
    <Tooltip content="Logout">
      <Button
        style={{ position: "fixed", bottom: 20, left: 20, zIndex: 100 }}
        variant="ghost"
        onClick={props.onLogout}
      >
        <ExitIcon />
      </Button>
    </Tooltip>
  );
}

export default Logout;
