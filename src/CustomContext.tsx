import { createContext } from "react";

export interface ShoppingCartDatatype {
  name: string;
  description: string;
  img: string;
  price: number;
  quantity: number;
  id: number;
  declination: string;
}

export const ShoppingCartContext = createContext<{
  shoppingCart: ShoppingCartDatatype[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCartDatatype[]>>;
}>({
  shoppingCart: [],
  setShoppingCart: () => {},
});

/*  !!!!! ACHTUNG ACHTUNG ACHTUNG !!!!!!

    die Unterschiede zwischen dem Online-Shop und der createContext useContext useState Objekt Übung sind:

    1. die Typisierung für den default-Wert wurden hier direkt in das Generics = <> der Methode createContext geschrieben und in der Übung
       wurde für die Typisierung des default-Wertes extra ein interface angelegt

    2. es ist nicht wirklich ein Unterschied, hier beim Online-Shop so wie auch bei der createContext useContext useState Objekt Übung wurde
       vom state und vom setState des useState-Hooks der default-Wert angelegt in vorm eines Array = [] und in Form einer () => {} einer Funktion/
       Arrow-funktion

    3. bei der Übung wurde 2 interfaces geschrieben/angelegt = das eine in das andere Verschatelt = die Typisierung für den default-Wert und
       die Typisierung des Objektes oder der Objekte die in das Array hinzugefügt werden sollen oder das Objekt/ die Objekte die das Array
       erwartet 

*/
