interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            token: "jfvfbvhfbvhdfbuhfbvuefbviwjoqwdocjkw23423",
            user: {
                name: "Caio",
                email: "caio@gmail.com"
            },
          })  
        }, 2000)
    });
} 