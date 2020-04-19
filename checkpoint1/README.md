HOW TO PLAY <br>
begin with three towers: a/start, b/via, c/end <br>
begin with three discs on startTower: n-1/small/1, medium/2, nth/large/3<br>
click top disc , move to selected tower<br>
" , " ...<br>
finish when all three discs are moved to tower c, in order <br>

can not place larger disc on top of smaller disc<br>


PSEUDOCODE<br>
//these are our play parameters<br>
play(diskNumber, start, via, end)<br>
{
//we will stop play  <br>
if diskNumber is equal 1<br>
//because then <br>
move last disc to end <br>
}

//to move top disk from start to end<br>
play(diskNumber-1, start, via, end)<br>
{

//all together<br>
play(diskNumber, start , via, end)<br>

IF diskNumber is equal 1, THEN<br>
      move disk from start to end<br>
   ELSE <br>
      play(diskNumber - 1, start, end, via)   // Step 1<br>
      move disk from start to end                 // Step 2<br>
      play(disk - 1, via, start, end)   // Step 3<br>
   UNTIL <br>
   IF diskNumber is equal 1, THEN<br>
      move disk from start to end<br>
   
