export const STAGE_HEIGHT = 10;
export const STAGE_WIDTH = 20;


export const setStage = ()  =>  {
    return(
        Array.from(Array( STAGE_HEIGHT ), () => {
            return (
                new Array( STAGE_WIDTH ).fill([ 0, 'clear' ])
            )

        })
    )

}