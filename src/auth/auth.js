
const users = [
    { username: 'gaubiz', password: '51440', name: 'gaubiz' },
    { username: 'seo', password: '1013', name: 'Seo' }
  ]
  
  export function signIn({ username, password }) {
    
     const user = users.find(user => user.username === username && user.password === password);

    // const user = users.find(
    //   (user) => user.username === username && user.password === password
    // );
    
    if (user === undefined) throw new Error();
    return user;
  }