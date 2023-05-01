 //declare an interface for Habits

 interface Habits{
      habitname:string;
      habitImage:string;
      habitStopppedDate:string;
    
      
 }


 class HabitClass{
    async fetchHabits() {
        let response=await fetch('http://localhost:3000/habits')
        let habititem= await response.json() as Habits[];
        let habitDiv =document.querySelector(".habits-display") as HTMLDivElement;
        const today = new Date();
         
        let htmlDisplay =""
        for(let i=0;i<habititem.length;i++){
            let d=1000*60*60*24;
            //calculating the calculating the 
            const streakDiff=(Math.floor((new Date().getTime()-new Date(habititem[i].habitStopppedDate).getTime())/d));
           
                if(habititem[i]){
                // console.log(habititem[i].habitname)
                htmlDisplay +=`<div class="habit-item">
                <h3 class="habit-name">${habititem[i].habitname} </h3>
                 <img src="${habititem[i].habitImage}" alt=""  class="habit-image">
                <p class="date-stopped">Date-stopped:${habititem[i].habitStopppedDate}
                </p>    
                                   
                <div class="streak">Streak:${streakDiff} days<p></p>
                

                </div>
            
            </div>`
            
            }   
            
            habitDiv.innerHTML=htmlDisplay;
            
        }
        
       
    }
    //    async delHabit(i){
    //         let response=await fetch(`http://localhost:3000/habits/${id}`,{
    //              method:'DELETE'
    //         })
            
    //     }
       
        async addHabitData() {
            const newHabitName=document.querySelector("#habit-name") as HTMLInputElement;
            const newhabitImage=document.querySelector("#habit-image") as HTMLInputElement
            const newhabitDateStopped=document.querySelector("#date-stopped") as HTMLInputElement;
            // console.log(newHabit.value)
        
            
            let habitDetails={ 
                "habitname":newHabitName.value,
                "habitImage": newhabitImage.value,
                "habitStopppedDate": newhabitDateStopped.value
                 
            }
            await fetch("http://localhost:3000/habits" ,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(habitDetails)
            })
            
        }

       
        
        
        
 }  
 const btn=document.querySelector("#submit");
 btn?.addEventListener('click',()=>{
    new HabitClass().addHabitData();
 });

 
 
 new HabitClass().fetchHabits();
//  new  HabitClass().addHabitData();



// console.log(yearDiff,monthDiff,dateDiff);
// const streakArray=[yearDiff,monthDiff,dateDiff];

         
