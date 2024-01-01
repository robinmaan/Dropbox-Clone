
"use client"

import FileType from "@/typing"
import { ColumnDef } from "@tanstack/react-table"

import prettyBytes from "pretty-bytes"
import {FileIcon, defaultStyles} from "react-file-icon"
import { COLOR_EXTENTION_MAP } from "@/contant"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey:"type",
    header:"type",
    cell:({renderValue, ...props}) => {
      const type = renderValue() as string;
      const extension:string = type.split("/")[1];
      return(
        <div>
          <FileIcon          
          extension={extension}
          labelColor={COLOR_EXTENTION_MAP[extension]}
          
           />
        </div>
      )
    },
  },
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell:({renderValue, ...props})=>{
      return <span>{prettyBytes(renderValue() as number )}</span>
    }
  },
  {
    accessorKey:"downloadURl",
    header:"Link",
    cell:({renderValue, ...props})=>{
      <a 
      href={renderValue() as string}
      target="_blank"
      className="underlinetect-blue-500 hover:text-blue-600"
      >
        Download
      </a>
    }
  }
  
]

