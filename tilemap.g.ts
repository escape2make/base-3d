// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020201010101010101010103030301020000000200000002020203000000030200000000000000000000000000000301000500020000000202020300000003020000000200000002020203000000030100000002020102020202030003030202000000020200000000020200020202020200010202000000000000000202020202000202010000000002020002020202020002020200000000020200000001010100010102020202020202000000010200000000000000000102020004000201000000000000000002020100000002020000000000000000020102000000020200000000000000000202020000000102020102020102020201020202020101`, img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 . . . 2 . . . 2 2 2 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . 2 . . . 2 2 2 2 . . . 2 
2 . . . 2 . . . 2 2 2 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 2 . 2 2 2 
2 . . . 2 2 . . . . 2 2 . 2 2 2 
2 2 . 2 2 2 . . . . . . . 2 2 2 
2 2 . 2 2 2 . . . . 2 2 . 2 2 2 
2 2 . 2 2 2 . . . . 2 2 . . . 2 
2 2 . 2 2 2 2 2 2 2 2 2 . . . 2 
2 . . . . . . . . 2 2 2 . 2 . 2 
2 . . . . . . . . 2 2 2 . . . 2 
2 . . . . . . . . 2 2 2 . . . 2 
2 . . . . . . . . 2 2 2 . . . 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.floorLight5,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
