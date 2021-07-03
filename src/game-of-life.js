class GameOfLife {
    //keys: 0 = dead, 1 = alive

    play(seedGrid) {
        const newGrid = JSON.parse(JSON.stringify(seedGrid));
        for(let x = 0; x < newGrid.length; x++){
            for(let y = 0; y < newGrid[x].length; y++){
                if(seedGrid[x][y] === '1'){
                    const neighbourCount = this.getNeighbourCount(x, y, seedGrid);
                    if(neighbourCount < 2 || neighbourCount > 3){
                        newGrid[x][y] = '0';
                    }
                } else {
                    const neighbourCount = this.getNeighbourCount(x, y, seedGrid);
                    if(neighbourCount === 3){
                        newGrid[x][y] = '1';
                    }
                }
            }
        }
        return newGrid;

    }


    getNeighbourCount(x, y, seedGrid){
        const checks = [[x-1, y-1],[x,y-1],[x+1, y-1],[x-1,y], [x+1, y],[x-1, y+1], [x, y+1], [x+1, y+1]];
        let neighbourCount = 0;
        try{

            for(let i = 0; i < checks.length; i++){
                if(checks[i][0] > -1 && checks[i][1] > -1 && checks[i][0] < 3 && checks[i][1] < 3) {
                    const cx = checks[i][0];
                    const cy = checks[i][1];
                    if (seedGrid[cx][cy] !== '0') {
                        neighbourCount++;
                    }
                }
            }
        }catch (e) {

        }
        return neighbourCount;
    }

}



module.exports = GameOfLife;
