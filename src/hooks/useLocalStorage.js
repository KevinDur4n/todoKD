import React, { useState, useEffect } from "react";
/**
 * Hook use to save item in Local Storage with a UseState
 * @param {*} itemName name of string to be save in the local storage
 * @param {*} initialValue value of state initial if there is not values in local storage.
 * @returns item and saveItem 
 */
function useLocalStorage(itemName, initialValue) {

  //Para fines practicos, se utilizara un setTimeout para Simular un API

  //Creamos el estado inicial para nuestros errores y carga
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    // Simulamos un segundo de delay de carga 
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
        //Recupera JSON de localStorage
        const localStorageItem = localStorage.getItem(itemName, initialValue);

        let parseItem = []
        // Verifica si ha tenido persistencia antiguamente
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = [];
        } else {
          // Convierte el JSON a los objectos y/o arreglos.
          parseItem = JSON.parse(localStorageItem);
        }

        setItem(parseItem);
      } catch (error) {
        // En caso de un error lo guardamos en el estado
        setError(error);
      } finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
      }

    }, 2000);
  });



  // Salva los elementos en localStorage y en el estado de React
  const saveItem = (newItem) => {
    try{
      const jsonItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, jsonItem);
      setItem(newItem);
    }catch(error){
      // En caso de algún error lo guardamos en el estado
      setError(error);
    }
  }

  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return{ 
    item,
    saveItem,
    loading,
    error,
    setError
  };

}

export { useLocalStorage };