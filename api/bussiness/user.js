class User {
    #name;
    #email;
    #password;

    constructor(name, email, password) {
        this.#name = name;
        this.#email = email;
        this.#password = password;
    }

    getName = () => { return this.#name; }
    getEmail = () => { return this.#email; }
    getPassword = () => { return this.#password; }

    setName = (value) => {this.#name = value}
    setEmail = (value) => {this.#email = value}
    setPassword = (value) => {this.#password = value}

    toString = () => {
        return {
            name: this.getName(),
            email: this.getEmail(),
            password: this.getPassword()
        }
    }
}


export default {
    User
}