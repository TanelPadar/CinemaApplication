import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCouch} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";


type SeatProps = {
    seatNumber: number;
    isTaken: boolean;
    isRecommended: boolean;
};

const Seat = ({seatNumber, isTaken, isRecommended}: SeatProps) => (
    <div
        className={`seat px-2 ${isTaken ? 'taken' : ''} ${isRecommended ? 'recommended' : ''}`}
        style={{backgroundColor: isTaken ? 'red' : isRecommended ? 'green' : 'white'}}
    >
        <FontAwesomeIcon icon={faCouch}/>
    </div>
);

type CinemaSeatSelectionProps = {
    rows: number;
    seatsPerRow: number;
    takenSeats: number[];
    recommendedSeats: number[];
    navigate: (seats: number[]) => void;
};

const SeatSelection = ({rows, seatsPerRow, takenSeats, recommendedSeats, navigate}: CinemaSeatSelectionProps) => {
    const renderSeatRows = () => {
        return Array.from({length: rows}, (_, rowIndex) => (
            <div key={rowIndex} className="row">
                <div className="text-black d-block">
                    Row {rowIndex + 1}
                    <div className="d-flex gap-1">
                        {Array.from({length: seatsPerRow}, (_, seatIndex) => {
                            const seatNumber = rowIndex * seatsPerRow + seatIndex + 1;
                            const isTaken = takenSeats.includes(seatNumber);
                            const isRecommended = recommendedSeats.includes(seatNumber);
                            return (
                                <Seat
                                    key={seatIndex}
                                    seatNumber={seatNumber}
                                    isTaken={isTaken}
                                    isRecommended={isRecommended}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center">
                <div className="d-block">
                    {renderSeatRows()}
                    <Button onClick={() => navigate(recommendedSeats)} className="mt-5">Confirm Selection</Button>

                </div>
            </div>

        </div>
    );
};

export default SeatSelection;
