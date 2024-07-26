function grade(homework: number, midterm: number, final: number,){
    let score: number = homework+midterm+final
    if (score <50){
        return 'เกรด f'
    } else if (score <60){
        return 'เกรดD'
    } else if (score <70){
        return 'เกรดC'
    } else if (score <80){
        return 'เกรดB'
    } else if (score <80){
        return 'เกรดA'
    }
}
console.log(grade(45,20,15))