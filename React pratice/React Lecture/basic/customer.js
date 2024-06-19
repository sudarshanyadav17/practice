
const Mycustomer=()=>{
    let allcustomer = [
        { city:"Bangalore", user:['Alex','Rohit','Chinna']},
        { city:"Mumbai", user:['Chinna','Santosh']},
        { city:"Pune", user:['Rohit','Punit','Ali']},
        { city:"Kolkata", user:['Ram','Hasan']}

    ]
    return(
        <div className="container">
            <h1>Manage Customer:{allcustomer.length}</h1>
            {
            allcustomer.map((customer,index)=>{
                return(
                    <fieldset key={index}>
                        <legend>{customer.city}</legend>
                        {
                         customer.user.map((fullname,index2)=>{
                            return(
                                <p key={index2}>{ fullname }</p>
                            )
                         })

                        }
                    </fieldset>
                )
            })
            }
        </div>
    );
}

export default Mycustomer;