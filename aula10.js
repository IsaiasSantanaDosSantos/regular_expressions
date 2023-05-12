// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g

// Não números
const naoNumeroRegEx = /\D/

//Valida IP
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Valida CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g

//Valida telefone
const telefoneRegExp = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/

// Validar senhas fortes
const senhasExpReg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a!@#%\]\)]).{8,}$/g

//Validar e-mails
//const emailExpReg = /[^\s]+@[^\s]+\.[^\s]+(\w+)*/g // Permiciva
const emailExpReg = /[^\s\.]+\.?[^\s\.]@[^\s]+\.[^\s]+\w+/g 
