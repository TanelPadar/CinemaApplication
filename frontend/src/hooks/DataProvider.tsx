import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextType {
    selectedMovie: any[];
    setSelectedMovie: React.Dispatch<React.SetStateAction<any[]>>;
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
    const [selectedMovie, setSelectedMovie] = useState<any[]>([]);
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
    const [numberOfTickets, setNumberOfTickets] = useState<number>(0);

    return (
        <DataContext.Provider value={{ selectedMovie, setSelectedMovie, numberOfTickets, setNumberOfTickets, selectedSeats,setSelectedSeats }}>
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
