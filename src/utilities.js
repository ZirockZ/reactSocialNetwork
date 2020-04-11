export let getTime = () => {let time = new Date(); return ((time.getHours() < 10) ? "0" : "") + time.getHours() + ":" + ((time.getMinutes() < 10) ? "0" : "") + time.getMinutes();}
export let getDate = () => {let time = new Date(); return ((time.getDay() < 10) ? "0" : "") + time.getDay() + ":" + ((time.getMonth() + 1 < 10) ? "0" : "") + (time.getMonth() + 1) + ":" + time.getFullYear() < 10;}

