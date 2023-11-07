import React,{useState,useEffect} from "react";
import Papa from 'papaparse'
import Data from './sih.csv'
import './index.css'

const Problems = () => {

  const [data,setData] = useState()
  const [status,setStatus] = useState(false)

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


  return(
    <div style={{backgroundColor:'white',minHeight:'100vh',backgroundSize:'cover'}} className="m-2 p-3">
        <div style={{display:'flex',flexDirection:'column'}}>
            <h2 style={{textAlign:'center',color:'black',fontSize:'40px',fontStyle:'italic'}}>Problems</h2>
            <hr style={{backgroundColor:'black',height:'1px',width:'80%',alignSelf:'center'}} className="mt-3"/>
        </div>
        <div style={{display:'flex'}}>
            <div style={{width:'20%'}}>
                <h1>Uday</h1>
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
                    {' '}
                    SI.NO
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
       {/* {status &&  data.map(each =>(
            <h1>{each.Index}</h1>
        ))} */}
    </div>
  )
};

export default Problems;
