import { HStack, useToast, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
  const [content, setContent] = useState("");
  const toast = useToast();
  function handleSubmit(e) {
    e.preventDefault();

    if (!content) {
      toast({
        // position: "bottom-left",
        duration: 2000,
        status: "warning",
        title: `left-accent toast`,
        variant: "left-accent",
        isClosable: true,
      });
      return false;
    }
    console.log(content);
    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="learning chakraui with todo app"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <Button colorScheme="pink" px={8} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
