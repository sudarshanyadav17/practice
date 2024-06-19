
const Myproduct =()=>{
    const myproduct=[
        {pname:"Apple",price:300,qty:100,seller:"Alex"},
        {pname:"Mango",price:30,qty:200,seller:"Alex"},
        {pname:"Goa",price:40,qty:10,seller:"Alex"},
        {pname:"Potato",price:30,qty:10,seller:"Alex"},
        
    ];
    return (
        <div className="container">
            <h1>Manage Product:{myproduct.length}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th> Quantity</th>
                        <th>Seller Name</th>
                  </tr>

                </thead>
                <tbody>
                    {
                        myproduct.map((product,index)=>{
                            return (
                                <tr key={index}>
                                <td>{index}</td>
                                <td>{product.pname}</td>
                                <td>{product.price}</td>
                                <td>{product.qty}</td>
                                <td>{product.seller}</td>
                        
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Myproduct;