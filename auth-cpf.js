// auth-cpf.js
import { auth, db, ADMIN_CPF } from './firebase-config.js';
import { doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

/**
 * Realiza o login simplificado via CPF para o MVP.
 * Armazena os dados do usuário no Firestore e gerencia a sessão.
 */
export async function loginWithCPF(cpf, nome = '', whatsapp = '') {
    const cpfLimpo = cpf.replace(/\D/g, '');
    
    if (cpfLimpo.length !== 11) {
        throw new Error('CPF deve conter exatamente 11 dígitos.');
    }

    // Autenticação anônima do Firebase como base da sessão
    try {
        await signInAnonymously(auth);
    } catch (error) {
        console.error("Erro ao iniciar sessão anônima:", error);
    }

    const userRef = doc(db, 'users', cpfLimpo);
    const userSnap = await getDoc(userRef);

    let userData;

    if (userSnap.exists()) {
        userData = userSnap.data();
        await updateDoc(userRef, { lastLogin: new Date() });
    } else {
        if (!nome || !whatsapp) {
            throw new Error('Cadastro necessário: Nome e WhatsApp são obrigatórios para novos usuários.');
        }
        userData = {
            cpf: cpfLimpo,
            nome,
            whatsapp,
            email: '',
            nivel: '',
            role: cpfLimpo === ADMIN_CPF ? 'admin' : 'client',
            createdAt: new Date(),
            lastLogin: new Date()
        };
        await setDoc(userRef, userData);
    }

    // Armazena info do usuário localmente para persistência simples no MVP
    localStorage.setItem('guia_user_cpf', cpfLimpo);
    localStorage.setItem('guia_user_role', userData.role);
    localStorage.setItem('guia_user_nome', userData.nome);

    return { success: true, user: userData };
}

export function getCurrentUser() {
    const cpf = localStorage.getItem('guia_user_cpf');
    if (!cpf) return null;
    return {
        cpf,
        role: localStorage.getItem('guia_user_role'),
        nome: localStorage.getItem('guia_user_nome')
    };
}

export function logout() {
    localStorage.removeItem('guia_user_cpf');
    localStorage.removeItem('guia_user_role');
    localStorage.removeItem('guia_user_nome');
    auth.signOut();
    window.location.href = 'index.html';
}

export function checkAdmin() {
    const user = getCurrentUser();
    return user && user.role === 'admin' && user.cpf === ADMIN_CPF;
}
