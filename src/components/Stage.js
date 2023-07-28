import Cell from "./Cell";
//x would be the cell's indexes.
const Stage = ({ stage }) =>  {
    console.log(stage);
    return (
        <>  
            { stage.map( row => row.map( ( cell, x ) => <Cell key={x} type={cell[0]}/> ) ) }
        </>
    );
}
export default Stage;