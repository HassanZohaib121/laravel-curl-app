import AppLayout from '@/layouts/app-layout'
import { Head, useForm } from '@inertiajs/react'
import { FormData } from '@/types'

export default function AddForm() {
  const { data, setData, post, errors, processing, reset } = useForm<FormData>({
    id: undefined,
    name: '',
    description: '',
    due_date: '',
    image: null
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(route('tasks.addData', { onSuccess:()=>{
      reset();
    }}));
  };  

  return (
    <AppLayout>
      <Head title="Add Task" />
      <h1 className='text-2xl font-bold text-center mt-10'>Add Task</h1>
      <form method='POST' className='flex flex-col gap-4 w-[50%] mx-auto mt-10' onSubmit={submit} encType='multipart/form-data'>
        <input 
          type="text" 
          name='name' 
          placeholder='Name' 
          value={data.name} 
          onChange={(e) => setData('name', e.target.value)} 
          className='border-2 border-gray-300 rounded-md p-2' />
          {errors.name && <p className='text-red-500'>{errors.name}</p>}
        <input 
          type="text" 
          name='description' 
          placeholder='Description' 
          value={data.description} 
          onChange={(e) => setData('description', e.target.value)} 
          className='border-2 border-gray-300 rounded-md p-2' />
          {errors.description && <p className='text-red-500'>{errors.description}</p>}
        <input 
        type="date" 
          name='due_date' 
          value={data.due_date} 
          onChange={(e) => setData('due_date', e.target.value)} 
          className='border-2 border-gray-300 rounded-md p-2' />
          {errors.due_date && <p className='text-red-500'>{errors.due_date}</p>}
        <input 
          type="file" 
          name='image' 
          onChange={(e) => setData('image', e.target.files?.[0] || null)} 
          className='border-2 border-gray-300 rounded-md p-2' />
          {errors.image && <p className='text-red-500'>{errors.image}</p>}
        <button 
          type='submit' 
          disabled={processing} 
          className='bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors 
          duration-200 cursor-pointer'>
          Add
          </button>
      </form>
    </AppLayout>
  )
}
