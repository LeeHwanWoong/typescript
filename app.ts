let student = {
    name: 'Jake',
    course: 'Typescript',
    condingIQ: 80,
    code: function(){
        console.log("AA");
    }
}

let myname: string="lhw"

interface Student{
    readonly id: number;
    name: string;
    age?: number;
    //addComment(comment: string): string;
    addComment?: (comment: string) => string;
}

function getStudent(id: number): Student
{
    let temp: Student = {
        id: 10,
        name: "lhw"
    }
    return temp;
}