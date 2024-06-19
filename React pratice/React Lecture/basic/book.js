

const Mybook=()=>{
    let allBook =['HTML Basic','CSS Advance','Javascript','React','Node js','PHP','MySql'];
    return(
        <div className="container">
            <h1>Manage Book : {allBook.length}</h1>
            {allBook.map((bookName,index)=>{
                return (
                    <p key={index} className="three">{index} # {bookName}</p>
                )
            })}
        </div>
    );
}

export default Mybook;