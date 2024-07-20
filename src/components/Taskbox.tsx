import Tasklist from "./Tasklist"
import { useState } from "react";

function Taskbox() {
    const [value,setValue] = useState("")
    const [items, setItems] = useState<string[]>([]);


    const getValue = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setValue(value)
        
    }
    const addTask = ()=>{
        if(value===""){
            alert("Please add some task")
            return
        }
        setItems([...items.reverse(),value])
        setValue("")
    }
    const deleteTask = (index:number)=>{
        const updatedItem:string[] = items.filter((_,i)=> i!==index)
        setItems(updatedItem)
    }
    const editTask = (index:number)=>{
        console.log(index);
        
    }
  return (
    <div className="taskbox w-[550px] min-h-[100px] p-2 bg-slate-400 rounded-md">
        <section className="addtask w-full h-10 flex justify-center gap-3">
            <input className=" w-[80%] h-full text-center rounded-md" type="text" placeholder="Add task" onChange={ getValue} value={value} name="addtask"/>
            <button onClick={addTask} className=" px-5 py-2 bg-blue-700 rounded-md hover:scale-105 transition-all">Add</button>
        </section>
        <section className="tasklist w-full h-full">
            {
                items && items.map((item:string,index:number) => (

                    <Tasklist key={index} task = {item} onDelete={()=>deleteTask(index)} onEdit={()=>editTask(index)} />
                ))
            }
        </section>
    </div>
  )
}

export default Taskbox