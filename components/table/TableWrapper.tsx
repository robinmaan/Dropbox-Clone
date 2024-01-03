import FileType from "@/typing"
import { Button } from "../ui/button"
import { DataTable } from "./Tables"
import { columns } from "./columns"
function TableWrapper({skeletonsFiles}:{skeletonsFiles:FileType[]}) {

  return (
    <div>
     <Button>Sortby..</Button>
     <DataTable columns={columns} data={skeletonsFiles}></DataTable>
    </div>
  )
}

export default TableWrapper
