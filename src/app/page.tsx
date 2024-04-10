import Link from "next/link";
import prisma from "../db";
import TodoItem from "../components/TodoItem";

function getTodo () {
  return prisma.todo.findMany()
}

async function toggleTodo (id: string, complete:boolean){
  "use server"

}


export default async function Home() {

  // await prisma.todo.create({ data : {title : "test", complete : false}})


  const todos = await getTodo()

  return (
  <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">Todos</h1>
      <Link className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-7000" href="/new">New</Link>
    </header>
    <ul className="pl-4">
      {todos.map(todo =>(
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
      ))}
    </ul>
  </>
  );
}
