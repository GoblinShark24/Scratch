import React, { useState, useEffect } from 'react';

export default function Login() {


    return (
        <div>
            <h2>This is the Login page</h2>
            <form id='Spotify' method="GET" action="/login">
            <input
                type="submit"
                id="login"
                value="testing oAuth"
            />
            </form>
        </div>
    );
}