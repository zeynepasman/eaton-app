export class User {
  id: number;
  username: string;
  password: string;
  token?: string;
  constructor(user?: User) {
    user || {};
    this.id = user?.id || -1;
    this.username = user?.username || '';
    this.password = user?.password || '';
  }
}
