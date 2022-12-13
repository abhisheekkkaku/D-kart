import React from "react";

export default function Cart(props) {
  return (
    <div>
      <table className="tbl">
        <thead >
        <tr >
          <th >Title</th>
          <hr className="solid11"></hr>
          <th>Price</th>
          <hr className="solid12"></hr>
          <th >Url</th>
        </tr>
        </thead>
        
        <tbody className="tbl1">
        {props.product.map((p) => (
          <tr  key={p.Id}>
            <td >{p.Title}</td>
            <hr className="solid"></hr>
            <td>{p.Budget}</td>
            <hr className="solid1"></hr>
            <td className=""><img src={p.URL} /></td>
          </tr>
        ))}
        </tbody>
      </table>
      <button className="tbl2" onClick={()=>props.goToMain("main")}>Go To Home</button>
    </div>
  );
}
