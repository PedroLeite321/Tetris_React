import { setStage } from "../gameStageSetup";

import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";


const Tetris = () =>    {
    const score = 0;
    const rows = "Rows here";
    const level = 1;

    return( 
        <>           
            <aside>
                <Stage stage={ setStage() }/>
                <Display text={score}/>
                <Display text={rows}/>
                <Display text={level}/>
                <StartButton/>
            </aside>            
        </>
    )
}
export default Tetris;