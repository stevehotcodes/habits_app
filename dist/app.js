"use strict";
//declare an interface for Habits
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class HabitClass {
    fetchHabits() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(' http://localhost:3000/habits');
            const habititem = yield response.json();
            const habitDiv = document.querySelector(".habits-display");
            let htmlDisplay = "";
            for (let i = 0; i < habititem.length; i++) {
                if (habititem[i]) {
                    // console.log(habititem[i].habitname)
                    htmlDisplay += `<div class="habit-item">
                <h3 class="habit-name">${habititem[i].habitname} </h3>
                <!-- <img src="" alt=""  class="habit-image"> -->
                <p class="date-stopped">Day:
                ${habititem[i].habitStoppedDay}</p>
                <p class="month-stopped">Month stopped: ${habititem[i].habitStoppedMonth}</p>
                <p class="year-stopped"> Year:${habititem[i].habitStoppedYear}</p>
                <p class="streak">No of days/Streak:</p>
        
            </div>`;
                }
            }
            habitDiv.innerHTML = htmlDisplay;
        });
    }
}
new HabitClass().fetchHabits();
