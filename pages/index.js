import { Heading, Box, Text, Button } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const initialTodos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ];

  // const storage = JSON.parse(localStorage.getItem("todo")) || [];

  const [todos, setTodos] = useState("");

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodo);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // if (loading) {
  //   return <h1>読み込み中...</h1>;
  // }
  //#endregion
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack m={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient={"linear(to-r, pink.700, pink.400, blue.500)"}
        bgClip="text"
        pb="8"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}
