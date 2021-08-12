import React,{useState} from 'react'

const AccordionForm = props => {

    const{dataPass}= props

    const[user, setUser] = useState({
        name:"",
        post:"",
    })


    
    const onFormSubmit = ()=>{
        console.log("the User", user)
        dataPass(user)
        setUser({
            name:"",
            post:""
        })

      }
    
const handleChange = (e)=>{
    setUser({...user, [e.target.name] : e.target.value})
  }
  const{name,post}=user
  console.log(name,post)
    return (
        <div className="container ">
            <div className="row d-flex justify-content-center mt-5">
                <h5 className="text-center">Accordion Form</h5>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-xs-12 col-sm-10 col-md-8">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Personal Details
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                            <input type="text" name="name" value={name} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">Provide your Name</div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Post Name</label>
                                            <input type="text" name="post" value={post} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">Provide Your Post</div>
                                        </div>


                                        <button onClick={onFormSubmit} className="btn btn-primary">Submit</button>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionForm
