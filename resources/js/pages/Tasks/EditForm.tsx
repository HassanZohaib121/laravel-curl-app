import AppLayout from '@/layouts/app-layout';
import { Task, FormData } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function EditForm({task}: {task: Task}){
  const { data, setData, post, errors, processing } = useForm<FormData>({
        id: task.id || undefined,
        name: task.name || '',
        description: task.description || '',
        due_date: task.due_date || '',
        image: null
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
          <form onSubmit={submit} method='POST' className='flex flex-col gap-4 w-[50%] mx-auto mt-10' encType='multipart/form-data'>
            <input type="hidden" name='id' value={task.id} />
            <Input type="text" name='name' value={data.name} onChange={(e) => setData('name', e.target.value)} />
            {errors.name && <p className='text-red-500'>{errors.name}</p>}
            <Input type="text" name='description' value={data.description} onChange={(e) => setData('description', e.target.value)} />
            {errors.description && <p className='text-red-500'>{errors.description}</p>}
            <Input type="date" name='due_date' value={data.due_date} onChange={(e) => setData('due_date', e.target.value)} />
            {errors.due_date && <p className='text-red-500'>{errors.due_date}</p>}
            <Input type="file" name='image' onChange={(e) => setData('image', e.target.files?.[0] || null)} />
            {errors.image && <p className='text-red-500'>{errors.image}</p>}
            <img src={task.image} alt={task.name} className='w-10 h-10 rounded-md' />
            <Button type='submit' disabled={processing}>Update</Button>
          </form>
        </div>
    </AppLayout>
  )
}

