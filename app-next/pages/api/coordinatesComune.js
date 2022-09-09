// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}


// #include <iostream>
// using namespace std;

// int main()
// {
//     int n,r;
//     cin >> n >> r;
//     int nr = n - r;
//     int nfactorial, rfactorial, nrfactorial, resultado;
//     nfactorial = 1;
//     for (int i = n; i > 0; i--){
//         nfactorial *= i;
//     }
//     rfactorial = 1;
//     for (int i = r; i > 0; i--){
//         rfactorial *= i;
//     }
//     nrfactorial = 1;
//     for (int i = nr; i > 0; i--){
//         nrfactorial *= i;
//     }
//     resultado = nfactorial/(rfactorial*nrfactorial);
//     cout << resultado;

//     return 0


// int factorial(int n);
// int main()
// {
//     int n,r;
//     cin >> n >> r;
//     cout << factorial(n)/(factorial(r)*factorial(n-r));
//     return 0;
// }
// int factorial (int n){
//     int resultado = 1;
//     for(int i = n; i>0; i--){
//         resultado *= i;
//     }
//     return resultado;
// }
