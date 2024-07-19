import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

type Task = {
    task: string
}

function Tasklist({task}:Task) {
    const [check,setCheck] = useState(true)
    console.log(check);
    
  return (
    
    <div className="tasklist w-[90%] flex py-3 bg-slate-300 mt-2 px-2 gap-2 mx-auto rounded-md">
        <input className=" cursor-pointer w-4" type="checkbox" name="box" id="" onChange={()=> setCheck(!check)} />
        <p>{task}</p>
        <div className="iconbox flex ml-auto gap-4">
            <MdModeEdit className=" w-5 h-5 cursor-pointer" />
            <MdDelete className=" w-5 h-5 cursor-pointer" />
        </div>
    </div>
  )
}

export default Tasklist