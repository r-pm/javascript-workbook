HOW TO PLAY
begin with three towers: a/start, b/via, c/end
begin with three discs on startTower: n-1/small/1, medium/2, nth/large/3
click top disc , move to selected tower
" , " ...
finish when all three discs are moved to tower c, in order 

can not place larger disc on top of smaller disc


PSEUDOCODE
//these are our play parameters
play(diskNumber, start, via, end)
{
//we will stop play  
if diskNumber is equal 1
//because then 
move last disc to end 
}

//to move top disk from start to end
play(diskNumber-1, start, via, end)
{

//all together
play(diskNumber, start , via, end)

IF diskNumber is equal 1, THEN
      move disk from start to end
   ELSE
      play(diskNumber - 1, start, end, via)   // Step 1
      move disk from start to end                 // Step 2
      play(disk - 1, via, start, end)   // Step 3
   UNTIL 
   IF diskNumber is equal 1, THEN
      move disk from start to end
   
