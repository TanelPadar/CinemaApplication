import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextType {
    selectedMovies: any[];
    setSelectedMovies: React.Dispatch<React.SetStateAction<any[]>>;
    numberOfTickets: number;
    setNumberOfTickets: React.Dispatch<React.SetStateAction<number>>;
    selectedSeats: number[];
    setSelectedSeats: React.Dispatch<React.SetStateAction<number[]>>;
}

interface DataProviderProps {
    children: ReactNode;
}
const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: DataProviderProps) => {
    const [selectedMovies, setSelectedMovies] = useState<any[]>([]);
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
    const [numberOfTickets, setNumberOfTickets] = useState<number>(0);

    return (
        <DataContext.Provider value={{ selectedMovies, setSelectedMovies, numberOfTickets, setNumberOfTickets, selectedSeats,setSelectedSeats }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('error');
    }
    return context;
};
