import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { bills } from '@/src/common/constants/Bills'

const Bills = async () => {
    return (
        <section className='container mx-auto py-10'>
            <DataTable columns={columns} data={bills} />
        </section>
    )
}

export default Bills
