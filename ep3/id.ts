function gg(gender: string, heigth: number){
    if (gender === 'ชาย' && heigth > 170) {
      console.log("จับใบดำใบแดง")
    } else {
       console.log("ไม่เข้าเกณฑ์") 
    }

}


function ft(gender: string, heigth: number, weigh: number){
    if (gender === 'ชาย' && heigth > 170 || (weigh > 50 && weigh <= 110) ){
        console.log("จับใบดำใบแดง")
    } else {
       console.log("ไม่เข้าเกณฑ์") 
    } 

}
ft('ชาย',180,60)