import React, { useState } from 'react';
import axios from 'axios';

const SubcriberByid = () => {
    const [inputId, setInputId] = useState('');
    const [subscriber, setSubscriber] = useState(null);
    const [error, setError] = useState('');
    const url = 'http://localhost:4000/subscribers';

    const handleInputChange = (e) => {
        setInputId(e.target.value);
    };

    // ---------------------api to fetch subscriber by id----------------------------
    const fetchSubscriberbyId = async () => {
        try {
            const response = await axios.get(`${url}/id/${inputId}`);
            console.log('response:', response);
            const data = response.data;

            if (response.status === 200) {
                setSubscriber(data.data);
                setError('');
            } else {
                throw new Error(data.message || 'Error fetching data');
            }
        } catch (err) {
            setError(err.message);
            setSubscriber(null);
        }
    };
    // -------------------------handle form submission--------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Fetching subscriber with ID:', inputId);
        fetchSubscriberbyId();
    };

    return (
        <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '3px solid #1976D2', maxWidth: '900px', height: '100%', borderRadius: '10px' }}  >
            <h1 style={{ borderBottom: '2px solid blue' }}>Fetch Subscriber Data</h1>
            <form
                onSubmit={handleSubmit}
                style={{
                    border: '2px solid #1976D2',
                    borderRadius: '5px',
                    padding: '20px',
                    marginTop: '20px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}
            >
                <label htmlFor="subscriberId">Subscriber ID:</label>
                <input
                    type="text"
                    id="subscriberId"
                    value={inputId}
                    onChange={handleInputChange}
                    style={{ marginBottom: '10px' }}
                />
                <button type="submit" style={{ backgroundColor: '#1976D2', padding: '5px', borderRadius: '5px', color: 'white' }}>Get Details</button>
            </form>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {subscriber && (
                <div style={{ padding: '10px', marginTop: '20px', textAlign: 'left', border: '2px solid blue', borderRadius: '5%', marginBottom: '10px' }}>
                    <h2 style={{ textAlign: 'center', borderBottom: '2px solid red' }}>Subscriber Details</h2>
                    <p>ID: {subscriber._id}</p>
                    <p>Name: {subscriber.name}</p>
                    <p>Channel: {subscriber.subscribedChannel}</p>
                    <p>Date Subscribed: {new Date(subscriber.subscribedDate).toLocaleDateString()}</p>
                </div>
            )}
        </div>

    );
};

export default SubcriberByid;
