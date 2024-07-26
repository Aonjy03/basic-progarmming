function grade(homework: number, midterm: number, final: number){
    let score: number = homework + midterm + final 
    if (score < 50) {
        return 'F'
    } else if (score < 60) {  
        return 'D'
    } else if (score < 60)
        return 'c'

    
}
console.log(grade(35,20,15))


