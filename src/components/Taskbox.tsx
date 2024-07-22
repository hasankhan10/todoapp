import Tasklist from "./Tasklist"
import { useState } from "react";

function Taskbox() {
    const [value,setValue] = useState("")
    const [items, setItems] = useState<string[]>([]);
    const [save,setSave] = useState("Add")
    const [editIndex,setEditIndex] = useState<number|null>(null)


    const getValue = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setValue(value)
        
    }
    const addTask = ()=>{
        if(value===""){
            alert("Please add some task")
            return
        }
        if(save ===  "Save" && editIndex !==null){
            const updatedItem = [...items]
            updatedItem[editIndex] = value
            setItems(updatedItem)
            setSave("Add")
        }else{
            setItems([...items,value])
        }
        setValue("")
    }
    const deleteTask = (index:number)=>{
        const updatedItem:string[] = items.filter((_,i)=> i!==index)
        setItems(updatedItem)
    }
    const editTask = (item:string,index:number)=>{
        setValue(item)
        setSave("Save")
        setEditIndex(index)
    }
  return (
    <div className="taskbox w-[550px] min-h-[100px] p-2 bg-slate-400 rounded-md">
        <section className="addtask w-full h-10 flex justify-center gap-3">
            <input className=" w-[80%] h-full text-center rounded-md" type="text" placeholder="Add task" onChange={ getValue} value={value} name="addtask"/>
            <button onClick={addTask} className=" px-5 py-2 bg-blue-700 rounded-md hover:scale-105 transition-all">{save}</button>
        </section>
        <section className="tasklist w-full h-full">
            {
                items && items.map((item:string,index:number) => (

                    <Tasklist key={index} task = {item} onDelete={()=>deleteTask(index)} onEdit={()=>editTask(item,index)} />
                ))
            }
        </section>
    </div>
  )
}

export default Taskbox