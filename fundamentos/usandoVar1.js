// Var tem escopo global
{
    {
        {
            {
                var sera = 'Sera???'
            }
        }
    }
}

console.log(sera)

// Var tem escopo de função
function teste() {
    var local = 123
}

teste()
console.log(local)