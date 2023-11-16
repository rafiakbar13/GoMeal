import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { bills } from '@/src/common/constants/Bills'

const Bills = async () => {
    return (
        <section className='mx-6 my-8'>
            <article className='flex flex-col gap-y-5'>
                <h1 className="text-zinc-800 text-3xl font-bold font-['Poppins']">
                    Bills
                </h1>
                <DataTable columns={columns} data={bills} />
            </article>
        </section>
    )
}

export default Bills
