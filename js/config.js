export const firebaseConfig = {
  apiKey: "AIzaSyByd_zyDeadQaZaZGVOWLCbsZ0b4NqFd34",
  authDomain: "nosso-dinheiro-cf416.firebaseapp.com",
  projectId: "nosso-dinheiro-cf416",
  storageBucket: "nosso-dinheiro-cf416.firebasestorage.app",
  messagingSenderId: "393697489234",
  appId: "1:393697489234:web:a6174dcbbf0f9320e74a8b"
};

export const EMAILS_PERMITIDOS = [
  "joaoppros@gmail.com",
  "eduardagmel@gmail.com"
];

export const CASA_ID = "casal";

export const PADRAO = {
  cartoes: ["Itau Black", "Cresol Igor", "Nubank Igor", "Nu Thais", "Itau Click Thais", "Itau MC Thais"],
  pessoas: ["Jp", "Duda", "Casal"],
  categorias: [
    { nome: "Essencial", ideal: 50 },
    { nome: "Estilo de vida", ideal: 25 },
    { nome: "Mesada casal", ideal: 15 },
    { nome: "Guardado", ideal: 10 }
  ],
  tipos: [
    "Casa", "Mercado", "Transporte", "Saúde", "Pets", "Assinaturas",
    "Viagem e lazer", "Roupas", "Cuidados pessoais", "Estúdio", "Educação",
    "Presentes", "Taxas e juros", "Poupança", "Outros"
  ]
};
