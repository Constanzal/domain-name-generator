var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var punto = ['.']
var domain = ['com', 'net', 'us'];

for(let i = 0; i < 2; i++){
    for(a = 0; a < 2; a++){
        for(n = 0; n < 2; n++){
            for(d = 0; d < 1; d++){
                for(h = 0; h < 3; h++){
                    console.log(pronoun[i] + adj[a] + noun[n] + punto[d] + domain[h]);
                }
            }
        }
    }
}