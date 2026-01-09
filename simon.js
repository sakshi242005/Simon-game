
        let gamesequence = [];
        let usersequence = [];
        let level = 0;
        let started = false;
        let buttons=["red","blue","yellow","green"];
        let h3 = document.querySelector("h3");

        document.addEventListener("keypress",function(){
            if(!started){
                console.log("game started");
                started = true;

                levelup();
            }
        })

        function levelup(){
             usersequence=[];
            level++;
            h3.innerText=`Level ${level}`;

            let randindex= Math.floor(Math.random()*3);
            let randcolor= buttons[randindex];
            let randbtn= document.querySelector(`.${randcolor}`);

            gamesequence.push(randcolor);

            btnflash(randbtn);

        }

        function btnflash(btn){
            btn.classList.add("flash");
            setTimeout(function(){
                btn.classList.remove("flash");
            },250
        )
        } 

        function userflash(btn){
            btn.classList.add("userflash");
            setTimeout(function(){
                btn.classList.remove("userflash");
            },250
        )
        } 


        let allbtn= document.querySelectorAll(".btn");
        for(let i of allbtn){
        i.addEventListener("click",btnpress);
    }

    function btnpress(){
        userflash(this);

        let usercolor= this.getAttribute("id");
        usersequence.push(usercolor);
        checkanswer(usersequence.length-1);

    }

    function checkanswer(idx){
       

        if(gamesequence[idx]===usersequence[idx]){
            console.log("success");

            if(usersequence.length===gamesequence.length){
                setTimeout(function(){
                    levelup();
                },1000);
               
            }
         }
         else{
            h3.innerHTML=`Game Over, your score was : <b>${level}</b> <br> Press Any Key to Restart`;
            document.body.style.backgroundColor="red";
            setTimeout(function(){
                document.body.style.backgroundColor="rgb(249, 237, 246)";
            },200);
             reset();
            }
           
         }
        

        function reset(){
            level=0;
            gamesequence=[];
            started=false;
            usersequence=[];
        }
    