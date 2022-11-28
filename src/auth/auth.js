
const users = [
    { email: 'gaubiz@test.com', password: '51440', name: 'gaubiz' },
    { email: 'seo@test.com', password: '1013', name: 'Seo' }
  ]
  
  export function signIn({ email, password }) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user === undefined) throw new Error();
    return user;
  }