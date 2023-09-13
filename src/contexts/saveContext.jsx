import { useState, createContext } from 'react';

const saveContext = createContext()

function SaveProvider({ children }) {

    const [saveList, setSaveList] = useState(() => {
        let localSaveList = JSON.parse(localStorage.getItem('saveList'))
        console.log(localSaveList)
        return localSaveList || [];
    })

    const toggleSaveMovie = (movie) => {
        console.log(movie)
        const isSaved = saveList.some((savedMovie) => savedMovie.id === movie.id);

        if (isSaved) {
            // Nếu đã tồn tại, xóa nó khỏi saveList
            const updatedList = saveList.filter((savedMovie) => savedMovie.id !== movie.id);
            setSaveList(updatedList);
            localStorage.setItem('saveList', JSON.stringify(updatedList));
        } else {
            // Nếu chưa tồn tại, thêm vào saveList
            const updatedList = [...saveList, movie];
            setSaveList(updatedList);
            localStorage.setItem('saveList', JSON.stringify(updatedList));
        }
    }

    const value = {
        saveList,
        setSaveList,
        toggleSaveMovie
    }

    return (
        <saveContext.Provider value={value}>
            {children}
        </saveContext.Provider>
    )
}

export { saveContext, SaveProvider }