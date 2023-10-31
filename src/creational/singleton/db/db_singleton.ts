type User =  {
  name: string;
  age: number;
}

export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;
  private users: User[] = [];
  
  private constructor() { }

  public static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.instance === null) MyDatabaseClassic.instance = new MyDatabaseClassic();

    return MyDatabaseClassic.instance;
  }

  public addUser(user: User): void { this.users.push(user) }

  public removeUser(id: number): void { this.users.splice(id, 1) }

  public listUsers(): void { for (let user of this.users) console.log(user) }
}


