var Score ,ActivePlayer,dice=0 ,RoundScore,dp;


function sta()
{
dice=0;
RoundScore=0
Score=[0,0];
ActivePlayer=0;
document.querySelector('#dicedp').style.display="none";
document.querySelector('#dice').style.display="none";
document.querySelector('#Score-1').textContent=0;
document.querySelector('#Current-0').textContent=0;
document.querySelector('#Current-1').textContent=0;
document.querySelector('#Score-0').textContent=0;

}
sta();


document.querySelector('#Roll').addEventListener('click' , function(){
    dp=dice;
    var k=document.querySelector('#dice');
    k.style.display='block';
    k.src='dice-'+dp+'.png';
    dice=Math.floor(Math.random() *6)+1;
    
    console.log(dice);
    var q=document.querySelector('#dicedp');
    q.style.display='block';
    q.src='dice-'+dice+'.png';
    if(dice==dp)
    {
        Score[ActivePlayer]=0;
        document.querySelector('#Score-'+ActivePlayer).textContent=Score[ActivePlayer];
    }


    else if(dice !== 1)
    {
        Score[ActivePlayer]+=dice;
        document.querySelector('#Current-'+ActivePlayer).textContent=dice;
    }
    else{
        dice=0;
        Score[ActivePlayer]+=dice;
        document.querySelector('#Current-'+ActivePlayer).textContent=dice;
        ActivePlayer==0? ActivePlayer=1 :ActivePlayer=0;
        document.querySelector('#Player5').classList.toggle('Active');
        document.querySelector('#Player6').classList.toggle('Active');
        document.querySelector('#Current'+ActivePlayer).textContent=dice;
        document.querySelector('#Player-'+ActivePlayer+'Panel').classList.remove('Active');
    
    }
});


document.querySelector('#Hold').addEventListener('click', function(){
   
    document.querySelector('#Score-'+ActivePlayer).textContent=Score[ActivePlayer];
    if(Score[ActivePlayer]>50)
    {   ActivePlayer=ActivePlayer+1;
        alert('Player'+ActivePlayer +"wins");
        sta();
    }
});
document.querySelector('#New-Game').addEventListener('click',sta);