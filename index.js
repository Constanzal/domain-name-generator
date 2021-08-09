let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['com', 'net', 'us'];

for (let i = 0; i < 2; i++) {
    for (let a = 0; a < 2; a++) {
        for (let n = 0; n < 2; n++) {
            for (let h = 0; h < 3; h++) {
                console.log(pronoun[i] + adj[a] + noun[n] + "." + domain[h]);
            }
        }
    }
}