import { useContext } from 'react';
import { ComandaContext } from '../contexts/ComandaContext';


export function useComandaContext() {
  return useContext(ComandaContext);
}
