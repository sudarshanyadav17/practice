//iteminfo = { iname:"Mango" cost:"100" seller:"Amir" qty:"5kg"}

const Details=(iteminfo)=>{
    return (
        <fieldset>
            <legend> {iteminfo.iname}</legend>
            <p> Price:{iteminfo.cost} </p>
            <p> Quantity: {iteminfo.qty}</p>
            <p> Seller : {iteminfo.seller}</p>
        </fieldset>
    );
}

export default Details;


