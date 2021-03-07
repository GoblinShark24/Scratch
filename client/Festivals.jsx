import React, { useState, useEffect } from 'react';

export default function Festivals() {

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <div className="Festivals_Countainer">
            <div className="Festivals">
                <p className="Festivals_Header"><h2>Search Upcoming Festivals</h2></p>
                <form className="Search_Form" onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                    <input className="Search_Input"
                        onChange={handleChange}
                        name="searchFestivals"
                        type="text"
                        placeholder="Search upcoming festivals"
                    />
                    <input className="Search_Button" type="submit" value="Search Festivals" />
                </form>
            </div>
        </div>
    );
}