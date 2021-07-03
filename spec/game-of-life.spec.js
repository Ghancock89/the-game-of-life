const GameOfLife = require("../../the-game-of-life/src/game-of-life");

describe("Game of Life", () => {

    describe("Scenario 0/Scenario 5", () => {
        it("should return a grid of dead cells when given a grid of dead cells", () => {
            const currentGrid = [["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"]];
            /*
                ---------
                |0||0||0|
                |0||0||0|
                |0||0||0|
                ---------
             */
            const game = new GameOfLife();
            const result = game.play(currentGrid);
            expect(result).toEqual(currentGrid);
        });
    });

    describe("Scenario 1", () => {
        it("should kill live cells when less than two neighbours", () => {
            const currentGrid = [["0", "1", "0"], ["0", "1", "0"], ["0", "0", "0"]];
            /*
                ---------
                |0||1||0|
                |0||1||0|
                |0||0||0|
                ---------
             */
            const game = new GameOfLife();
            const result = game.play(currentGrid);
            expect(result).toEqual([["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"]]);
        });
    });

    describe("Scenario 2", () => {
        it("should kill live cells when more than three neighbours", () => {
            const currentGrid = [["1", "1", "1"], ["0", "1", "0"], ["1", "0", "0"]];
            /*
                ---------
                |1||1||1|
                |0||1||0|
                |1||0||0|
                ---------
             */
            const game = new GameOfLife();
            const result = game.play(currentGrid);
            expect(result).toEqual([["1", "1", "1"], ["0", "0", "1"], ["0", "0", "0"]]);
        });
    });

    describe("Scenario 3", () =>{
        it("A live cell should stay alive if it has 2 or 3 neighbours", () => {
            const currentGrid = [["0", "1", "1"], ["0", "1", "1"], ["0", "0", "0"]];
            /*
                ---------
                |0||1||1|
                |0||1||1|
                |0||0||0|
                ---------
             */
            const game = new GameOfLife();
            const result = game.play(currentGrid);
            expect(result).toEqual([["0", "1", "1"], ["0", "1", "1"], ["0", "0", "0"]]);
        });
    });

    describe("Scenario 4", () => {
        it("If an empty position has exactly 3 neighbours, a live cell should be created in the empty position", () => {
            const currentGrid = [["0", "1", "1"], ["0", "1", "0"], ["0", "0", "0"]];
            /*
                ---------
                |0||1||1|
                |0||1||0|
                |0||0||0|
                ---------
             */
            const game = new GameOfLife();
            const result = game.play(currentGrid);
            expect(result).toEqual([["0", "1", "1"], ["0", "1", "1"], ["0", "0", "0"]]);
        });
    });

    describe("Scenario 6 - Part 1", () => {
        it("Game should evolve from initial state [[0,0,0],[1,1,1],[0,0,0]] to [[0,1,0],[0,1,0],[0,1,0]]", () => {
            const currentGrid = [["0", "0", "0"], ["1", "1", "1"], ["0", "0", "0"]];
            /*
                ---------
                |0||0||0|
                |1||1||1|
                |0||0||0|
                ---------
             */
            const game = new GameOfLife();
            const result = game.play(currentGrid);
            expect(result).toEqual([["0", "1", "0"], ["0", "1", "0"], ["0", "1", "0"]]);
        });
    });

    describe("Scenario 6 - Part 2", () => {
        it("Game should evolve from state [[0,1,0],[0,1,0],[0,1,0]] to [[0,0,0],[1,1,1],[0,0,0]]", () => {
            const currentGrid = [["0", "1", "0"], ["0", "1", "0"], ["0", "1", "0"]];
            /*
                ---------
                |0||1||0|
                |0||1||0|
                |0||1||0|
                ---------
             */
            const game = new GameOfLife();
            const result = game.play(currentGrid);
            expect(result).toEqual([["0", "0", "0"], ["1", "1", "1"], ["0", "0", "0"]]);
        });
    });
});
