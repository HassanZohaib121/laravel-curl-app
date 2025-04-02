import AppLayout from '@/layouts/app-layout';
import { type Task } from '@/types';
import { Head } from '@inertiajs/react';
import TaskTable from '@/components/TaskTable';
import { Link } from '@inertiajs/react';
export default function Index({tasks}: {tasks: Task[]}) {    
    console.log(tasks);
    return (
        <AppLayout>
            <Head title="Tasks" />
            <div className='flex justify-between items-center mt-5 mx-5'>
                <h1 className='text-2xl font-bold'>Tasks</h1>
                <div className='flex justify-end'>
                    <Link href='/dashboard/tasks/add' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add Task</Link>
                </div>
            </div>
                <TaskTable tasks={tasks} />
        </AppLayout>
    );
}
