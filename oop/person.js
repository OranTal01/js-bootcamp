// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    printStatus() {
        if (this.grade > 70) {
            return `${this.firstName} ${this.lastName} is pass the test ${this.grade}`
        } else {
            return `${this.firstName} ${this.lastName} failed the test ${this.grade}`
        }
    }
    upgradeGrade(upgrade) {
        this.grade += upgrade
        if (this.grade >= 70) {
            return `${this.firstName} ${this.lastName} is pass the test ${this.grade}`
        } else {
            return `${this.firstName} ${this.lastName} failed the test ${this.grade}`
        }
    }

}

const me = new Employee('Oran', 'Tal', 30, 'Developer', ['learn', 'play'])
me.fullName = 'Clancey Turner'
console.log(me.getBio())

const oran = new Student('Oran', 'Tal', 30, 60, [])
console.log(oran.getBio())
console.log(oran.printStatus())
console.log(oran.upgradeGrade(10))