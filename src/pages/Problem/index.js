import React,{useState,useEffect} from "react";
import Papa from 'papaparse'
import Data from './sih.csv'
import './index.css'


const Problems = () => {

  const [data,setData] = useState()
  const [status,setStatus] = useState(false)
  const [sec,setSec] = useState('All')

  useEffect(() =>{
    const callFunction =async () =>{
        const res = await fetch(Data)
        const reader = res.body.getReader()
        const result = await reader.read()
        const decoder = new TextDecoder('utf-8')
        const csvData = decoder.decode(result.value)
        const parseData =  Papa.parse(csvData,{
            header:true,
            skipEmptyLines:true
        }).data
        setData(parseData)
        parseData.sort((a, b) => a.sino - b.sino);

        setStatus(true)
        console.log(parseData)
    }
    callFunction()
  },[])

  const setSelection = (e) =>{
    setSec(e.target.value)
  }

  const searchChange = (e) =>{
    
   if(status){
        if(sec == 'Category'){
            let list = data.filter(each =>{
                if(each.Category != undefined && each.Category != []){
                    each.Category.toLowerCase().includes(e.target.value.toLowerCase())
                }
            }
            )
            console.log(list)
        }else{
            let list = data.filter(each =>
                each.Organization.toLowerCase().includes(e.target.value.toLowerCase()),
            )
            console.log(list)
        }
    
   }
  }


  return(
    <div style={{backgroundColor:'white',minHeight:'100vh',backgroundSize:'cover'}} className="m-2 p-3">
        <div style={{display:'flex',flexDirection:'column'}}>
            <h2 style={{textAlign:'center',color:'black',fontSize:'40px',fontStyle:'italic'}}>Problems</h2>
            <hr style={{backgroundColor:'black',height:'1px',width:'80%',alignSelf:'center'}} className="mt-3 "/>
        </div>
        <div style={{display:'flex'}}>
            <div style={{width:'20%'}}>
                <h1 style={{fontSize:'25px'}} className="mt-5">Filter Elements</h1>
                <select className="form-control mt-5" onChange={setSelection}>
                    <option>All</option>
                    <option>Category</option>
                    <option>Organization</option>
                </select>
                <input type="text" placeholder="Search" onChange={searchChange} className="form-control mt-3"/>
            </div>
            <table
                className="table table-hover mdc-data-table__table mt-5"
                style={{width: '80%', marginLeft: '60px',backgroundColor:'black',borderColor:'black'}}
            >
                <thead
                className="job-header"
                style={{backgroundColor: 'black', textAlign: 'center'}}
                >
                <th
                    className="mdc-data-table__header-cell"
                    role="columnheader"
                    scope="col"
                    style={{textAlign: 'center',color:'white'}}
                >
                    <button>SI.NO</button>
                </th>
                <th
                    className="mdc-data-table__header-cell"
                    role="columnheader"
                    scope="col"
                    style={{textAlign: 'center',color:'white'}}
                >
                    Category
                </th>
                <th
                    className="mdc-data-table__header-cell"
                    role="columnheader"
                    scope="col"
                    style={{textAlign: 'center',color:'white'}}
                >
                    Organization
                </th>
                <th
                    className="mdc-data-table__header-cell"
                    role="columnheader"
                    scope="col"
                    style={{textAlign: 'center',color:'white'}}
                >
                    Problem Statement Title
                </th>
                
                </thead>
                <tbody>
                    {status && data.map(each =>(
                        <tr key={each.index}>
                            <td style={{textAlign: 'center',color:'white'}}>{each.sino}</td>
                            <td style={{textAlign: 'center',color:'white'}}>{each.Category}</td>
                            <td style={{textAlign: 'center',color:'white'}}>{each.Organization}</td>
                            <td style={{textAlign: 'center',color:'white'}}>{each.ProblemStatement.slice(0,300)}.....</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
       
    </div>
  )
};

export default Problems;
