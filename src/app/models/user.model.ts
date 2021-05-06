export class User {
    public id: string;
    public name: string;
    public lastName: string;
    public company: string;
    public phoneNumber: string;
    public email: string;

    constructor(id: string, name: string, lastName: string, company: string, phoneNumber: string, email: string){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.company = company;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}