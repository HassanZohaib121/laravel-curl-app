import AppLayout from '@/layouts/app-layout';
import { Task } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function EditForm({task}: {task: Task}){
  const { data, setData, patch, post, errors, processing, recentlySuccessful } = useForm({
        id: task.id,
        name: task.name,
        description: task.description,
        due_date: task.due_date
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      post(route('tasks.edit'));
  };
   
  if(!task){
    return <AppLayout>
      <div className='text-center text-2xl font-bold mt-10'>Task not found</div>
    </AppLayout>
  }
 
  return (
    <AppLayout>
      <Head title="Edit Task" />
        <div className=''>
          <h1 className='text-2xl font-bold text-center mt-10'>Edit Task</h1>
          <form onSubmit={submit} method='POST' className='flex flex-col gap-4 w-[50%] mx-auto mt-10'>
            <input type="hidden" name='id' value={task.id} />
            <Input type="text" name='name' value={data.name} onChange={(e) => setData('name', e.target.value)} />
            <Input type="text" name='description' value={data.description} onChange={(e) => setData('description', e.target.value)} />
            <Input type="date" name='due_date' value={data.due_date} onChange={(e) => setData('due_date', e.target.value)} />
            <Button type='submit' disabled={processing}>Update</Button>
          </form>
        </div>
    </AppLayout>
  )
}

