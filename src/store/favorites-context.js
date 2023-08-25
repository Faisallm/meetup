import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritesMeetup) =>  {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

// this component will be responsible for...
// supplying values from this context to...
// other components that may require it.
// it will also be responsible for updating
// the context values.
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritesMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritesMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}


export default FavoritesContext;