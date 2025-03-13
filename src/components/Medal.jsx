import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Button,
  Em,
  Flex,
  Table,
  Text,
  Tooltip,
} from "@radix-ui/themes";

import { tc } from "../Util";
import MedalSvg from "./MedalSvg";

function Medal(props) {
  return (
    <Table.Row>
      <Table.RowHeaderCell>
        <Flex align="center">
          <MedalSvg color={props.medal.color} />
          <Box pl="2">
            {props.country[props.medal.name].page_value !==
            props.country[props.medal.name].saved_value ? (
              <Text color="red">
                <Em>{tc(props.medal.name)} Medals</Em>
              </Text>
            ) : (
              <Text>{tc(props.medal.name)} Medals</Text>
            )}
          </Box>
        </Flex>
      </Table.RowHeaderCell>
      <Table.Cell align="right" width="108px">
        {props.canPatch ? (
          <Flex align="center" justify="between">
            <Tooltip content="Minus">
              <Button
                variant="ghost"
                disabled={props.country[props.medal.name].page_value === 0}
              >
                <MinusIcon
                  onClick={() =>
                    props.country[props.medal.name].page_value > 0 &&
                    props.onDecrement(props.country.id, props.medal.name)
                  }
                />
              </Button>
            </Tooltip>

            <Badge variant="outline">
              {props.country[props.medal.name].page_value}
            </Badge>

            <Tooltip content="Plus">
              <Button variant="ghost">
                <PlusIcon
                  onClick={() =>
                    props.onIncrement(props.country.id, props.medal.name)
                  }
                />
              </Button>
            </Tooltip>
          </Flex>
        ) : (
          <Flex align="center" justify="center">
            <Badge variant="outline">
              {props.country[props.medal.name].page_value}
            </Badge>
          </Flex>
        )}
      </Table.Cell>
    </Table.Row>
  );
}

export default Medal;
