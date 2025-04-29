import { createContext, useState, useEffect } from 'react';

type Produto = {
  id: number;
  nome: string;
  quantidade: number;
  adicionais?: string[];
};

type ComandaContextType = {
  comanda: Produto[];
  adicionarProduto: (produto: Produto) => void;
  limparComanda: () => void;
};

const ComandaContext = createContext({} as ComandaContextType);

export function ComandaProvider({ children }: { children: React.ReactNode }) {
  const [comanda, setComanda] = useState<Produto[]>([]);

  useEffect(() => {
    const comandaSalva = localStorage.getItem('comanda');
    if (comandaSalva) {
      setComanda(JSON.parse(comandaSalva));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comanda', JSON.stringify(comanda));
  }, [comanda]);

  function adicionarProduto(produto: Produto) {
    setComanda((prev) => [...prev, produto]);
  }

  function limparComanda() {
    setComanda([]);
    localStorage.removeItem('comanda');
  }

  return (
    <ComandaContext.Provider value={{ comanda, adicionarProduto, limparComanda }}>
      {children}
    </ComandaContext.Provider>
  );
}

export { ComandaContext };
