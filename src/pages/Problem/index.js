import React,{useState,useEffect} from "react";
import Papa from 'papaparse'
import Data from './sih.csv'
import './index.css'


const Problems = () => {

  const [data,setData] = useState()
  const [status,setStatus] = useState(false)
  const [sec,setSec] = useState('')
  const [data1,setData1] = useState()

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
        setData1(parseData)
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
            let list = data1.filter(each =>{
                if(each.Category != undefined && each.Category != []){
                    return each.Category.toLowerCase().includes(e.target.value.toLowerCase())
                }
            }
            )
            setData(list)
        }else{
            let list = data1.filter(each =>{
                if(each.Organization != undefined && each.Organization != []){
                    return each.Organization.toLowerCase().includes(e.target.value.toLowerCase())
                }
            })
            setData(list)
        }
    
   }
  }
// Testing Code 
//   const sendData = () =>{
//     console.log('called')
//     const url = 'http://localhost:3001/'
//     fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json(); // Parse the response as JSON
//     })
//     .then((data) => {
//       console.log(data); // Update the component's state with the fetched data
//     })
//     .catch((error) => console.error('Error:', error));

//   }


  return(
    <div style={{backgroundColor:'white',minHeight:'100vh',backgroundSize:'cover'}} className="m-2 p-3">
        <div style={{display:'flex',flexDirection:'column'}}>
            <h2 style={{textAlign:'center',color:'black',fontSize:'40px',fontStyle:'italic'}}>Problems</h2>
            <hr style={{backgroundColor:'black',height:'1px',width:'80%',alignSelf:'center'}} className="mt-3 "/>
            {/* <button className="btn btn-primary" onClick={sendData}>Send</button> */}
        </div>
        <div style={{display:'flex'}}>
            <div style={{width:'20%'}}>
                <h1 style={{fontSize:'25px'}} className="mt-5">Filter Elements</h1>
                <select className="form-control mt-5" onChange={setSelection}>
                    <option>All</option>
                    <option>Category</option>
                    <option>Organization</option>
                </select>
                <input type="text" placeholder={`Search ${sec}`} onChange={searchChange} className="form-control mt-3"/>
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
