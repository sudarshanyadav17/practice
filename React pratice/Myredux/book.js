import { useState } from "react";
import { useSelector,useDispatch  } from "react-redux";
const ManageBook = ()=>{
    let allbook = useSelector( state=>state.Booklist );//
    let [newbook,pickBook] = useState("");
    let dispatch = useDispatch();
    const save=()=>{
        let bookinfo = {type:"addbook", bookname:newbook};
        // // newbook[obj.target.name]=obj.target.value;
        // alert(newbook);
       dispatch(bookinfo);//sending request to redux to save book
       pickBook("");
    }
    const deleteBook = (index)=>{
        let bookinfo = {type:"removebook", bookindex:index};
        dispatch(bookinfo);
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h3> Manage Book</h3>
                    <p>
                        Enter Book Name : <input type="text" className="m-3" onChange={obj=>pickBook(obj.target.value)}/>
                        <button className="btn btn-primary m-3" onClick={save}> Save </button>
                        
                    </p>
                    <h4> {allbook.length} : Total Book in Store </h4>
                </div>
            </div>
            <div className="row mt-4 ">
                {
                    allbook.map((eachBook,index)=>{
                        return(
                            <div className="col-lg-2 mb-4">
                                <p key={index}> {eachBook}</p>
                                <button onClick={deleteBook.bind(this,index)} className="btn btn-danger btn-sm">
                                     Delete </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )    

}

export default ManageBook;