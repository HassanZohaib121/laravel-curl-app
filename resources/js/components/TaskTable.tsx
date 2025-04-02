import { Task } from "@/types";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { PencilIcon, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link, router } from "@inertiajs/react";

export default function TaskTable({tasks}:{tasks:Task[]}){
    let index = 1;
    const deleteTask = (id: number) => {
        if (confirm('Are you sure you want to delete this task?')) {
            router.delete(route(`tasks.destroy`,{ id }))
        }
    }
  return <Table className='w-[95%] mx-auto overflow-x-auto mt-5'>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
      <TableRow className='bg-gray-100 dark:bg-gray-800'>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead className="w-[100px]">Task</TableHead>
          <TableHead className="w-[100px]">Description</TableHead>
          <TableHead className="w-[100px] text-center">Due Date</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
      </TableRow>
  </TableHeader>
  <TableBody>
      {tasks.length > 0 ?
      tasks.map((task) => (
          <TableRow key={task.id} className='hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-200 items-center'>
              <TableCell>{index++}</TableCell>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell className='text-center'>{task.due_date}</TableCell>
              <TableCell className='flex gap-2 justify-start'>
                  <Link href={`/dashboard/tasks/edit/${task.id}`}>
                      <Button variant={'outline'} className='cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'>
                          <PencilIcon className='w-4 h-4' />
                      </Button>
                  </Link>
                  <Button variant={'destructive'} className='cursor-pointer hover:bg-red-500 transition-colors duration-200' onClick={() => deleteTask(task.id)}>                                    
                      <TrashIcon className='w-4 h-4' />
                  </Button>
              </TableCell>
          </TableRow>
      )) : <TableRow>No tasks found</TableRow>}
  </TableBody>
</Table>
}