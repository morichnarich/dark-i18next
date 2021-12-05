import React from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList({ todos, deleteTodo }) {
  console.log(todos);
  if (!todos) {
    return (
      <Badge p="4" m="4" colorScheme="green" borderRadius="lg">
        NO TODOS, YAY!!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderWidth="2px"
      borderColor="grey.100"
      borderRadius="lg"
      p={4}
      w="100%"
      maxWidth={{ base: "90vw", sm: "80vw", lg: "70vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
