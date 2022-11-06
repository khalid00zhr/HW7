import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { getAllByDisplayValue } from "@testing-library/react";

const Details =()=>{

    const { Id } = useParams();
    console.log(Id);
    const URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const [APIData, setAPIData] = useState([]);
  
    // useEffect(() => {
    //   axios
    //     .get(URL)
    //     .then((res) => {
    //       setAPIData(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);
    useEffect(() => {
        getApiData();
    },[]);
    const getApiData = () => { fetch(URL) 
        .then((res) => {
             if (res.ok)
              { return res.json();
             } else {
                 console.log("res error");
             }
            })
            .then((data)=>{
                const newApiData = data.find((item)=>item.id===parseInt(Id));
                // console.log(newApiData);
                setAPIData(newApiData);
            })
            .catch((err)=>console.log(err));
        };

    return(
        <>

           
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-5 col-sm-4">
                                    <img src={APIData.image_link} className="img-fluid w-100" alt="card-horizontal-image" />
                                </div>
                                <div className="col-7 col-sm-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{APIData.name}</h5>
                                        <p className="card-text">{APIData.description}</p>
                                        <h6 className="card-subtitle mb-2 text-muted">{APIData.price} $</h6>
                                        <a  href='/'><button className="btn btn-secondary" >Back</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
        </>
    );
}
export default Details