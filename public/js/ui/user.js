class User {
    #login = document.querySelector("#login");
    #loginPassword = document?.getElementById("loginPassword");
    #loginEmail = document?.getElementById("loginEmail");

    login() {
        this.#login.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
             const res = await fetch(`/app/v1/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: `${this.#loginEmail.value}`,
                    password: `${this.#loginPassword.value}`
                })
             })

             if(!(res.status === 200)){
                console.log(res);
                
                throw new Error(`message=${res.statusText}&status=${res.status}`)
             }

             const data = await res.json();

             document.cookie = `jwt=${data.token}`;
             window.location.href = "/";

            } catch (error) {
                console.error("Fecth error:", error);

                window.location.href = `/error?${error.message}`;
            }
        })
    }
}

export default new User();