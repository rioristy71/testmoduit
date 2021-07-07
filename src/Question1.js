import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const Question1 = () => {

    const [data, setData] = useState ([]);

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://screening.moduit.id/frontend/web/question/one',{
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"    
        }
        })
        .then ((res)=>{
            // const allNotes = res.data.notes.allNotes;
            // getAllNote(allNotes)
            console.log(data)
        })
        .catch(error => console.error(`Error: ${error}`));
    }, []);

    return (
        <div>
           <h1>Question1</h1> 
           <div class="card shadow my-5 mx-4 p-3" style={{ borderRadius:"15px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>bro</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
    )
}

