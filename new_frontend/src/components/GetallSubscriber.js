import React, { useState } from 'react';
import axios from 'axios';

const SubscriberByName = () => {
    const [subscriber, setSubscriber] = useState(null);
    const [error, setError] = useState('');
    const url = 'http://localhost:4000/subscribers';

    // Function to fetch all subscribers
    const fetchAllSubscriber = async () => {
        try {
            const response = await axios.get(url);
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

    // Handle click event for fetching all subscribers
    const handleGetAllClick = () => {
        fetchAllSubscriber();
    };

    return (
        <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '3px solid #1976D2', maxWidth: '900px', height: '100%', borderRadius: '10px' }}>
            <h1 style={{ borderBottom: '2px solid blue' }}>Fetch Subscriber Data</h1>
            <div style={{ border: '2px solid #1976D2', borderRadius: '5px', padding: '20px', marginTop: '20px', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                <button onClick={handleGetAllClick} style={{ backgroundColor: '#1976D2', padding: '10px', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>Get All</button>
            </div>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {subscriber && (
                <div style={{ maxWidth: '700px', height: '100%', padding: '10px', marginTop: '20px', border: '2px solid blue', borderRadius: '5%', marginBottom: '10px', overflowX: 'auto' }}>
                    <h2 style={{ textAlign: 'center', borderBottom: '2px solid red' }}>Subscriber Details</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ borderBottom: '1px solid #000', padding: '8px' }}>ID</th>
                                <th style={{ borderBottom: '1px solid #000', padding: '8px' }}>Name</th>
                                <th style={{ borderBottom: '1px solid #000', padding: '8px' }}>Channel</th>
                                <th style={{ borderBottom: '1px solid #000', padding: '8px' }}>Date Subscribed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscriber.map(sub => (
                                <tr key={sub._id}>
                                    <td style={{ border: '1px solid #000', padding: '8px' }}>{sub._id}</td>
                                    <td style={{ border: '1px solid #000', padding: '8px' }}>{sub.name}</td>
                                    <td style={{ border: '1px solid #000', padding: '8px' }}>{sub.subscribedChannel}</td>
                                    <td style={{ border: '1px solid #000', padding: '8px' }}>{new Date(sub.subscribedDate).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default SubscriberByName;
