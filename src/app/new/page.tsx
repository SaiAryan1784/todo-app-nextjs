import prisma from "@/src/db"
import { error } from "console"
import { redirect } from "next/navigation"
import Link from "next/link"

async function createTodo(data: FormData){
  "use server"

  const title = data.get("title")?.valueOf()
  if(typeof title !== "string" || title.length === 0){
    throw new Error ("Invalid Title")
  }

  await prisma.todo.create ({data: {title , complete: false}})
  redirect("/")
}
const Page = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex flex-col gap-2">
        <input type="text" name="title" id="" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"/>
        <div className="flex justify-center">
          <Link href=".." className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</Link>
          <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">ADD</button>
        </div>
      </form>
      
    </>
  )
}

export default Page