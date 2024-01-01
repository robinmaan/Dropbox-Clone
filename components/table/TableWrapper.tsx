import FileType from "@/typing"
import { Button } from "../ui/button"


function TableWrapper(
    {skeletonsFiles}: {skeletonsFiles: FileType[]}
) {
  return (
    <div>
      <Button> Sort by ..</Button>
    </div>
  )
}

export default TableWrapper
