import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

const Tetris = () =>    {
    const score = 0;
    const rows = "Rows here";
    const level = 1;

    return( 
        <>
            <Stage/>
            <aside>
                <Display text={score}/>
                <Display text={rows}/>
                <Display text={level}/>
            </aside>
            < StartButton />
        </>
    )
}
export default Tetris;