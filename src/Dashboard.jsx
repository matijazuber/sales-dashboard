import supabase from "./supabase-client"
import { useEffect } from "react"
import { useState } from "react"

function Dashboard() {
const [metrics,setMetrics] = useState([]);

const fetchMetrics = async()=>{
  try{
  const {data,error} = await supabase
  .from('sales_deals')
  .select(
    `
    name,
    total:value.sum()
    `,
  )
  if(error){
    throw error
  }
  setMetrics(data)
  console.log(data)
  

} catch(error){
  console.error('Something went wrong',error)
}

}

 useEffect(()=>{
    fetchMetrics()
  },[])
  

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard;