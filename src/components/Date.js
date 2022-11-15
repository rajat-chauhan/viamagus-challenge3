import styles from './Date.module.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateFunc() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function changeStartDateHandler(date) {
        setStartDate(date);
    }
    function changeEndDateHandler(date) {
        setEndDate(date);
    }

    function changeDurationHandler(event) {
        let enteredDuration = + event.target.value;

        let tempDate = new Date(startDate);
        tempDate.setDate(tempDate.getDate() + enteredDuration);

        setEndDate(tempDate);
    }

    return (

        <div className={styles.main}>
            <div className={styles.inner}>
                <h2> Date-Time Picker</h2>
                <div>
                    <DatePicker
                        placeholderText="Select Start Date"
                        showTimeSelect
                        dateFormat="dd/MM/yyyy h:mm aa"
                        selected={startDate}
                        onChange={changeStartDateHandler}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                </div>
                <input
                    type='number'
                    placeholder='Duration'
                    onChange={changeDurationHandler}
                />
                <div>
                    <DatePicker
                        placeholderText="Select End Date"
                        showTimeSelect
                        dateFormat="dd/MM/yyyy h:mm aa"
                        selected={endDate}
                        onChange={changeEndDateHandler}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default DateFunc;
