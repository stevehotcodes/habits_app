 //declare an interface for Habits

 interface Habits{
      habitname:string;
      habitImage:string;
      habitStoppedDay:number;
      habitStoppedMonth:number;
      habitStoppedYear:number;
      monthDiff:number;
      yearDiff:number;
 }

 class HabitClass{
    async fetchHabits() {
        const response=await fetch('http://localhost:3000/habits')
        const habititem= await response.json() as Habits[];
        const habitDiv =document.querySelector(".habits-display") as HTMLDivElement;
        let htmlDisplay =""
        for(let i=0;i<habititem.length;i++){
                if(habititem[i]){
                // console.log(habititem[i].habitname)
                htmlDisplay +=`<div class="habit-item">
                <h3 class="habit-name">${habititem[i].habitname} </h3>
                 <img src="${habititem[i].habitImage}" alt=""  class="habit-image">
                <p class="date-stopped">Day:
                ${habititem[i].habitStoppedDay}</p>hab
                <p class="month-stopped">Month stopped: ${habititem[i].habitStoppedMonth}</p>
                <p class="year-stopped"> Year:${habititem[i].habitStoppedYear}</p>
                
                
                <div class="streak">Streak:</div>
        
            </div>`
             

          
            }   

        }
       

        }
       
        async addHabitData () {
            const newHabitName=document.querySelector("#habit-name") as HTMLInputElement;
            // console.log(newHabit.value)
            const newHabitStoppedDay=document.querySelector("#day-stopped") as HTMLInputElement
            const newHabitStoppedMonth=document.querySelector("#month-stopped") as HTMLInputElement
            const newHabitStoppedYear=document.querySelector("#year-stopped") as HTMLInputElement
            
            let habitDetails={ 
                "habitname":newHabitName.value,
                 "habitStoppedDay": newHabitStoppedDay.value,
                 "habitStoppedMonth":newHabitStoppedMonth.value,
                 "habitStoppedYear": newHabitStoppedYear.value
            }
            await fetch("http://localhost:3000/habits" ,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(habitDetails)
            })
            
        }
        
 }  
 const btn=document.querySelector("#submit");
 btn?.addEventListener('click', ()=>{
    new HabitClass().addHabitData();
 });

 
 
 new HabitClass().fetchHabits();
//  new  HabitClass().addHabitData();



// console.log(yearDiff,monthDiff,dateDiff);
// const streakArray=[yearDiff,monthDiff,dateDiff];

         
