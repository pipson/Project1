
var memory_array = ['A','A','B','B','C','C','D','D','E','E'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
//memory_tile_shuffle = function(){
 //  var shuffle= _.shuffle(memory_array);
 //   return shuffle;
 // }

function newBoard(){
  tiles_flipped = 0;
  var output = '';
  var shuffle = _.shuffle(memory_array);
  for(var i = 0; i < shuffle.length; i++){
    output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+shuffle[i]+'\')"></div>';
  }
  document.getElementById('memory_board').innerHTML = output;
}
function memoryFlipTile(tile,val){
  if(tile.innerHTML == "" && memory_values.length < 2){
    tile.style.background = 'yellow';
    tile.innerHTML = val;
    if(memory_values.length == 0){
      memory_values.push(val);
      memory_tile_ids.push(tile.id);
    } else if(memory_values.length == 1){
      memory_values.push(val);
      memory_tile_ids.push(tile.id);
      if(memory_values[0] == memory_values[1]){
        tiles_flipped += 2;
        // Clear both arrays
        memory_values = [];
        memory_tile_ids = [];
        // Check to see if the whole board is cleared
        if(tiles_flipped == memory_array.length){
          alert("Very Good!, Play Again?");
          document.getElementById('memory_board').innerHTML = "";
          newBoard();
        }
      } else {
        function flip2Back(){
            // Flip the 2 tiles back over
            var tile_1 = document.getElementById(memory_tile_ids[0]);
            var tile_2 = document.getElementById(memory_tile_ids[1]);
            tile_1.style.background = '';
                  tile_1.innerHTML = "";
            tile_2.style.background = '';
                  tile_2.innerHTML = "";
            // Clear both arrays
            memory_values = [];
                  memory_tile_ids = [];
        }
        setTimeout(flip2Back, 700);
      }
    }
  }
}
