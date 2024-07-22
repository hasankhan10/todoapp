import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

type TaskProps = {
    task: string,
    onDelete:()=>void,
    onEdit:()=>void,
}

function Tasklist({task,onDelete,onEdit}:TaskProps) {
    const [check,setCheck] = useState(true)
  return (
    
    <div className="tasklist w-[90%] flex py-3 bg-slate-300 mt-2 px-2 gap-2 mx-auto rounded-md">
        <input className=" cursor-pointer w-4" type="checkbox" name="box" id="" onChange={()=> setCheck(!check)} />
        {
          check ? <p>{task}</p>:<s className=" opacity-60">{task}</s>
        }
        <div className="iconbox flex ml-auto gap-4">
            <MdModeEdit onClick={onEdit} className=" w-5 h-5 cursor-pointer" />
            <MdDelete onClick={onDelete} className=" w-5 h-5 cursor-pointer" />
        </div>
    </div>
  )
}

export default Tasklist